---
layout: documentation
title: CI/CD for Unreal - Home
permalink: /docs/ci-cd-unreal/
nav_order: 1
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1754263099/ba9ce772-033b-4e99-970a-8362b32ef3cb.webp
---

A powerful, modular local CI/CD pipeline for building, packaging, and distributing Unreal Engine code plugins and their example projects across multiple engine versions with a single command.

This tool automates the tedious process of multi-version support, ensuring your plugin is robust and ready for distribution on marketplaces like Fab.com. It handles plugin packaging, version-specific example project generation, and optional cloud uploads.

<div class="button-row">
  <a href="https://github.com/muddyterrain/unreal-ci-cd-for-fab" class="cta-button primary track-click" data-event-name="btn_clk_cicd_github" data-event-location="top_cta" target="_blank" rel="noopener noreferrer">View on GitHub</a>
  <a href="/t/discord" class="cta-button secondary track-click" data-event-name="btn_clk_join_discord" data-event-location="top_cta" target="_blank" rel="noopener noreferrer">Join Discord</a>
</div>

---

## Problem Statement
As per the <a href="https://support.fab.com/s/article/FAB-TECHNICAL-REQUIREMENTS?language=en_US" class="track-click" data-event-name="lnk_clk_fab_guidelines" data-event-location="docs_cicd_index" target="_blank" rel="noopener noreferrer">Fab.com submission guidelines</a>, code plugins are distributed with binaries built by Epic’s own toolchain. This means developers must upload their plugin as source files and ensure it compiles correctly against every supported engine version.

Manually packaging a plugin and its example project for multiple engine versions is tedious, time-consuming, and error-prone. This tool was built to solve that problem.

## Core Philosophy: Develop Low, Upgrade High

To support multiple engine versions correctly, this pipeline follows the industry-standard practice:

1.  **Develop in the Oldest Version**: Your master example project (containing C++ and/or Blueprints) must be created and maintained in the oldest engine version you support (e.g., UE 5.1).

2.  **Automate Upgrades**: The script automatically creates a temporary copy of your master project and uses the Unreal Engine command line to safely upgrade it for each newer version (5.2, 5.3, etc.).

This ensures that users on any supported engine version get an example project that opens and works perfectly, as Unreal Engine does not support opening assets from a newer engine version in an older one.

---

## Quick Navigation

1.  **[Prerequisites](/docs/ci-cd-unreal/prerequisites/)** ⚙️ — What you need to install first.
2.  **[Quick Start](/docs/ci-cd-unreal/quick-start/)** 🚀 — Get up and running in minutes.
3.  **[Configuration](/docs/ci-cd-unreal/configuration/)** 🗂️ — A deep dive into the `config.json` file.
4.  **[Features](/docs/ci-cd-unreal/features/)** ✨ — A full list of the tool's capabilities.
5.  **[Cloud Uploads](/docs/ci-cd-unreal/cloud-uploads/)** ☁️ — Guide to setting up rclone.
6.  **[Troubleshooting](/docs/ci-cd-unreal/troubleshooting/)** 🧪 — Known issues and how to fix them.
