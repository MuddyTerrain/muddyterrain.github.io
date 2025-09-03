---
layout: documentation
title: Features
permalink: /docs/ci-cd-unreal/features/
nav_order: 5
---

This page provides a high-level overview of the core features of the CI/CD pipeline.

---

-   **Modular & Config-Driven**: A master script (`run_pipeline.ps1`) orchestrates the entire process based on settings in a single `config.json` file.
-   **Time-Saving Cache**: Use the `-UseCache` flag to skip building any plugin or example project versions that already exist in the output directory. Perfect for iterating on a single engine version.
-   **Multi-Version Plugin Packaging**: Automatically packages your source code plugin for all specified Unreal Engine versions.
-   **Automated Example Project Generation**:
  - Implements a "Develop Low, Upgrade High" workflow.
  - Takes a single master example project (from your oldest supported engine version) and automatically generates upgraded, version-specific copies for all newer engines.
  - Can create both a full C++ example and a stripped, Blueprint-only version.
-   **Optional Cloud Uploads**: Automatically uploads all generated `.zip` files to a cloud provider of your choice using rclone.
-   **Clean & Compliant Packaging**: Creates clean, marketplace-ready zip archives, excluding all temporary files like `Binaries`, `Intermediate`, and `Saved` folders, as per marketplace guidelines.
-   **Detailed Logging**: Generates separate logs for each task in a `Logs/` directory in the project root, making it easy to debug failures.
-   **Automatic Cleanup**: All temporary projects and build files are deleted after each run.
-   **Debug Options**: The `config.json` includes a `BuildOptions` section that allows you to skip certain parts of the pipeline for faster testing and debugging (e.g., `SkipPluginBuild`).
