---
layout: documentation
title: Prerequisites
permalink: /docs/ci-cd-unreal/prerequisites/
nav_order: 2
---

Before using the pipeline, you must ensure your system is correctly configured with the required software and dependencies.

---

## Compatibility

-   **Engine Versions**: This tool supports **Unreal Engine 5.1 and newer**.
-   **Platform**: Currently designed for **Windows** and packages for the **Win64** platform.

---

## Required Software

1.  **Windows & PowerShell**: Windows 10/11 with PowerShell 5.1+.
2.  **Unreal Engine**: All required engine versions must be installed via the Epic Games Launcher.
3.  **Visual Studio 2022**: You must have Visual Studio 2022 installed with the **Game development with C++** workload.
    - Under the **Individual components** tab, you must install the specific MSVC toolchains required for each engine version you intend to build for:
        - `MSVC v143 - VS 2022 C++ x64/x86 build tools (v14.32-17.2)` - **Required for UE 5.1**
        - `MSVC v143 - VS 2022 C++ x64/x86 build tools (v14.34-17.4)` - **Required for UE 5.2**
        - `MSVC v143 - VS 2022 C++ x64/x86 build tools (v14.36-17.6)` - **Required for UE 5.3**
        - `MSVC v143 - VS 2022 C++ x64/x86 build tools (v14.38-17.8)` or newer - **Required for UE 5.4+**
        - `Windows 11 SDK` or `Windows 10 SDK`
4.  **(Optional) rclone**: For the cloud upload feature, you will need to download <a href="https://rclone.org/" class="track-click" data-event-name="lnk_clk_rclone_org" data-event-location="docs_prerequisites" target="_blank" rel="noopener noreferrer">rclone</a>.

<div class="image-wrapper">
    <figure>
    <img src="https://raw.githubusercontent.com/muddyterrain/unreal-ci-cd-for-fab/main/Docs/EngineVersions.png" alt="Different Engine Versions" style="width: 60%;">
    <figcaption class="image-caption">Ensure all required engine versions are installed via the Epic Games Launcher.</figcaption>
    </figure>
</div>
