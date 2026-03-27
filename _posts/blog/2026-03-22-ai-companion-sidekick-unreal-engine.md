---
layout: wide
title: "How to Build an AI Companion in Unreal Engine - Smart NPCs with LLMs"
description: "Build AI companions in Unreal Engine with persistent memory, personality, and world awareness. Step-by-step guide using LLMs for smart NPC sidekicks."
category: guides
permalink: /blog/ai-companion-sidekick-unreal-engine
author: "Muddy Terrain"
tags: [unreal-engine, ai-companion, ai-sidekick, npc, smart-npc, conversational-ai, game-ai, game-development]
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1772931701/MainBanners_4_d9nmqo.webp
---

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1772931701/MainBanners_4_d9nmqo.webp" alt="AI Companion in Unreal Engine" style="width: 100%;">
</figure>
</div>

<h2>How to Build an AI Companion in Unreal Engine</h2>

<p>AI companions — characters that travel with the player, remember shared experiences, and respond intelligently to the game world — have been a dream of game development for decades. LLMs finally make them possible.</p>

<h2>What Makes an AI Companion Work</h2>

<ul>
    <li><strong>Persistent personality.</strong> The character maintains consistent traits, speaking patterns, and opinions across every interaction. A system prompt defines who they are — their backstory, quirks, knowledge, and limitations.</li>
    <li><strong>Conversation memory.</strong> The companion remembers what you've discussed, what you've done together, and how the relationship has evolved. Multi-turn conversation history makes this work.</li>
    <li><strong>World awareness.</strong> By injecting game state into the AI context — current location, recent events, inventory, quest progress — the companion comments on what's happening naturally.</li>
    <li><strong>Emotional range.</strong> Modern LLMs like Claude Opus and GPT-5 generate genuinely nuanced emotional responses. Companions can be worried, excited, frustrated, or amused in ways that feel authentic.</li>
    <li><strong>Agency.</strong> With function calling, companions can take actions — heal the player, point out dangers, suggest routes, or react to enemies they "see" through multimodal vision.</li>
</ul>

<h2>Architecture</h2>

<ol>
    <li><strong>System prompt</strong> — define the character's personality, knowledge, and rules</li>
    <li><strong>Context injection</strong> — feed current game state into each request</li>
    <li><strong>Conversation history</strong> — maintain multi-turn memory</li>
    <li><strong>Function calling</strong> — let the companion trigger game actions</li>
    <li><strong>Streaming</strong> — deliver responses word-by-word for natural pacing</li>
    <li><strong>Voice</strong> — use TTS to give them a unique voice (ElevenLabs, OpenAI TTS)</li>
</ol>

<h3>Implementation Loop (What Actually Works)</h3>

<ol>
    <li>Keep a short memory buffer for live dialogue (last 10-20 turns).</li>
    <li>Store long-term memory as compact facts ("player saved companion in chapter 2").</li>
    <li>Inject only relevant world state each turn (location, nearby actors, active objective).</li>
    <li>Use function calling for actions, not free-form text parsing.</li>
    <li>Stream responses and interrupt cleanly if combat or cutscenes begin.</li>
</ol>

<h3>Companion Guardrails</h3>

<ul>
    <li>Lore drift: add hard constraints in system prompt (factions, timeline, forbidden knowledge).</li>
    <li>Over-talking: enforce max token length and cooldown timers between unsolicited lines.</li>
    <li>Gameplay conflicts: prioritize gameplay events over dialogue generation callbacks.</li>
    <li>Cost spikes: route ambient chatter to smaller/local models and reserve premium models for story beats.</li>
</ul>

<h2>Choosing a Model</h2>

<ul>
    <li><strong>Cloud (best quality):</strong> Claude Opus 4.6 for character depth, GPT-5 for speed + quality, Gemini 3.1 for multimodal</li>
    <li><strong>Local (offline/free):</strong> Llama 3.1 8B or Mistral 7B via Ollama for companions that work without internet</li>
    <li><strong>Hybrid:</strong> Use local models for routine banter, cloud models for important story moments</li>
</ul>

<h2>Tools</h2>

<p><a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="track-click" data-event-name="lnk_clk_genai_fab" data-event-location="post_guide_companion" target="_blank" rel="noopener noreferrer">GenAI for Unreal</a> provides everything needed: streaming chat, function calling, conversation history, vision, and TTS across all major providers.</p>

<p><a href="/t/genai-llama-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-llama-plugin" class="track-click" data-event-name="lnk_clk_genai_llama_fab" data-event-location="post_guide_companion" target="_blank" rel="noopener noreferrer">GenAI Llama</a> adds offline companion AI with zero cost using local models.</p>

<div class="button-row">
  <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="cta-button primary track-click" data-event-name="btn_clk_genai_fab" data-event-location="post_guide_companion_cta" target="_blank" rel="noopener noreferrer">GenAI for Unreal on Fab</a>
  <a href="/t/genai-llama-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-llama-plugin" class="cta-button secondary track-click" data-event-name="btn_clk_genai_llama_fab" data-event-location="post_guide_companion_cta" target="_blank" rel="noopener noreferrer">GenAI Llama</a>
</div>
