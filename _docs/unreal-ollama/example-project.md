---
layout: documentation
title: Example Project
permalink: /docs/unreal-ollama/example-project/
nav_order: 2
---

Download the example project to see the plugin in action with pre-built Blueprint examples for chat completion, streaming, and multimodal interactions.

---

## Download

The example project is built for **Unreal Engine 5.1** and can be upgraded to any newer version through Unreal's built-in project upgrade process.

<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">Requirements</p>
  <p style="margin: 5px 0 0 0; color: #856404;">The Unreal Ollama plugin must be installed in your project before opening the example. The plugin is included in the download, but make sure <a href="https://ollama.com/" target="_blank" rel="noopener noreferrer">Ollama</a> is installed and running on your machine.</p>
</div>

<table class="download-table">
  <thead>
    <tr>
      <th>Engine Version</th>
      <th>Project Download</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Unreal Engine 5.1+</td>
      <td><a href="https://github.com/MuddyTerrain/unreal-ollama" class="track-click" data-event-name="lnk_clk_ollama_example_download" data-event-location="docs_example_project" target="_blank" rel="noopener noreferrer">View on GitHub</a></td>
    </tr>
  </tbody>
</table>

---

## How to Upgrade to a Newer Engine Version

1.  Download the project (built for UE 5.1).
2.  Open it with your target version of Unreal Engine.
3.  Unreal will prompt you to upgrade the project — click **Yes**.
4.  The project and plugin will be converted to your engine version automatically.

---

## What's Inside

The example project demonstrates all core features of the plugin:

#### Chat Completion
A simple Blueprint actor that sends a chat request on `BeginPlay` and prints the AI response to the screen and output log.

#### Streaming Chat
A streaming example that displays the AI response in real-time as it is generated, demonstrating the typewriter effect.

#### Multimodal (Vision)
An example using `llava` (or another vision model) that sends a texture to the AI and asks it to describe the image.

---

## Quick Start

1.  **Install Ollama** from [ollama.com](https://ollama.com/) if you haven't already.
2.  **Pull a model:**
    ```bash
    ollama pull llama3
    ```
3.  **Open the example project** in Unreal Engine.
4.  **Press Play** — the example actors will automatically send requests and display responses.

> **Tip:** Check the **Output Log** (Window > Developer Tools > Output Log) to see the full request and response details.
