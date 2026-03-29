---
layout: documentation
title: Example Project
permalink: /docs/genai-modelgenerator/example-project/
nav_order: 6
description: "Download Blueprint examples demonstrating text-to-3D, image-to-3D, texture generation, auto-rigging, and provider switching workflows."
tags: [example-project, blueprint, 3d-generation, texture-generation, ai-assets]
---

The plugin ships with an example project containing Blueprint examples for 3D model generation, texture creation, and provider configuration.

---

## Download

<p>A Blueprint-only project is available for each supported Unreal Engine version. Please download the one that matches your engine. All links point to Google Drive.</p>

<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">Requirements</p>
  <p style="margin: 5px 0 0 0; color: #856404;">The GenAI Model Generator plugin must be installed to your engine from the Fab store before opening these projects. Without it, the Blueprint project will have errors and fail to open. You will also need valid API keys for the providers you wish to test.</p>
</div>

<table class="download-table">
  <thead>
    <tr>
      <th>Engine Version</th>
      <th>Blueprint-Only Project</th>
    </tr>
  </thead>
  <tbody>
    {% for project in site.data.settings.example_projects_modelgenerator %}
    <tr>
      <td>Unreal Engine {{ project.version }}</td>
      <td><a href="{{ project.bp_link }}" target="_blank" rel="noopener noreferrer">GenAIModelGenExample_UE{{ project.version }}_BP.zip</a></td>
    </tr>
    {% endfor %}
  </tbody>
</table>

---

## What's Inside

The example project demonstrates core features of the plugin:

#### Text-to-3D
A Blueprint actor that generates a 3D model from a text prompt using a configured provider. Demonstrates provider selection, prompt configuration, and importing the result into the Content Browser.

#### Image-to-3D
An example that converts a reference image into a textured 3D model. Shows how to pass a UTexture2D as input and handle the asynchronous generation pipeline.

#### PBR Texture Generation
Demonstrates generating seamless PBR texture sets (base color, normal, roughness, metallic) from a text prompt using Google Gemini.

#### Provider Switching
An example showing how to switch between providers (Meshy AI, Tripo AI, Fal.ai, Google) at runtime with different API keys and settings.

---

## Quick Start

1.  **Obtain API keys** for the providers you want to test (see [Getting API Keys](/docs/genai-modelgenerator/getting-api-keys/)).
2.  **Open the example project** in Unreal Engine.
3.  **Enter your API keys** in the example Blueprint actors or project settings.
4.  **Press Play** — the example actors will initiate generation requests.

> **Tip:** Check the **Output Log** (Window > Developer Tools > Output Log) to see full request and response details.
