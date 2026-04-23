# Unreal Engine PopcornFX Examples Project

**Unreal Engine** project to showcase **PopcornFX** plugin features.
* **PopcornFX:** `v2.24.1`
* **Unreal Engine:** `5.5`, `5.6` and `5.7`

This example project presents integration features of PopcornFX into Unreal Engine. It does not present the full range of PopcornFX features.

The source PopcornFX Project is located in `Assets/ExampleEffects/`, you can inspect here how effects were created in the **[PopcornFX Editor](https://www.popcornfx.com/editor/)**.

If you have any questions, suggestions, or just feedbacks, you can
use **GitHub Issues** !

# Setup

Both the source project and the packaged build are provided for every released version.

## 1 - Getting and running the packaged build

Go on the [releases page](https://github.com/PopcornFX/UnrealEnginePopcornFXExamples/releases) and download the version that you want. It should be named `UnrealEnginePopcornFXExamples_vX.X.X.zip`. Simply run the .exe → explore the different maps -> enjoy.

## 2 - Getting and running the source project

This project requires the [PopcornFX Plugin](https://www.popcornfx.com/plugin-unreal-engine/) for Unreal Engine. The plugin is present as a `submodule` in the `Plugins/PopcornFX` directory. To get both the source project and the plugin, use one of the following methods:

### Method 1: download a .zip archive from a GitHub release

This is the easiest way to retrieve and build the project. Go on the [releases page](https://github.com/PopcornFX/UnrealEnginePopcornFXExamples/releases) and download the version that you want.

> **IMPORTANT**: Ignore GitHub auto generated `Source code (zip)` and `Source code (tar.gz)`. They do not contain the plugin since it's a submodule.
The plugin is only present in packaged archives named `UnrealEnginePopcornFXExamples_vX.X.X_Source.zip`.

You also need to download the **PopcornFX Runtime SDK** for Desktop platforms.

To do so, walk to `Plugins/PopcornFX` and double-click on `Download_SDK_Desktop.bat`: once the script completes, you are all set.

### Method 2: clone this project from GitHub

Simply run the following commands to clone this project and the PopcornFX Plugin submodule:

    git clone --recursive REPO_URL

If you already cloned the repo, you can run:

    git submodule update --init --recursive

You also need to download the **PopcornFX Runtime SDK** for Desktop platforms.

To do so, walk to `Plugins/PopcornFX` and double-click on `Download_SDK_Desktop.bat`: once the script completes, you are all set.

### Method 3: plugin installed in the engine (outside this project)

Unreal Engine supports globally installed plugins. If the PopcornFX Plugin for Unreal Engine is globally installed for your engine version, simply remove the `Plugins/PopcornFX` folder from this project to avoid conflicts.

**Note:** make sure that your installed PopcornFX Plugin version matches the versions as stated above.

## Compiling the project

To build and launch this project on Windows, **[Visual Studio](https://dev.epicgames.com/documentation/unreal-engine/setting-up-visual-studio-development-environment-for-cplusplus-projects-in-unreal-engine)** is required.

There are two ways to compile and launch the project:
* Double click `PopcornFXExamples.uproject`. Unreal Engine will prompt you to build the missing modules for PopcornFX, after following instructions, the UE Editor will open.
* Right click `PopcornFXExamples.uproject` and select `Generate project files` (or `Switch Unreal Engine version` if you want to test a different version. Make sure it is supported by the plugin). This will generate the project files, which you can then open and compile manually.

**Note:** Although the PopcornFX Plugin for Unreal Engine supports multiple platforms, this project was only built and tested on Windows.

You're all set! Take a tour in the `/Content/ExampleMaps/` levels to explore this project.

## Quick Links: Documentation and Support

* [**Plugin** documentation](https://documentation.popcornfx.com/PopcornFX/latest/plugins/ue-plugin/) (Install, Import, Setup, Troubleshooting, etc...)
* [PopcornFX **Editor** documentation](https://www.popcornfx.com/docs/popcornfx-v2/)
* [PopcornFX **Discord** server](https://discord.gg/4ka27cVrsf)

## License

See [LICENSE.md](/LICENSE.md).
