---
layout: documentation
title: Quick Start
permalink: /docs/ci-cd-unreal/quick-start/
nav_order: 3
---

This guide will walk you through the essential steps to get the CI/CD pipeline running.

---

### Step 1: Validate Your System

Before creating a configuration file, you can run the validation script with the example config to ensure your system meets all the necessary prerequisites.

```powershell
# Validate system prerequisites (without config file)
.\Tools\validate_config.ps1 -ConfigPath "config.example.json" -SkipEngineValidation
```

### Step 2: Create Your Configuration

Copy the `config.example.json` file and rename it to `config.json`. This file is ignored by git and will contain your local settings. Open `config.json` and edit the paths and settings to match your project.

➡️ **For a detailed breakdown of all settings, see the [Configuration](/docs/ci-cd-unreal/configuration/) guide.**

### Step 3: (Optional) Configure Cloud Uploads

If you want to automatically upload your packaged files, follow the **[Cloud Uploads with rclone](/docs/ci-cd-unreal/cloud-uploads/)** guide to set up your remote storage.

### Step 4: Validate Your Configuration

Before running the full pipeline, validate your `config.json` to catch any errors.

```powershell
# Validate your complete configuration
.\Tools\validate_config.ps1 -ConfigPath "config.json"
```

### Step 5: Run the Master Pipeline

Once your configuration is validated, run the master script from a PowerShell terminal in the root of the repository.

```powershell
# Run the full pipeline, including validation
.\run_pipeline.ps1

# Use the cache to skip already-built packages (recommended for reruns)
.\run_pipeline.ps1 -UseCache

# Perform a dry run to see what would be built without executing any tasks
.\run_pipeline.ps1 -DryRun
```

The script will execute all configured tasks, creating plugin packages and version-specific example projects in your output folder (e.g., `Builds/`).

```
