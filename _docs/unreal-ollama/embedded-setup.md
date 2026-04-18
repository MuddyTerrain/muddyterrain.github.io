---
layout: documentation
title: Embedded Inference Setup
permalink: /docs/genai-llama/embedded-setup/
nav_order: 6
description: "Complete guide for setting up embedded GGUF model inference using llama.cpp for offline AI in Unreal Engine on any platform."
tags: [embedded-inference, llama-cpp, gguf, offline-ai, model-loading]
---

Embedded inference runs GGUF models directly inside your game process using [llama.cpp](https://github.com/ggml-org/llama.cpp). No server required, fully offline, works on PC and mobile.

This is an **optional feature**. HTTP providers (Ollama, LM Studio, etc.) work out of the box with no compilation required.

---

## Two Ways to Enable Embedded Inference

### Option A: Download Prebuilt Libraries (Easiest)

The llama.cpp project publishes **prebuilt shared libraries** for every release on GitHub. This is the fastest way to get started — no compilation required.

**Available for:** Windows, macOS, Linux

1. Go to the [llama.cpp GitHub Releases](https://github.com/ggml-org/llama.cpp/releases) page
2. Download the archive matching your platform and GPU backend:

   | Platform | Archive Name Pattern | GPU Backend |
   |---|---|---|
   | Windows (NVIDIA) | `llama-b*-bin-win-cuda-cu*.*.zip` | CUDA |
   | Windows (AMD/Intel) | `llama-b*-bin-win-vulkan-*.zip` | Vulkan |
   | Windows (CPU) | `llama-b*-bin-win-cpu-*.zip` | CPU |
   | macOS (Apple Silicon) | `llama-b*-bin-macos-arm64.zip` | Metal |
   | macOS (Intel) | `llama-b*-bin-macos-x64.zip` | CPU |
   | Linux (NVIDIA) | `llama-b*-bin-ubuntu-x64-cuda-cu*.*.tar.gz` | CUDA |
   | Linux (AMD/Intel) | `llama-b*-bin-ubuntu-x64-vulkan-*.tar.gz` | Vulkan |
   | Linux (CPU) | `llama-b*-bin-ubuntu-x64-cpu-*.tar.gz` | CPU |

3. Extract and copy the shared libraries (`.dll`, `.dylib`, or `.so` files) into:
   ```
   <YourProject>/Plugins/GenAILlama/ThirdParty/LlamaCpp/lib/<Platform>/
   ```
   Where `<Platform>` is `Win64`, `Mac`, or `Linux`.

4. Rebuild your Unreal project.

The plugin detects the shared libraries at compile time, sets `WITH_LLAMACPP_DYNAMIC=1`, and loads them automatically at runtime using the platform's dynamic loader.

<div style="padding: 10px 15px; background-color: #e6f7ff; border-left: 4px solid #07a2ff; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold;">Which files to copy?</p>
  <p style="margin: 5px 0 0 0;">Copy all <code>.dll</code> (Windows), <code>.dylib</code> (macOS), or <code>.so</code> (Linux) files from the extracted archive. The plugin loads all of them automatically in the correct dependency order.</p>
</div>

### Option B: Compile From Source (Advanced)

Build llama.cpp yourself if you need:

- A specific GPU backend or optimization not available in the prebuilt releases
- **Android or iOS** support (no prebuilt releases available for mobile)
- Static linking instead of dynamic loading
- A bleeding-edge commit newer than the latest release

See the per-platform build guides below for step-by-step instructions.

---

## How Auto-Detection Works

The plugin's `Build.cs` automatically detects llama.cpp libraries at compile time. It supports two linking modes:

1. **Static linking** — `.lib` (Windows) or `.a` (macOS/Linux/Android/iOS) files found &rarr; `WITH_LLAMACPP=1`
2. **Dynamic loading** — `.dll` / `.dylib` / `.so` files found (no static libs) &rarr; `WITH_LLAMACPP_DYNAMIC=1`
3. **No libraries found** &rarr; embedded inference **disabled**, HTTP providers still work normally

Static linking takes priority when both static and shared libraries are present.

You will see one of these messages in the Unreal build log:

```
GenAILlama: llama.cpp static libraries found at <path>. Embedded inference enabled (static linking).
GenAILlama: llama.cpp shared libraries found at <path>. Embedded inference enabled (dynamic loading).
GenAILlama: llama.cpp libraries not found. Embedded inference disabled. HTTP providers still available.
```

You can also check at runtime using the **Is Embedded Inference Available** Blueprint node.

---

## Directory Structure

Place compiled libraries in the corresponding platform directory:

```
<YourProject>/Plugins/GenAILlama/ThirdParty/LlamaCpp/
    include/            <- Headers (already included, do not modify)
        llama.h
        ggml.h
        ggml-backend.h
        ggml-cpu.h
        ggml-opt.h
        ggml-alloc.h
        gguf.h
    lib/
        Win64/          <- Windows .lib files (and .dll for shared builds)
        Mac/            <- macOS .a files
        Linux/          <- Linux .a files
        Android/        <- Android .a files (ARM64)
        IOS/            <- iOS .a files (ARM64)
```

---

## Pinned llama.cpp Release

**This plugin is pinned to llama.cpp release [b8802](https://github.com/ggml-org/llama.cpp/releases/tag/b8802) (April 2026).**

llama.cpp renames and removes exported symbols between releases (for example, `llama_kv_cache_clear` was replaced by `llama_memory_clear` around build ~b5100). The dynamic loader resolves a fixed list of symbols at startup — if any are missing, embedded inference is disabled with a `[LogGenAILlama] Failed to resolve symbol:` line in the Output Log.

**Use the exact pinned release.** Downloading the "latest" llama.cpp binaries will often break the loader until the next plugin update. The **Project Settings > Plugins > GenAI Llama** panel has a one-click button that opens the pinned release page.

If you're compiling from source instead of using prebuilt binaries:

```bash
git clone https://github.com/ggml-org/llama.cpp.git
cd llama.cpp
git checkout b8802
```

---

## Platform Build Guides

For Option B (compile from source), choose your target platform for step-by-step instructions:

| Platform | GPU Backends | Prebuilt Available | Guide |
|----------|-------------|-------------------|-------|
| **Windows (x64)** | CUDA, Vulkan, CPU | Yes | [Build for Windows](/docs/genai-llama/build-windows/) |
| **macOS** | Metal, CPU | Yes | [Build for macOS](/docs/genai-llama/build-macos/) |
| **Linux (x64)** | CUDA, Vulkan, CPU | Yes | [Build for Linux](/docs/genai-llama/build-linux/) |
| **Android (ARM64)** | Vulkan, CPU | No (compile only) | [Build for Android](/docs/genai-llama/build-android/) |
| **iOS (ARM64)** | Metal, CPU | No (compile only) | [Build for iOS](/docs/genai-llama/build-ios/) |

---

## GPU Backend Quick Reference

| Platform | Recommended Backend | Notes |
|---|---|---|
| Windows (NVIDIA) | CUDA | Best performance on NVIDIA GPUs |
| Windows (AMD/Intel) | Vulkan | Cross-vendor GPU support |
| macOS / iOS | Metal | Hardware accelerated on all Apple Silicon |
| Linux (NVIDIA) | CUDA | Best performance |
| Linux (AMD) | Vulkan | Cross-vendor |
| Android | Vulkan | Supported on most modern devices |
| Any | CPU | Always works, just slower. Good for testing. |

---

## Will My Game Ship the Libraries Automatically?

Yes. Drop the libraries into the folder once and the plugin takes care of the rest — both in the Editor and in any packaged build of your game. You don't need to edit `.uproject`, your project's Build.cs, `DefaultGame.ini`, or the packaging settings.

The easiest way to find the right folder is the **Open Folder** button next to each platform row in **Project Settings &rarr; Plugins &rarr; GenAI Llama**. It opens the exact folder you should drop binaries into, regardless of whether you installed the plugin into your project or into the engine through Fab.

If you want to navigate manually, the path is:

```
<Plugin>/ThirdParty/LlamaCpp/lib/<Platform>/
```

…where `<Plugin>` is wherever GenAI Llama lives on your machine — your project's `Plugins/GenAILlama/` folder if you installed it locally, or your engine's `Engine/Plugins/Marketplace/GenAILlama/` folder if you installed it from Fab. Either works; the plugin finds itself at runtime.

---

## Console Platforms

**PS4, Xbox One, Switch, and HoloLens** support HTTP providers only. Embedded inference (llama.cpp) is not available on these platforms due to SDK and hardware constraints.

For console games, use an HTTP provider such as Ollama or any OpenAI-compatible server running on a companion PC or cloud instance.

---

## After Setup

Whether you used prebuilt libraries (Option A) or compiled from source (Option B):

1. Ensure the library files are in the correct `ThirdParty/LlamaCpp/lib/<Platform>/` directory.
2. Rebuild your Unreal project.
3. Check the build log for `GenAILlama: llama.cpp libraries found`. If you see `not found`, verify the files are in the correct directory.
4. In Unreal, use the **Is Embedded Inference Available** Blueprint node to confirm at runtime.
5. Use **Load Embedded Model** to load a GGUF file, then **Request Chat Completion** or **Request Chat Stream** with Provider set to `Embedded (llama.cpp)`.

---

## Recommended Models for Games

| Model | Parameters | Q4_K_M Size | Best For |
|---|---|---|---|
| Qwen2.5-0.5B | 0.5B | ~400 MB | Ultra-lightweight, mobile devices |
| TinyLlama | 1.1B | ~637 MB | Lightweight NPC dialogue |
| Gemma-2B | 2B | ~1.4 GB | Balanced size and quality |
| Phi-3-mini | 3.8B | ~2.2 GB | Smarter game AI, desktop/console |

Download GGUF models from [Hugging Face](https://huggingface.co/models?search=gguf).

---

## Troubleshooting

#### Build log says "libraries not found"
- Verify library files are in `ThirdParty/LlamaCpp/lib/<Platform>/` (e.g., `lib/Win64/` for Windows).
- For prebuilt downloads: ensure you copied the `.dll` / `.dylib` / `.so` files (not just the executables).
- For compiled from source: ensure you built with `BUILD_SHARED_LIBS=OFF` and copied the `.lib` / `.a` files.
- Clean and rebuild your Unreal project.

#### Dynamic loading fails at runtime (prebuilt libraries)
- Check the Output Log for `LogGenAILlama` entries — they report which libraries loaded and which symbols failed, one per line.
- **Most common cause: a version mismatch.** The plugin is pinned to [b8802](https://github.com/ggml-org/llama.cpp/releases/tag/b8802). Using any other release will usually fail symbol resolution because llama.cpp renames exported APIs between builds. Use the pinned release.
- Ensure all shared libraries from the release archive are present (`ggml-base`, `ggml`, `ggml-cpu`, `llama`, and any backend-specific libs like `ggml-cuda` or `ggml-metal`).
- On Windows, missing CUDA/Vulkan runtime DLLs on the system can prevent backend-specific libraries from loading. The core CPU inference will still work.

#### macOS: dylibs downloaded via browser are blocked by Gatekeeper
Shared libraries downloaded through a browser are flagged with `com.apple.quarantine` and silently refuse to load on first launch. Remove the quarantine attribute after copying them in:

```bash
xattr -cr <YourProject>/Plugins/GenAILlama/ThirdParty/LlamaCpp/lib/Mac
```

If you see a `dlopen` error in the Output Log mentioning "not permitted" or "cannot be opened because the developer cannot be verified", this is the cause.

#### Model fails to load
- Ensure the `.gguf` file path is correct (absolute, or relative to your project's `Content/` directory — relative paths are resolved against the project root, not the engine binary).
- Check that the model format is GGUF (not the legacy GGML format).
- Verify the model was quantized with a llama.cpp release compatible with b8802. GGUFs produced by very recent forks may use metadata fields our pinned build doesn't understand yet.
- Enable **Project Settings > Plugins > GenAI Llama > Debug > Enable Extended Logging** and retry. The log now includes llama.cpp's own diagnostic output under `[llama.cpp]` — that usually pinpoints the exact reason (unsupported architecture, insufficient memory, GPU backend missing, etc.).

#### "no backends are loaded" at model-load time
The plugin auto-loads ggml backend plugins (`ggml-cpu.*`, `ggml-cuda.*`, etc.) from the same directory as `llama.*`. If you see this error, the backend DLLs weren't discovered — make sure they're in the same `ThirdParty/LlamaCpp/lib/<Platform>/` folder as `llama.dll` / `libllama.dylib` / `libllama.so`, not split into a subfolder.

#### GPU Layers when you don't have an NVIDIA GPU
Set **GPU Layers = 0** on the Load Embedded Model node when running on CPU only, or on systems without CUDA/Vulkan drivers installed. Non-zero values will fail to allocate VRAM on the wrong backend and the model load will error out.

#### Low performance
- Increase `GPU Layers` (set to `99` for maximum GPU offload).
- Use a smaller quantization (Q4_K_M is a good balance of quality and speed).
- Ensure you compiled llama.cpp with the correct GPU backend (CUDA/Vulkan/Metal, not CPU-only).

#### Crash on model load
- Check available GPU memory — large models may exceed your GPU's VRAM.
- Try reducing `GPU Layers` to offload fewer layers to GPU.
- Try reducing `Context Size` to use less memory.
