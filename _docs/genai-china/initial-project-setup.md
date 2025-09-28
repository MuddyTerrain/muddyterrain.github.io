---
layout: documentation
title: Initial Project Setup
permalink: /docs/genai-china/initial-project-setup/
nav_order: 2
---

This guide covers the essential steps to install and configure the **Gen AI China 🇨🇳 🔥** plugin in your project.

---

## 1. Installing the Plugin

First, you need to add the plugin to your Unreal Engine installation.

1.  Acquire **Gen AI China** from the **Fab.com** marketplace.
2.  Open the Epic Games Launcher, navigate to your **Library**, and find the plugin.
3.  Click **"Install to Engine"** and select the engine version your project uses.

Once installed, open your project and enable the plugin via the `Edit > Plugins` menu. You can find it under the "Installed" or "Generative AI" category. Restart the editor when prompted.

---

## 2. For Blueprint-Only Projects

If your project is Blueprint-only, **no additional configuration is required.** Once the plugin is enabled, all of its functionality will be available in the Blueprint editor. You can proceed directly to **[Getting API Keys](/docs/genai-china/getting-api-keys/)**.

---

## 3. For C++ Projects

If you plan to interact with the plugin using C++, you must add it as a dependency in your project's build file.

#### Add the Module to Your Build File

1.  Locate your project's build file, named `YourProjectName.Build.cs`, in the `Source/YourProjectName` directory.
2.  Open the file and add `"GenAIChineseModels"` to the `PublicDependencyModuleNames` array.

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
            "GenAIChineseModels"  // <-- ADD THIS MODULE
        });
    }
}
```
After editing, right-click your .uproject file and select "Generate Visual Studio project files" to update your solution.