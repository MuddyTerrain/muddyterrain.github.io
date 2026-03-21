---
layout: documentation
title: Getting Started
permalink: /docs/genai-modelgenerator/getting-started/
nav_order: 3
---

This guide walks you through installing the plugin, configuring it, and generating your first 3D model.

---

## Installation

1.  Install the plugin from the Fab marketplace to your engine version.
2.  Open your Unreal project and go to **Edit > Plugins**.
3.  Search for **GenAI Model Generator** and enable it.
4.  Restart the editor if prompted.

#### C++ Projects

Add the module dependency to your project's `.Build.cs` file:

```csharp
PublicDependencyModuleNames.AddRange(new string[] { "GenAIModelGen" });
```

---

## Configuration

1.  Go to **Project Settings > Plugins > GenAI Model Generator**.
2.  Enter your API key(s) for the providers you want to use (see [Getting API Keys](/docs/genai-modelgenerator/getting-api-keys/)).
3.  Optionally adjust the **Poll Interval** (default: 3 seconds) — this controls how frequently the plugin checks for generation task completion.
4.  Enable **Extended Logging** if you want to see full request/response JSON in the output log (large fields like base64 images are automatically truncated).

> **Compatibility:** Supports **Unreal Engine 5.1 through 5.7** on Windows, macOS, and Linux.

---

## Editor Widget — Your Main Tool

The plugin includes a full Slate editor widget for generating models without writing code. Open it from the toolbar button or **Window > AI Model Generator**.

### Widget Layout

1. **Provider & Mode** — Select your AI provider and generation mode. Modes update dynamically per provider (e.g., TripoSR only shows Image-to-3D, Meshy shows all four modes).

2. **Input** — Prompt text field and/or reference image picker. The hint text changes based on the selected mode.

3. **Contextual Help** — Below the inputs, shows the underlying AI model, approximate cost per generation, API key status, and workflow tips.

4. **Advanced Settings** — Provider-specific tuning (only shown for providers that support it):
   - **Meshy AI:** Art style (realistic, cartoon, sculpture, pbr), target polycount (100–300K), enable PBR
   - **Fal.ai - Hunyuan3D:** Inference steps (1–100), guidance scale (1–20), face count (40K–1.5M), geometry-only mode, enable PBR
   - **Google Texture Gen:** Texture map type selector (base color, normal, roughness, metallic, full PBR)

5. **Output** — Import destination path with browse button. Generated assets are imported directly as UAssets.

6. **Generate / Cancel / Reset** — Generate button with live progress bar and elapsed timer. Cancel stops in-flight tasks. Reset clears all fields.

7. **Result Preview** — Shows a thumbnail of the last generated result with an "Open in Editor" button.

---

## Generation Workflows

### Text-to-3D

Available with: **Meshy AI**, **Tripo AI**, **Fal.ai - Hunyuan3D**, **Fal.ai - Rodin**

1. Select a provider that supports Text-to-3D.
2. Type a prompt describing the object (e.g., "a medieval sword with ornate handle").
3. Click **Generate**.
4. The model is downloaded and imported into your Content Browser.

**Meshy AI** uses a two-step process (handled automatically):
- **Preview** (~20 credits) — generates the 3D mesh geometry
- **Refine** (~10 credits) — applies textures and materials

Progress is scaled: 0–50% = preview, 50–100% = refine. If **Enable PBR** is checked, the refine step also generates metallic, roughness, and normal maps.

### Image-to-3D

Available with: **All providers** (every 3D provider supports this mode)

1. Select any 3D provider and **Image-to-3D** mode.
2. Attach a reference image using the asset picker.
3. Click **Generate**.

Works best with clean, well-lit images of a single object on a plain background.

### Reference Image + Image-to-3D (Recommended Pipeline)

For the best results, generate a clean reference image first:

1. Select **Google (Texture Gen)** > **Reference Image** mode.
2. Describe the object you want (e.g., "a cartoon robot with big eyes").
3. Generate — produces a clean concept image optimized for 3D generation.
4. Switch to any 3D provider > **Image-to-3D** mode.
5. Attach the generated reference image.
6. Generate the 3D model.

### Auto-Rigging (Meshy AI Only)

Automatically rigs textured humanoid models with a skeleton and generates walking + running animations.

**Seamless workflow (recommended):**
1. Generate a humanoid model with **Meshy AI** > **Text-to-3D** or **Image-to-3D**.
2. Switch to **Auto-Rig** mode — the plugin automatically uses the last generated Meshy task ID.
3. Click **Generate** — the rigged model is downloaded and imported with skeleton.

**Manual workflow:**
1. Select **Meshy AI** > **Auto-Rig**.
2. Attach a textured humanoid GLB model via the mesh picker.
3. Click **Generate**.

**Constraints:** Humanoid models only, must be textured, max 300K faces when using a Meshy task ID. Output includes rigged GLB/FBX with skeleton, plus walking and running animation URLs.

### Retexture (Meshy AI Only)

Apply new AI-generated textures to an existing 3D model:

1. Select **Meshy AI** > **Retexture** mode.
2. Attach an existing 3D model via the mesh picker.
3. Describe the desired texture style in the prompt.
4. Generate.

### Texture Generation (Google Only)

Generate seamless PBR texture maps:

1. Select **Google (Texture Gen)** > **Texture Generation** mode.
2. Describe the texture (e.g., "weathered stone wall with moss").
3. In **Advanced Settings**, choose the map type: Base Color, Normal, Roughness, Metallic, or Full PBR Set.
4. Optionally attach a reference image for style guidance.
5. Generate — the texture is saved and imported as a UTexture2D.

---

## Provider Comparison — Which One Should I Use?

| Goal | Recommended Provider | Why |
|---|---|---|
| **Best overall quality** | Meshy AI (Meshy-6) | Latest proprietary model, two-step refine process, best textures |
| **Cheapest prototyping** | Fal.ai - TripoSR | $0.07/gen, fast (<1s), no subscription |
| **Best free tier** | Tripo AI | 300 free credits/month (~24 generations) |
| **Highest quality open-source** | Fal.ai - Hunyuan3D v3.1 Pro | Tencent's best text-to-3D, $0.48/gen |
| **Best PBR materials** | Fal.ai - Trellis 2 | Microsoft model, full PBR set included |
| **High quality, no subscription** | Fal.ai - Rodin Gen-2 | Hyper3D's Gen-2 model, PBR, $0.40/gen |
| **Rigging & animation** | Meshy AI (Auto-Rig) | Only provider with auto-rigging |
| **Texture maps** | Google (Texture Gen) | ~$0.04/image, all PBR map types |

---

## Your First Generation (C++)

### Text-to-3D with Meshy

```cpp
#include "Models/Meshy/GenMeshyTextTo3D.h"
#include "Data/Meshy/GenMeshyStructs.h"

void AMyActor::GenerateModel()
{
    FGenMeshyTextTo3DSettings Settings;
    Settings.Prompt = TEXT("A medieval sword with ornate handle");
    Settings.ArtStyle = TEXT("realistic");
    Settings.TargetPolycount = 30000;
    Settings.bAutoRefine = true;  // Auto-chains preview → refine

    UGenMeshyTextTo3D* Action = UGenMeshyTextTo3D::RequestTextTo3D(this, Settings);
    Action->OnComplete.AddDynamic(this, &AMyActor::OnModelComplete);
    Action->OnProgress.AddDynamic(this, &AMyActor::OnModelProgress);
    Action->Activate();
}
```

### Image-to-3D with Fal.ai

```cpp
#include "Models/FalAI/GenFalImageTo3D.h"
#include "Data/FalAI/GenFalStructs.h"

void AMyActor::GenerateFromImage()
{
    FGenFalImageTo3DSettings Settings;
    Settings.FalModel = EGenFalModel::Hunyuan3D;  // or TripoSR, Rodin, Trellis2
    Settings.ImageBytes = MyImageBytes;  // TArray<uint8> of PNG/JPG data
    Settings.NumInferenceSteps = 30;     // Hunyuan3D only
    Settings.GuidanceScale = 5.5f;       // Hunyuan3D only

    UGenFalImageTo3D* Action = UGenFalImageTo3D::RequestImageTo3D(this, Settings);
    Action->OnComplete.AddDynamic(this, &AMyActor::OnModelComplete);
    Action->Activate();
}
```

### PBR Texture Generation with Google

```cpp
#include "Models/Google/GenGoogleTextureGeneration.h"
#include "Data/Google/GenGoogleTextureStructs.h"

void AMyActor::GenerateTexture()
{
    FGenGoogleTextureSettings Settings;
    Settings.Prompt = TEXT("Weathered red brick wall");
    Settings.TextureMapType = EGenTextureMapType::FullPBR;
    Settings.bSeamless = true;
    Settings.ImageSize = TEXT("1K");

    UGenGoogleTextureGeneration* Action = UGenGoogleTextureGeneration::RequestTexture(this, Settings);
    Action->OnComplete.AddDynamic(this, &AMyActor::OnTextureComplete);
    Action->Activate();
}
```

---

## Output Formats

Generated 3D models can be imported in the following formats:

| Format | Description | Best For |
|--------|-------------|----------|
| **GLB** | Binary glTF — compact, includes textures | Default for most providers |
| **FBX** | Autodesk FBX — preserves materials and animations | Rigged models, animation workflows |
| **OBJ** | Wavefront OBJ — simple, universal | Basic geometry |
| **USDZ** | Universal Scene Description | Apple ecosystem, AR |
| **STL** | Stereolithography — geometry only | 3D printing |

All 3D models are imported into the Content Browser as `UStaticMesh` assets via Unreal's Interchange system, and automatically opened in the static mesh editor for preview.
