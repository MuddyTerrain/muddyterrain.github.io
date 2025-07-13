---
layout: documentation
title: Text-to-Speech and Transcription
permalink: /docs/genai-unreal/text-to-speech-and-transcription/
nav_order: 11
---

## Text-to-Speech (TTS)

### Supported TTS Providers

- **OpenAI TTS**: High-quality voices with natural intonation
- **Google Text-to-Speech**: Wide language support with customizable voice parameters
- **ElevenLabs**: Premium voice quality for professional applications

### Google TTS Critical Fix Notice
A critical issue was recently resolved in the Google TTS integration where requests were failing with a `400 INVALID_ARGUMENT` error. The issue was in the JSON payload structure - the correct key for Google's Gemini API is `"generationConfig"`, not `"config"`.

**Fixed in C++ code:**
```cpp
// In GenGoogleTextToSpeech.cpp, inside MakeRequest function
JsonPayload->SetObjectField(TEXT("generationConfig"), ConfigObject);
```

### Blueprint Implementation

<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1752095699/Screenshot_2025-07-07_140458_pvujqs.webp" alt="Blueprint TTS and Transcription Example" style="width: 100%;">
        <figcaption class="image-caption">
        A simple Blueprint graph showing how to convert text to a playable sound.
        </figcaption>
    </figure>
</div>

The key nodes are:
1. **Request OpenAI Text To Speech:** Kicks off the TTS request. Use the `Make Gen OpenAI Text To Speech Settings` node to configure it.
2. **Convert PCM Audio To Sound Wave:** A helper node that takes the raw audio data from the API and turns it into a `USoundWave`.
3. **Create Sound 2D:** A standard Unreal node to play the generated sound in the world. Set it to "Auto Destroy" to avoid memory leaks.

## Speech-to-Text (Transcription)

The Blueprint node for transcription is just as simple as the TTS node. You provide the audio data and it returns the transcribed text.

<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1752096578/Screenshot_2025-07-07_140639_poqu9i.webp" alt="Blueprint TTS and Transcription Example" style="width: 100%;">
        <figcaption class="image-caption">
        A simple Blueprint graph showing how to convert audio to text transcription.
        </figcaption>
    </figure>
</div>

The key node is **Request OpenAI Transcription From Data**. As seen in the image, you can feed the audio data directly from the TTS output into the transcription node to perform a full round-trip conversion.

## Audio Format Notes

- **TTS Output**: Currently outputs in PCM format
- **Transcription Input**: Supports common formats (WAV, MP3, M4A, etc.)
- **Conversion Utilities**: Plugin provides helper functions for audio conversion
