---
layout: documentation
title: GenAI Model Generator - Home
permalink: /docs/genai-modelgenerator/
nav_order: 1
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1773874365/MainBanners_7_nxt9fw.webp
---

<img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1773874365/MainBanners_7_nxt9fw.webp" alt="GenAI Model Generator Plugin Banner">

**Welcome to the official documentation for GenAI Model Generator, the most complete Unreal Engine plugin for AI-powered 3D model and texture generation.** Generate production-ready 3D assets from text prompts or reference images, rig and animate characters, retexture existing meshes, and create seamless PBR materials — all from inside the Unreal Editor or at runtime via C++ and Blueprint.

The plugin connects to 7 AI providers across 4 API backends through a single, unified interface with a fully integrated editor widget featuring provider selection, contextual guidance, progress tracking, and direct Content Browser import.

<div class="button-row">
  <a href="/t/discord" class="cta-button primary track-click" data-event-name="btn_clk_join_discord" data-event-location="top_cta" target="_blank" rel="noopener noreferrer">Join Discord</a>
</div>
---

## Getting Started

New to GenAI Model Generator? Here's the recommended path:

1.  **[Getting API Keys](/docs/genai-modelgenerator/getting-api-keys/)**
    * Obtain keys from the providers you want to use. You only need one to get started — Tripo AI's free tier (300 credits/month) is the easiest way to try the plugin.
2.  **[Getting Started](/docs/genai-modelgenerator/getting-started/)**
    * Install the plugin, configure your API keys, and generate your first 3D model in minutes using the editor widget or C++ code.
3.  **[Provider Pricing Guide](/docs/genai-modelgenerator/provider-pricing/)**
    * Understand costs, free tiers, and which provider is best for your use case before committing.
4.  **[API Reference](/docs/genai-modelgenerator/api-reference/)**
    * Explore the full C++ API — async action classes, settings structs, enums, and Blueprint helper nodes.
5.  **[Example Project](/docs/genai-modelgenerator/example-project/)**
    * Download a ready-made Blueprint project with working examples for every generation mode.

---

## What Can You Do?

- **Text-to-3D** — Describe a model in plain text, get a production-ready textured 3D asset
- **Image-to-3D** — Convert concept art, photos, or AI-generated reference images into textured 3D models
- **Auto-Rigging** — Automatically rig models with skeleton and animations — humanoid characters (Meshy AI) or multi-creature types including quadruped, avian, serpentine, and more (Tripo AI)
- **Retexturing** — Apply new AI-generated textures to existing 3D meshes (Meshy AI, Tripo AI)
- **Smart LowPoly** — Convert high-poly models to hand-crafted low-poly with baked textures (Tripo AI)
- **Remesh** — Retopologize and optimize mesh polycount with triangle or quad topology (Meshy AI)
- **PBR Texture Generation** — Create seamless base color, normal, roughness, metallic, and full PBR map sets (Google Gemini)
- **Reference Image Generation** — Generate clean concept art from text prompts, optimized for feeding into Image-to-3D
- **Multiple Formats** — Import as GLB, FBX, OBJ, USDZ, or STL directly into the Content Browser as UAssets
- **Runtime + Editor** — Full feature parity — all generation features work in the editor widget and at runtime via C++/Blueprint
- **Blueprint Helper Nodes** — Utility nodes for saving models/textures to file, creating runtime textures, and importing assets to Content Browser
- **Persistent Task History** — Task IDs and model references survive editor restarts, enabling chained operations (retexture, auto-rig, remesh, low-poly) across sessions

---

## Why GenAI Model Generator?

* **One Plugin, Seven Providers**

  Access Meshy AI, Tripo AI, Tencent Hunyuan3D, Microsoft Trellis 2, Hyper3D Rodin, TripoSR, and Google Gemini through a single, unified interface. Switch between providers with one dropdown — no boilerplate, no vendor lock-in.

* **Deep Editor Integration**

  A purpose-built Slate UI with provider-aware dropdowns, contextual help text showing pricing and tips, smart input visibility, reference image preview, live progress bars, result thumbnails, and direct Content Browser import. Everything is designed so you never have to leave the editor.

* **Complete 3D Pipeline**

  Go from text prompt to rigged, animated, game-ready asset without leaving Unreal. Generate a model, auto-rig it, retexture it, remesh for optimization, or convert to low-poly — all as chained operations that persist across editor sessions.

* **Full Blueprint & C++ Support**

  Every generation feature works as both an async Blueprint node and a C++ API. The plugin ships with utility nodes for saving files, creating runtime textures, and importing assets — everything you need to build AI-powered tools and gameplay systems.

* **Secure & Production-Ready**

  API keys are XOR-encrypted and stored in a binary file — never in plain text configs. Every provider endpoint can be overridden for corporate proxies. Supports UE 5.1 through 5.7 on Windows, macOS, and Linux.

---

## Supported Providers & AI Models

| Provider (in Plugin) | Underlying AI Model | Modes | Approx. Cost | API Key |
|---|---|---|---|---|
| **Meshy AI** | Meshy-6 (proprietary) | Text-to-3D, Image-to-3D, Retexture, Auto-Rig, Remesh | ~$0.30–$0.60/gen | Meshy API key (Pro plan required) |
| **Tripo AI** | Tripo v3.1 (proprietary) | Text-to-3D, Image-to-3D, Retexture, Auto-Rig, Smart LowPoly | ~$0.07–$0.17/gen | Tripo API key |
| **Fal.ai - Hunyuan3D** | Tencent Hunyuan3D v3.1 Pro / v2.1 (open-source) | Text-to-3D, Image-to-3D | ~$0.16–$0.48/gen | Fal.ai API key |
| **Fal.ai - TripoSR** | TripoSR (MIT, open-source) | Image-to-3D | ~$0.07/gen | Same Fal.ai key |
| **Fal.ai - Rodin** | Hyper3D Rodin Gen-2 (proprietary) | Text-to-3D, Image-to-3D | ~$0.40/gen | Same Fal.ai key |
| **Fal.ai - Trellis 2** | Microsoft Trellis 2 (open-source) | Image-to-3D | ~$0.25–$0.35/gen | Same Fal.ai key |
| **Google (Texture Gen)** | Gemini 3.1 Flash | Texture Generation, Reference Image | ~$0.04/image | Google API key |

All four Fal.ai providers share a single API key. The plugin shows contextual help text with pricing, mode descriptions, and workflow tips for each provider.

---

## Quick Navigation

1.  **[Getting API Keys](/docs/genai-modelgenerator/getting-api-keys/)** — Obtain keys from all providers
2.  **[Getting Started](/docs/genai-modelgenerator/getting-started/)** — Installation, setup, and your first generation
3.  **[API Reference](/docs/genai-modelgenerator/api-reference/)** — C++ classes, structs, and enums
4.  **[Provider Pricing Guide](/docs/genai-modelgenerator/provider-pricing/)** — Costs, free tiers, and recommendations
5.  **[Example Project](/docs/genai-modelgenerator/example-project/)** — Downloadable Blueprint project with examples

---

## Official Links

* **<a href="/t/discord" class="track-click" data-event-name="lnk_clk_modelgen_discord" data-event-location="docs_modelgen_index" target="_blank" rel="noopener noreferrer">Discord Community</a>**: Get help, share creations, and connect with other developers.
