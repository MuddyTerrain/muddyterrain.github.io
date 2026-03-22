---
layout: documentation
title: API Reference
permalink: /docs/genai-modelgenerator/api-reference/
nav_order: 4
---

Complete reference for the GenAI Model Generator plugin's C++ classes, structs, and enums. All classes support both C++ `TFunction` callbacks and Blueprint `DYNAMIC_MULTICAST_DELEGATE` for full Blueprint compatibility.

---

## Core Result Structs

### FGenModel3DResult

Returned by all 3D generation tasks (Text-to-3D, Image-to-3D, Retexture).

| Field | Type | Description |
|---|---|---|
| `ModelBytes` | `TArray<uint8>` | Raw downloaded model file data |
| `Format` | `EGenModel3DFormat` | Output format (GLB, FBX, OBJ, USDZ, STL) |
| `ModelUrl` | `FString` | Download URL for the generated model |
| `ThumbnailUrl` | `FString` | Preview image URL (Meshy providers) |
| `TaskId` | `FString` | Provider's task identifier |
| `Progress` | `int32` | Generation progress (0–100) |

### FGenMeshyRiggingResult

Returned by Meshy auto-rigging tasks.

| Field | Type | Description |
|---|---|---|
| `TaskId` | `FString` | Rigging task identifier |
| `ModelBytes` | `TArray<uint8>` | Downloaded rigged model file data |
| `Format` | `EGenModel3DFormat` | Output format (GLB or FBX) |
| `RiggedGlbUrl` | `FString` | Rigged character GLB download URL |
| `RiggedFbxUrl` | `FString` | Rigged character FBX download URL |
| `WalkingGlbUrl` | `FString` | Walking animation GLB URL |
| `RunningGlbUrl` | `FString` | Running animation GLB URL |
| `Progress` | `int32` | Progress (0–100) |

### FGenTextureResult

Returned by Google texture generation tasks.

| Field | Type | Description |
|---|---|---|
| `TextureBytes` | `TArray<uint8>` | Generated texture image data (PNG) |
| `MapType` | `EGenTextureMapType` | Which texture map type this result represents |

---

## Generation Classes by Provider

Every generation class extends `UCancellableAsyncAction` and exposes two usage patterns:
- **C++ direct call:** `SendXxxRequest(Settings, Callback)` — returns the HTTP request handle
- **Blueprint / async node:** `RequestXxx(WorldContext, Settings)` — returns the async action, call `Activate()` to start, bind `OnComplete` and `OnProgress` delegates

### Meshy AI

| Class | Modes | Settings Struct |
|---|---|---|
| **`UGenMeshyTextTo3D`** | Text-to-3D (auto-chains preview → refine) | `FGenMeshyTextTo3DSettings` |
| **`UGenMeshyImageTo3D`** | Image-to-3D | `FGenMeshyImageTo3DSettings` |
| **`UGenMeshyRetexture`** | Retexture existing models | `FGenMeshyRetextureSettings` |
| **`UGenMeshyRigging`** | Auto-rig humanoid models | `FGenMeshyRiggingSettings` |
| **`UGenMeshyRemesh`** | Retopologize and optimize mesh | `FGenMeshyRemeshSettings` |

**Meshy-specific features:**
- `UGenMeshyTextTo3D` automatically chains Preview → Refine when `bAutoRefine = true` (default). Progress is scaled: 0–50% = preview, 50–100% = refine.
- `UGenMeshyRigging` accepts either an `InputTaskId` (from a previous Meshy generation) or raw `ModelBytes` / `ModelUrl` for external models.

### Tripo AI

| Class | Modes | Settings Struct |
|---|---|---|
| **`UGenTripoTextTo3D`** | Text-to-3D | `FGenTripoTextTo3DSettings` |
| **`UGenTripoImageTo3D`** | Image-to-3D | `FGenTripoImageTo3DSettings` |

Uses Tripo's proprietary v3.1 model. Separate API key from Fal.ai's TripoSR.

### Fal.ai (All Models)

| Class | Modes | Settings Struct |
|---|---|---|
| **`UGenFalImageTo3D`** | Text-to-3D, Image-to-3D (routes to selected model) | `FGenFalImageTo3DSettings` |

A single class handles all four Fal.ai models. Set `FalModel` in the settings to choose:

| `EGenFalModel` Value | AI Model | Supported Modes |
|---|---|---|
| `Hunyuan3D` | Tencent Hunyuan3D v2.1 | Image-to-3D |
| `Hunyuan3D_V3` | Tencent Hunyuan3D v3.1 Pro | Text-to-3D |
| `TripoSR` | TripoSR (MIT, open-source) | Image-to-3D only |
| `Rodin` | Hyper3D Rodin Gen-2 | Text-to-3D, Image-to-3D |
| `Trellis2` | Microsoft Trellis 2 | Image-to-3D only |

**Model-specific parameters:** Only Hunyuan3D models use `NumInferenceSteps`, `GuidanceScale`, `GenerateType`, `bEnablePBR`, and `FaceCount`. These parameters are ignored for TripoSR, Rodin, and Trellis 2.

### Hyper3D Rodin (Direct API)

| Class | Modes | Settings Struct |
|---|---|---|
| **`UGenRodinImageTo3D`** | Text-to-3D, Image-to-3D | `FGenRodinImageTo3DSettings` |

Direct integration with Rodin's own API. Requires a separate Rodin API key and a Business-tier subscription ($120/mo). **For most users, Fal.ai - Rodin is recommended instead** — same Gen-2 model, no subscription, $0.40/gen.

### Google (Texture Generation)

| Class | Modes | Settings Struct |
|---|---|---|
| **`UGenGoogleTextureGeneration`** | Texture Generation, Reference Image | `FGenGoogleTextureSettings` |

Uses Google Gemini 3.1 Flash for AI image generation. Set `TextureMapType` to control output:
- `BaseColor`, `Normal`, `Roughness`, `Metallic` — individual PBR maps
- `FullPBR` — generates a base color optimized for PBR workflows
- `ReferenceImage` — generates concept art for feeding into Image-to-3D

---

## Settings Structs Detail

### FGenMeshyTextTo3DSettings

| Field | Type | Default | Description |
|---|---|---|---|
| `Prompt` | `FString` | — | Text prompt (max 600 chars) |
| `NegativePrompt` | `FString` | — | What to avoid |
| `ArtStyle` | `FString` | `"realistic"` | Art style (realistic, cartoon, sculpture, pbr) |
| `Topology` | `EGenModelTopology` | `Triangle` | Triangle or Quad mesh |
| `TargetPolycount` | `int32` | `30000` | Target polygons (100–300,000) |
| `Symmetry` | `EGenMeshySymmetry` | `Auto` | Auto, On, or Off |
| `bAutoRefine` | `bool` | `true` | Auto-chain preview → refine |
| `bEnablePBR` | `bool` | `false` | Generate PBR maps during refine |
| `TexturePrompt` | `FString` | — | Additional prompt for texturing |

### FGenMeshyImageTo3DSettings

| Field | Type | Default | Description |
|---|---|---|---|
| `ImageUrl` | `FString` | — | URL to input image |
| `ImageBytes` | `TArray<uint8>` | — | Raw image bytes (alternative) |
| `Topology` | `EGenModelTopology` | `Triangle` | Triangle or Quad |
| `TargetPolycount` | `int32` | `30000` | Target polygons (100–300,000) |
| `Symmetry` | `EGenMeshySymmetry` | `Auto` | Symmetry mode |
| `bEnablePBR` | `bool` | `false` | Generate PBR maps |
| `TexturePrompt` | `FString` | — | Texture guidance prompt |

### FGenMeshyRiggingSettings

| Field | Type | Default | Description |
|---|---|---|---|
| `InputTaskId` | `FString` | — | Meshy task ID (takes precedence, max 300K faces) |
| `ModelUrl` | `FString` | — | URL to GLB model (if no task ID) |
| `ModelBytes` | `TArray<uint8>` | — | Raw model bytes (base64-encoded for upload) |
| `HeightMeters` | `float` | `1.7` | Character height in meters |

### FGenMeshyRetextureSettings

| Field | Type | Default | Description |
|---|---|---|---|
| `ModelUrl` | `FString` | — | URL to model to retexture |
| `ModelBytes` | `TArray<uint8>` | — | Raw model bytes (alternative) |
| `Prompt` | `FString` | — | Desired texture description |
| `NegativePrompt` | `FString` | — | What to avoid |
| `ArtStyle` | `FString` | `"realistic"` | Art style |
| `TextureResolution` | `int32` | `2048` | Texture resolution (1024–4096) |

### FGenMeshyRemeshSettings

| Field | Type | Default | Description |
|---|---|---|---|
| `InputTaskId` | `FString` | — | Meshy task ID (from a previous generation) |
| `ModelUrl` | `FString` | — | URL to model to remesh (if no task ID) |
| `ModelBytes` | `TArray<uint8>` | — | Raw model bytes (alternative) |
| `TargetPolycount` | `int32` | `30000` | Desired face count for output mesh |
| `Topology` | `EGenModelTopology` | `Triangle` | Triangle or Quad output |
| `bAutoSize` | `bool` | `true` | Automatically scale model to standard size |
| `ResizeHeight` | `float` | `1.0` | Manual height override when auto-size disabled |

### FGenFalImageTo3DSettings

| Field | Type | Default | Description |
|---|---|---|---|
| `FalModel` | `EGenFalModel` | `Hunyuan3D` | Which Fal.ai model to use |
| `ImageUrl` | `FString` | — | URL to input image |
| `ImageBytes` | `TArray<uint8>` | — | Raw image bytes (alternative) |
| `Prompt` | `FString` | — | Text prompt |
| `NumInferenceSteps` | `int32` | `30` | Denoising steps (Hunyuan only, 1–100) |
| `GuidanceScale` | `float` | `5.5` | Prompt adherence (Hunyuan only, 1–20) |
| `GenerateType` | `FString` | `"Normal"` | "Normal" (textured) or "Geometry" (Hunyuan only) |
| `bEnablePBR` | `bool` | `false` | PBR materials (Hunyuan only) |
| `FaceCount` | `int32` | `500000` | Target faces (Hunyuan only, 40K–1.5M) |
| `OutputFormat` | `EGenModel3DFormat` | `GLB` | Output format |

### FGenTripoTextTo3DSettings / FGenTripoImageTo3DSettings

| Field | Type | Default | Description |
|---|---|---|---|
| `Prompt` | `FString` | — | Text prompt (Text-to-3D only) |
| `NegativePrompt` | `FString` | — | What to avoid (Text-to-3D only) |
| `ImageUrl` | `FString` | — | Input image URL (Image-to-3D only) |
| `ImageBytes` | `TArray<uint8>` | — | Raw image bytes (Image-to-3D only) |
| `OutputFormat` | `EGenModel3DFormat` | `GLB` | Output format |

### FGenGoogleTextureSettings

| Field | Type | Default | Description |
|---|---|---|---|
| `Prompt` | `FString` | — | Texture description |
| `ReferenceImageBytes` | `TArray<uint8>` | — | Reference image for style transfer |
| `MimeType` | `FString` | `"image/png"` | MIME type of reference image |
| `TextureMapType` | `EGenTextureMapType` | `BaseColor` | Map type to generate |
| `bSeamless` | `bool` | `true` | Generate tileable texture |
| `ImageSize` | `FString` | `"1K"` | Output resolution |
| `AspectRatio` | `FString` | `"1:1"` | Output aspect ratio |

---

## Key Enums

| Enum | Values | Used By |
|---|---|---|
| `EGenModel3DFormat` | `GLB`, `FBX`, `OBJ`, `USDZ`, `STL` | All 3D providers |
| `EGenModelTopology` | `Triangle`, `Quad` | Meshy |
| `EGenFalModel` | `Hunyuan3D`, `Hunyuan3D_V3`, `TripoSR`, `Rodin`, `Trellis2` | Fal.ai |
| `EGenMeshyAIModel` | `Meshy6`, `Meshy5`, `Meshy4` | Meshy |
| `EGenMeshySymmetry` | `Auto`, `On`, `Off` | Meshy |
| `EGenTripoModelVersion` | `V3_1`, `V2_5`, `V2_0` | Tripo AI |
| `EGenRodinConditionType` | `Image`, `Text` | Rodin (direct) |
| `EGenRodinTier` | `Regular`, `Sketch`, `Detail`, `Smooth` | Rodin (direct) |
| `EGenRodinMeshQuality` | `Low` (500 tri), `Medium` (10K), `High` (50K), `Ultra` (300K) | Rodin (direct) |
| `EGenRodinMaterial` | `PBR`, `Shaded` | Rodin (direct) |
| `EGenTextureMapType` | `BaseColor`, `Normal`, `Roughness`, `Metallic`, `FullPBR`, `ReferenceImage` | Google |

---

## Plugin Settings

Access via **Project Settings > Plugins > GenAI Model Generator** or `GetDefault<UGenModelSettings>()` in C++:

| Setting | Type | Default | Description |
|---|---|---|---|
| **Meshy API Key** | `FString` | — | API key for Meshy AI |
| **Tripo AI API Key** | `FString` | — | API key for Tripo AI |
| **Fal.ai API Key** | `FString` | — | Shared key for Hunyuan3D, TripoSR, Rodin, Trellis 2 |
| **Google API Key** | `FString` | — | API key for Google Gemini |
| **Per-Organization Endpoints** | `TMap<EGenModelOrgs, FString>` | — | Override base API URLs (for proxies) |
| **Poll Interval** | `float` | `6.0` | Task status check interval (1–30 seconds) |
| **Extended Logging** | `bool` | `false` | Log full request/response JSON |
| **Include Keys In Build (UNSAFE)** | `bool` | `false` | Include keys in packaged builds |

---

## Provider Documentation

-   **Meshy AI:** [docs.meshy.ai](https://docs.meshy.ai)
-   **Tripo AI:** [platform.tripo3d.ai](https://platform.tripo3d.ai)
-   **Fal.ai:** [docs.fal.ai](https://docs.fal.ai)
-   **Hyper3D Rodin:** [developer.hyper3d.ai](https://developer.hyper3d.ai)
-   **Google AI Studio:** [aistudio.google.com](https://aistudio.google.com/)
