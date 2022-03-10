//----------------------------------------------------------------------------
// Copyright Persistant Studios, SARL. All Rights Reserved.
// https://www.popcornfx.com/terms-and-conditions/
//----------------------------------------------------------------------------

#include "DrawMaterialToRenderTarget.h"
#include "PopcornFXExamples.h"
#include "Kismet/KismetRenderingLibrary.h"

UDrawMaterialToRenderTarget::UDrawMaterialToRenderTarget()
{
	PrimaryComponentTick.bCanEverTick = true;
	bAutoActivate = true;
	bTickInEditor = true;
}

// Called every frame
void UDrawMaterialToRenderTarget::TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction* ThisTickFunction)
{
	Super::TickComponent(DeltaTime, TickType, ThisTickFunction);

	if (TextureRenderTarget && Material)
	{
		UKismetRenderingLibrary::DrawMaterialToRenderTarget(this, TextureRenderTarget, Material);
	}
}
