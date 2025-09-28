---
layout: documentation
title: Image Generation & Editing
permalink: /docs/genai-unreal/image-generation/
nav_order: 13
---

Integrate powerful AI image generation and editing directly into your Unreal Engine projects. This feature allows you to create and modify high-quality visual assets from simple text prompts, opening up incredible possibilities for procedural content, rapid prototyping, and dynamic in-game experiences.

---

## 1. Image Generation

Image generation allows you to create entirely new images from a text prompt.

-   **Supported Providers:** OpenAI (`DALL-E 2`, `DALL-E 3`, `gpt-image-1`), Google (`Gemini`, `Imagen`).
-   **Use Cases:** Generating concept art, dynamic in-game textures, player avatars, or placeholder assets.
-   **Find it in the Example Project:** The new example project features a full UMG widget to test image generation.

---

## 2. Image Editing (New!)

Image Editing is a powerful new feature that allows you to modify an existing image using an AI model. Instead of creating from scratch, you provide a source image and a text prompt describing the desired change.


<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1756928896/b03fb6ad-2afb-4683-bb67-12fe9db23bd4.webp" alt="Conversation Example" style="width: 100%;">
        <figcaption class="image-caption">
           Image Editing Blueprint Example
        </figcaption>
    </figure>
</div>

### How It Works

The process typically involves providing the source image data along with a prompt. The AI then intelligently alters the image to match the prompt. This is perfect for iterative design and dynamic, in-game visual effects.

### Common Use Cases for Image Editing
-   **Iterative Design:** Take a generated concept art image and refine it with prompts like "make the armor silver," "change the art style to anime," or "add a forest in the background."
-   **Dynamic Environments:** Change the appearance of in-game objects, such as making a statue look weathered over time or adding player-generated graffiti to a wall.
-   **Player Customization:** Allow players to upload a portrait and have it stylized to fit the game's art direction, or let them add custom decals to their vehicles.

<div style="padding: 10px 15px; background-color: #e6f7ff; border-left: 4px solid #07a2ff; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #1f6a9c;">C++ Examples Coming Soon</p>
  <p style="margin: 5px 0 0 0; color: #1f6a9c;">The Blueprint nodes and C++ functions for Image Editing are available in the latest plugin version. This section will be updated shortly with detailed code samples and a walkthrough from the example project.</p>
</div>

---

## C++ Implementation (Image Generation)

You can call the image generation functions directly from C++ for more control.

```cpp
#include "Models/OpenAI/GenOAIImageGeneration.h"
#include "Data/OpenAI/GenOAIImageStructs.h"
#include "Misc/FileHelper.h"
#include "Misc/Paths.h"

void AMyImageGenerator::GenerateImageFromPrompt(const FString& PromptText)
{
    // 1. Configure the image generation settings
    FGenOAIImageSettings ImageSettings;
    ImageSettings.Prompt = PromptText;
    ImageSettings.Model = EGenOAIImageModel::GPT_Image_1;
    ImageSettings.Size = EGenAIImageSize::Size1024x1024;

    // 2. Send the request and handle the response in a Lambda
    UGenOAIImageGeneration::SendImageGenerationRequest(ImageSettings,
        FOnImageGenerationCompletionResponse::CreateLambda([this](const TArray<uint8>& ImageBytes, const FString& ErrorMessage, bool bSuccess)
        {
            if (bSuccess && ImageBytes.Num() > 0)
            {
                const FString FilePath = FPaths::ProjectSavedDir() / TEXT("AI") / FString::Printf(TEXT("GeneratedImage_%s.png"), *FDateTime::Now().ToString());
                FFileHelper::SaveArrayToFile(ImageBytes, *FilePath);
            }
        })
    );
}
```