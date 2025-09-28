---
layout: documentation
title: Text-to-Speech
permalink: /docs/genai-china/text-to-speech/
nav_order: 10
---

Bring your characters and worlds to life with voice. The plugin provides a seamless pipeline to convert text into natural-sounding speech (TTS) using powerful AI models.

#### Currently Supported Providers

-   **Alibaba:** Offers a range of high-quality, natural-sounding voices via the Qwen-TTS models.

---

## Text-to-Speech (TTS)

Text-to-Speech allows you to dynamically generate voice lines from any string, perfect for creating expressive NPC dialogue, narration, or accessibility features without needing to pre-record audio files.

### Blueprint Implementation (TTS)

The Blueprint workflow is designed to be simple: request the speech, convert the returned data, and play it as a sound.

<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_70/v1759018044/2be63be4-a29f-466c-b7cd-00858ab06ab6.webp" alt="Blueprint TTS Example" style="width: 100%;">
        <figcaption class="image-caption">
        A simple Blueprint graph showing how to convert text to a playable sound using Alibaba TTS.
        </figcaption>
    </figure>
</div>

The key nodes are:
1.  **Request Alibaba Text To Speech:** This latent node sends the request. Use the `Make GenAI Alibaba TTS Settings` node to configure the voice, model, and input text.
2.  **Convert PCM Audio To Sound Wave:** A crucial helper node from the plugin that takes the raw PCM audio data from the API and correctly formats it into a playable `USoundWave` asset.
3.  **Play Sound 2D:** A standard Unreal node to play the generated sound.

### C++ Implementation (TTS)

```cpp
#include "Models/Alibaba/GenZhAlibabaTextToSpeech.h"
#include "Data/Alibaba/GenZhAlibabaTextToSpeechStructs.h"
#include "Utilities/GenZhAudioUtils.h" // For the conversion utility
#include "Kismet/GameplayStatics.h"

void AMyActor::SpeakText(const FString& TextToSpeak)
{
    // 1. Configure the TTS request
    FGenZhAlibabaTTSSettings TTSSettings;
    TTSSettings.InputText = TextToSpeak;
    TTSSettings.Model = TEXT("qwen-tts"); 
    TTSSettings.Voice = EAlibabaAIVoice::Serena; // Choose a voice

    // 2. Send the request with a Lambda callback
    UGenZhAlibabaTextToSpeech::SendTextToSpeechRequest(TTSSettings,
        FOnAlibabaTTSCompletionResponse::CreateLambda([this](const TArray<uint8>& AudioData, const FString& ErrorMessage, bool bSuccess)
        {
            if (bSuccess && AudioData.Num() > 0)
            {
                // 3. Convert raw PCM data to a playable sound wave
                if (USoundWave* PlayableSound = UGenZhAudioUtils::ConvertPCMAudioToSoundWave(AudioData))
                {
                    // 4. Play the sound in the world
                    UGameplayStatics::PlaySound2D(this, PlayableSound);
                }
            }
            else
            {
                UE_LOG(LogTemp, Error, TEXT("TTS Error: %s"), *ErrorMessage);
            }
        })
    );
}
```
---

## Audio Helper Utilities (`UGenZhAudioUtils`)

To simplify audio handling, the plugin includes a powerful set of helper functions available in both C++ and Blueprints. This class, `UGenZhAudioUtils`, handles the necessary data conversions to get audio into the formats required by Unreal Engine.

Here’s a brief overview of the most important function for TTS:

-   **Convert PCM Audio To SoundWave:**
    * **What it does:** This is the most essential function for TTS. It takes the raw PCM audio data returned by the AI provider and converts it into a standard, playable `USoundWave` asset.
    * **When to use it:** Always use this after a successful TTS request to make the audio playable in your game.

## Audio Format Notes 

-   **TTS Output:** The plugin receives audio from providers in raw **PCM format**. The `ConvertPCMAudioToSoundWave` utility is essential for making this data playable.