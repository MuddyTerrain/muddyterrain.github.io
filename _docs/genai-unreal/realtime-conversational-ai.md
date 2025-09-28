---
layout: documentation
title: Realtime Conversational AI
permalink: /docs/genai-unreal/realtime-conversational-ai/
nav_order: 14
---

The Realtime Conversational AI system is the plugin's most advanced feature, enabling natural, fluid, and fully interruptible ("barge-in") conversations with an AI. This system is designed to replicate the natural turn-taking of human conversation, creating deeply immersive and believable character interactions.

<div style="padding: 10px 15px; background-color: #e6f7ff; border-left: 4px solid #07a2ff; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #1f6a9c;">Provider Support</p>
  <p style="margin: 5px 0 0 0; color: #1f6a9c;">This feature is currently only available for <strong>OpenAI</strong> and is designed to work with their latest realtime models.</p>
</div>

---

## Core Concept: A Managed Conversation

Unlike simple request-response chats, a real-time conversation requires careful management of who is speaking, when they can be interrupted, and how to handle multimodal data for both the player and the AI. This entire process is managed by an internal state machine within the plugin.

-   **Barge-In Support:** Users can interrupt the AI at any time by simply starting to speak.
-   **Server-Side VAD:** Voice Activity Detection is handled on the server, meaning the AI can intelligently detect the end of a user's speech without requiring a "stop" command.
-   **Multimodal Support:** Send both audio and images in the same conversation, allowing the AI to see and react to the game world in real-time.
-   **State Management:** The plugin automatically handles the conversation state, including whose turn it is to speak.
-   **Phantom Audio Prevention:** Intelligently discards outdated audio from the AI if it gets interrupted, preventing the user from hearing fragments of a cut-off sentence.

---

## Blueprint Implementation Walkthrough

Setting up a real-time conversation involves initializing the service, using the new audio component to handle user input, and processing the AI's response.

### 1. The Realtime Audio Recorder Component

To simplify microphone input, the plugin now includes a dedicated Actor Component: the **Realtime Audio Recorder**. Add this component to your Blueprint actor. It handles audio capture and automatically feeds the data to the realtime service.

### 2. Initialization (on `Event BeginPlay`)

First, set up the service, create an audio component to play the AI's voice, and give the AI its initial instructions.

<div>
    <figure>
        <img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1756929038/61a67468-d1c5-4202-a55b-c24defe1fdb9.webp" alt="Realtime Setup Blueprint" style="width: 100%;">
        <figcaption class="image-caption">Initial setup: creating the service and binding events</figcaption>
    </figure>
</div>

<div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1756929095/a97ff3c0-5c2a-47d4-9f87-8207bb2f50c9.webp" alt="Realtime Setup Blueprint" style="width: 70%;">
        <figcaption class="image-caption">Start Server With Config</figcaption>
    </figure>
</div>


-   **Create Realtime Service:** Creates the main service object. Promote it to a variable.
-   **Add Audio Component:** This will play the AI's voice. Promote it to a variable.
-   **Bind to Events:** Bind to the service's events (`OnTextResponse`, `OnAudioResponse`, `OnConnected`, etc.) to handle responses.
-   **Set System Instructions:** Define the AI's personality and role.
-   **Send Text To Server:** Kick off the conversation with a starting phrase.

### 3. Handling User Input (Push-to-Talk)

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

### 4. Handling the AI's Audio Response

The `RealtimeService` provides events that fire when the AI responds. You'll use these to play the incoming audio.

<div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1756929398/d02a879b-86da-4640-8e5e-741a264d82d7.webp" alt="AI Response Blueprint" style="width: 100%;">
        <figcaption class="image-caption">Handling the AI's audio response in Blueprints.</figcaption>
    </figure>
</div>

-   **On Response Created:** Create a new `SoundWaveProcedural` to hold the incoming audio.
-   **On Audio Received:** Use the `QueueAudioToProceduralWave` helper to feed the incoming audio chunks into your procedural sound wave.
-   **Play Audio:** Make sure your AI's audio component is playing the procedural sound wave.

---

## Best Practices

-   **Enable Input:** If your logic is in an Actor, use the `Enable Input` node on `BeginPlay` to allow it to receive key presses.
-   **Error Handling:** Build logic to handle connection errors gracefully, perhaps by attempting to reconnect.
-   **UI Not Yet Included:** The current example projects do not yet have a dedicated UI widget for the realtime conversational system. The implementation shown here is the best reference for building your own.
