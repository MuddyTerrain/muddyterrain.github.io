---
layout: documentation
title: Realtime Conversational AI
permalink: /docs/genai-unreal/realtime-conversational-ai/
nav_order: 14
---

The Realtime Conversational AI system is the plugin's most advanced feature, enabling natural, fluid, and fully interruptible ("barge-in") conversations with an AI. This system is designed to replicate the natural turn-taking of human conversation, creating deeply immersive and believable character interactions.

<div style="padding: 10px 15px; background-color: #e6f7ff; border-left: 4px solid #07a2ff; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #1f6a9c;">Provider Support</p>
  <p style="margin: 5px 0 0 0; color: #1f6a9c;">This feature is currently only available for <strong>OpenAI</strong> and is designed to work with their latest realtime models. 

  The plugin FULLY supports the OpenAI realtime API's <strong>Server-side VAD (Voice activity detection) and Semantic VAD</strong> features, the examples can be found in the <code>QuickExamples</code> Directory of the example project.</p>
</div>

<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">Version support:</p>
  <p style="margin: 5px 0 0 0; color: #856404;">Please note Semantic and Server VAD features only work on plugin versions above <strong>v1.5.1</strong>.</p>
</div>

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

-   **On Response Created:** Create a new `SoundWaveProcedural` to hold the incoming audio.
-   **On Audio Received:** Use the `QueueAudioToProceduralWave` helper to feed the incoming audio chunks into your procedural sound wave.
-   **Play Audio:** Make sure your AI's audio component is playing the procedural sound wave.

---

## Best Practices

-   **Enable Input:** If your logic is in an Actor, use the `Enable Input` node on `BeginPlay` to allow it to receive key presses.
-   **Error Handling:** Build logic to handle connection errors gracefully, perhaps by attempting to reconnect.
-   **UI Not Yet Included:** The current example projects do not yet have a dedicated UI widget for the realtime conversational system. The implementation shown here is the best reference for building your own.
