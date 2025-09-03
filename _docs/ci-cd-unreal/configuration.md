---
layout: documentation
title: Configuration
permalink: /docs/ci-cd-unreal/configuration/
nav_order: 4
---

The entire pipeline is controlled by a single `config.json` file. This guide provides a detailed explanation of each setting.

---

## Example `config.json`

```json
{
  "PluginName": "YourPluginName",
  "PluginSourceDirectory": "C:/Path/To/Your/PluginSource",
  "OutputDirectory": "./Builds",
  "UnrealEngineBasePath": "C:/Program Files/Epic Games",
  "EngineVersions": [
    "5.1",
    "5.2",
    "5.3",
    "5.4"
  ],

  "ExampleProject": {
    "Generate": true,
    "MasterProjectDirectory": "C:/Path/To/Your/MasterExampleProject_UE5.1",
    "GenerateCppExample": true,
    "GenerateBlueprintExample": true
  },

  "CloudUpload": {
    "Enable": false,
    "RcloneConfigPath": "C:/Users/YourUser/AppData/Roaming/rclone/rclone.conf",
    "RemoteName": "MyGoogleDrive",
    "RemoteFolderPath": "PluginBuilds/YourPluginName"
  },

  "BuildOptions": {
    "_comment": "Advanced options for debugging the pipeline.",
    "SkipPluginBuild": false
  }
}
```

---

## Setting Breakdown

### Core Settings
-   `PluginName`: The name of your plugin (e.g., "GenAI"). This is used for naming output files.
-   `PluginSourceDirectory`: The absolute path to your plugin's source folder (the one containing the `.uplugin` file).
-   `OutputDirectory`: The path where all packaged files will be saved. A relative path like `./Builds` is recommended.
-   `UnrealEngineBasePath`: The root directory where your Epic Games Launcher engine versions are installed.
-   `EngineVersions`: An array of strings specifying which engine versions to build for.

### `ExampleProject`
-   `Generate`: If `true`, the pipeline will generate example projects.
-   `MasterProjectDirectory`: The absolute path to your master example project, which must be in the oldest engine version you are supporting.
-   `GenerateCppExample`: If `true`, a C++ example project will be generated for each engine version.
-   `GenerateBlueprintExample`: If `true`, a Blueprint-only version of the example project will also be generated.

### `CloudUpload`
-   `Enable`: If `true`, the pipeline will attempt to upload the final `.zip` files using rclone.
-   `RcloneConfigPath`: The absolute path to your `rclone.conf` file.
-   `RemoteName`: The name of the rclone remote you configured (e.g., "MyGoogleDrive").
-   `RemoteFolderPath`: The folder path on your remote storage where files will be uploaded.

### `BuildOptions`
-   `_comment`: An internal note; does not affect the build.
-   `SkipPluginBuild`: If `true`, the script will skip packaging the plugin and only generate the example projects. Useful for debugging the project generation step.
