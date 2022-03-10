//----------------------------------------------------------------------------
// Copyright Persistant Studios, SARL. All Rights Reserved.
// https://www.popcornfx.com/terms-and-conditions/
//----------------------------------------------------------------------------

#pragma once

#include "CoreMinimal.h"
#include "Components/ActorComponent.h"
#include "DrawMaterialToRenderTarget.generated.h"

UCLASS( ClassGroup=(Custom), meta=(BlueprintSpawnableComponent) )
class POPCORNFXEXAMPLES_API UDrawMaterialToRenderTarget : public UActorComponent
{
	GENERATED_BODY()

public:
	// Sets default values for this component's properties
	UDrawMaterialToRenderTarget();

	UPROPERTY(EditAnywhere, BlueprintReadWrite)
	class UTextureRenderTarget2D* TextureRenderTarget;
	
	UPROPERTY(EditAnywhere, BlueprintReadWrite)
	class UMaterialInterface* Material;

private:
	// Called every frame
	virtual void TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction* ThisTickFunction) override;
};
