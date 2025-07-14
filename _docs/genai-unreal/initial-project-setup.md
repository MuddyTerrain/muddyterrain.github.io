---
layout: documentation
title: Initial Project Setup
permalink: /docs/genai-unreal/initial-project-setup/
nav_order: 3
---

This guide covers the essential steps to install and configure the **GenAI for Unreal** plugin in your project. Whether you are working with C++, Blueprints, or both, these instructions will ensure the plugin is properly integrated.

---

## 1. Installing the Plugin

First, you need to add the plugin to your Unreal Engine installation.

1.  Acquire **GenAI for Unreal** from the **Fab.com** (or Unreal Engine Marketplace).
2.  Open the Epic Games Launcher, navigate to your **Library**, and find the plugin.
3.  Click **"Install to Engine"** and select the engine version your project uses.

Once installed, open your project and enable the plugin via the `Edit > Plugins` menu. You can find it under the "Installed" or "Generative AI" category. Restart the editor when prompted to load the plugin modules.

---

## 2. For Blueprint-Only Projects

If your project is Blueprint-only, **no additional configuration is required.** Once the plugin is enabled, all of its functionality, including asynchronous nodes for AI requests, will be available in the Blueprint editor.

You can proceed directly to **[Getting API Keys](/docs/genai-unreal/getting-api-keys/)** to continue the setup process.

---

## 3. For C++ Projects

If you plan to interact with the plugin using C++, you must add it as a dependency in your project's build file. This step makes the plugin's C++ classes and functions available in your code.

#### Add the Module to Your Build File

1.  Locate your project's build file, named `YourProjectName.Build.cs`. It can be found in the `Source/YourProjectName` directory.
2.  Open the file and add `"GenAI"` to the `PublicDependencyModuleNames` array.

This ensures the Unreal Build Tool links against the GenAI module during compilation.

#### Example: `YourProject.Build.cs`

```cpp
using UnrealBuildTool;

public class YourProject : ModuleRules
{
    public YourProject(ReadOnlyTargetRules Target) : base(Target)
    {
        PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;

        PublicDependencyModuleNames.AddRange(new string[] {
            "Core",
            "CoreUObject",
            "Engine",
            "InputCore",
            "GenAI"  // <-- ADD THIS MODULE
        });
    }
}
```
After editing the file, right-click your `.uproject` file and select **"Generate Visual Studio project files"** to update your solution. You can now include plugin headers (e.g., `#include "GenAI/Public/GenAI.h"`) in your C++ code.