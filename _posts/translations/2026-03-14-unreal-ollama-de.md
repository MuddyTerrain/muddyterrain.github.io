---
layout: wide
title: "GenAI Llama - Lokale KI fur Unreal Engine (Ehemals Unreal Ollama)"
category: products
permalink: /de/unreal-ollama
author: "Muddy Terrain"
tags: [tools, unreal, gamedev, ai, ollama, local-ai, llama, genai-llama, mistral, phi, gemma, llama-cpp, embedded-inference, lm-studio, vllm]
lang: de
hreflang_group: unreal-ollama
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1774520082/MainBanners_10_gniskq.webp
---





<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1774520082/MainBanners_10_gniskq.webp" alt="GenAI Llama - Lokale KI-Modelle in der Unreal Engine" style="width: 100%;">
</figure>
</div>

<p><strong>Lokale KI-Modelle in Unreal Engine Spielen und Anwendungen ausfuhren — keine Cloud-APIs, kein Internet erforderlich, keine Kosten pro Token.</strong> GenAI Llama (ehemals Unreal Ollama) unterstutzt zwei Modi: Verbindung zu einem beliebigen lokalen Inferenz-Server (Ollama, LM Studio, llama.cpp Server, vLLM, LocalAI, Jan) uber HTTP, oder GGUF-Modelle direkt im Spielprozess mit eingebetteter llama.cpp-Inferenz ausfuhren. Llama 3, Mistral, Phi, Gemma, DeepSeek und hunderte weitere Modelle lokal ausfuhren.</p>

<div class="button-row">
  <a href="/t/genai-llama-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-llama-plugin" class="cta-button primary track-click" data-event-name="btn_clk_genai_llama_fab" data-event-location="top_cta" target="_blank" rel="noopener noreferrer">Auf Fab.com ansehen</a>
  <a href="/docs/genai-llama" class="cta-button secondary track-click" data-event-name="btn_clk_genai_llama_docs" data-event-location="top_cta">Dokumentation</a>
</div>

<div style="background-color: #f9f9f9; border-left: 4px solid #4a4a4a; padding: 25px; margin: 30px 0; border-radius: 4px;">
  <h2 style="margin-top: 0;">Zwei Betriebsmodi</h2>
  <p><strong>HTTP-Anbieter</strong> — Verbindung zu einem beliebigen lokalen Inferenz-Server. Funktioniert sofort mit Ollama, LM Studio, llama.cpp Server, vLLM, LocalAI, Jan oder jedem OpenAI-kompatiblen Endpunkt.</p>
  <p><strong>Eingebettete Inferenz (llama.cpp)</strong> — GGUF-Modelle direkt im Spielprozess ausfuhren. Kein Server erforderlich. Funktioniert vollstandig offline auf PC und Mobilgeraten. Optional — erfordert die Kompilierung der llama.cpp-Bibliotheken fur Ihre Zielplattform.</p>
</div>

<h2>Hauptfunktionen:</h2>
<ul>
    <li>
        <p><strong>7 Unterstutzte Anbieter:</strong><br>
        Ollama, LM Studio, llama.cpp Server, vLLM, LocalAI, Jan (HTTP), plus eingebettetes llama.cpp fur serverlose In-Prozess-Inferenz.</p>
    </li>
    <li>
        <p><strong>Eingebettete Inferenz:</strong><br>
        GGUF-Modelle direkt im Spielprozess ausfuhren — kein Server, kein Netzwerk, kein Internet. Modelle zur Laufzeit laden und entladen. GPU-Beschleunigung uber CUDA, Vulkan oder Metal.</p>
    </li>
    <li>
        <p><strong>100% Lokal & Offline:</strong><br>
        Alle KI-Verarbeitung lauft auf dem Rechner des Spielers. Keine Daten verlassen das Gerat. Perfekt fur datenschutzsensible Anwendungen und Offline-Gameplay.</p>
    </li>
    <li>
        <p><strong>Keine Kosten pro Anfrage:</strong><br>
        Sobald ein Modell heruntergeladen ist, konnen Sie unbegrenzt KI-Interaktionen ausfuhren. Keine API-Rechnungen, keine Abonnements.</p>
    </li>
    <li>
        <p><strong>Chat-Vervollstandigungen & Streaming:</strong><br>
        Vollstandige Chat-Vervollstandigung und Echtzeit-Token-fur-Token-Streaming. Erstellen Sie Schreibmaschineneffekte, Live-Dialoge und reaktionsfahige KI-Begleiter.</p>
    </li>
    <li>
        <p><strong>Multimodale Vision:</strong><br>
        Senden Sie Bilder zusammen mit Text mit Modellen wie <code>llava</code> oder <code>llama3.2-vision</code>. UTexture2D-Assets direkt ubergeben — das Plugin ubernimmt die Base64-Konvertierung automatisch.</p>
    </li>
    <li>
        <p><strong>Generierungsoptionen:</strong><br>
        Temperature, Top P, Max Tokens, Seed, Stop-Sequenzen, JSON-Format-Ausgabe und System-Prompt-Unterstutzung.</p>
    </li>
    <li>
        <p><strong>Server-Verwaltung:</strong><br>
        Health-Check, verfugbare Modelle auflisten und Anbieter-Wechsel zur Laufzeit.</p>
    </li>
    <li>
        <p><strong>Blueprint & C++ bereit:</strong><br>
        Volle Blueprint-Unterstutzung mit asynchronen Latent-Nodes, plus eine vollstandige C++ API mit Delegates. Basiert auf <code>UCancellableAsyncAction</code> fur ordnungsgemaees Lifetime-Management.</p>
    </li>
    <li>
        <p><strong>Breite Plattform-Unterstutzung:</strong><br>
        HTTP-Anbieter: Windows, macOS, Linux, Android, iOS, PS4, Xbox One, Switch, HoloLens. Eingebettete Inferenz: Windows, macOS, Linux, Android, iOS. Engine-Unterstutzung: UE 5.1 bis 5.7.</p>
    </li>
</ul>

<h2>Kompatible Modelle</h2>
<p>Verwenden Sie jedes Modell aus der <a href="https://ollama.com/library" target="_blank" rel="noopener noreferrer">Ollama-Bibliothek</a> (HTTP) oder jedes GGUF-Modell von <a href="https://huggingface.co/models?search=gguf" target="_blank" rel="noopener noreferrer">Hugging Face</a> (eingebettet):</p>
<ul>
    <li><strong>Allgemeiner Chat:</strong> <code>llama3</code>, <code>mistral</code>, <code>gemma</code>, <code>phi-3</code>, <code>nemotron-3-nano</code></li>
    <li><strong>Multimodal (Vision):</strong> <code>llava</code>, <code>llama3.2-vision</code>, <code>moondream</code></li>
    <li><strong>Programmierung:</strong> <code>codellama</code>, <code>starcoder2</code>, <code>deepseek-coder</code></li>
    <li><strong>Klein & Schnell:</strong> <code>gemma3:1b</code>, <code>phi-3:mini</code>, <code>tinyllama</code>, <code>qwen2.5-0.5b</code></li>
</ul>

<h2>Anwendungsfalle:</h2>
<ul>
    <li><strong>Offline-NPC-Dialoge:</strong> Charakter-Dialoge generieren, die ohne Internetverbindung funktionieren — unverzichtbar fur Einzelspieler-Spiele, Konsolen-Titel und Demos.</li>
    <li><strong>Datenschutz-First-Anwendungen:</strong> Alle Spieler-KI-Gesprache auf dem Gerat behalten. Keine Daten verlassen jemals die Maschine.</li>
    <li><strong>Spiele mit KI ausliefern:</strong> Ein GGUF-Modell mit Ihrem Spiel uber eingebettete Inferenz bundeln. Spieler mussen nichts Zusatzliches installieren.</li>
    <li><strong>Konsole & Mobile KI:</strong> HTTP-Anbieter funktionieren auf PS4, Xbox, Switch und HoloLens. Eingebettete Inferenz funktioniert auf Android und iOS.</li>
    <li><strong>Schnelles Prototyping:</strong> KI-Funktionen sofort testen mit der GUI von LM Studio oder der CLI von Ollama.</li>
    <li><strong>Hybride Architektur:</strong> Lokale Modelle fur routinemaige Interaktionen und Cloud-Modelle (uber unser <a href="/genai-unreal" class="track-click" data-event-name="lnk_clk_genai_unreal" data-event-location="post_genai_llama">GenAI for Unreal</a> Plugin) fur Momente, die Spitzen-Intelligenz erfordern.</li>
</ul>

<h2>Warum dieses Plugin wahlen?</h2>
<ul>
    <li><strong>Flexibelste lokale KI:</strong> 7 Anbieter + eingebettete Inferenz. Kein anderes Plugin deckt diesen Bereich ab.</li>
    <li><strong>Produktionsreif:</strong> Basiert auf <code>UCancellableAsyncAction</code> mit ordnungsgemaeem Lifetime-Management, Abbruch-Unterstutzung und thread-sicherer eingebetteter Inferenz.</li>
    <li><strong>Konsolen-Unterstutzung:</strong> HTTP-Anbieter funktionieren auf PS4, Xbox One, Switch und HoloLens — Plattformen, die kein anderes lokales KI-Plugin unterstutzt.</li>
    <li><strong>Von Entwicklern, fur Entwickler:</strong> Erstellt vom selben Team hinter <a href="/genai-unreal" class="track-click" data-event-name="lnk_clk_genai_unreal" data-event-location="post_genai_llama">GenAI for Unreal</a> und <a href="/genai-china" class="track-click" data-event-name="lnk_clk_genai_china" data-event-location="post_genai_llama">GenAI Chinese Models</a>.</li>
    <li><strong>Dedizierter Support:</strong> Treten Sie unserem Discord bei oder schreiben Sie uns eine E-Mail.</li>
</ul>

<h2>Ressourcen & Support</h2>
<ul>
    <li><a href="/docs/genai-llama/" class="track-click" data-event-name="lnk_clk_genai_llama_docs" data-event-location="post_genai_llama">Dokumentation</a></li>
    <li><a href="/t/discord" class="track-click" data-event-name="lnk_clk_discord" data-event-location="post_genai_llama" target="_blank" rel="noopener noreferrer">Discord Community</a></li>
    <li><strong>Professioneller Support:</strong> <a href="mailto:mail@muddyterrain.com" class="track-click" data-event-name="lnk_clk_support_email" data-event-location="post_genai_llama">mail@muddyterrain.com</a></li>
</ul>

<div class="button-row">
  <a href="/t/genai-llama-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-llama-plugin" class="cta-button primary track-click" data-event-name="btn_clk_genai_llama_fab" data-event-location="btm_cta" target="_blank" rel="noopener noreferrer">Auf Fab.com ansehen</a>
  <a href="/docs/genai-llama" class="cta-button secondary track-click" data-event-name="btn_clk_genai_llama_docs" data-event-location="btm_cta">Dokumentation</a>
</div>

