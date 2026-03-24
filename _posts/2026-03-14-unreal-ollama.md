---
layout: wide
title: "GenAI Llama - Local AI for Unreal Engine (Formerly Unreal Ollama)"
category: products
permalink: /unreal-ollama
author: "Muddy Terrain"
tags: [tools, unreal, gamedev, ai, ollama, local-ai, llama, genai-llama, mistral, phi, gemma, llama-cpp, embedded-inference, lm-studio, vllm]
lang: en
hreflang_group: unreal-ollama
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1759079669/Screenshot_2025-09-28_133409_e7uag9.webp
---





<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1759079669/Screenshot_2025-09-28_133409_e7uag9.webp" alt="GenAI Llama - Local AI Models in Unreal Engine" style="width: 100%;">
</figure>
</div>

<p><strong>Run local AI models inside Unreal Engine games and applications — no cloud APIs, no internet required, no per-token costs.</strong> GenAI Llama (formerly Unreal Ollama) supports two modes: connect to any local inference server (Ollama, LM Studio, llama.cpp server, vLLM, LocalAI, Jan) via HTTP, or run GGUF models directly inside your game process with embedded llama.cpp inference. Run Llama 3, Mistral, Phi, Gemma, DeepSeek, and hundreds more models locally.</p>

<div class="button-row">
  <a href="/t/genai-llama-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-llama-plugin" class="cta-button primary track-click" data-event-name="btn_clk_genai_llama_fab" data-event-location="top_cta" target="_blank" rel="noopener noreferrer">View on Fab.com</a>
  <a href="/docs/genai-llama" class="cta-button secondary track-click" data-event-name="btn_clk_genai_llama_docs" data-event-location="top_cta">Documentation</a>
</div>

<div style="background-color: #f9f9f9; border-left: 4px solid #4a4a4a; padding: 25px; margin: 30px 0; border-radius: 4px;">
  <h2 style="margin-top: 0;">Two Modes of Operation</h2>
  <p><strong>HTTP Providers</strong> — Connect to any local inference server. Works out of the box with Ollama, LM Studio, llama.cpp server, vLLM, LocalAI, Jan, or any OpenAI-compatible endpoint.</p>
  <p><strong>Embedded Inference (llama.cpp)</strong> — Run GGUF models directly inside your game process. No server required. Works fully offline on PC and mobile. Optional — requires compiling llama.cpp libraries for your target platform.</p>
</div>

<h2>Key Features:</h2>
<ul>
    <li>
        <p><strong>7 Supported Providers:</strong><br>
        Ollama, LM Studio, llama.cpp server, vLLM, LocalAI, Jan (HTTP), plus embedded llama.cpp for serverless in-process inference.</p>
    </li>
    <li>
        <p><strong>Embedded Inference:</strong><br>
        Run GGUF models directly in your game process — no server, no network, no internet. Load and unload models at runtime. GPU acceleration via CUDA, Vulkan, or Metal.</p>
    </li>
    <li>
        <p><strong>100% Local & Offline:</strong><br>
        All AI processing runs on the player's machine. No data leaves the device. Perfect for privacy-sensitive applications and offline gameplay.</p>
    </li>
    <li>
        <p><strong>Zero Cost Per Request:</strong><br>
        Once a model is downloaded, run unlimited AI interactions. No API bills, no subscriptions.</p>
    </li>
    <li>
        <p><strong>Chat Completions & Streaming:</strong><br>
        Full chat completion and real-time token-by-token streaming. Create typewriter effects, live dialogue, and responsive AI companions.</p>
    </li>
    <li>
        <p><strong>Multimodal Vision:</strong><br>
        Send images alongside text using models like <code>llava</code> or <code>llama3.2-vision</code>. Pass UTexture2D assets directly — the plugin handles Base64 conversion automatically.</p>
    </li>
    <li>
        <p><strong>Generation Options:</strong><br>
        Temperature, Top P, Max Tokens, Seed, Stop sequences, JSON format output, and system prompt support.</p>
    </li>
    <li>
        <p><strong>Server Management:</strong><br>
        Health check, list available models, and provider switching at runtime.</p>
    </li>
    <li>
        <p><strong>Blueprint & C++ Ready:</strong><br>
        Full Blueprint support with async latent nodes, plus a complete C++ API with delegates. Built on <code>UCancellableAsyncAction</code> for proper lifetime management.</p>
    </li>
    <li>
        <p><strong>Broad Platform Support:</strong><br>
        HTTP providers: Windows, macOS, Linux, Android, iOS, PS4, Xbox One, Switch, HoloLens. Embedded inference: Windows, macOS, Linux, Android, iOS. Engine support: UE 5.1 through 5.7.</p>
    </li>
</ul>

<h2>Compatible Models</h2>
<p>Use any model from the <a href="https://ollama.com/library" target="_blank" rel="noopener noreferrer">Ollama library</a> (HTTP) or any GGUF model from <a href="https://huggingface.co/models?search=gguf" target="_blank" rel="noopener noreferrer">Hugging Face</a> (embedded):</p>
<ul>
    <li><strong>General Chat:</strong> <code>llama3</code>, <code>mistral</code>, <code>gemma</code>, <code>phi-3</code>, <code>nemotron-3-nano</code></li>
    <li><strong>Multimodal (Vision):</strong> <code>llava</code>, <code>llama3.2-vision</code>, <code>moondream</code></li>
    <li><strong>Coding:</strong> <code>codellama</code>, <code>starcoder2</code>, <code>deepseek-coder</code></li>
    <li><strong>Small & Fast:</strong> <code>gemma3:1b</code>, <code>phi-3:mini</code>, <code>tinyllama</code>, <code>qwen2.5-0.5b</code></li>
</ul>

<h2>Use Cases:</h2>
<ul>
    <li><strong>Offline NPC Dialogue:</strong> Generate character dialogue that works without an internet connection — critical for single-player games, console titles, and demos.</li>
    <li><strong>Privacy-First Applications:</strong> Keep all player-AI conversations on-device. No data ever leaves the machine.</li>
    <li><strong>Shipped Games with AI:</strong> Bundle a GGUF model with your game via embedded inference. Players don't need to install anything extra.</li>
    <li><strong>Console & Mobile AI:</strong> HTTP providers work on PS4, Xbox, Switch, and HoloLens. Embedded inference works on Android and iOS.</li>
    <li><strong>Rapid Prototyping:</strong> Test AI features instantly with LM Studio's GUI or Ollama's CLI.</li>
    <li><strong>Hybrid Architecture:</strong> Use local models for routine interactions and cloud models (via our <a href="/genai-unreal" class="track-click" data-event-name="lnk_clk_genai_unreal" data-event-location="post_genai_llama">GenAI for Unreal</a> plugin) for moments that demand peak intelligence.</li>
</ul>

<h2>Why Choose This Plugin?</h2>
<ul>
    <li><strong>Most Flexible Local AI:</strong> 7 providers + embedded inference. No other plugin covers this range.</li>
    <li><strong>Production-Ready:</strong> Built on <code>UCancellableAsyncAction</code> with proper lifetime management, cancellation support, and thread-safe embedded inference.</li>
    <li><strong>Console Support:</strong> HTTP providers work on PS4, Xbox One, Switch, and HoloLens — platforms no other local AI plugin supports.</li>
    <li><strong>Built by Developers, for Developers:</strong> Created by the same team behind <a href="/genai-unreal" class="track-click" data-event-name="lnk_clk_genai_unreal" data-event-location="post_genai_llama">GenAI for Unreal</a> and <a href="/genai-china" class="track-click" data-event-name="lnk_clk_genai_china" data-event-location="post_genai_llama">GenAI Chinese Models</a>.</li>
    <li><strong>Dedicated Support:</strong> Join our Discord or email us for help.</li>
</ul>

<h2>Resources & Support</h2>
<ul>
    <li><a href="/docs/genai-llama/" class="track-click" data-event-name="lnk_clk_genai_llama_docs" data-event-location="post_genai_llama">Documentation</a></li>
    <li><a href="/t/discord" class="track-click" data-event-name="lnk_clk_discord" data-event-location="post_genai_llama" target="_blank" rel="noopener noreferrer">Discord Community</a></li>
    <li><strong>Professional Support:</strong> <a href="mailto:mail@muddyterrain.com" class="track-click" data-event-name="lnk_clk_support_email" data-event-location="post_genai_llama">mail@muddyterrain.com</a></li>
</ul>

<div class="button-row">
  <a href="/t/genai-llama-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-llama-plugin" class="cta-button primary track-click" data-event-name="btn_clk_genai_llama_fab" data-event-location="btm_cta" target="_blank" rel="noopener noreferrer">View on Fab.com</a>
  <a href="/docs/genai-llama" class="cta-button secondary track-click" data-event-name="btn_clk_genai_llama_docs" data-event-location="btm_cta">Documentation</a>
</div>

