---
layout: documentation
title: Troubleshooting & Known Issues
permalink: /docs/ci-cd-unreal/troubleshooting/
nav_order: 7
---

This page covers common problems and known issues you may encounter while using the pipeline.

---

## Known Issues

<div style="padding: 10px 15px; background-color: #fff3cd; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">⚠️ Global Build Configuration (<code>BuildConfiguration.xml</code>)</p>
  <p style="margin: 5px 0 0 0; color: #856404;">To ensure the correct Visual Studio toolchain is used for each engine version, the script temporarily modifies the global <code>BuildConfiguration.xml</code> file located in <code>Documents/Unreal Engine/UnrealBuildTool</code>.</p>
  <p style="margin: 5px 0 0 0; color: #856404;">The script creates a backup and is designed to restore it, even if the build fails. However, if the script is terminated abruptly (e.g., by a system crash), the backup may not be restored. This could potentially affect other Unreal Engine projects on your system.</p>
  <p style="margin: 5px 0 0 0; color: #856404;"><strong>Mitigation</strong>: If you suspect this has happened, you can manually restore the configuration by deleting <code>BuildConfiguration.xml</code> and renaming <code>BuildConfiguration.xml.bak</code> to <code>BuildConfiguration.xml</code> in the above directory.</p>
</div>

---

## Common Errors

### "Banned" C++ Compiler Error: `UnrealBuildTool has banned the MSVC [version] toolchains...`

-   **Cause**: Epic Games has blocked a specific compiler version due to bugs.
-   **Solution**: Open the Visual Studio Installer, go to "Individual components", and install the exact MSVC version recommended in the error message.

### Zipping Fails with "Stream was too long":

-   **Cause**: PowerShell's built-in `Compress-Archive` command cannot handle files larger than 4GB.
-   **Solution**: We recommend installing [7-Zip](https://www.7-zip.org/). You can then modify the `Compress-Archive` commands in the scripts to use the `7z.exe` command-line tool, which has no file size limits.

### Configuration Validation Fails:

-   **Solution**: Run the validation script directly to see specific issues: `.\Tools\validate_config.ps1 -ConfigPath "config.json"`
-   **Common issues**:
    -   Missing Unreal Engine installations at specified paths.
    -   Incorrect plugin source directory path.
    -   Missing rclone executable (if cloud upload is enabled).
    -   Invalid JSON syntax in `config.json`.

### Pipeline Fails During Build:

-   **Check build logs**: Look in the `Logs/` directory (created at the project root) for detailed error messages from Unreal's build tools.
-   **Common causes**:
    -   Your plugin's source code has compilation errors.
    -   You are missing the required Visual Studio toolchains for the target engine versions.
    -   Insufficient disk space for temporary build files.
