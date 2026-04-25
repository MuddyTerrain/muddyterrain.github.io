---
layout: documentation
title: Troubleshooting
permalink: /docs/genai-llama/troubleshooting/
nav_order: 7
description: Diagnosing GenAI Llama problems — embedded inference not loading, model load failures, HTTP connection issues, GPU backends, and platform-specific gotchas.
tags: [troubleshooting, debugging, unreal-engine, genai-llama, llama-cpp, embedded-inference]
---

When something doesn't work, start here. This page is ordered by what users actually hit most often, not alphabetically.

The two most useful diagnostic tools are:

1. **Project Settings > Plugins > GenAI Llama** — the panel shows live status with a green "Loaded" / amber "Binaries Found, Not Loaded" / amber "Disabled" indicator plus a per-platform scan of what libraries are on disk.
2. **Extended Logging** — the same panel has a **Debug > Enable Extended Logging** toggle. Turn it on, reproduce the issue, check the Output Log under `LogGenAILlama` and `[llama.cpp]`. The llama.cpp-side log is the one that usually names the exact failure.

---

## Understanding the Log Output

Lines from the embedded backend appear under `LogGenAILlama` and are tagged `[llama.cpp]` when they come from llama.cpp itself.

**By default (Extended Logging off):** only warnings and errors are shown, plus a single-line summary per successful load of the form `Loaded embedded model: <path> (file=X.XX GiB, ctx=N, gpu_layers=N, threads=N, ram_available_after=Y.YY GiB)`. That summary line is the first thing to paste into a support ticket — it tells us file size, load configuration, and the RAM footprint right after the load finished. llama.cpp normally emits hundreds of lines per load (per-tensor names, per-layer device assignments, KV cache layout, etc.) and they are suppressed unless you enable Extended Logging.

**With Extended Logging on:** you also see informational lines from llama.cpp — model architecture, quantization, backend selection, the load-progress dots, and so on. A few extreme firehose patterns (`create_tensor:`, `load_tensors: layer N`, `llama_kv_cache: layer N`, per-token control-token dumps) are still suppressed even in this mode because they add no diagnostic value; the aggregate summary lines around them still appear.

**In a packaged Shipping build:** only `Error` and `Warning` from llama.cpp are logged. The Extended Logging toggle has no effect — informational output is compiled out for performance, and the underlying `UE_LOG(..., Log, ...)` is stripped by Unreal in Shipping anyway. If you need to debug a Shipping-only issue, repro it in a Development build first.

If a llama.cpp message appears as `Error` but contains only `.` or other progress-dot fragments, you are running an older plugin build — update to the latest GenAI Llama release, where continuation chunks correctly inherit the level of the line they continue.

---

## Embedded Inference: "Binaries Found, Not Loaded"

The panel detected shared libraries on disk, but they failed to load or resolve symbols. **The most common cause by far is a version mismatch.**

The plugin is pinned to [llama.cpp b8802](https://github.com/ggml-org/llama.cpp/releases/tag/b8802). llama.cpp renames and removes exported symbols between releases — downloading the "latest" binaries will typically break the dynamic loader.

**Fix:**
1. Click the **Download b8802** button in the settings panel to open the exact pinned release.
2. Delete the existing contents of `Plugins/GenAILlama/ThirdParty/LlamaCpp/lib/<Platform>/`.
3. Extract the b8802 zip and drop the shared libs in.
4. Rebuild the project.

**Other causes to check:**
- The project needs a full rebuild for Build.cs to re-detect the binaries and set `WITH_LLAMACPP_DYNAMIC=1`.
- A dependent DLL failed to load (e.g. missing CUDA runtime for `ggml-cuda.dll`). Enable Extended Logging — each unresolved symbol is logged on its own line under `LogGenAILlama`.

---

## Embedded Inference: "Disabled" (No Binaries Found)

The plugin didn't find any `.dll` / `.dylib` / `.so` / `.lib` / `.a` files under `Plugins/GenAILlama/ThirdParty/LlamaCpp/lib/<Platform>/`.

**Fix:** follow the [Embedded Inference Setup](/docs/genai-llama/embedded-setup/) guide to drop the pinned b8802 binaries into the right folder, then rebuild.

HTTP providers (Ollama, LM Studio, OpenAI-compatible servers) still work fine — only the `Embedded (llama.cpp)` provider is disabled.

---

## Model Fails to Load (`Load Embedded Model` returns `bSuccess = false`)

**First: enable Extended Logging and retry.** llama.cpp's own detailed error appears under `[llama.cpp]` in the Output Log — it usually names the exact reason.

### "no backends are loaded"

The plugin auto-loads ggml backend plugins (`ggml-cpu.*`, `ggml-cuda.*`, etc.) from the same directory as `llama.*`. If you see this error, the backend shared libs weren't discovered.

**Fix:** make sure the backend DLLs are in the **same folder** as `llama.dll` / `libllama.dylib` / `libllama.so` — not split into a subfolder. The b8802 release zip typically contains all of them at the top level; copy them all in.

### "unable to allocate X MiB on device" / "Failed to create inference context (ContextSize=N, GpuLayers=N)"

The model + context would need more memory than you have. The error from the plugin now includes your exact `ContextSize` and `GpuLayers` values so you can see which lever to pull.

Fixes, in order of impact:

- **Reduce `Context Size`** on the `Load Embedded Model` node (try `2048` or `1024`). KV cache grows linearly with context size and is usually the actual allocator that failed.
- **Lower `GPU Layers`** to push allocations into system RAM — slower inference, but system RAM is usually a much larger pool than VRAM.
- **Use a smaller quantization** (e.g. `Q4_K_M` → `Q2_K`).
- **Pick a smaller model** — see [GGUF Models](/docs/genai-llama/gguf-models/).

### "unknown model architecture"

The GGUF was produced for a model family that our pinned b8802 build doesn't support. Very recent forks or experimental architectures may not load.

**Fix:** pick a GGUF from a well-established architecture (Llama, Qwen, Gemma, Mistral, Phi) — these all work reliably with b8802.

### "failed to open model file"

Path resolution issue.

**Fix:**
- `Model Path` is resolved from the **project root**, not the editor binary. Use `Content/Models/foo.gguf` or `Models/foo.gguf` depending on your layout.
- Absolute paths also work and are sometimes easier for debugging: `D:/Models/foo.gguf`.
- Verify the file actually exists at the path you gave by opening it in Explorer / Finder.

### "Model path contains non-ASCII characters, which llama.cpp cannot open on Windows"

llama.cpp's loader uses the C `fopen()` call, which on Windows interprets the path in the system's ANSI code page. A path with Cyrillic / CJK / emoji / accented characters will fail even when the file exists.

**Fix:** move the `.gguf` file to a path made up entirely of ASCII characters — e.g. `C:\Models\` or `D:/Games/models/`. The rest of the project can stay where it is; only the model file's path matters.

### "Model file is X.XX GiB but only Y.YY GiB of system RAM is available, and GpuLayers=0"

The plugin pre-flighted the load and determined that a CPU-only load would almost certainly OOM or cause heavy disk-thrashing. The headroom the check reserves scales with the machine size (`min(1 GiB, Available/4)`) so it's appropriate on both 4 GiB laptops and 128 GiB workstations.

**Fix:**
- Set `GPU Layers` to a non-zero value to offload part (or all) of the model to VRAM.
- Use a smaller quantization — `Q4_K_M` and below are much more forgiving than `Q8_0` or `F16`.
- Close other memory-heavy apps (browsers, the packaged game, other editor sessions).

### "Loading a X.XX GiB model with only Y.YY GiB of system RAM available"

Warning (not an error) emitted when a partial-offload load (`GpuLayers > 0`) requests a model larger than free RAM. The load proceeds because part of the weights will live in VRAM, but the CPU-resident layers + KV cache + compute buffers still need RAM. If the load then fails, raise `GPU Layers` further or switch to a smaller quantization.

### "Failed to process prompt tokens (chunk A..B of N)"

Thrown by `Request Chat Completion` / `Request Chat Stream` when the KV cache can't accept the prompt. The chunk range tells you how far into the prompt it got before running out.

**Fix:** reduce prompt length (trim multi-turn history, shorten the system prompt, drop large pasted documents) or raise `Context Size` on the next `Load Embedded Model` call. Note that raising `Context Size` also raises the KV cache memory footprint — it may fail at load time on low-memory machines.

### "Model load cancelled."

The async action node's `Cancel()` was called while the load was in progress. llama.cpp's progress callback aborted the load; no handle was registered. This is the expected behaviour when your UI cancels a loading screen or the player navigates away during load. Re-call `Load Embedded Model` to start fresh.

### Editor hard-crashes / disappears during `Load Embedded Model`

If you set `GPU Layers = 99` and the weights exceed available VRAM, llama.cpp may call `GGML_ABORT` on the failing allocation rather than returning an error. The plugin can't intercept this — the process is already terminating.

**Prevention:**
- Watch the Output Log for the `Loading a X.XX GiB model with GpuLayers=99...` warning before the crash and take it seriously.
- Lower `GPU Layers` to do a partial offload (start with `20`, tune up until just under VRAM fills).
- For shipped titles, gate large models behind a settings toggle so users with smaller GPUs never hit this path. See [GGUF Models → When the model is bigger than your VRAM](/docs/genai-llama/gguf-models/#when-the-model-is-bigger-than-your-vram).

---

## GPU Layers: When to Keep at 0

Set **GPU Layers = 0** if:
- You don't have an NVIDIA GPU (the CUDA backend won't load).
- You have an NVIDIA GPU but don't have `ggml-cuda.dll` in the plugin's lib folder.
- The NVIDIA driver or CUDA runtime isn't installed.
- You're running on macOS without a corresponding Metal-enabled binary.
- You're on a laptop with integrated graphics only.

Non-zero values attempt to allocate VRAM on the target backend. If the backend isn't present or the allocation fails, the model load errors out.

**Rule of thumb:** get it working on CPU first (GPU Layers = 0), then swap to GPU offload once the baseline runs.

---

## macOS: dylibs Blocked by Gatekeeper

Dynamic libraries downloaded through a browser get the `com.apple.quarantine` extended attribute and silently refuse to load. Symptoms in the Output Log look like `dlopen failed: ... cannot be opened because the developer cannot be verified`.

**Fix — run once after copying the libraries in:**

```bash
xattr -cr <YourProject>/Plugins/GenAILlama/ThirdParty/LlamaCpp/lib/Mac
```

This clears the quarantine flag recursively for everything in that folder.

---

## HTTP Provider: Server Not Responding

**First:** open the server URL in your browser (e.g. `http://localhost:11434`). If it doesn't load there, it won't load from Unreal either.

**Fixes:**
- **Ollama:** confirm the Ollama service is running — `ollama ps` in a terminal. On Windows, look for Ollama in the system tray.
- **LM Studio:** start the **Local Server** tab inside LM Studio; it doesn't serve until you explicitly start it.
- **Firewall:** if running the server on a different machine, make sure the port (11434 / 1234 / 8080 / whatever you picked) is open.
- **Use `Check Server Health` node** — sends a GET probe and returns a clear healthy/unhealthy boolean with server version. Great for gating UI.

---

## HTTP Provider: Model Not Found

- Model names are case-sensitive and tag-suffixed. Ollama's `llama3` is not the same as `llama3:8b`.
- Make sure you've actually pulled the model: `ollama pull llama3`.
- Use the `List Available Models` Blueprint node to see what the server currently has loaded.

---

## Streaming Hangs or Prints Nothing

- Make sure you wired **On Event** (not **On Complete** — that's the non-streaming version) to your `Print String`.
- Each `On Event` fires with a `Partial Message`. Print `Partial Message > Content`, not the whole `Partial Message` struct.
- Check `bIsFinished` on the final event — if it's never `true`, the stream may have been cancelled or the provider disconnected.

---

## Performance Is Slow

- **Use a smaller model.** On-device inference scales roughly linearly with parameter count. 0.5B / 1B / 3B models respond near-instantly; 7B+ models can take multiple seconds per turn on CPU.
- **Use a faster quantization.** `Q4_K_M` is ~2× faster than `Q8_0` with barely-noticeable quality loss.
- **Offload to GPU.** Set `GPU Layers = 99` once you've verified the GPU backend is loaded — this can be 10× faster than CPU.
- **Reduce `Context Size`** if you don't actually need 2048+ tokens of history.
- **Don't ship from a Debug build.** Development builds include extra asserts; the inference loop is significantly faster in Shipping or DebugGame-Optimized configurations.

---

## PDB / Hot-Reload Warnings on Rebuild

When you compile with llama.cpp shared libraries present, you may see warnings like `warning LNK4098` or messages about mismatched PDBs for `llama.dll`. These are harmless — llama.cpp prebuilds don't ship matching PDB files, so the linker just notes it can't load symbols for debugging. The plugin still works normally.

---

## Getting Help

If you've tried the above and the problem persists:

1. **Enable Extended Logging** (Project Settings > Plugins > GenAI Llama > Debug).
2. Reproduce the issue.
3. Open the Output Log and copy everything under `LogGenAILlama` — including the startup diagnostics block.
4. Paste it into a GitHub issue or the Discord support channel. The startup block names the plugin version, the loaded llama.cpp build, every loaded shared library + its size, and the runtime CPU/GPU system-info string — that's enough for us to diagnose almost any load-side issue.

---

## See Also

- **[Quick Start](/docs/genai-llama/quick-start/)** — Confirm your baseline setup works.
- **[Embedded Inference Setup](/docs/genai-llama/embedded-setup/)** — Per-platform DLL layout.
- **[Blueprint Nodes](/docs/genai-llama/blueprint-nodes/)** — Node-by-node reference.
- **[GGUF Models](/docs/genai-llama/gguf-models/)** — Choosing a model that fits your hardware.
