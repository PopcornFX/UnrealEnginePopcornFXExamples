# Unreal Engine PopcornFX Examples Project

**Unreal Engine** project to showcase **PopcornFX** plugin features.
* **PopcornFX:** `v2.12`
* **Unreal Engine:** `4.26` to `4.27` and `5.0 Preview 0`

This example project presents integration features of PopcornFX into Unreal Engine 4 & 5,
it does not present the full range of PopcornFX features.

Take a tour in the `/Content/ExampleMaps/` levels to explore this project.

The source PopcornFX Project is located in `Assets/ExampleEffects/`, you can inspect how effects were created in **[PopcornFX Editor](https://www.popcornfx.com/popcornfx-editor/)**.

If you have any questions, suggestions, or just feed backs, you can
use **Github Issues** !

# Setup

This project requires the [PopcornFX Plugin](https://www.popcornfx.com/plugin-unrealengine/) for Unreal Engine.

## If you are cloning this project from Github

The plugin is already present as a `submodule` in `Plugins/PopcornFX`.

Simply run the following to clone this project and the PopcornFX Plugin submodule:

    git clone --recursive REPO_URL

If you already cloned the repo, you can run:

    git submodule update --init --recursive

## If you downloaded a .zip archive

The plugin is already present in packaged archives, there's nothing to do in this case.

## If you installed the plugin outside this project

Unreal Engine supports per-project or globally installed plugins. If PopcornFX Plugin for Unreal Engine is already installed, simply remove the `Plugins/PopcornFX` folder from this project to avoid conflicts.

**Note:** make sure that your installed PopcornFX Plugin version matches the same version as stated above.

## Compiling the project

To launch this project on Windows, **[Visual studio](https://docs.unrealengine.com/4.27/en-US/ProductionPipelines/DevelopmentSetup/VisualStudioSetup/)** is required.

There are two ways to launch the project:
* Double click `PopcornFXExamples.uproject`. Unreal Engine will prompt you to build the missing modules for PopcornFX, after following instructions, UE Editor will open.
* Right click `PopcornFXExamples.uproject` and select `Generate project files` or `Switch Unreal Engine version`. This will generate the project files, which you can then open and compile manually.

**Note:** Although the PopcornFX Plugin for Unreal Engine supports multiple platforms, this project was only tested on Windows.

## Quick Links: Documentation and Support

* [**Plugin** documentation](https://www.popcornfx.com/docs/popcornfx-v2/plugins/ue4-plugin/) (Install, Import, Setup, Troubleshooting, etc..)
* [PopcornFX **Editor** documentation](https://www.popcornfx.com/docs/popcornfx-v2/)
* [PopcornFX **Discord** server](https://discord.gg/4ka27cVrsf)

## License

See [LICENSE.md](/LICENSE.md).
