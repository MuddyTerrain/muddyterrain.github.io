---
layout: documentation
title: GGUF Models
permalink: /docs/genai-llama/gguf-models/
nav_order: 5
description: Where to download GGUF models for embedded llama.cpp inference, quantization reference, and recommended sizes for desktop, mobile, and console games.
tags: [gguf, hugging-face, llama-cpp, quantization, local-models, embedded-inference]
---

Embedded inference loads models in the **GGUF** format — a binary file that packages weights, tokenizer, and metadata into a single file that llama.cpp reads directly. This page covers where to get them, how to pick a size, and what the quantization suffixes (`Q4_K_M`, `Q8_0`, `F16`, etc.) actually mean in practice.

HTTP providers (Ollama, LM Studio) manage their own models — this page is for the **Embedded (llama.cpp)** path.

---

## Where to Download GGUFs

All three sources below are free to browse. Most models are available in multiple quantizations (file sizes) per release.

| Source | What's there | Notes |
|---|---|---|
| [**Hugging Face — GGUF search**](https://huggingface.co/models?search=gguf) | Everything | Filter by model size, architecture, downloads |
| [**Qwen (Alibaba)**](https://huggingface.co/Qwen) | All Qwen sizes + quantizations | Best small-model family for games — 0.5B / 1.5B / 3B / 7B sizes |
| [**bartowski**](https://huggingface.co/bartowski) | GGUF conversions of most popular releases | Reliable, every quant variant published |
| [**Meta Llama**](https://huggingface.co/meta-llama) | Official Llama 3.x / 4.x | License-gated — request access on Hugging Face first |
| [**Google Gemma**](https://huggingface.co/google/gemma-2-2b-it-GGUF) | Official Gemma 2 GGUFs | Small, fast, good for dialogue |
| [**Mistral AI**](https://huggingface.co/mistralai) | Mistral 7B family | Strong multilingual performance |

**How to download a single file:** open the model's "Files and versions" tab on Hugging Face, click the `.gguf` filename, then click **Download**. You don't need to clone the whole repo.

---

## Picking a Quantization

"Quantization" is how many bits represent each weight. Fewer bits = smaller file, faster inference, lower quality. All of these load with the same `Load Embedded Model` Blueprint node — the choice is just file-size vs quality.

| Suffix | Precision | Approx size (7B model) | When to use |
|---|---|---|---|
| `Q2_K` | 2-bit | ~2.7 GB | Smoke tests, tiny models, mobile devices |
| `Q3_K_M` | 3-bit | ~3.3 GB | Aggressive size reduction, noticeable quality loss |
| `Q4_K_M` | 4-bit | ~4.1 GB | **Recommended default** — best quality/size trade |
| `Q5_K_M` | 5-bit | ~4.8 GB | When you have extra RAM/VRAM |
| `Q6_K` | 6-bit | ~5.5 GB | Near-full quality, still compact |
| `Q8_0` | 8-bit | ~7.2 GB | Near-lossless; desktop-only |
| `F16` | 16-bit | ~13 GB | Reference quality; needs a big GPU |
| `F32` | 32-bit | ~26 GB | Research use only |

**Rule of thumb for shipping games:** `Q4_K_M` unless you have a specific reason to change. It's the de facto standard across the llama.cpp ecosystem — widely tested, well-supported, and the size/quality trade has held up across model generations.

---

## Sizing by Target Hardware

RAM usage roughly equals the model file size + the KV cache (depends on context size). The table below is a starting guide, not a hard cutoff.

| Target hardware | Comfortable model size | Example |
|---|---|---|
| **Mobile (2–4 GB RAM)** | Under 1 GB | Qwen2.5-0.5B Q4_K_M (~400 MB) |
| **Handheld / low-end laptop** | 1–2 GB | TinyLlama 1.1B Q4_K_M (~637 MB) |
| **Mid-range desktop** | 2–5 GB | Phi-3-mini Q4_K_M (~2.2 GB) |
| **Gaming desktop (16 GB RAM)** | 5–10 GB | Llama 3.1 8B Q4_K_M (~4.9 GB) |
| **High-end desktop (32 GB+)** | 10–25 GB | Llama 3 70B Q2_K (~26 GB — slow, quality-first) |
| **Data-center / research** | 25+ GB | Llama 3 70B Q4_K_M (~40 GB) |

For GPU offload with `GPU Layers > 0`, the relevant limit is **VRAM**, not RAM. Most consumer GPUs have 8–16 GB VRAM — that's the working budget for anything running on-device.

---

## Recommended Starter Models

All of these are well-tested and play nicely with the plugin's pinned llama.cpp b8802 build.

| Model | Params | Q4_K_M Size | Best for | Link |
|---|---|---|---|---|
| Qwen2.5-0.5B-Instruct | 0.5B | ~400 MB | Ultra-lightweight, smoke tests | [Hugging Face](https://huggingface.co/Qwen/Qwen2.5-0.5B-Instruct-GGUF) |
| TinyLlama 1.1B | 1.1B | ~637 MB | Lightweight NPC dialogue | [Hugging Face](https://huggingface.co/TheBloke/TinyLlama-1.1B-Chat-v1.0-GGUF) |
| Gemma 2B | 2B | ~1.4 GB | Balanced size and quality | [Hugging Face](https://huggingface.co/google/gemma-2-2b-it-GGUF) |
| Qwen2.5-3B-Instruct | 3B | ~1.9 GB | Sharper dialogue, still tiny | [Hugging Face](https://huggingface.co/Qwen/Qwen2.5-3B-Instruct-GGUF) |
| Phi-3-mini | 3.8B | ~2.2 GB | Smarter game AI, desktop/console | [Hugging Face](https://huggingface.co/microsoft/Phi-3-mini-4k-instruct-gguf) |
| Llama 3.1 8B Instruct | 8B | ~4.9 GB | Full-quality chat, desktop | [Hugging Face](https://huggingface.co/bartowski/Meta-Llama-3.1-8B-Instruct-GGUF) |

---

## What GGUF Files Don't Include

- **Vision/audio capabilities** — The plugin currently supports text-only embedded inference. Multimodal GGUFs (LLaVA, Llama 3.2 Vision, Qwen2-VL) will load but image/audio inputs are not yet wired into the embedded path. Use an HTTP provider like Ollama for vision models.
- **Embeddings-only models** — llama.cpp can run embedding models, but the plugin's Blueprint nodes are built around chat completion, not embeddings.
- **Tool-use fine-tunes** — The underlying model may support structured output / function calling, but the plugin does not yet expose a dedicated tool-calling node. Prompt-based JSON coaxing works.

---

## Placing Models in Your Project

By convention, drop your `.gguf` files under `<YourProject>/Content/Models/`. The **Load Embedded Model** Blueprint node accepts either:

- **Relative path** — resolved from the project root (e.g. `Models/qwen2.5-0.5b-instruct-q2_k.gguf`).
- **Absolute path** — any full path on disk (useful for shared model libraries across projects).

**Packaging note:** `.gguf` files inside `Content/` are packaged with the game by default. For larger models, consider shipping them as optional downloadable content instead of bloating the game install.

---

## See Also

- **[Quick Start](/docs/genai-llama/quick-start/)** — Download a tiny model and run it in five minutes.
- **[Blueprint Nodes](/docs/genai-llama/blueprint-nodes/)** — How to wire up `Load Embedded Model`.
- **[Embedded Inference Setup](/docs/genai-llama/embedded-setup/)** — Drop llama.cpp binaries into the plugin.
- **[Troubleshooting](/docs/genai-llama/troubleshooting/)** — When a model fails to load.
