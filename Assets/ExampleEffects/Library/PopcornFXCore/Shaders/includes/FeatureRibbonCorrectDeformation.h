#pragma once

#include "PKSurface.h"

#if defined(HAS_CorrectDeformation)

#	if defined(HAS_Atlas)
#		if defined(HAS_AlphaMasks) || defined(HAS_UVDistortions) 
void	ApplyRibbonCorrectDeformation(INOUT(SFragGeometry) fGeom, vec4 fragUVFactors, vec4 fragUVScaleAndOffset, vec4 fragUV1ScaleAndOffset, vec4 fragRawUVScaleAndOffset FS_ARGS)
#		else
void	ApplyRibbonCorrectDeformation(INOUT(SFragGeometry) fGeom, vec4 fragUVFactors, vec4 fragUVScaleAndOffset, vec4 fragUV1ScaleAndOffset FS_ARGS)
#		endif
#	else
#		if defined(HAS_AlphaMasks) || defined(HAS_UVDistortions) 
void	ApplyRibbonCorrectDeformation(INOUT(SFragGeometry) fGeom, vec4 fragUVFactors, vec4 fragUVScaleAndOffset, vec4 fragRawUVScaleAndOffset FS_ARGS)
#		else
void	ApplyRibbonCorrectDeformation(INOUT(SFragGeometry) fGeom, vec4 fragUVFactors, vec4 fragUVScaleAndOffset FS_ARGS)
#		endif
#	endif
{
#	if defined(FINPUT_fragUV0) // Particle has UV0

	vec2	fragUVout;
	if (fGeom.m_UV0.x + fGeom.m_UV0.y < 1.f)
		fragUVout = fGeom.m_UV0.xy / fragUVFactors.xy;
	else
		fragUVout = 1.0 - ((1.0 - fGeom.m_UV0.xy) / fragUVFactors.zw);

#		if defined(HAS_BasicTransformUVs)
	if (GET_CONSTANT(Material, BasicTransformUVs_RotateUV) != 0)
		fragUVout = fragUVout.yx;
#		endif

	fGeom.m_UV0 = fragUVout * fragUVScaleAndOffset.xy + fragUVScaleAndOffset.zw;
#		if defined(HAS_Atlas)
	fGeom.m_UV1 = fragUVout * fragUV1ScaleAndOffset.xy + fragUV1ScaleAndOffset.zw;
#		endif
#	endif

#	if defined(HAS_AlphaMasks) || defined(HAS_UVDistortions) 
	if (fGeom.m_RawUV0.x + fGeom.m_RawUV0.y < 1.f)
		fGeom.m_RawUV0 = fGeom.m_RawUV0.xy / fragUVFactors.xy;
	else
		fGeom.m_RawUV0 = 1.0 - ((1.0 - fGeom.m_RawUV0.xy) / fragUVFactors.zw);
	fGeom.m_RawUV0 = fGeom.m_RawUV0 * fragRawUVScaleAndOffset.xy + fragRawUVScaleAndOffset.zw;
#	endif

}

#endif
