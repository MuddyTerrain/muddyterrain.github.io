---
layout: documentation
title: Realtime Conversational AI
permalink: /docs/genai-unreal/realtime-conversational-ai/
nav_order: 15
description: Create natural voice conversations with barge-in interruption support using OpenAI Realtime API and ElevenLabs Conversational AI.
tags: [unreal-engine, genai, realtime-conversational-ai, voice, openai-realtime, elevenlabs-agents, vad, barge-in]
---

The Realtime Conversational AI system is the plugin's most advanced feature, enabling natural, fluid, and fully interruptible ("barge-in") conversations with an AI. This system is designed to replicate the natural turn-taking of human conversation, creating deeply immersive and believable character interactions.

<div style="padding: 10px 25px; background-color: #e6f7ff; border-left: 4px solid #07a2ff; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #1f6a9c;">Provider Support</p>
  <p style="margin: 5px 0 0 0; color: #1f6a9c;">This feature is available for <strong>OpenAI</strong> and <strong>ElevenLabs</strong>.</p>
  <ul style="margin: 5px 0 0 0; color: #1f6a9c;">
    <li><strong>OpenAI Realtime:</strong> Full support for the OpenAI realtime API including <strong>Server-side VAD, Semantic VAD</strong>, push-to-talk, and multimodal input. Examples in the <code>QuickExamples</code> directory.</li>
    <li><strong>ElevenLabs Conversational AI:</strong> Live bidirectional voice conversations with ElevenLabs agents via WebSocket. Supports barge-in, VAD, text input, contextual updates, client-side tool calls, and TTS voice overrides.</li>
  </ul>
</div>

<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">Version support:</p>
  <p style="margin: 5px 0 0 0; color: #856404;">OpenaAI Semantic and Server VAD features only work on plugin versions above <strong>v1.5.1</strong>.</p>
  <p style="margin: 5px 0 0 0; color: #856404;">ElevenLabs realtime features only work on plugin versions above <strong>v2.1.0</strong>.</p>
</div>

<p><strong>Mac Shipping Note:</strong> For packaged Mac builds, if you run into mic input not being picked up or realtime/API connection failures (for example, connection status 0), copy <code>cacert.pem</code> from <code>&lt;UE_ENGINE_PATH&gt;/Engine/Content/Certificates/ThirdParty</code> into <code>&lt;Project&gt;/Content/Certificates</code>, then add that Certificates folder to both <em>Additional Non-Asset Directories To Package</em> and <em>Additional Non-Asset Directories To Copy</em> in Packaging settings.</p>

---

## Core Concept: A Managed Conversation

Unlike simple request-response chats, a real-time conversation requires careful management of who is speaking, when they can be interrupted, and how to handle multimodal data for both the player and the AI. This entire process is managed by an internal state machine within the plugin.

-   **Barge-In Support:** Users can interrupt the AI at any time by simply starting to speak.
-   **Server-Side & Semantic VAD:** Voice Activity Detection is handled on the server, meaning when enabled, the AI can intelligently detect the end of a user's speech without requiring a "stop" command.
-   **Push to talk Support:** The traditional push to talk way of conversation is also supported.
-   **Multimodal Support:** Send both audio and images in the same conversation, allowing the AI to see and react to the game world in real-time.
-   **State Management:** The plugin automatically handles the conversation state, including whose turn it is to speak.
-   **Phantom Audio Prevention:** Intelligently discards outdated audio from the AI if it gets interrupted, preventing the user from hearing fragments of a cut-off sentence.

---

## Blueprint Implementation Walkthrough

Setting up a real-time conversation involves initializing the service, using the new audio component to handle user input, and processing the AI's response.

### 1. Setup the component:
Based on your requirement pick one of the components below:
#### For Push to Talk Sessions:
For push to talk sessions, simply add an Unreal's Built-in `Audio Capture` component.

#### For VAD Sessions:
To simplify microphone input, the plugin now includes a dedicated Actor Component: the **Realtime Audio Capture Component**. Add this component to your Blueprint actor. It handles audio capture and automatically feeds the data to the realtime service.

<div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1761703558/e1b3c9db-a9f9-4c23-a866-ffeaa1dfbce3.webp" alt="AI Response Blueprint" style="width: 80%;">
        <figcaption class="image-caption">Custom component for VAD Support.</figcaption>
    </figure>
</div>

In both cases, please setup the target or base submixes for the mic: (If not sure, Refer example project's Common/Audio directory for the submix file)
<div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1761704056/2df3e56b-91d0-451d-be52-f5de53fb222e.webp" alt="AI Response Blueprint" style="width: 80%;">
    </figure>
</div>
<div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1761703942/bbc330d5-b6bc-4540-a054-21e58183e4f3.webp" alt="AI Response Blueprint" style="width: 80%;">
    </figure>
</div>


### 2. Initialization (on `Event BeginPlay`)

First, set up the service, create an audio component to play the AI's voice, and give the AI its initial instructions.

<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1756929038/61a67468-d1c5-4202-a55b-c24defe1fdb9.webp" alt="Realtime Setup Blueprint" style="width: 100%;">
        <figcaption class="image-caption">Initial setup: creating the service and binding events</figcaption>
    </figure>
</div>

After binding the events like above, based on your requirement, you can start the session in three different modes:

<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1761703369/d98956f7-5e8b-4167-b1ce-110857bb164c.webp" alt="Realtime Setup Blueprint" style="width: 100%;">
        <figcaption class="image-caption">Three different ways to start the session</figcaption>
    </figure>
</div>

### 3. Handling User Input

#### Method 1: Push-to-Talk

Using the new **Realtime Audio Recorder** component makes this process much simpler.

<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/v1756929320/32d6687f-b2b9-4520-b91a-1fc490ffc28b.png" alt="User Interruption Blueprint with New Component" style="width: 100%;">
        <figcaption class="image-caption">The simplified logic for starting and stopping user audio capture.</figcaption>
    </figure>
</div>

**When the Push-to-Talk key is PRESSED:**
1.  **Stop:** Immediately call `Stop` on your AI's audio player component to silence it.
2.  **Clear Input Buffer:** Call this on the `RealtimeService` to discard any pending AI audio.
3.  **Start Recording:** Call `Start Recording` on your **Realtime Audio Recorder** component. It will automatically handle the rest.

**When the Push-to-Talk key is RELEASED:**
1.  **Stop Recording:** Simply call `Stop Recording` on the **Realtime Audio Recorder** component. The component will automatically send the captured audio to the service.


#### Method 2: VAD based continous input: (Works for both server and semantic VAD)
The realtime audio capture component has a `OnAudioGenerated` function, which by default triggers every 100ms (configurable) with a mic audio chunk which can be continously sent to the server like this:

<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">Capture Device Channels</p>
  <p style="margin: 5px 0 0 0; color: #856404;">Microphone devices can be mono or stereo. When converting audio with <code>ConvertFloatArrayToPCM16Bytes</code>, use the component's <code>CaptureNumChannels</code> property for the channel count instead of hardcoding a value. This ensures correct audio conversion regardless of the input device.</p>
</div>

<div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1761704217/682b368a-f608-4924-97bc-d34ec1f6aced.webp" alt="AI Response Blueprint" style="width: 80%;">
    </figure>
</div>

### 4. Handling the AI's Audio Response

The `RealtimeService` provides events that fire when the AI responds. You'll use these to play the incoming audio.

<div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1756929398/d02a879b-86da-4640-8e5e-741a264d82d7.webp" alt="AI Response Blueprint" style="width: 100%;">
        <figcaption class="image-caption">Handling the AI's audio response in Blueprints.</figcaption>
    </figure>
</div>

-   **On Response Created:** Create a new `SoundWaveProcedural` using `CreateEmptyProceduralWave` to hold the incoming audio. **The sample rate must match the provider:** use `24000` for OpenAI Realtime, `16000` for ElevenLabs. A mismatch will cause chipmunk (too fast) or slowed-down audio.
-   **On Audio Received:** Use the `QueueAudioToProceduralWave` helper to feed the incoming PCM16 audio chunks into your procedural sound wave.
-   **Play Audio:** Make sure your AI's audio component is playing the procedural sound wave.

---

## Best Practices

-   **Enable Input:** If your logic is in an Actor, use the `Enable Input` node on `BeginPlay` to allow it to receive key presses.
-   **Error Handling:** Build logic to handle connection errors gracefully, perhaps by attempting to reconnect.
-   **UI Not Yet Included:** The current example projects do not yet have a dedicated UI widget for the realtime conversational system. The implementation shown here is the best reference for building your own.

---

## ElevenLabs Conversational AI

The plugin now supports **ElevenLabs Conversational AI**, enabling live, bidirectional voice conversations with ElevenLabs agents. This system connects via WebSocket and streams PCM16 mono 16 kHz audio in both directions. Available on plugin version 2.1.0 or above. 

### Key Features

- **Barge-In / Interruption Support:** Users can interrupt the agent at any time. The plugin automatically tracks interruption event IDs and discards stale audio to prevent phantom playback.
- **Voice Activity Detection (VAD):** Receive real-time VAD scores (0.0 - 1.0) from the server.
- **Text Input:** Send text messages to the agent as an alternative to voice input.
- **Contextual Updates:** Send non-interrupting context to the agent (e.g. screen content, game state) without disrupting the conversation flow.
- **Client-Side Tool Calls:** The agent can request your game to execute tools. Respond with results via `SendToolResult`.
- **TTS Voice Overrides:** Override the agent's default voice, speed, stability, and similarity boost per-conversation.
- **Dynamic Variables:** Inject key-value pairs into the agent's prompt template at connection time.
- **Streaming Text Deltas:** Receive the agent's text response incrementally as it generates.

### Setup

1. Create an agent on the [ElevenLabs dashboard](https://elevenlabs.io/app/agents/new) or if from template [here](https://elevenlabs.io/app/agents/templates) and copy the **Agent ID**. You can find the agent id either in the url itself, it will be something similar to https://elevenlabs.io/app/agents/agents/agent_	&lt;agent-id&gt;?&lt;somethingelse&gt;. Or in the widget tab of the agent, you can find it in the embed code section as &lt;elevenlabs-convai agent-id="agent-id"&gt;&lt;/elevenlabs-convai&gt;
2. Set your ElevenLabs API key in the plugin settings (Project Settings > GenAI).

<div style="padding: 10px 15px; background-color: #fff3cd; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">⚠️ Important: API Permissions & Publishing</p>
  <p style="margin: 5px 0 0 0; color: #856404;"><strong>1. Enable Conversational AI permission:</strong> Your ElevenLabs API key must have the <code>convai_write</code> permission enabled. Without it, you will get a <code>HTTP 401: missing_permissions</code> error when trying to connect. You can enable this in your ElevenLabs API key settings.</p>
  <p style="margin: 5px 0 0 0; color: #856404;"><strong>2. Publish your agent:</strong> After creating or editing your agent, you <strong>must click the "Publish" button</strong> in the top-right corner of the ElevenLabs dashboard. Unpublished agents will not accept connections.</p>
  <p style="margin: 5px 0 0 0; color: #856404;"><strong>3. Override permissions:</strong> If you use override fields like <code>FirstMessageOverride</code>, <code>LanguageOverride</code>, or <code>PromptOverride</code>, the agent's configuration must explicitly allow these overrides. Otherwise, the WebSocket will close with an error like <em>"Override for field 'first_message' is not allowed by config."</em> You can enable overrides in the agent's security settings on the ElevenLabs dashboard.</p>
</div>

<div style="padding: 10px 25px; background-color: #e6f7ff; border-left: 4px solid #07a2ff; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #1f6a9c;">Dashboard Advanced Settings</p>
  <p style="margin: 5px 0 0 0; color: #1f6a9c;">Your agent's <strong>Advanced</strong> tab on the <a href="https://elevenlabs.io/app/agents/agents/<id>?tab=advanced" style="color: #1f6a9c;">ElevenLabs dashboard</a> has several settings that affect conversational behavior:</p>
  <ul style="margin: 5px 0 0 0; color: #1f6a9c;">
    <li><strong>Eagerness:</strong> Controls how quickly the agent responds. Higher eagerness means faster replies; lower means the agent waits longer to confirm the user has finished speaking. Useful for tuning turn-taking feel.</li>
    <li><strong>Max conversation duration:</strong> Caps how long a session can last (default 600s). Increase this for longer gameplay conversations.</li>
    <li><strong>Client events:</strong> Controls which events the server sends. Ensure <code>audio</code>, <code>interruption</code>, <code>agent_response</code>, and <code>user_transcript</code> are enabled for the plugin to work correctly.</li>
  </ul>
</div>

### Blueprint Usage


1. Create ElevenLabs Agents Service  →  stores a reference
2. Bind delegates (OnConnectedBP, OnAudioResponseBP, OnUserTranscriptBP, etc.)
    <div>
        <figure>
            <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1774802027/bce3a55d-1ad1-412b-b99a-59b5b6a29229.webp" alt="Multimodal Chat Setup" style="width: 100%;">
            <figcaption class="image-caption">
            Binding to events. 
            </figcaption>
        </figure>
    </div>
3. Call Connect() with your Agent ID (and optional overrides) 
    <div>
        <figure>
            <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1774802136/6ca24962-4418-4e11-ab44-6eb78aa94698.webp" alt="Multimodal Chat Setup" style="width: 65%;">
            <figcaption class="image-caption">
            Start Connection. 
            </figcaption>
        </figure>
    </div>
4. On each frame/tick, call SendAudioToServer() with mic PCM16 data
    <div>
        <figure>
            <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1774802334/d10b41ba-222e-4318-8032-8a6dbc29ca2b.webp" alt="Multimodal Chat Setup" style="width: 100%;">
            <figcaption class="image-caption">
            Send Audio packs to server
            </figcaption>
        </figure>
    </div>
5. Handle OnAudioResponseBP to play incoming agent audio 
    <div>
        <figure>
            <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1774802334/d10b41ba-222e-4318-8032-8a6dbc29ca2b.webp" alt="Multimodal Chat Setup" style="width: 100%;">
            <figcaption class="image-caption">
            Send Audio packs to server
            </figcaption>
        </figure>
    </div>
6. Call Disconnect() when done


### Available Delegates

| Delegate | Description |
|---|---|
| `OnConnectedBP` | Fires when connected, provides the Conversation ID |
| `OnConnectionErrorBP` | Fires on connection failure with status code and error message |
| `OnDisconnectedBP` | Fires when the WebSocket closes |
| `OnAudioResponseBP` | Fires for each audio chunk from the agent (PCM16 mono 16 kHz) |
| `OnUserTranscriptBP` | Fires when the user's speech is transcribed |
| `OnAgentResponseBP` | Fires when the agent's full text response is available |
| `OnInterruptionBP` | Fires on barge-in — stop audio playback on this event |
| `OnVadScoreBP` | Fires with VAD score (0.0 - 1.0) |
| `OnAgentResponseCorrectionBP` | Fires when the agent corrects a previous response |
| `OnAgentTextDeltaBP` | Fires with streaming text deltas as the agent generates |
| `OnToolCallBP` | Fires when the agent requests a client-side tool call |

### Available Methods

| Method | Description |
|---|---|
| `Connect(Settings)` | Connect to the agent with the given settings |
| `Disconnect()` | Gracefully close the connection |
| `SendAudioToServer(AudioData)` | Stream PCM16 mono 16 kHz audio to the agent |
| `SendTextToServer(Text)` | Send a text message instead of voice |
| `SendContextualUpdate(Text)` | Send a non-interrupting contextual update |
| `SendToolResult(ToolCallId, Result, bIsError)` | Return the result of a client-side tool call |

### Audio Format

ElevenLabs Conversational AI streams audio as **raw PCM 16-bit signed little-endian, mono, at 16 kHz** in both directions.

- **Playback:** Use `CreateEmptyProceduralWave` with `SampleRate = 16000`, then feed `OnAudioResponseBP` data into it via `QueueAudioToProceduralWave`. Using the default 24000 will cause chipmunk-sounding audio.
- **Mic Input:** Use `ConvertFloatArrayToPCM16Bytes` with `OutSampleRate = 16000` to convert your microphone audio before sending it with `SendAudioToServer`.
- **Click Prevention:** By default, `bSmoothAudioPlayback` is enabled. This applies an initial audio buffer per response and a micro-fade (0.25ms) at audio chunk boundaries, so playback fades to silence instead of clicking when the buffer momentarily drains between WebSocket messages. The buffer duration is controlled by `AudioBufferDurationMs` (default 300ms). Increase this if you still hear clicks; decrease it to reduce initial latency. If you are building a custom audio pipeline and want raw, unprocessed chunks, set `bSmoothAudioPlayback = false` in the settings.

### C++ Implementation

```cpp
#include "Models/ElevenLabs/GenElevenAgents.h"
#include "Data/ElevenLabs/GenElevenAgentsStructs.h"

void AMyActor::StartElevenLabsConversation()
{
    // 1. Create the service
    AgentsService = UGenElevenAgents::CreateElevenAgentsService(this);

    // 2. Bind C++ delegates
    AgentsService->OnConnected.AddLambda([](const FString& ConversationId)
    {
        UE_LOG(LogTemp, Log, TEXT("Connected! ConversationId: %s"), *ConversationId);
    });

    AgentsService->OnAudioResponse.AddLambda([this](const TArray<uint8>& AudioData)
    {
        // Queue audio data to your procedural sound wave for playback
    });

    AgentsService->OnUserTranscript.AddLambda([](const FString& Transcript)
    {
        UE_LOG(LogTemp, Log, TEXT("User said: %s"), *Transcript);
    });

    AgentsService->OnAgentResponse.AddLambda([](const FString& Response)
    {
        UE_LOG(LogTemp, Log, TEXT("Agent said: %s"), *Response);
    });

    // 3. Configure and connect
    FGenElevenAgentsSettings Settings;
    Settings.AgentId = TEXT("your-agent-id-here");

    // Optional overrides:
    Settings.PromptOverride = TEXT("You are a friendly NPC shopkeeper.");
    Settings.FirstMessageOverride = TEXT("Welcome to my shop! What can I help you with?");
    Settings.TTSOverrides.Speed = 1.0f;
    Settings.DynamicVariables.Add(TEXT("player_name"), TEXT("Hero"));

    AgentsService->Connect(Settings);
}

// Call this every frame with mic data
void AMyActor::SendMicAudio(const TArray<uint8>& PCM16Data)
{
    if (AgentsService)
    {
        AgentsService->SendAudioToServer(PCM16Data);
    }
}
```

### Settings Reference (`FGenElevenAgentsSettings`)

| Property | Type | Description |
|---|---|---|
| `AgentId` | `FString` | The Agent ID from your ElevenLabs dashboard (required) |
| `PromptOverride` | `FString` | Override the agent's system prompt for this conversation |
| `FirstMessageOverride` | `FString` | Override the first message the agent speaks |
| `LanguageOverride` | `FString` | Override language (e.g. "en", "es", "fr") |
| `TTSOverrides` | `FGenElevenAgentsTTSOverrides` | Voice, speed, stability, and similarity boost overrides |
| `DynamicVariables` | `TMap<FString, FString>` | Key-value pairs injected into the agent's prompt template |
| `bSmoothAudioPlayback` | `bool` | When `true` (default), applies an initial buffer and micro-fade at chunk boundaries to prevent click/tick artifacts. Set to `false` for raw, unprocessed audio chunks. |
| `AudioBufferDurationMs` | `int32` | Initial audio buffer duration in milliseconds before playback starts per response (default 300, range 50–1000). Higher values reduce clicks but add latency. Only used when `bSmoothAudioPlayback` is `true`. |