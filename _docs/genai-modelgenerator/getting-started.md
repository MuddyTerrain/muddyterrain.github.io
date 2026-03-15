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
4.  Enable **Extended Logging** if you want to see full request/response details in the output log.

> **Compatibility:** The plugin supports **Unreal Engine 5.1+** and works on Windows, macOS, and Linux.

---

## Your First Generation (Blueprint)

### Text-to-3D with Meshy

1.  Create a new Blueprint Actor.
2.  In the Event Graph, right-click and search for **"Request Text To 3D"**.
3.  Select the Meshy version (e.g., `Request Meshy Text To 3D`).
4.  Create a **"Make..."** node for the settings struct and fill in:
    -   **Prompt:** A description of the model (e.g., "A medieval sword with ornate handle")
    -   **Model Version:** Select from the dropdown (v4, v5, or v6)
5.  Connect the **OnComplete** pin to handle the result. The `FGenModel3DResult` struct contains:
    -   `ModelBytes` — Raw file data you can save or import
    -   `ModelUrl` — Download URL for the generated model
    -   `ThumbnailUrl` — Preview image URL
    -   `Progress` — Generation progress (0-100)
6.  Connect the **OnProgress** pin to update a loading bar or status text.

### Image-to-3D with Rodin

1.  Search for **"Request Rodin Image To 3D"**.
2.  Configure the settings with:
    -   **Input Image** — A texture or Base64 string of the reference image
    -   **Quality Tier** — Regular, Sketch, Detail, or Smooth
    -   **Mesh Quality** — Controls polygon count (500 to 300K triangles)
3.  The result follows the same `FGenModel3DResult` pattern.

### PBR Texture Generation with Google

1.  Search for **"Request Google Texture"**.
2.  Configure:
    -   **Prompt** — A description (e.g., "Weathered red brick wall")
    -   **Texture Map Type** — BaseColor, Normal, Roughness, Metallic, or FullPBR
    -   **bSeamless** — Enable for tileable textures
    -   **Image Size** — Resolution (e.g., "1024")
3.  The result provides the generated texture data.

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
    Settings.ModelVersion = EGenMeshyModelVersion::V6;

    TWeakObjectPtr<AMyActor> WeakThis(this);

    UGenMeshyTextTo3D::RequestTextTo3D(Settings,
        FOnGenModel3DComplete::CreateLambda(
            [WeakThis](const FGenModel3DResult& Result, const FString& Error, bool bSuccess)
        {
            if (!WeakThis.IsValid()) return;

            if (bSuccess)
            {
                UE_LOG(LogTemp, Log, TEXT("Model generated! URL: %s"), *Result.ModelUrl);
                // Result.ModelBytes contains the raw file data
            }
            else
            {
                UE_LOG(LogTemp, Error, TEXT("Generation failed: %s"), *Error);
            }
        }),
        FOnGenModel3DProgress::CreateLambda(
            [](int32 Progress)
        {
            UE_LOG(LogTemp, Log, TEXT("Progress: %d%%"), Progress);
        })
    );
}
```

### Image-to-3D with fal.ai

```cpp
#include "Models/Fal/GenFalHunyuanImageTo3D.h"
#include "Data/Fal/GenFalStructs.h"

void AMyActor::GenerateFromImage(UTexture2D* ReferenceImage)
{
    FGenFalHunyuanImageTo3DSettings Settings;
    Settings.InputImage = ReferenceImage;
    Settings.InferenceSteps = 50;
    Settings.GuidanceScale = 7.5f;

    TWeakObjectPtr<AMyActor> WeakThis(this);

    UGenFalHunyuanImageTo3D::RequestImageTo3D(Settings,
        FOnGenModel3DComplete::CreateLambda(
            [WeakThis](const FGenModel3DResult& Result, const FString& Error, bool bSuccess)
        {
            if (!WeakThis.IsValid()) return;

            if (bSuccess)
            {
                UE_LOG(LogTemp, Log, TEXT("3D model from image generated!"));
            }
        })
    );
}
```

---

## Editor Tool

The plugin includes a built-in editor widget for generating models without writing code:

1.  Open the tool from the editor menu or toolbar.
2.  Select a provider and generation type (text-to-3D, image-to-3D, etc.).
3.  Fill in the prompt or select a reference image.
4.  Click **Generate** and watch the progress.
5.  Once complete, import the generated asset directly into your Content Browser.

---

## Output Formats

Generated models can be exported in the following formats:

| Format | Description |
|--------|-------------|
| GLB | Binary glTF — compact, widely supported |
| FBX | Autodesk FBX — good for animation workflows |
| OBJ | Wavefront OBJ — simple, universal |
| USDZ | Universal Scene Description — Apple ecosystem |
| STL | Stereolithography — 3D printing |

## Mesh Control

Depending on the provider, you can control:

-   **Topology:** Triangle or Quad meshes
-   **Polygon Count:** From 100 to 300,000 triangles
-   **Symmetry:** Auto, On, or Off (Meshy)
-   **Quality Tier:** Regular, Sketch, Detail, Smooth (Rodin)
