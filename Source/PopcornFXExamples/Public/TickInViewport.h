//----------------------------------------------------------------------------
// Copyright Persistant Studios, SARL. All Rights Reserved.
// https://www.popcornfx.com/terms-and-conditions/
//----------------------------------------------------------------------------

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "TickInViewport.generated.h"

UCLASS()
class POPCORNFXEXAMPLES_API ATickInViewport : public AActor
{
	GENERATED_BODY()
	
public:	
	// Sets default values for this actor's properties
	ATickInViewport();

private:
	virtual bool ShouldTickIfViewportsOnly() const override { return true; }

};
