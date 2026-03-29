---
layout: documentation
title: Getting API Keys
permalink: /docs/genai-modelgenerator/getting-api-keys/
nav_order: 2
description: "Obtain API keys for Meshy AI, Tripo AI, Fal.ai, and Google to generate 3D models and PBR textures in Unreal Engine."
tags: [api-keys, authentication, setup, meshy-ai, tripo-ai, fal-ai]
---

To generate 3D models and textures, you need an API key from at least one supported provider. Each provider has its own strengths — you can use one or all of them. All keys are configured in **Project Settings > Plugins > GenAI Model Generator**.

---

## Tripo AI

**What it powers:** Text-to-3D and Image-to-3D using Tripo's proprietary v3.1 model. This is a separate, newer model from the open-source TripoSR available on Fal.ai.

**Free tier:** <strong>300 credits/month (~24 generations)</strong>. API credits are separate from web subscription credits.

<div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1774389686/7600eb14-408d-405a-b931-4546c728dec0.webp" alt="Advanced Make Node with Dropdown" style="width: 100%;">
        <figcaption class="image-caption">
            Creating a new API key in Tripo AI
        </figcaption>
    </figure>
</div>

1.  Visit [https://platform.tripo3d.ai](https://platform.tripo3d.ai) and create an account.
2.  Navigate to your API settings and generate a key.
3.  Paste it into the **Tripo AI API Key** field in Project Settings.

---

## Meshy AI

**What it powers:** Text-to-3D, Image-to-3D, Retexture, and Auto-Rigging using Meshy's proprietary Meshy-6 model.

**Plan required:** Pro or higher, $10 first month and $20 after that, You can also get it a <strong>free first month</strong> using referrals, use our refereal if you are one of the early users: [Link](https://www.meshy.ai/?utm_source=meshy&utm_medium=referral-program&utm_content=Y7KYC7&share_type=invite-friends). If the link no longer works, ask your friends for a refferal. 

API access is not available on the free plan.
<div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1774389400/ea9b6513-6e00-44fd-b1c2-da093401d915.webp" alt="Advanced Make Node with Dropdown" style="width: 100%;">
        <figcaption class="image-caption">
            Creating a new API key in Meshy AI
        </figcaption>
    </figure>
</div> 

1.  Visit [https://meshy.ai](https://meshy.ai) and create an account.
2.  Subscribe to a **Pro** plan or higher.
3.  Go to **Settings > API Keys** and generate a new key.
4.  In Unreal, paste it into the **Meshy API Key** field in Project Settings.

---

## Fal.ai (Covers 4 Providers)

**What it powers:** A single Fal.ai API key gives you access to four providers in the plugin:

| Provider in Plugin | AI Model | Type |
|---|---|---|
| Fal.ai - Hunyuan3D | Tencent Hunyuan3D v3.1 Pro (Text-to-3D) and v2.1 (Image-to-3D) | Open-source |
| Fal.ai - TripoSR | TripoSR (fast, basic quality, Image-to-3D only) | Open-source (MIT) |
| Fal.ai - Rodin | Hyper3D Rodin Gen-2 (high quality, PBR materials) | Proprietary |
| Fal.ai - Trellis 2 | Microsoft Trellis 2 (Image-to-3D with PBR materials) | Open-source |

**Free tier:** Small signup credit (typically $1–$10). No subscription needed — pure pay-per-use. After that you need to add buy some credits to use.


<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1774389953/eda4ba05-ce8c-48e7-9ada-7669e0b0aabb.webp" alt="Blueprint streaming example" style="width: 100%;">
        <figcaption class="image-caption">
        A typical Blueprint setup for handling a streaming chat response.
        </figcaption>
    </figure>
</div>


1.  Visit [https://fal.ai](https://fal.ai) and sign up.
2.  Go to **Dashboard > Keys** and generate a new API key.
3.  Paste it into the **Fal.ai API Key** field in Project Settings.

> **Note:** You do not need a separate Rodin API key. Rodin is accessed through Fal.ai's infrastructure, which is significantly cheaper than Rodin's direct Business plan ($120/mo).

---

## Google (Texture Generation)

**What it powers:** PBR texture map generation (base color, normal, roughness, metallic, full PBR sets) and reference image generation using Google Gemini 3.1 Flash.

**Free tier:** Rate-limited free access to text models, but image generation may require paid usage.

1.  Visit [https://aistudio.google.com/](https://aistudio.google.com/) and sign in with your Google account.
2.  Click **Get API Key** and generate one.
3.  Paste it into the **Google API Key** field in Project Settings.

---

## Key Storage & Security

All API keys are stored in a **non-portable, encrypted binary file** at:
```
YourProject/Saved/Config/GenAIModelGen/secureconfig_modelgen.bin
```

- Keys are XOR-encrypted before being written to disk — they are never stored in plain text `.ini` or config files.
- This file is automatically excluded from source control and cannot be used on a different machine.
- Keys entered in the Project Settings panel are written to this encrypted file immediately on save.

> **UNSAFE Build Option:** There is an option to include keys in packaged builds for private testing. This copies the encrypted key file into the build. **Do not enable this for any distributed build** — the encryption is obfuscation, not strong security.
