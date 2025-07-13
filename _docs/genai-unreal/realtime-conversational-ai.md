---
layout: documentation
title: Realtime Conversational AI
permalink: /docs/genai-unreal/realtime-conversational-ai/
nav_order: 13
---

## Overview

The Realtime conversational AI feature enables natural, interruptible (barge-in) conversations with AI. This creates fluid dialogue experiences where users can interrupt the AI at any time, similar to natural human conversation.

## Core Concept

To achieve smooth conversations, the client must manage the "turn" of the conversation by telling the server when the user has finished speaking and intelligently handling any "phantom audio" from interrupted responses. This is handled automatically through an internal state machine.

## Key Features

- **Barge-In Support**: Users can interrupt the AI at any time
- **State Management**: Automatic handling of conversation turns and audio buffering
- **Real-Time Audio**: Streaming audio input and output for natural conversation flow
- **Phantom Audio Prevention**: Intelligent discarding of outdated audio from interrupted turns

## Internal State Machine

The realtime service uses an internal state machine to manage conversation flow:

- **Audio Gate**: A boolean (`bIsReadyForAudio`) that controls when to accept new audio
- **Event-Driven Logic**: Handles `response.created` events to synchronize turns
- **Automatic Cleanup**: Manages response IDs and state internally without Blueprint complexity

## Blueprint Implementation

### 1. Initial Setup (Event BeginPlay or OnConnected)

<div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751301000/realtime-setup-blueprint.webp" alt="Realtime Setup Blueprint" style="width: 100%;">
        <figcaption class="image-caption">Initial setup for realtime conversation</figcaption>
    </figure>
</div>

**Setup Steps:**
1. Create and store the Realtime Service and Audio Component in variables
2. Set the AI's persona using the `SetSystemInstructions` node
3. Send an initial text message with `SendTextToServer` to start the conversation

### 2. User Interruption (Push-to-Talk Key Pressed)

<div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751301100/realtime-interruption-blueprint.webp" alt="User Interruption Blueprint" style="width: 100%;">
        <figcaption class="image-caption">Handling user interruption (barge-in)</figcaption>
    </figure>
</div>

**Interruption Logic:**
1. Stop the AI_AudioPlayer component to silence current speech
2. Call `ClearInputBuffer` to reset server state
3. Create empty SoundWaveProcedural to discard phantom audio
4. Start capturing audio from microphone

### 3. User Turn Ending (Push-to-Talk Key Released)

**Turn Completion:**
1. Stop capturing audio
2. Call `CommitAndRequestResponse` node (handles commit + create internally)

### 4. AI Audio Response Handling

**Response Processing:**
- The internal gatekeeper ensures only valid audio for the current turn fires events
- Queue incoming AudioData into SoundWaveProcedural
- Ensure AI_AudioPlayer is playing

## Audio Utility Helpers

The plugin provides several utility functions to support realtime audio workflows:

### Create Empty Procedural Wave
- **Purpose**: Creates a new, empty USoundWaveProcedural for streaming audio
- **Category**: GenAI|Audio
- **Returns**: Sound Wave Procedural reference

### Queue Audio to Procedural Wave
- **Purpose**: Appends audio chunks to existing USoundWaveProcedural
- **Category**: GenAI|Audio
- **Inputs**: ProceduralWave, AudioData (Byte Array)

### Convert Recorded PCM For AI
- **Purpose**: Converts Unreal audio format to AI service requirements
- **Category**: GenAI|Audio
- **Conversion**: Stereo 48kHz 16-bit → Mono 24kHz 16-bit
- **Input**: InStereo48kHzPCM (Byte Array)
- **Returns**: Formatted Byte Array

<div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1751301200/audio-utilities-blueprint.webp" alt="Audio Utility Nodes" style="width: 100%;">
        <figcaption class="image-caption">Audio utility helper nodes</figcaption>
    </figure>
</div>

## Best Practices

### Blueprint Setup
- **Enable Input**: For non-Player-Pawn Blueprints, use `Enable Input` node connected to `Get Player Controller`
- **Node Connections**: Ensure all nodes are connected to execution chains to avoid "pruned" warnings
- **State Management**: Let the C++ class handle complex state - keep Blueprint logic simple

### Performance Considerations
- **Audio Quality**: Balance audio quality with latency requirements
- **Buffer Management**: Use appropriate buffer sizes for smooth playback
- **Memory Usage**: Clean up old audio data to prevent memory leaks

### Error Handling
- **Connection Issues**: Implement reconnection logic for network interruptions
- **Audio Failures**: Handle microphone access and audio device errors gracefully
- **State Recovery**: Ensure conversation state can recover from interruptions
