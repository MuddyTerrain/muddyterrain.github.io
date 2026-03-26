---
layout: wide
title: "Using Microsoft Phi in Unreal Engine - Small Language Models for Games"
category: guides
permalink: /blog/using-microsoft-phi-in-unreal-engine
author: "Muddy Terrain"
tags: [unreal-engine, microsoft, phi, phi-3, phi-4, small-language-model, local-ai, game-development, ollama]
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1774520082/MainBanners_10_gniskq.webp
---

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1774520082/MainBanners_10_gniskq.webp" alt="Using Microsoft Phi in Unreal Engine" style="width: 100%;">
</figure>
</div>

<h2>Using Microsoft Phi in Unreal Engine</h2>

<p>Microsoft's Phi models prove that small language models can deliver surprisingly capable results. Phi-3 Mini (3.8B parameters) and Phi-4 offer strong reasoning and instruction-following in a compact package — ideal for game developers who need AI that runs on consumer hardware without sacrificing quality.</p>

<h2>Why Phi for Games?</h2>

<ul>
    <li><strong>Tiny but capable.</strong> Phi-3 Mini fits in under 4GB of VRAM. It runs on integrated GPUs and even some gaming laptops without a dedicated GPU.</li>
    <li><strong>Strong reasoning.</strong> Despite its size, Phi-3 outperforms many larger models on reasoning benchmarks. It handles structured game logic, puzzles, and rule-following well.</li>
    <li><strong>Fast response times.</strong> Smaller models generate tokens faster, meaning less perceived latency for players waiting for NPC responses.</li>
    <li><strong>MIT license.</strong> Commercial use is permitted without restrictions.</li>
    <li><strong>Low hardware requirements.</strong> Ship your game with AI that works on the widest range of player hardware.</li>
</ul>

<h2>Best Phi Models for Unreal Engine</h2>

<ul>
    <li><strong>Phi-3 Mini (3.8B)</strong> — The sweet spot for game AI. Fast, small, and surprisingly smart.</li>
    <li><strong>Phi-3 Small (7B)</strong> — More capable, still runs on mid-range GPUs.</li>
    <li><strong>Phi-3 Medium (14B)</strong> — Higher quality for complex interactions, needs a decent GPU.</li>
    <li><strong>Phi-4</strong> — Microsoft's latest, with improved reasoning and instruction-following.</li>
</ul>

<h2>Running Phi in Unreal Engine</h2>

<p>Use <a href="/t/genai-llama-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-llama-plugin" class="track-click" data-event-name="lnk_clk_genai_llama_fab" data-event-location="post_guide_phi" target="_blank" rel="noopener noreferrer">GenAI Llama</a> with Ollama to run Phi locally:</p>

<ol>
    <li>Install <a href="https://ollama.com/" target="_blank" rel="noopener noreferrer">Ollama</a></li>
    <li>Pull Phi: <code>ollama pull phi3:mini</code></li>
    <li>Install GenAI Llama</li>
    <li>Start using Phi in your Blueprints — chat completions and streaming work out of the box</li>
</ol>

<p>For hybrid setups (local Phi + cloud GPT-5/Claude), <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="track-click" data-event-name="lnk_clk_genai_fab" data-event-location="post_guide_phi" target="_blank" rel="noopener noreferrer">GenAI for Unreal</a> supports Phi through its OpenAI Compatible Mode alongside all major cloud providers.</p>

<div class="button-row">
  <a href="/t/genai-llama-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-llama-plugin" class="cta-button primary track-click" data-event-name="btn_clk_genai_llama_fab" data-event-location="post_guide_phi_cta" target="_blank" rel="noopener noreferrer">GenAI Llama</a>
  <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="cta-button secondary track-click" data-event-name="btn_clk_genai_fab" data-event-location="post_guide_phi_cta" target="_blank" rel="noopener noreferrer">GenAI for Unreal on Fab</a>
</div>
