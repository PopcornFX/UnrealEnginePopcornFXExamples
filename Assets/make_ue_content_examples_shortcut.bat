@echo off

echo ---------------------------------------------------------------------
echo -
echo -  Creating UE Plugin junction WITH %PK_SDK_ROOT%release\application\Packs\ContentExamples
echo -
echo ---------------------------------------------------------------------

mklink /J "ExampleEffects" "%PK_SDK_ROOT%release\application\Packs\ContentExamples"
pause