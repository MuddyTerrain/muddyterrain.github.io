---
layout: documentation
title: GenAI Model Generator - Home
permalink: /docs/genai-modelgenerator/
nav_order: 1
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1773874365/MainBanners_7_nxt9fw.webp
---

**Welcome to the official documentation for GenAI Model Generator, a powerful Unreal Engine plugin for AI-powered 3D model generation and PBR texture creation.** This plugin connects your Unreal Engine projects to leading AI 3D generation services — Meshy AI, Tripo AI, Fal.ai (Hunyuan3D, TripoSR, Rodin Gen-2, Trellis 2), and Google Gemini — through a single, unified editor interface.

<div class="button-row">
  <a href="/t/discord" class="cta-button primary track-click" data-event-name="btn_clk_join_discord" data-event-location="top_cta" target="_blank" rel="noopener noreferrer">Join Discord</a>
</div>
---

## What Can You Do?

- **Text-to-3D** — Describe a model in plain text and generate a production-ready 3D asset with textures
- **Image-to-3D** — Convert concept art, photos, or AI-generated reference images into textured 3D models
- **Auto-Rigging** — Automatically rig humanoid models with skeleton and walking/running animations (Meshy AI)
- **Retexturing** — Apply new AI-generated textures to existing 3D meshes (Meshy AI)
- **PBR Texture Generation** — Create seamless base color, normal, roughness, metallic, and full PBR map sets (Google Gemini)
- **Reference Image Generation** — Generate clean concept art from text prompts, optimized for feeding into Image-to-3D
- **Multiple Formats** — Import as GLB, FBX, OBJ, USDZ, or STL directly into the Content Browser as UAssets

---

## Supported Providers & AI Models

| Provider (in Plugin) | Underlying AI Model | Modes | Approx. Cost | API Key |
|---|---|---|---|---|
| **Meshy AI** | Meshy-6 (proprietary) | Text-to-3D, Image-to-3D, Retexture, Auto-Rig | ~$0.30–$0.60/gen | Meshy API key (Pro plan required) |
| **Tripo AI** | Tripo v2.5 (proprietary) | Text-to-3D, Image-to-3D | ~$0.07–$0.17/gen | Tripo API key |
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
