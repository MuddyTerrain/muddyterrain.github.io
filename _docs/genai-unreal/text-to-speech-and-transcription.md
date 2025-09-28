---
layout: documentation
title: Text-to-Speech and Transcription
permalink: /docs/genai-unreal/text-to-speech-and-transcription/
nav_order: 11
---

Bring your characters and worlds to life with voice. The plugin provides a seamless two-way audio pipeline, allowing you to convert text into natural-sounding speech (TTS) and transcribe spoken audio back into text (STT) using powerful AI models.

#### Currently Supported Providers

-   **OpenAI:** Offers a range of high-quality, natural-sounding voices.
-   **Google Text-to-Speech:** Provides a wide variety of voices and language options.
-   **ElevenLabs:** Offers industry-leading, emotionally expressive voices for TTS and transcription. The plugin also supports their new sound effect generation feature (see the [Sound Effects](/docs/genai-unreal/sound-effects/) page for more).
  
<div style="padding: 10px 15px; background-color: #e6f7ff; border-left: 4px solid #07a2ff; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #1f6a9c;">Available ElevenLabs Voices</p>
  <p style="margin: 5px 0 0 0; color: #1f6a9c;">To get a list of all available voices and their corresponding IDs from ElevenLabs, use the <code>Get Voices</code> node. For instructions, please refer to the documentation: <a href="/docs/genai-unreal/models-and-voices/#2-dynamically-fetching-all-eleven-labs-voices">Dynamically Fetching All ElevenLabs Voices</a>.</p>
</div>
---

## 1. Text-to-Speech (TTS)

Text-to-Speech allows you to dynamically generate voice lines from any string, perfect for creating expressive NPC dialogue, narration, or accessibility features without needing to pre-record audio files.


### Blueprint Implementation (TTS)

The Blueprint workflow is designed to be simple: request the speech, convert the returned data, and play it as a sound.

<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1752095699/Screenshot_2025-07-07_140458_pvujqs.webp" alt="Blueprint TTS Example" style="width: 100%;">
        <figcaption class="image-caption">
        A simple Blueprint graph showing how to convert text to a playable sound.
        </figcaption>
    </figure>
</div>

The key nodes are:
1.  **Request OpenAI Text To Speech:** This latent node sends the request. Use the `Make Gen OpenAI Text To Speech Settings` node to configure the voice, model, and input text.
2.  **Convert PCM Audio To Sound Wave:** A crucial helper node that takes the raw PCM audio data from the API and correctly formats it into a playable `USoundWave` asset.
3.  **Create Sound 2D:** A standard Unreal node to play the generated sound. It's good practice to set this to "Auto Destroy" to clean up the sound component after it finishes playing.

### C++ Implementation (TTS)

```cpp
#include "Models/OpenAI/GenOAITextToSpeech.h"
#include "Data/OpenAI/GenOAIAudioStructs.h"
#include "Utilities/GenAIAudioUtils.h" // For the conversion utility
#include "Kismet/GameplayStatics.h"

void AMyActor::SpeakText(const FString& TextToSpeak)
{
    // 1. Configure the TTS request
    FGenOAITextToSpeechSettings TTSSettings;
    TTSSettings.InputText = TextToSpeak;
    TTSSettings.Model = EOpenAITTSModel::TTS_1_HD; // High-definition model
    TTSSettings.Voice = EGenAIVoice::Nova;       // Choose a voice

    // 2. Send the request with a Lambda callback
    UGenOAITextToSpeech::SendTextToSpeechRequest(TTSSettings,
        FOnTTSCompletionResponse::CreateLambda([this](const TArray<uint8>& AudioData, const FString& ErrorMessage, bool bSuccess)
        {
            if (bSuccess && AudioData.Num() > 0)
            {
                // 3. Convert raw PCM data to a playable sound wave
                if (USoundWave* PlayableSound = UGenAIAudioUtils::ConvertPCMAudioToSoundWave(AudioData))
                {
                    // 4. Play the sound in the world
                    UGameplayStatics::PlaySound2D(this, PlayableSound);
                }
            }
        })
    );
}
```
---

## 2. Speech-to-Text (Transcription)

Speech-to-Text allows you to convert spoken audio into text, enabling features like voice commands, player-driven dialogue, or in-game note-taking. The plugin uses OpenAI's powerful Whisper model for high-accuracy transcriptions.

### Blueprint Implementation (Transcription)

The transcription node takes raw audio data and returns a string. You can easily chain TTS and STT nodes together to perform a full round-trip test.

<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1752096578/Screenshot_2025-07-07_140639_poqu9i.webp" alt="Blueprint Transcription Example" style="width: 100%;">
        <figcaption class="image-caption">
        A Blueprint graph showing how to convert audio data into a transcribed text string.
        </figcaption>
    </figure>
</div>

The key node is **Request OpenAI Transcription From Data**. It takes the raw `Audio Data` byte array as input and, on completion, provides the `Transcript` as a string.

### C++ Implementation (Transcription)

```cpp
#include "Models/OpenAI/GenOAITranscription.h"
#include "Data/OpenAI/GenOAIAudioStructs.h"

void AMyActor::TranscribeAudio(const TArray<uint8>& AudioData)
{
    if (AudioData.Num() == 0) return;

    // 1. Configure the transcription request
    FGenOAITranscriptionSettings TranscriptionSettings;
    TranscriptionSettings.Model = EOpenAITranscriptionModel::Whisper_1;
    // Optional: Specify language for better accuracy if known
    TranscriptionSettings.Language = TEXT("en");

    // 2. Send the request from the data buffer
    UGenOAITranscription::SendTranscriptionRequestFromData(AudioData, TranscriptionSettings,
        FOnTranscriptionCompletionResponse::CreateLambda([](const FString& Transcript, const FString& ErrorMessage, bool bSuccess)
        {
            if (bSuccess)
            {
                UE_LOG(LogTemp, Log, TEXT("Transcription successful: '%s'"), *Transcript);
            }
        })
    );
}
```
---

---

## 3. Audio Helper Utilities (`UGenAIAudioUtils`)

To simplify audio handling, the plugin includes a powerful set of helper functions available in both C++ and Blueprints. This class, `UGenAIAudioUtils`, handles the necessary data conversions to get audio into and out of the formats required by AI services.

Here’s a brief overview of the most important functions and when to use them:

-   **Convert PCM Audio To SoundWave:**
    * **What it does:** This is the most essential function for TTS. It takes the raw PCM audio data returned by the AI provider and converts it into a standard, playable `USoundWave` asset.
    * **When to use it:** Always use this after a successful TTS request to make the audio playable in your game.

-   **Convert Audio To PCM16 Mono 24kHz:**
    * **What it does:** Converts audio data into the specific format (16-bit, Mono, 24kHz PCM) that many AI transcription services prefer for optimal results.
    * **When to use it:** Use this before sending recorded audio to a transcription service. For example, if you record the player's microphone at a standard 48kHz stereo, this function will downsample and convert it correctly.

-   **Create Empty Procedural Wave & Queue Audio:**
    * **What they do:** These functions are designed for audio *streaming*. `Create...` makes an empty, playable sound wave, and `Queue...` allows you to feed it chunks of audio data as they arrive from a streaming TTS response.
    * **When to use them:** Use these together when implementing real-time, streaming voice generation to get gapless, continuous playback.

-   **Get SoundWave As Raw PCM Bytes:**
    * **What it does:** Extracts the raw audio data from an existing `USoundWave` asset.
    * **When to use it:** Useful if you have pre-existing audio assets in your project that you want to send to a transcription service.

## Audio Format Notes 

-   **TTS Output:** The plugin currently receives audio from providers in raw **PCM format**. The `ConvertPCMAudioToSoundWave` utility is essential for making this data playable.
-   **Transcription Input:** The transcription nodes accept raw audio data, which should be in a format supported by the provider (e.g., WAV, MP3, M4A). You are responsible for recording or loading audio into a byte array first.