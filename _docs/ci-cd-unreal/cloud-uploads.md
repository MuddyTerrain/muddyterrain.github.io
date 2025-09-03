---
layout: documentation
title: Cloud Uploads with rclone
permalink: /docs/ci-cd-unreal/cloud-uploads/
nav_order: 6
---

The pipeline includes an optional feature to automatically upload your packaged builds to a cloud storage provider using the powerful command-line tool, [rclone](https://rclone.org/).

---

## What is rclone?

rclone is a command-line program for managing files on cloud storage. It is a single, standalone executable that our script calls to perform a specific task (like copying a folder). It is not a synchronization client like Google Drive for Desktop; it only runs when the pipeline tells it to. This makes it a safe and reliable tool for automation.

---

## How to Set Up Cloud Uploads

1.  **Download rclone**: Get the latest version from the [official rclone website](https://rclone.org/). It's a single executable file; no installation is needed.

2.  **Configure a Remote**:
    - Open a terminal (PowerShell or CMD) and run `rclone config`.
    - Follow the interactive prompts to add a new remote. Give it a memorable name (e.g., "MyGoogleDrive").
    - You will be guided through an authentication process in your web browser.
    - **For Google Drive**: When prompted for `client_id`, it's recommended to create your own for better performance. See [rclone's Google Drive guide](https://rclone.org/drive/#making-your-own-client-id) for step-by-step instructions.

3.  **Update Your `config.json`**:
    - Once your remote is configured, update the `CloudUpload` section in your `config.json` with the correct paths and the remote name you just created.
    - Set `"Enable": true` to activate the upload feature.

When you run the pipeline, it will now execute `rclone` at the end of the process to copy all generated `.zip` files to your specified cloud folder.
