---
layout: documentation
title: Getting API Keys
permalink: /docs/genai-modelgenerator/getting-api-keys/
nav_order: 2
---

To generate 3D models and textures, you need an API key from at least one supported provider. Each provider has its own strengths — you can use one or all of them.

---

## Meshy AI

Meshy provides text-to-3D, image-to-3D, and retexturing capabilities.

1.  Visit [https://meshy.ai](https://meshy.ai) and create an account.
2.  Navigate to your dashboard and find the **API Keys** section.
3.  Generate a new API key and copy it.
4.  In Unreal, go to **Project Settings > Plugins > GenAI Model Generator** and paste it into the **Meshy API Key** field.

---

## Hyper3D Rodin

Rodin offers high-quality image-to-3D and text-to-3D with multiple quality tiers.

1.  Visit [https://developer.hyper3d.ai](https://developer.hyper3d.ai) and register.
2.  Access the developer portal and generate an API key.
3.  Copy the key and paste it into the **Rodin API Key** field in Project Settings.

---

## Tripo AI

Tripo AI provides fast text-to-3D and image-to-3D generation.

1.  Visit [https://platform.tripo3d.ai](https://platform.tripo3d.ai) and create an account.
2.  Navigate to your API settings and generate a key.
3.  Copy the key and paste it into the **Tripo AI API Key** field in Project Settings.

---

## fal.ai

fal.ai is an inference platform that provides access to multiple 3D generation models including Hunyuan3D, TripoSR, Rodin, and Trellis 2.

1.  Visit [https://fal.ai](https://fal.ai) and sign up.
2.  Go to your account settings and find the **API Keys** section.
3.  Generate a new key and paste it into the **fal.ai API Key** field in Project Settings.

---

## Google (Texture Generation)

Google's AI powers PBR texture generation via NanoBanana 2 / Gemini.

1.  Visit [https://aistudio.google.com/](https://aistudio.google.com/) and sign in with your Google account.
2.  Generate an API key from the AI Studio dashboard.
3.  Copy the key and paste it into the **Google API Key** field in Project Settings.

---

## Key Storage & Security

All API keys are stored in a **non-portable, encrypted file** at:
```
YourProject/Saved/Config/GenAIModelGen/secureconfig_modelgen.bin
```

This file is automatically excluded from source control and cannot be used on a different machine. Keys entered in the Project Settings panel are written to this encrypted file, not to any `.ini` or config file.
