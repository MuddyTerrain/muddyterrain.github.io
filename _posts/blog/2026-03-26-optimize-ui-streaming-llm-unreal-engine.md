---
layout: wide
title: "The 'Typewriter Effect': Optimizing UI for Streaming LLMs in UE5"
description: "Learn how to optimize Unreal Engine 5's UMG UI for streaming LLM text. Discover delta buffering and cancellation to prevent phantom text."
category: guides
permalink: /blog/optimize-ui-streaming-llm-unreal-engine
author: "Muddy Terrain"
tags: [unreal-engine, umg, ui-optimization, streaming-llm, chatgpt-streaming, typewriter-effect, game-development, blueprints]
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1772931701/MainBanners_4_d9nmqo.webp
---

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1772931701/MainBanners_4_d9nmqo.webp" alt="Optimizing UI for Streaming LLMs in Unreal Engine 5" style="width: 100%;">
</figure>
</div>

<h2>Optimizing UI for Streaming LLMs in Unreal Engine 5</h2>

<p>When you ask an AI model like ChatGPT or Claude for a long paragraph of text, waiting for the entire generation to finish before showing the user a response can feel sluggish. The solution is <strong>Streaming</strong>—delivering the text token-by-token (the "Typewriter Effect") via an open HTTP connection.</p>

<p>However, blindly dumping streaming text into an Unreal Engine 5 UMG (Unreal Motion Graphics) <strong>UTextBlock</strong> can cause severe performance bottlenecks and strange visual bugs if not handled correctly. This guide covers how to optimize streaming UI using the <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="track-click" data-event-name="lnk_clk_genai_fab" data-event-location="post_guide_streaming" target="_blank" rel="noopener noreferrer">GenAI for Unreal</a> plugin.</p>

<h2>The Problem: The Naive Approach</h2>

<p>When a streaming request is active, the AI provider sends tiny chunks of text called "deltas" (e.g., "The", " quick", " brown"). The naive approach is to use the <strong>OnStreamUpdate</strong> event to append the delta to a String, and then immediately call <strong>SetText()</strong> on your UI widget.</p>

<p><strong>Why this is bad:</strong></p>
<ul>
    <li>Modern LLMs generate tokens incredibly fast. Your <strong>OnStreamUpdate</strong> event might fire 30 to 50 times a second.</li>
    <li>Calling <strong>SetText()</strong> on a complex UMG widget forces Unreal's Slate UI framework to recalculate layout, text wrapping, and rendering bounds. Doing this dozens of times per frame will tank your game's framerate.</li>
</ul>

<h2>The Solution: Delta Buffering</h2>

<p>Instead of updating the UI every time a token arrives, you should <strong>buffer the text</strong> and flush it to the UI on a fixed timer (e.g., every 0.1 seconds).</p>

<h3>Blueprint Workflow for Buffering</h3>

<ol>
    <li>Create two String variables in your UI Blueprint: <strong>AccumulatedText</strong> and <strong>DisplayedText</strong>.</li>
    <li>When <strong>OnStreamUpdate</strong> fires, simply append the Delta string to <strong>AccumulatedText</strong>. <em>Do not touch the UI.</em></li>
    <li>Use a <strong>Set Timer by Event</strong> (looping every 0.1s).</li>
    <li>In the Timer event, check if <strong>AccumulatedText</strong> is different from <strong>DisplayedText</strong>. If it is, call <strong>SetText()</strong> on your UI widget using <strong>AccumulatedText</strong>, and update <strong>DisplayedText</strong>.</li>
</ol>

<p>By decoupling the network stream from the UI rendering, you guarantee smooth framerates regardless of how fast the AI generates text.</p>

<h2>Handling "Phantom Text" (Cancellation)</h2>

<p>Another common bug in streaming AI interfaces is "Phantom Text." This happens when a player asks an NPC a question, the text starts streaming, and the player suddenly hits 'Escape' or walks away, closing the UI.</p>

<p>Because the HTTP stream is still active in the background, the plugin will continue receiving tokens. If you destroy the widget without canceling the request, or if your weak pointers aren't set up correctly, you risk game crashes or memory leaks.</p>

<h3>Graceful Cancellation</h3>

<p>The GenAI for Unreal plugin's Blueprint nodes are built on <strong>UCancellableAsyncAction</strong>. This means the node returns a reference to itself. You should promote this reference to a variable (e.g., <strong>ActiveStreamingRequest</strong>).</p>

<p>When the player closes the UI or walks away from the NPC, call the <strong>Cancel</strong> function on that variable. This immediately severs the HTTP connection, stops the token generation, and saves you money on API costs by halting the AI mid-sentence.</p>

<pre><code class="language-unrealscript">// Blueprint Pseudocode: On Widget Destruct or Player Walk Away
If (IsValid(ActiveStreamingRequest))
{
    ActiveStreamingRequest -> Cancel()
    Clear Timer by Handle (UI Update Timer)
}
</code></pre>

<p>Implementing delta buffering and proper cancellation ensures your AI-driven game feels polished, performs well, and doesn't waste API credits.</p>

<div class="button-row">
  <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="cta-button primary track-click" data-event-name="btn_clk_genai_fab" data-event-location="post_guide_streaming_cta" target="_blank" rel="noopener noreferrer">GenAI for Unreal on Fab</a>
  <a href="/docs/genai-unreal/streaming/" class="cta-button secondary track-click" data-event-name="btn_clk_genai_docs" data-event-location="post_guide_streaming_cta">Read the Streaming Docs</a>
</div>


