---
layout: documentation
title: Image Generation
permalink: /docs/genai-unreal/image-generation/
nav_order: 12
---

Integrate powerful AI image generation directly into your Unreal Engine projects. This feature allows you to create high-quality, unique visual assets from simple text prompts, opening up incredible possibilities for procedural content, rapid prototyping, and dynamic in-game experiences.

---

## Supported Models and Providers

The plugin gives you access to state-of-the-art image generation models from multiple providers.

### OpenAI

-   ✨ **GPT-4o (`gpt-image-1`):** The latest and most advanced model, responsible for the viral "Ghibli trend." It excels at creating artistic, coherent, and high-fidelity images with remarkable prompt adherence.
-   🎨 **DALL-E 3:** A powerful and reliable model offering excellent image quality and detail. A great all-rounder for a variety of styles.
-   ⚙️ **DALL-E 2:** A legacy model that is more cost-effective and supports generating multiple images in a single request, making it suitable for bulk generation or rapid iteration where speed is a priority.

### Google

-   **Gemini:** Provides powerful image generation capabilities.
-   **Imagen:** Known for its high-quality outputs, especially in artistic styles.

> **Note on Google Gemini:** The integration for Google's image generation models is included but has not been fully tested, as the service is currently unavailable for use in the UK and Europe. Functionality may vary.

---

## Common Use Cases

-   **Rapid Concept Art:** Instantly generate visual concepts for characters, environments, weapons, and props without leaving the editor.
-   **Dynamic In-Game Content:** Create unique paintings for a gallery, wanted posters with generated faces, or emblems for player guilds based on their names.
-   **Placeholder Assets:** Quickly generate temporary textures, icons, and sprites to keep development moving while waiting for final art assets.
-   **Player Customization:** Allow players to generate custom tattoos, clothing patterns, or avatar portraits from text descriptions.

---

## Blueprint Implementation

The Blueprint workflow makes image generation incredibly accessible. You can easily configure a prompt, select a model, and save the resulting image to disk or convert it into a texture.

<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1752499085/c338bba2-f214-4089-8131-b4609129d7ed.webp" alt="Blueprint Image Generation Example" style="width: 100%;">
        <figcaption class="image-caption">
        A simple Blueprint graph for generating an image and saving it as a file.
        </figcaption>
    </figure>
</div>

The key nodes in this process are:
1.  **Request OpenAI Image Generation:** The main latent node that sends your request. Use the `Make Gen OpenAI Image Generation Settings` node to configure the prompt, model, resolution, and quality.
2.  **Save Array to File:** A utility node to save the raw image data (which is returned as a byte array) to a `.png` file in a directory of your choice.
3.  **Load Texture 2D from File:** (Optional) After saving, you can immediately load the image back into the engine as a `UTexture2D` asset, ready to be used in a material or displayed in UMG.

---

## C++ Implementation

For more control, you can call the image generation functions directly from your C++ code.

```cpp
#include "Models/OpenAI/GenOAIImageGeneration.h"
#include "Data/OpenAI/GenOAIImageStructs.h"
#include "Misc/FileHelper.h"
#include "Misc/Paths.h"

void AMyImageGenerator::GenerateImageFromPrompt(const FString& PromptText)
{
    UE_LOG(LogTemp, Log, TEXT("Requesting image for prompt: '%s'"), *PromptText);

    // 1. Configure the image generation settings
    FGenOAIImageSettings ImageSettings;
    ImageSettings.Prompt = PromptText;
    ImageSettings.Model = EGenOAIImageModel::GPT_Image_1; // Use the latest model
    ImageSettings.Size = EGenAIImageSize::Size1024x1024;
    ImageSettings.Quality = EGenAIImageQuality::HD; // Request HD quality
    ImageSettings.NumImages = 1;

    // 2. Send the request and handle the response in a Lambda
    UGenOAIImageGeneration::SendImageGenerationRequest(ImageSettings,
        FOnImageGenerationCompletionResponse::CreateLambda([this](const TArray<uint8>& ImageBytes, const FString& ErrorMessage, bool bSuccess)
        {
            if (bSuccess && ImageBytes.Num() > 0)
            {
                UE_LOG(LogTemp, Log, TEXT("Image generated! Saving to disk..."));

                // 3. Define a file path and save the image data
                const FString FilePath = FPaths::ProjectSavedDir() / TEXT("AI") / FString::Printf(TEXT("GeneratedImage_%s.png"), *FDateTime::Now().ToString());
                if (FFileHelper::SaveArrayToFile(ImageBytes, *FilePath))
                {
                    UE_LOG(LogTemp, Log, TEXT("Image saved to: %s"), *FilePath);
                    // You can now load this file as a texture if needed
                }
                else
                {
                    UE_LOG(LogTemp, Error, TEXT("Failed to save image to disk."));
                }
            }
            else
            {
                UE_LOG(LogTemp, Error, TEXT("Image generation failed: %s"), *ErrorMessage);
            }
        })
    );
}

```