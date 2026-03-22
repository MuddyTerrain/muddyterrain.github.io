---
layout: documentation
title: Example Project
permalink: /docs/genai-llama/example-project/
nav_order: 2
---

The plugin ships with an example project containing Blueprint examples for chat completion, streaming, multimodal vision, and server management.

---

## Download

The example project is built for **Unreal Engine 5.1** and can be upgraded to any newer version (up to 5.7) through Unreal's built-in project upgrade process.

<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">Requirements</p>
  <p style="margin: 5px 0 0 0; color: #856404;">The GenAI Llama plugin must be installed in your project. For HTTP provider examples, you need a local inference server running (e.g., <a href="https://ollama.com/" target="_blank" rel="noopener noreferrer">Ollama</a>, LM Studio, or any OpenAI-compatible server).</p>
</div>

---

## How to Upgrade to a Newer Engine Version

1.  Download the project (built for UE 5.1).
2.  Open it with your target version of Unreal Engine.
3.  Unreal will prompt you to upgrade the project — click **Yes**.
4.  The project and plugin will be converted to your engine version automatically.

---

## What's Inside

The example project demonstrates all core features of the plugin:

#### Chat Completion (HTTP)
A Blueprint actor that sends a chat request to a local server (Ollama by default) and prints the AI response. Demonstrates configuring connection settings, model selection, and system prompts.

#### Streaming Chat (HTTP)
A streaming example that displays the AI response token-by-token in real-time, demonstrating the typewriter effect with the `On Event` delegate.

#### Multimodal Vision (HTTP)
An example using a vision model (e.g., `llava`) that sends a UTexture2D to the AI and asks it to describe the image. Shows both the `ImagesAsTextures` and `Images` (Base64) approaches.

#### Server Health Check
Demonstrates using the **Check Server Health** node to verify a local server is running before sending requests.

#### List Available Models
Shows how to query a server for all available models and display them in a dropdown.

#### Provider Switching
An example demonstrating switching between Ollama and OpenAI Compatible providers at runtime with different base URLs.

---

## Quick Start

1.  **Install a local server** (e.g., [Ollama](https://ollama.com/)) if using HTTP providers.
2.  **Pull a model:**
    ```bash
    ollama pull llama3
    ```
3.  **Open the example project** in Unreal Engine.
4.  **Press Play** — the example actors will send requests and display responses.

> **Tip:** Check the **Output Log** (Window > Developer Tools > Output Log) to see full request and response details. Set `LogGenAILlama=Verbose` for detailed streaming output.
