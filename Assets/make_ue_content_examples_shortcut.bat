@echo off

echo ---------------------------------------------------------------------
echo -
echo -  Creating UE4 Plugin junction WITH %PK_SDK_ROOT%/source_tree/Integrations/UE4/
echo -
echo ---------------------------------------------------------------------

mklink /J ExampleEffects "%PK_SDK_ROOT%/release/application/Packs/ContentExamples"
pause