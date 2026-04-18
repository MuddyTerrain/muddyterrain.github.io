---
layout: documentation
title: Quick Start
permalink: /docs/genai-llama/quick-start/
nav_order: 2
description: Get your first local AI response in Unreal Engine in 5 minutes using GenAI Llama — either HTTP (Ollama) or embedded (llama.cpp) inference.
tags: [unreal-engine, genai-llama, quick-start, blueprint, local-llm, ollama, llama-cpp]
---

Get a working AI response inside Unreal Engine in five minutes. Two paths — pick whichever matches what you already have installed.

- **HTTP path (fastest, ~2 min)** — You install a local inference server (Ollama, LM Studio, etc.) and point the plugin at it. No plugin rebuild required.
- **Embedded path (~5 min)** — The plugin runs llama.cpp directly inside the game process. No external server, fully offline. Requires dropping prebuilt binaries into the plugin and rebuilding.

If you're unsure which to pick, start with HTTP. Both use the same Blueprint nodes — switching is a single dropdown change.

---

## Path A: HTTP Provider (Ollama)

### Step 1: Install Ollama

Download and install [Ollama](https://ollama.com/). It runs a local HTTP server at `http://localhost:11434` in the background once installed.

### Step 2: Pull a Model

In a terminal:

```bash
ollama pull llama3
```

This downloads Meta's Llama 3 (~4.7 GB). For a faster test, use `ollama pull gemma3:1b` (~800 MB).

### Step 3: Enable the Plugin

In Unreal, open **Edit > Plugins**, search for **GenAI Llama**, enable it, and restart the editor if prompted.

### Step 4: Wire Up the Blueprint

1. Create a new **Actor Blueprint** and open it.
2. On **Event BeginPlay**, drag off and add **Request Chat Stream**.
3. On the `Chat Settings` pin, right-click and **Split Struct Pin**, then set:
   - **Model** = `llama3`
   - **Connection > Provider** = `Ollama`
   - **Connection > Base URL** = `http://localhost:11434`
   - **Messages** = one entry with **Role** = `user` and **Content** = `Tell me a joke.`
4. On the **On Event** delegate, add a **Print String** connected to `Partial Message > Content`.
5. Drag the Blueprint into the level and **press Play**.

Tokens will stream into the top-left viewport overlay. Done.

---

## Path B: Embedded Inference (llama.cpp)

<div style="padding: 10px 15px; background-color: #e6f7ff; border-left: 4px solid #07a2ff; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold;">Pinned to llama.cpp b8802 (April 2026)</p>
  <p style="margin: 5px 0 0 0;">Embedded inference is validated against this <strong>exact</strong> build. llama.cpp renames and removes exported symbols between releases, so a newer version will typically fail symbol resolution at startup. The <strong>Project Settings &gt; Plugins &gt; GenAI Llama</strong> panel has a one-click button to open the pinned release page.</p>
</div>

### Step 1: Download the Pinned llama.cpp Binaries

Open **Project Settings > Plugins > GenAI Llama** and click **Download b8802**. Pick the zip matching your platform:

| Platform | Archive to download | Notes |
|---|---|---|
| Windows | `llama-b8802-bin-win-cpu-x64.zip` | CPU-only — works on any Windows machine. For NVIDIA, use the `-cuda-*` variant instead. |
| macOS (Apple Silicon) | `llama-b8802-bin-macos-arm64.zip` | Metal built in. |
| Linux | `llama-b8802-bin-ubuntu-x64-cpu-*.tar.gz` | CPU baseline. |

### Step 2: Drop the Binaries Into the Plugin

Extract all shared library files and copy them into:

```
<YourProject>/Plugins/GenAILlama/ThirdParty/LlamaCpp/lib/<Platform>/
```

Where `<Platform>` is `Win64`, `Mac`, or `Linux`.

You should end up with files like `llama.dll`, `ggml-base.dll`, `ggml-cpu.dll`, `ggml-rpc.dll` in the Win64 folder (or their `.dylib` / `.so` equivalents on Mac / Linux).

<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">macOS only: remove the quarantine flag</p>
  <p style="margin: 5px 0 0 0; color: #856404;">Dylibs downloaded through a browser are flagged by Gatekeeper and silently refuse to load. Run once after copying:<br><code>xattr -cr &lt;YourProject&gt;/Plugins/GenAILlama/ThirdParty/LlamaCpp/lib/Mac</code></p>
</div>

### Step 3: Download a Tiny Test Model

**Qwen2.5-0.5B-Instruct Q2_K** is ~280 MB and runs on any machine:

1. Go to [Qwen2.5-0.5B-Instruct GGUF on Hugging Face](https://huggingface.co/Qwen/Qwen2.5-0.5B-Instruct-GGUF).
2. Download `qwen2.5-0.5b-instruct-q2_k.gguf` and drop it into `<YourProject>/Content/Models/`.

More models + quantization guidance: [GGUF Models](/docs/genai-llama/gguf-models/).

### Step 4: Rebuild the Project

Close the editor (so binaries can update on Windows), then rebuild from your IDE or via **Build** in the Unreal Engine launcher. The build log should show:

```
GenAILlama: llama.cpp shared libraries found at <path>. Embedded inference enabled (dynamic loading).
```

Re-open the editor. **Project Settings > Plugins > GenAI Llama** should now display **Embedded Inference — Loaded** in green.

### Step 5: Wire Up the Blueprint

1. Create an **Actor Blueprint** and open it.
2. On **Event BeginPlay**, add **Load Embedded Model** and set:
   - **Model Alias** = `test-model`
   - **Model Path** = `Models/qwen2.5-0.5b-instruct-q2_k.gguf` (relative to `Content/`)
   - **GPU Layers** = `0` (CPU only — safe on any machine)
   - **Context Size** = `2048`
   - **Thread Count** = `0` (auto)
3. On its **On Complete** pin, add **Request Chat Stream** with:
   - **Connection > Provider** = `Embedded (llama.cpp)`
   - **Model** = `test-model` (the alias from step 2)
   - **Messages** = one entry with **Role** = `user` and **Content** = `Tell me a joke.`
4. On **On Event**, add a **Print String** connected to `Partial Message > Content`.
5. Drop the Blueprint into the level and **press Play**.

The Output Log will show `Loaded model: qwen2.5-0.5b-instruct-q2_k.gguf` and tokens will stream to the viewport.

<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">No NVIDIA GPU? Keep GPU Layers at 0.</p>
  <p style="margin: 5px 0 0 0; color: #856404;">The CUDA backend only loads if <code>ggml-cuda.dll</code> is present <em>and</em> the NVIDIA driver/runtime is installed. Non-zero GPU Layers on a CPU-only setup will fail the load. Use CPU first, then switch to a GPU backend later.</p>
</div>

---

## Next Steps

- **[Blueprint Nodes](/docs/genai-llama/blueprint-nodes/)** — Every node the plugin adds, with inputs/outputs.
- **[C++ API](/docs/genai-llama/cpp-api/)** — Production-ready C++ snippets with lifetime-safe patterns.
- **[GGUF Models](/docs/genai-llama/gguf-models/)** — Where to find GGUFs, which quantization to pick, sizing for mobile vs desktop.
- **[Embedded Inference Setup](/docs/genai-llama/embedded-setup/)** — Full per-platform setup, compile-from-source, GPU backends.
- **[Troubleshooting](/docs/genai-llama/troubleshooting/)** — When something doesn't work, start here.
