---
layout: documentation
title: Example Project
permalink: /docs/genai-llama/example-project/
nav_order: 2
description: "Download and explore Blueprint examples demonstrating HTTP providers, embedded inference, streaming, multimodal vision, and AI model management."
tags: [example-project, blueprint, chat-completion, streaming, vision-ai]
---

The plugin ships with an example project containing Blueprint examples for chat completion, streaming, multimodal vision, and server management.

---

## Download

<p>A Blueprint-only project is available for each supported Unreal Engine version. Please download the one that matches your engine. All links point to Google Drive.</p>

<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">Requirements</p>
  <p style="margin: 5px 0 0 0; color: #856404;">The GenAI Llama plugin must be installed in your project from the Fab store before opening these projects. For HTTP provider examples, you need a local inference server running (e.g., <a href="https://ollama.com/" target="_blank" rel="noopener noreferrer">Ollama</a>, LM Studio, or any OpenAI-compatible server).</p>
</div>

<table class="download-table">
  <thead>
    <tr>
      <th>Engine Version</th>
      <th>Blueprint-Only Project</th>
    </tr>
  </thead>
  <tbody>
    {% for project in site.data.settings.example_projects_llama %}
    <tr>
      <td>Unreal Engine {{ project.version }}</td>
      <td><a href="{{ project.bp_link }}" target="_blank" rel="noopener noreferrer">GenAILlamaExample_UE{{ project.version }}_BP.zip</a></td>
    </tr>
    {% endfor %}
  </tbody>
</table>

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
