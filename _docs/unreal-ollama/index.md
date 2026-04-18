---
layout: documentation
title: GenAI Llama - Home
permalink: /docs/genai-llama/
nav_order: 1
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1774520082/MainBanners_10_gniskq.webp
description: "Run local LLMs in Unreal Engine with Ollama, LM Studio, or embedded llama.cpp inference. Fully offline AI for games on PC, mobile, and console."
tags: [unreal-engine, ollama, llama-cpp, local-llm, offline-ai, game-development]
---

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1774520082/MainBanners_10_gniskq.webp" alt="GenAI Llama Plugin" style="width: 100%;">
</figure>
</div>

**Welcome to the official documentation for GenAI Llama, an Unreal Engine plugin for running local AI models inside your games and applications.** No cloud API keys, no internet required, no per-token costs.

GenAI Llama supports two modes of operation:

- **HTTP Providers** — Connect to any local inference server (Ollama, LM Studio, llama.cpp server, vLLM, LocalAI, Jan, or any OpenAI-compatible endpoint). Works out of the box.
- **Embedded Inference (llama.cpp)** — Run GGUF models directly inside your game process with no server required. Fully offline, works on PC and mobile. Optional — requires dropping prebuilt binaries into the plugin and rebuilding.

<div class="button-row">
  <a href="/t/genai-llama-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-llama-plugin" class="cta-button primary track-click" data-event-name="btn_clk_genai_llama_fab" data-event-location="docs_top_cta" target="_blank" rel="noopener noreferrer">View on Fab.com</a>
  <a href="/t/discord" class="cta-button secondary track-click" data-event-name="btn_clk_join_discord" data-event-location="docs_top_cta" target="_blank" rel="noopener noreferrer">Join Discord</a>
</div>

---

## Getting Started

New to GenAI Llama? Here's the recommended path:

1.  **[Quick Start](/docs/genai-llama/quick-start/)** — Get your first local AI response in five minutes, via HTTP (Ollama) or embedded (llama.cpp). Pick whichever suits you.
2.  **[Blueprint Nodes](/docs/genai-llama/blueprint-nodes/)** — Reference for every node the plugin adds: chat completion, streaming, embedded model loading, health checks.
3.  **[GGUF Models](/docs/genai-llama/gguf-models/)** — Where to download models, quantization reference, sizing for mobile / desktop / console.
4.  **[Embedded Inference Setup](/docs/genai-llama/embedded-setup/)** — Drop llama.cpp binaries into the plugin, per platform. Required for the embedded provider.
5.  **[Troubleshooting](/docs/genai-llama/troubleshooting/)** — When something doesn't work, start here.

---

## What Ships With This Plugin

| Component | Included | Notes |
|---|---|---|
| Plugin source code | Yes | Full C++ source for all features |
| HTTP provider support | Yes | Works immediately with any local inference server |
| llama.cpp headers | Yes | Pinned to b8802 (April 2026) |
| llama.cpp compiled libraries | No | Download prebuilt or compile — see [Embedded Inference Setup](/docs/genai-llama/embedded-setup/) |
| Example project | Yes | Blueprint examples demonstrating all features |

**HTTP providers work out of the box.** Embedded inference is opt-in — download the pinned b8802 binaries from [llama.cpp GitHub releases](https://github.com/ggml-org/llama.cpp/releases/tag/b8802) or compile from source.

<div style="padding: 10px 15px; background-color: #e6f7ff; border-left: 4px solid #07a2ff; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold;">Embedded inference is pinned to llama.cpp b8802 (April 2026)</p>
  <p style="margin: 5px 0 0 0;">The plugin's bundled headers and dynamic-loader symbol list are validated against this <strong>exact</strong> build. llama.cpp renames and removes exported symbols between releases, so any other version will typically fail symbol resolution at startup. The <strong>Project Settings &gt; Plugins &gt; GenAI Llama</strong> panel has a one-click button to open the pinned release page.</p>
</div>

---

## Supported Providers

| Provider | API Format | Default Port | Notes |
|---|---|---|---|
| **Ollama** | Ollama Native | 11434 | Full-featured, easiest setup |
| **LM Studio** | OpenAI Compatible | 1234 | GUI-based, great for prototyping |
| **llama.cpp server** | OpenAI Compatible | 8080 | Lightweight HTTP server |
| **vLLM** | OpenAI Compatible | 8000 | High-throughput production serving |
| **LocalAI** | OpenAI Compatible | 8080 | Drop-in OpenAI replacement |
| **Jan** | OpenAI Compatible | 1337 | Desktop app with model management |
| **Embedded (llama.cpp)** | Direct / In-process | N/A | No server needed. Requires compiled libs. |

---

## Compatibility

- **Unreal Engine:** 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7
- **Platforms:** Windows, macOS, Linux (HTTP and Embedded)
- **Experimental:** Android, iOS, PS4, Xbox One, Switch, HoloLens — not in the Fab allow-list at launch.

### Platform Support Detail

| Platform | HTTP Providers | Embedded (prebuilt) | Embedded (compile from source) |
|---|---|---|---|
| Windows (x64) | Yes | Yes — CUDA, Vulkan, CPU | Yes |
| macOS (Apple Silicon) | Yes | Yes — Metal, CPU | Yes |
| macOS (Intel) | Yes | Yes — CPU | Yes |
| Linux (x64) | Yes | Yes — CUDA, Vulkan, CPU | Yes |
| Android (ARM64) *(experimental)* | — | No | Yes — Vulkan, CPU (static `.a`) |
| iOS (ARM64) *(experimental)* | — | No | Yes — Metal, CPU (static `.a`) |
| PS4 / Xbox One / Switch / HoloLens *(experimental)* | — | — | — |

Desktop platforms support **dynamic loading** — drop prebuilt shared libs into `ThirdParty/LlamaCpp/lib/<Platform>/` and rebuild. Mobile requires **static linking** — compile llama.cpp for the NDK/Xcode toolchain and place the resulting `.a` files in the matching folder. Consoles don't support embedded inference; use an HTTP provider on a companion PC.

---

## Why GenAI Llama?

- **Zero cloud costs.** Run entirely on the user's machine (or your companion server) — no per-token billing.
- **Full offline support.** Embedded mode works with no internet connection, ever.
- **Privacy by default.** User prompts never leave the player's device when running embedded.
- **One plugin, seven providers.** Switch between Ollama, LM Studio, and embedded llama.cpp with a single dropdown change — same Blueprint nodes.
- **Cancellable async.** Every request is a Blueprint async node with `Cancel()` — safe to tear down mid-generation when the player closes the chat UI.
- **Live status in-editor.** The Project Settings panel shows whether embedded inference is loaded, plus a per-platform scan of what libraries are on disk.

---

## Multimodal Vision (HTTP only)

Vision models (`llava`, `llama3.2-vision`, `gpt-4o`) work through HTTP providers. Attach either:

- **Images As Textures** — `UTexture2D` references on a chat message; plugin auto-encodes to PNG Base64.
- **Images** — pre-encoded Base64 strings.

Image formatting is handled per provider automatically (Ollama `images` array vs. OpenAI-compatible `image_url` content parts).

**Embedded inference is text-only for now.** llama.cpp's multimodal runtime (`libmtmd`) ships in the pinned release but isn't yet wired into the plugin's embedded path. For vision/audio, route through an HTTP provider.

---

## Next Steps

- **[Quick Start](/docs/genai-llama/quick-start/)** — Five-minute HTTP or embedded walk-through.
- **[Blueprint Nodes](/docs/genai-llama/blueprint-nodes/)** — Complete node reference with inputs and outputs.
- **[C++ API](/docs/genai-llama/cpp-api/)** — Production-ready C++ snippets for chat, streaming, embedded loading.
- **[GGUF Models](/docs/genai-llama/gguf-models/)** — Where to get models, which quant to pick.
- **[Embedded Inference Setup](/docs/genai-llama/embedded-setup/)** — Enable the embedded provider.
- **[Troubleshooting](/docs/genai-llama/troubleshooting/)** — When things don't work.
- **[Example Project](/docs/genai-llama/example-project/)** — Download a ready-made example for your engine version.
