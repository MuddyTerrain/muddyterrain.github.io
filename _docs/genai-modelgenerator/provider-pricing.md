---
layout: documentation
title: Provider Pricing Guide
permalink: /docs/genai-modelgenerator/provider-pricing/
nav_order: 5
---

Pricing for each supported provider at a glance. All prices are in USD and were last verified in March 2026 — always confirm on the provider's website before committing.

---

## Quick Comparison

| Provider | Underlying Model | Free Tier | Approx. Cost / Model | Best For |
|---|---|---|---|---|
| **Meshy AI** | Meshy-6 | 100 credits/mo (~5 models) | ~$0.30–$0.60 | All-in-one 3D pipeline + rigging |
| **Tripo AI** | Tripo v3.1 | 300 credits/mo (~24 models) | ~$0.07–$0.17 | Best free tier, creature rigging |
| **Fal.ai - Hunyuan3D** | Tencent Hunyuan3D v3.1/v2.1 | Small signup credit | $0.16–$0.48 | Highest quality open-source |
| **Fal.ai - TripoSR** | TripoSR (MIT) | Small signup credit | $0.07 | Cheapest, instant results |
| **Fal.ai - Rodin** | Hyper3D Rodin Gen-2 | Small signup credit | $0.40 | High quality, PBR, no subscription |
| **Fal.ai - Trellis 2** | Microsoft Trellis 2 | Small signup credit | $0.25–$0.35 | PBR materials included |
| **Google** | Gemini 3.1 Flash | Rate-limited | ~$0.04/image | PBR textures, reference images |

---

## Meshy AI

**Website:** [meshy.ai](https://www.meshy.ai/pricing) &#124; **API Docs:** [docs.meshy.ai](https://docs.meshy.ai)

**Underlying model:** Meshy-6 (proprietary). Meshy-5 and Meshy-4 also available for older workflows.

### Subscription Plans

| Plan | Monthly | Annual (per month) | Credits / Month |
|---|---|---|---|
| Free | $0 | — | 100 |
| Pro | $20 | $10 (50% off) | 1,000 |
| Studio | $60 | $48 (20% off) | 4,000 |
| Enterprise | Custom | Custom | Custom |

### Credits Per Operation

| Operation | Credits | What It Does |
|---|---|---|
| Text-to-3D Preview (Meshy-6) | 20 | Generates geometry mesh |
| Text-to-3D Refine (Texture) | 10 | Applies textures to preview |
| Image-to-3D (Meshy-6) | 20–30 | Single-step textured model |
| Retexture | 10 | New textures on existing model |
| Auto-Rigging | 5 | Skeleton + walking/running anims |
| Animation | 3 | Additional animation generation |

### Cost Breakdown (Pro Plan)

1,000 credits for $20/mo = **$0.02 per credit**.

- Full Meshy-6 Text-to-3D (preview + refine): ~30 credits = **~$0.60**
- Meshy-6 Image-to-3D: ~20 credits = **~$0.40**
- Auto-Rig after generation: ~5 credits = **~$0.10**

### Things to Know

- Credits do **not** roll over month-to-month.
- Free tier: 1 queued task, 10 downloads/month.
- **API access requires Pro or higher.**
- The plugin auto-chains Text-to-3D preview → refine — you pay for both steps automatically.

---

## Tripo AI

**Website:** [tripo3d.ai](https://www.tripo3d.ai/pricing) &#124; **API Docs:** [platform.tripo3d.ai](https://platform.tripo3d.ai)

**Underlying model:** Tripo v3.1 (proprietary). This is a different, newer model from the open-source TripoSR on Fal.ai.

### Subscription Plans

| Plan | Monthly | Annual (per month) | Credits / Month |
|---|---|---|---|
| Basic (Free) | $0 | — | 300 |
| Professional | $19.90 | $11.94 (40% off) | 3,000 |
| Advanced | $49.90 | $29.94 (40% off) | 8,000 |
| Premium | $139.90 | $83.94 (40% off) | 25,000 |

### API Pricing

- API credits: **$0.01 per credit**
- ~10–25 credits per generation (varies by mode and quality)
- 2,000 free API credits on signup (~$20 value)
- Web subscription and API credits are **separate** pools

### Cost Per Model

- On API ($0.01/credit): **~$0.10–$0.25**
- On Professional subscription: **~$0.07–$0.17**

### Things to Know

- Most generous free tier (300 credits/mo, ~24 generations).
- Annual billing saves up to 40%.
- Tripo v3.1 is proprietary — only available through Tripo's own API, not on Fal.ai.

---

## Fal.ai (Hunyuan3D, TripoSR, Rodin Gen-2, Trellis 2)

**Website:** [fal.ai](https://fal.ai/pricing) &#124; **Docs:** [docs.fal.ai](https://docs.fal.ai)

Fal.ai is an inference platform — **one API key** gives you access to four different 3D generation models. No subscription needed — pure pay-per-use.

### 3D Model Generation

| Model in Plugin | Underlying AI Model | Cost per Generation | Speed | Quality |
|---|---|---|---|---|
| **Fal.ai - TripoSR** | TripoSR (MIT, open-source) | **$0.07** | ~0.5s | Basic — great for prototyping |
| **Fal.ai - Hunyuan3D** (Image-to-3D) | Tencent Hunyuan3D v2.1 (open-source) | **$0.16** (mesh) / **$0.48** (textured) | ~30s | Good |
| **Fal.ai - Hunyuan3D** (Text-to-3D) | Tencent Hunyuan3D v3.1 Pro (open-source) | **$0.48** | ~45s | High — best open-source text-to-3D |
| **Fal.ai - Trellis 2** | Microsoft Trellis 2 (open-source) | **$0.25** (512p) / **$0.30** (1024p) / **$0.35** (1536p) | ~15s | Good — full PBR materials included |
| **Fal.ai - Rodin** | Hyper3D Rodin Gen-2 (proprietary) | **$0.40** | ~60s | High — PBR materials, high quality |

### Model Details

**TripoSR** — MIT-licensed single-image 3D reconstruction. Extremely fast (<1 second), basic geometry without PBR textures. Great for rapid iteration and previewing concepts.

**Hunyuan3D** — Tencent's open-source 3D generation family. v2.1 handles Image-to-3D, v3.1 Pro handles Text-to-3D with higher quality. Tunable via inference steps, guidance scale, and face count (40K–1.5M).

**Trellis 2** — Microsoft's open-source Image-to-3D model. Produces meshes with full PBR material sets (base color, normal, roughness, metallic). Configurable texture resolution (1024/2048/4096) and mesh vertex count.

**Rodin Gen-2** — Hyper3D's second-generation proprietary model. Produces high-quality models with PBR materials. The plugin sends with `quality: "high"` by default. Accessing Rodin through Fal.ai avoids the $120/mo Business subscription required for Rodin's direct API.

### Free Tier

- Small amount of free credits on signup (typically $1–$10).
- Credits may have expiration dates (30–90 days).

### Why Fal.ai?

- **No subscriptions** — pure pay-per-use.
- **Single API key** for all four models.
- **Cheapest Rodin access** — $0.40/gen vs $120/mo Business subscription.
- Simplest integration path for offering multiple AI backends.

---

## Google Gemini (Texture Generation)

**Website:** [ai.google.dev](https://ai.google.dev) &#124; **Pricing:** [ai.google.dev/gemini-api/docs/pricing](https://ai.google.dev/gemini-api/docs/pricing)

**Underlying model:** Gemini 3.1 Flash (image generation mode).

The plugin uses Google Gemini for two modes:
- **Texture Generation** — generates seamless PBR texture maps (base color, normal, roughness, metallic)
- **Reference Image** — generates clean concept art optimized for feeding into Image-to-3D providers

### Pricing

| Usage | Cost per Image | Notes |
|---|---|---|
| Standard generation | ~$0.04 | Per image (1K resolution) |
| Full PBR material set | ~$0.12–$0.16 | 3–4 individual map generations |
| Reference image | ~$0.04 | Single concept art generation |

### Things to Know

- Free tier includes rate-limited access, but image generation may require paid usage.
- Content filtering can be aggressive — some prompts may be rejected.
- The reference image workflow is highly recommended: generate a concept image, then use it as input for any 3D provider's Image-to-3D mode.

---

## Recommendations by Use Case

### Cheapest for Prototyping

1. **Tripo AI Free** — 300 credits/month, most generous free tier
2. **Fal.ai + TripoSR** — $0.07/gen, instant results, no subscription
3. **Meshy AI Free** — 100 credits/month

### Best Quality-to-Price for Production

1. **Fal.ai + Hunyuan3D v3.1 Pro** — $0.48/gen, best open-source text-to-3D
2. **Tripo AI Professional** — $19.90/mo for 3,000 credits, proprietary v3.1 model
3. **Fal.ai + Trellis 2** — $0.25–$0.35/gen, PBR materials included

### Highest Quality (Cost Secondary)

1. **Meshy AI** (Meshy-6) on Pro/Studio plan — Latest proprietary model, auto-refine texturing
2. **Fal.ai + Rodin Gen-2** — $0.40/gen, high-quality PBR output
3. **Fal.ai + Hunyuan3D v3.1 Pro** — $0.48/gen with tunable inference steps

### Best for Rigging & Animation

1. **Meshy AI Auto-Rig** — Humanoid rigging with skeleton + walking/running animations, 5 credits (~$0.10)
2. **Tripo AI Auto-Rig** — Multi-creature rigging (biped, quadruped, avian, serpentine, etc.) with 11 animation presets

### Best for Texture Generation

1. **Google Gemini** — ~$0.04/image, supports all PBR map types
2. **Meshy Retexture** — 10 credits, retextures existing models

### Simplest Integration (Single API Key)

**Fal.ai** — One key gives access to Hunyuan3D, TripoSR, Rodin Gen-2, and Trellis 2. Best for offering multiple AI backends without managing separate API accounts.

---

## Cross-Availability Matrix

| AI Model | Direct Provider | Via Fal.ai | Open Source? |
|---|---|---|---|
| Meshy-6 | Meshy API only | No | No |
| Rodin Gen-2 | Hyper3D ($120/mo min) | Yes ($0.40/gen) | No |
| Tripo v3.1 | Tripo API only | No | No |
| TripoSR | Self-host | Yes ($0.07/gen) | Yes (MIT) |
| Hunyuan3D v2.1/v3.1 | Self-host | Yes ($0.16–$0.48/gen) | Yes (Tencent) |
| Trellis 2 | Self-host | Yes ($0.25–$0.35/gen) | Yes (Microsoft) |
| Gemini Image Gen | Google API | NanoBanana on fal.ai | No |

---

*Prices verified March 2026. Always check the provider's website for the latest pricing before purchasing.*
