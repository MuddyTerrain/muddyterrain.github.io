---
layout: documentation
title: Image Generation
permalink: /docs/genai-unreal/image-generation/
nav_order: 12
---

## Use Cases

- **Concept Art**: Generate artwork for characters, environments, and objects
- **Procedural Content**: Create unique textures and images dynamically
- **Player Customization**: Generate custom avatars or items based on descriptions
- **Marketing Materials**: Create promotional images for your game
- **Placeholder Assets**: Generate temporary art during development

## Models and Capabilities

- **DALL-E 3**: High-quality, detailed images with excellent prompt following
- **DALL-E 2**: Fast generation with good quality for most use cases
- **Custom Models**: Support for other image generation APIs

## Blueprint Implementation

Blueprints make image generation incredibly accessible. You can easily configure a prompt, select your model, and save the resulting image to disk.

<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1752096704/ed6e165c-12f7-4cce-9cc8-46a11745921d.webp" alt="Blueprint Image Generation Example" style="width: 100%;">
        <figcaption class="image-caption">
        A simple Blueprint graph for generating an image and saving it as a file.
        </figcaption>
    </figure>
</div>

The workflow is simple:
1. **Request OpenAI Image Generation:** This is the main node that sends your request to the API. Use `Make Gen OpenAI Image Generation Settings` to configure it.
2. **Save Array to File:** A utility node to save the raw image data (returned as a byte array) to a `.png` file.
3. **Load Texture 2D from File:** (Optional) After saving, you can immediately load the image back into the engine as a `UTexture2D` to display it on a material.

## C++ Implementation

```cpp
void AMyActor::GenerateImage(const FString& Prompt)
{
    FGenOAIImageSettings ImageSettings;
    ImageSettings.Prompt = Prompt;
    ImageSettings.Model = EOpenAIImageModel::DALL_E_3;
    ImageSettings.Size = EOpenAIImageSize::Size_1024x1024;
    ImageSettings.Quality = EOpenAIImageQuality::HD;
    ImageSettings.Style = EOpenAIImageStyle::Vivid;
    ImageSettings.NumImages = 1;
    
    TWeakObjectPtr<AMyActor> WeakThis(this);
    
    UGenOAIImageGeneration::SendImageGenerationRequest(ImageSettings,
        FOnImageGenerationCompletionResponse::CreateLambda([WeakThis](const TArray<uint8>& ImageBytes, const FString& Error, bool bSuccess)
        {
            if (!WeakThis.IsValid()) return;
            
            if (bSuccess)
            {
                WeakThis->ProcessGeneratedImage(ImageBytes);
            }
        })
    );
}
```

<div>
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751299978/image-generation-blueprint.webp" alt="Image Utility Functions" style="width: 100%;">
        <figcaption class="image-caption">Image utility functions for texture conversion</figcaption>
    </figure>
</div>~~~~

## Advanced Features

### Integration Tips
- **Caching**: Store frequently used generated images to reduce API calls
- **Async Loading**: Use proper async patterns for smooth gameplay
- **Quality vs Speed**: Balance image quality with generation time
- **Prompt Engineering**: Craft detailed prompts for better results
