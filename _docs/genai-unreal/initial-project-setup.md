---
layout: documentation
title: Initial Project Setup
permalink: /docs/genai-unreal/initial-project-setup/
nav_order: 3
---

Follow these steps to get the plugin running in your project.

## Adding the Plugin

1. Acquire the GenAI for Unreal plugin from **Fab.com**. Once downloaded click on `Install to engine` from the epic's launcher.
2. Open your project and enable the "GenAI For Unreal" plugin from the `Edit > Plugins` menu. Restart the editor if prompted.

## C++ Project Configuration (Optional)

To use the plugin's classes in your C++ code, you must add its modules to your project's build file.

1. Open `YourProject.Build.cs` located in your project's `Source/YourProject` directory.
2. Add `"GenAI"` to your list of public dependencies. This gives you access to all the core functionalities.

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

