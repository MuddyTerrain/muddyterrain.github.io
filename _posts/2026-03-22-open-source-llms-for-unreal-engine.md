---
layout: wide
title: "Open Source LLMs for Unreal Engine - Complete Guide to Local AI in Games"
category: guides
permalink: /blog/open-source-llms-for-unreal-engine
author: "Muddy Terrain"
tags: [unreal-engine, open-source, llm, local-ai, llama, mistral, phi, gemma, deepseek, codellama, ollama, game-development, free-ai]
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1759079669/Screenshot_2025-09-28_133409_e7uag9.webp
---

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1759079669/Screenshot_2025-09-28_133409_e7uag9.webp" alt="Open Source LLMs for Unreal Engine Game Development" style="width: 100%;">
</figure>
</div>

<h2>Open Source LLMs for Unreal Engine - The Complete Guide</h2>

<p>You don't need to pay per-request API fees to add AI to your Unreal Engine game. Open-source large language models have reached a point where they deliver genuinely useful results — and they run entirely on local hardware. No cloud, no API keys, no ongoing costs.</p>

<p>This guide covers every major open-source LLM you can run in Unreal Engine today, which ones work best for different game scenarios, and how to integrate them.</p>

<h2>The Open Source LLM Landscape</h2>

<h3>Meta Llama 3</h3>
<p>The most popular open-source model family. Llama 3.2 comes in 1B, 3B, 8B, and 70B sizes. The 8B variant is the workhorse — handles dialogue, quest generation, and narrative AI with high quality. Vision variants can process images. <a href="/blog/using-llama-3-in-unreal-engine">Full Llama 3 guide</a>.</p>

<h3>Mistral / Mixtral</h3>
<p>French AI lab Mistral builds exceptionally efficient models. Mistral 7B rivals much larger models, and Mixtral 8x7B uses mixture-of-experts to deliver near-frontier quality at moderate hardware requirements. Excellent multilingual support. <a href="/blog/using-mistral-ai-in-unreal-engine">Full Mistral guide</a>.</p>

<h3>Microsoft Phi</h3>
<p>The smallest capable models available. Phi-3 Mini at 3.8B parameters runs on integrated GPUs and still handles structured game logic well. Perfect for shipping AI that works on the widest range of player hardware. <a href="/blog/using-microsoft-phi-in-unreal-engine">Full Phi guide</a>.</p>

<h3>Google Gemma</h3>
<p>Built from the same research as Gemini. Gemma 3 1B is one of the fastest models available — sub-second responses on any GPU. Multimodal variants support vision input. <a href="/blog/using-google-gemma-in-unreal-engine">Full Gemma guide</a>.</p>

<h3>DeepSeek</h3>
<p>DeepSeek V3 and R1 are among the strongest open-source models period. R1 is a reasoning model — it "thinks" through problems step by step, making it excellent for puzzle logic, complex quest design, and game master AI. Available locally via Ollama or through cloud APIs. <a href="/blog/using-deepseek-in-unreal-engine">Full DeepSeek guide</a>.</p>

<h3>NVIDIA Nemotron</h3>
<p>NVIDIA's Nemotron 3 Nano is optimized for NVIDIA GPUs with excellent inference speed. If your players have NVIDIA hardware (most do), Nemotron delivers strong performance.</p>

<h3>CodeLlama / DeepSeek Coder / StarCoder</h3>
<p>Code-specialized models are useful for procedural content generation with structured output. When you need your AI to output valid JSON for inventory items, quest structures, or game events, code models follow formatting instructions more reliably.</p>

<h3>TinyLlama / Qwen 2.5 0.5B</h3>
<p>The smallest usable models. Under 1B parameters. Limited capability but can handle simple tasks like generating item names, flavor text, or random NPC barks. Run on anything.</p>

<h2>Which Model Should You Use?</h2>

<table>
    <thead>
        <tr>
            <th>Use Case</th>
            <th>Recommended Model</th>
            <th>Why</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>NPC barks / simple text</td>
            <td>Gemma 3 1B or Phi-3 Mini</td>
            <td>Ultra-fast, runs on anything</td>
        </tr>
        <tr>
            <td>Multi-turn dialogue</td>
            <td>Llama 3.1 8B or Mistral 7B</td>
            <td>Good quality, reasonable hardware</td>
        </tr>
        <tr>
            <td>Quest / story generation</td>
            <td>Llama 3.1 8B or DeepSeek V3</td>
            <td>Creative writing strength</td>
        </tr>
        <tr>
            <td>Complex reasoning / puzzles</td>
            <td>DeepSeek R1 or Mixtral 8x7B</td>
            <td>Strong logical reasoning</td>
        </tr>
        <tr>
            <td>Structured JSON output</td>
            <td>CodeLlama or DeepSeek Coder</td>
            <td>Reliable formatting</td>
        </tr>
        <tr>
            <td>Multilingual games</td>
            <td>Mistral or Qwen 2.5</td>
            <td>Best multilingual support</td>
        </tr>
        <tr>
            <td>Vision / image analysis</td>
            <td>Llama 3.2 Vision or LLaVA</td>
            <td>Multimodal capability</td>
        </tr>
    </tbody>
</table>

<h2>How to Run Open Source LLMs in Unreal Engine</h2>

<p>All of these models work through <a href="https://ollama.com/" target="_blank" rel="noopener noreferrer">Ollama</a>, which provides a simple local API. We offer two Unreal Engine plugins:</p>

<h3>GenAI Llama (Local AI Plugin)</h3>
<p><a href="/t/genai-llama-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-llama-plugin" class="track-click" data-event-name="lnk_clk_genai_llama_fab" data-event-location="post_guide_opensource" target="_blank" rel="noopener noreferrer">GenAI Llama</a> connects Unreal Engine to 7 local inference providers (Ollama, LM Studio, llama.cpp server, vLLM, LocalAI, Jan) plus embedded llama.cpp for in-process GGUF inference. Chat completions, streaming, vision support. Available on Fab.</p>

<h3>GenAI for Unreal (Full Platform)</h3>
<p><a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="track-click" data-event-name="lnk_clk_genai_fab" data-event-location="post_guide_opensource" target="_blank" rel="noopener noreferrer">GenAI for Unreal</a> supports local models through OpenAI Compatible Mode alongside ChatGPT, Claude, Gemini, Grok, and DeepSeek cloud APIs. Run local models offline and switch to cloud when connected.</p>

<div class="button-row">
  <a href="/t/genai-llama-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-llama-plugin" class="cta-button primary track-click" data-event-name="btn_clk_genai_llama_fab" data-event-location="post_guide_opensource_cta" target="_blank" rel="noopener noreferrer">GenAI Llama (Free)</a>
  <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="cta-button secondary track-click" data-event-name="btn_clk_genai_fab" data-event-location="post_guide_opensource_cta" target="_blank" rel="noopener noreferrer">GenAI for Unreal on Fab</a>
</div>
