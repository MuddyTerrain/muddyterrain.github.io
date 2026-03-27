---
layout: wide
title: "How to Use the OpenAI Realtime API in Unreal Engine 5 (Voice-to-Voice AI)"
description: "Build ultra-low latency voice-to-voice AI in Unreal Engine 5. Learn how to implement OpenAI's Realtime API with VAD and Push-to-Talk via Blueprints."
category: guides
permalink: /blog/openai-realtime-api-unreal-engine
author: "Muddy Terrain"
tags: [unreal-engine, openai-realtime, voice-ai, voice-to-voice, vad, gemini-live, game-development, blueprints]
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1772931701/MainBanners_4_d9nmqo.webp
---

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1772931701/MainBanners_4_d9nmqo.webp" alt="OpenAI Realtime API in Unreal Engine 5" style="width: 100%;">
</figure>
</div>

<h2>How to Use the OpenAI Realtime API in Unreal Engine 5</h2>

<p>For years, putting "Voice AI" in a game meant chaining three different systems together: Speech-to-Text (STT) to understand the player, an LLM to generate the text response, and Text-to-Speech (TTS) to speak it back. This pipeline inherently creates latency — often 2 to 4 seconds of awkward silence between the player speaking and the NPC replying.</p>

<p><strong>Voice-to-voice models</strong> solve this. OpenAI's Realtime API (and Google's Gemini Live) use a persistent WebSocket connection. The AI listens to the audio stream directly and generates audio back directly. The latency drops to milliseconds, allowing for natural, fluid, and fully interruptible conversations.</p>

<h2>The Challenge of Realtime Voice in UE5</h2>

<p>Implementing a persistent WebSocket connection that streams raw PCM audio chunks in and out of Unreal Engine 5 is notoriously difficult. You have to manage thread safety, buffer underruns, microphone permissions, and "barge-in" logic (handling what happens when a player interrupts an NPC mid-sentence).</p>

<h2>The Solution: Realtime Conversational AI Components</h2>

<p>The <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="track-click" data-event-name="lnk_clk_genai_fab" data-event-location="post_guide_realtime" target="_blank" rel="noopener noreferrer">GenAI for Unreal</a> plugin handles the entire WebSocket audio lifecycle natively. It includes a custom <strong>Realtime Audio Capture Component</strong> that game designers can drop onto any Blueprint Actor to handle microphone input and feed it directly to the AI.</p>

<h3>1. Handling Interruptions (Barge-in) and Phantom Audio</h3>

<p>When a player interrupts an NPC, two things must happen instantly:</p>
<ol>
    <li>The NPC's current audio playback must stop.</li>
    <li>The remaining queued audio data from the AI must be cleared, so the NPC doesn't suddenly spit out the end of a canceled sentence later.</li>
</ol>
<p>The plugin manages this automatically via a <strong>Clear Input Buffer</strong> function on the Realtime Service, preventing "phantom audio" bugs that plague custom implementations.</p>

<h3>2. Push-to-Talk vs. Voice Activity Detection (VAD)</h3>

<p>The plugin gives you two ways to capture player speech:</p>

<p><strong>Push-to-Talk (PTT):</strong> The traditional gaming approach. The player holds a key to talk. When released, the audio is sent. In Blueprints, you simply call <strong>Start Recording</strong> on key press, and <strong>Stop Recording</strong> on release using the Realtime Audio Capture Component.</p>

<p><strong>Server-Side VAD (Continuous Mic):</strong> For a truly hands-free experience, you can leave the mic open. The plugin supports OpenAI's Server-Side VAD and Semantic VAD. It constantly streams 100ms chunks of audio to the server. The AI intelligently detects when the player has finished speaking and formulates a response on its own.</p>

<h2>Blueprint Implementation Example</h2>

<p>Here is how a game designer can wire up a Push-to-Talk interaction in UE5 without writing any C++:</p>

<pre><code class="language-unrealscript">// On Key Press (Push-to-Talk)
AI_AudioPlayerComponent -> Stop
RealtimeService -> Clear Input Buffer
RealtimeAudioRecorder -> Start Recording

// On Key Release
RealtimeAudioRecorder -> Stop Recording

// Handling the AI's Response Event
Event OnAudioReceived(AudioChunk)
  QueueAudioToProceduralWave(AudioChunk, NPC_ProceduralSoundWave)
</code></pre>

<h2>Crucial Shipping Tip for Mac Developers</h2>

<p>If you are packaging your UE5 game for Mac, you might encounter issues where the microphone isn't picked up or the WebSocket connection instantly fails (Connection Status 0). This is a known UE5 SSL certificate quirk.</p>
<p><strong>The Fix:</strong> Copy <strong>cacert.pem</strong> from your Engine's <strong>Engine/Content/Certificates/ThirdParty</strong> directory into your project's <strong>Content/Certificates</strong> directory. Then, add that Certificates folder to <em>Additional Non-Asset Directories To Package</em> in your Project Settings.</p>

<div class="button-row">
  <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="cta-button primary track-click" data-event-name="btn_clk_genai_fab" data-event-location="post_guide_realtime_cta" target="_blank" rel="noopener noreferrer">GenAI for Unreal on Fab</a>
  <a href="/docs/genai-unreal/realtime-conversational-ai/" class="cta-button secondary track-click" data-event-name="btn_clk_genai_docs" data-event-location="post_guide_realtime_cta">Read the Realtime Docs</a>
</div>


