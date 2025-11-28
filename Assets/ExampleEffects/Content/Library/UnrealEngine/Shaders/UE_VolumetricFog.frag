#if defined(HAS_TransformUVs)
vec2 transformUV(vec2 UV, vec2 scale, mat2 rotation, vec2 offset)
{
	return mul(rotation, UV * scale) + offset;
}
#endif

void    FragmentMain(IN(SFragmentInput) fInput, OUT(SFragmentOutput) fOutput FS_ARGS)
{
	vec4    color;

#if     defined(FINPUT_fragVolumetricFog_AlbedoColor)
	color = fInput.fragVolumetricFog_AlbedoColor;
#else
	color = vec4(1.0f, 1.0f, 1.0f, 0.1f);
#endif

#if     defined(HAS_VolumetricFog) || defined(HAS_Emissive) // has texture sampling

	vec2    fragUV0 = fInput.fragUV0;

#if		defined(HAS_Atlas)
	int		blendingType = GET_CONSTANT(Material, Atlas_Blending);
	vec2	fragUV1 = fInput.fragUV1;

	float	blendMix = 0.f;

	if (blendingType == 2)
	{
		// Motion vectors
		vec2	scale = GET_CONSTANT(Material, Atlas_DistortionStrength);
		vec2	curVectors = ((SAMPLE(Atlas_MotionVectorsMap, fragUV0).rg * 2.0f) - 1.0f) * scale;
		vec2	nextVectors = ((SAMPLE(Atlas_MotionVectorsMap, fragUV1).rg * 2.0f) - 1.0f) * scale;
		float	cursor = fract(fInput.fragAtlas_TextureID);

		curVectors *= cursor;
		nextVectors *= (1.0f - cursor);

		fragUV0 = fragUV0 - curVectors;
		fragUV1 = fragUV1 + nextVectors;
		blendMix = cursor;
	}
	else if (blendingType == 1)
	{
		// Linear
		blendMix = fract(fInput.fragAtlas_TextureID);
	}
#endif // defined(HAS_Atlas)

#endif // has texture sampling

#if	defined(HAS_TransformUVs)
	float	sinR = sin(fInput.fragTransformUVs_UVRotate);
	float	cosR = cos(fInput.fragTransformUVs_UVRotate);
	mat2	UVRotation = mat2(cosR, sinR, -sinR, cosR);
	vec2	UVScale = fInput.fragTransformUVs_UVScale;
	vec2	UVOffset = fInput.fragTransformUVs_UVOffset;
	vec4	rect0 = vec4(1.0f, 1.0f, 0.0f, 0.0f);
#	if	defined(HAS_Atlas)
	rect0 = LOADF4(GET_RAW_BUFFER(Atlas), RAW_BUFFER_INDEX(min(LOADU(GET_RAW_BUFFER(Atlas), 0) - 1, uint(fInput.fragAtlas_TextureID)) * 4 + 1));
	vec4	rect1 = LOADF4(GET_RAW_BUFFER(Atlas), RAW_BUFFER_INDEX(min(LOADU(GET_RAW_BUFFER(Atlas), 0) - 1, uint(fInput.fragAtlas_TextureID) + 1) * 4 + 1));

	vec2	oldFragUV1 = fragUV1;
	fragUV1 = ((fragUV1 - rect1.zw) / rect1.xy); // normalize (if atlas)
	fragUV1 = transformUV(fragUV1, UVScale, UVRotation, UVOffset); // scale then rotate then translate UV
	fragUV1 = fract(fragUV1) * rect1.xy + rect1.zw; // undo normalize
#	endif
	vec2	oldFragUV0 = fragUV0;	
	fragUV0 = ((fragUV0 - rect0.zw) / rect0.xy); // normalize (if atlas)
	fragUV0 = transformUV(fragUV0, UVScale, UVRotation, UVOffset); // scale then rotate then translate UV
	fragUV0 = fract(fragUV0) * rect0.xy + rect0.zw; // undo normalize
	bool	RGBOnly = GET_CONSTANT(Material, TransformUVs_RGBOnly) != 0;
#endif

#if	defined(HAS_VolumetricFog)
	vec4    textureColor = SAMPLE(VolumetricFog_AlbedoMap, fragUV0);
	
#	if defined(HAS_TransformUVs)
		if (RGBOnly)
		{
			textureColor.a =  SAMPLE(VolumetricFog_AlbedoMap, oldFragUV0).a;
		}
#	endif

#   if defined(HAS_Atlas)
	if (blendingType >= 1)
	{
		vec4    textureColor2 = SAMPLE(VolumetricFog_AlbedoMap, fragUV1);
#		if defined(HAS_TransformUVs)
		if (RGBOnly)
		{
			textureColor2.a =  SAMPLE(VolumetricFog_AlbedoMap, oldFragUV1).a;
		}
#		endif
		textureColor = mix(textureColor, textureColor2, blendMix);
	}
#	endif

	color *= textureColor;

#if	defined(HAS_AlphaRemap)
	vec2    alphaTexCoord = vec2(color.a, fInput.fragAlphaRemap_Cursor);
	color.a = SAMPLE(AlphaRemap_AlphaMap, alphaTexCoord).r;
#endif 

#endif // defined HAS_VolumetricFog

#if	defined(HAS_Emissive)
	vec3	emissiveColor1 = SAMPLE(Emissive_EmissiveMap, fragUV0).rgb;

#if defined(HAS_Atlas)
	if (blendingType >= 1)
	{
		vec3 emissiveColor2 = SAMPLE(Emissive_EmissiveMap, fragUV1).rgb;
		emissiveColor1 = mix(emissiveColor1, emissiveColor2, blendMix);
	}
#endif

#if	defined(HAS_EmissiveRamp)
	emissiveColor1 = SAMPLE(EmissiveRamp_RampMap, vec2(emissiveColor1.x,0.0)).rgb;
#endif

	emissiveColor1 *= fInput.fragEmissive_EmissiveColor;

	color.rgb += emissiveColor1.rgb;
#endif

	fOutput.Output0 = color;
}
