---
layout: documentation
title: API Reference
permalink: /docs/genai-modelgenerator/api-reference/
nav_order: 4
---

This page provides a high-level overview of the core C++ classes, structs, and enums in the GenAI Model Generator plugin.

---

## Core Result Struct

All generation tasks return results through a common struct:

-   **`FGenModel3DResult`**
    -   `ModelBytes` — Raw file data (TArray<uint8>)
    -   `Format` — Output format (GLB, FBX, OBJ, USDZ, STL)
    -   `ModelUrl` — Download URL for the generated model
    -   `ThumbnailUrl` — Preview image URL
    -   `TaskId` — Provider's task identifier
    -   `Progress` — Generation progress (0-100)

---

## Generation Classes by Provider

### Meshy AI

-   **`UGenMeshyTextTo3D`** — Text-to-3D generation
    -   `RequestTextTo3D(Settings, OnComplete, OnProgress)`
-   **`UGenMeshyImageTo3D`** — Image-to-3D generation
    -   `RequestImageTo3D(Settings, OnComplete, OnProgress)`
-   **`UGenMeshyRetexture`** — Retexture existing models
    -   `RequestRetexture(Settings, OnComplete, OnProgress)`

### Hyper3D Rodin

-   **`UGenRodinImageTo3D`** — Image-to-3D with quality tiers
    -   `RequestImageTo3D(Settings, OnComplete, OnProgress)`

### Tripo AI

-   **`UGenTripoTextTo3D`** — Text-to-3D generation
    -   `RequestTextTo3D(Settings, OnComplete, OnProgress)`
-   **`UGenTripoImageTo3D`** — Image-to-3D generation
    -   `RequestImageTo3D(Settings, OnComplete, OnProgress)`

### fal.ai

-   **`UGenFalHunyuanImageTo3D`** — Image-to-3D via fal.ai inference
    -   `RequestImageTo3D(Settings, OnComplete)`
    -   Supports Hunyuan3D v2.1, TripoSR, Rodin, and Trellis 2 backends

### Google

-   **`UGenGoogleTextureGeneration`** — PBR texture generation
    -   `RequestTexture(Settings, OnComplete)`

---

## Settings Structs

Each provider has its own settings struct:

-   **`FGenMeshyTextTo3DSettings`** — Prompt, model version (v4/v5/v6), art style, symmetry
-   **`FGenMeshyImageTo3DSettings`** — Input image, model version
-   **`FGenMeshyRetextureSettings`** — Model URL/data, prompt, art style
-   **`FGenRodinImageTo3DSettings`** — Input image, quality tier, mesh quality, material type
-   **`FGenTripoTextTo3DSettings`** — Prompt, model version (v2.0/v2.5)
-   **`FGenTripoImageTo3DSettings`** — Input image, model version
-   **`FGenFalHunyuanImageTo3DSettings`** — Input image, inference steps, guidance scale
-   **`FGenGoogleTextureSettings`** — Prompt, texture map type, seamless, image size, aspect ratio

---

## Key Enums

-   **`EGenMeshyModelVersion`** — `V4`, `V5`, `V6`
-   **`EGenRodinQualityTier`** — `Regular`, `Sketch`, `Detail`, `Smooth`
-   **`EGenRodinMeshQuality`** — Controls triangle count (500 to 300K)
-   **`EGenRodinMaterialType`** — `PBR`, `Shaded`
-   **`EGenTripoModelVersion`** — `V2_0`, `V2_5`
-   **`EGenModelOutputFormat`** — `GLB`, `FBX`, `OBJ`, `USDZ`, `STL`
-   **`EGenMeshySymmetry`** — `Auto`, `On`, `Off`
-   **`EGenMeshyTopology`** — `Triangle`, `Quad`
-   **`EGenGoogleTextureMapType`** — `BaseColor`, `Normal`, `Roughness`, `Metallic`, `FullPBR`

---

## Plugin Settings

Access via **Project Settings > Plugins > GenAI Model Generator** or in C++ through `UGenModelSettings`:

-   **API Keys** — Individual fields for Meshy, Rodin, Tripo, fal.ai, and Google
-   **Per-Organization Endpoints** — Override default API endpoints (for proxies or custom servers)
-   **Poll Interval** — How often to check task status (1-30 seconds, default 3.0s)
-   **Extended Logging** — Log full request/response bodies
-   **Include Keys in Build** — Include API keys in packaged builds (unsafe, for private testing only)

---

## Provider Documentation

-   **Meshy AI:** [https://meshy.ai](https://meshy.ai)
-   **Hyper3D Rodin:** [https://developer.hyper3d.ai](https://developer.hyper3d.ai)
-   **Tripo AI:** [https://platform.tripo3d.ai](https://platform.tripo3d.ai)
-   **fal.ai:** [https://fal.ai](https://fal.ai)
-   **Google AI Studio:** [https://aistudio.google.com/](https://aistudio.google.com/)
