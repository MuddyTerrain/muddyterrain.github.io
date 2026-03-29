---
layout: documentation
title: Build for Windows
permalink: /docs/genai-llama/build-windows/
nav_order: 4
description: "Enable embedded LLM inference on Windows by downloading NVIDIA CUDA or AMD Vulkan-enabled llama.cpp libraries."
tags: [windows, embedded-inference, llama-cpp, cuda, vulkan, gpu-acceleration]
---

Step-by-step instructions for enabling embedded inference on Windows (x64) with GenAI Llama.

---

## Option A: Download Prebuilt Libraries (Easiest)

The llama.cpp project publishes prebuilt shared libraries for every release. No compilation required.

### 1. Download

Go to the [llama.cpp GitHub Releases](https://github.com/ggml-org/llama.cpp/releases) page and download the archive for your GPU:

| GPU | Archive to Download |
|-----|-------------------|
| **NVIDIA** | `llama-b*-bin-win-cuda-cu*.*.zip` |
| **AMD / Intel** | `llama-b*-bin-win-vulkan-*.zip` |
| **CPU only** | `llama-b*-bin-win-cpu-*.zip` |

### 2. Extract and Copy

Extract the archive and copy **all `.dll` files** into:

```
<YourProject>/Plugins/GenAILlama/ThirdParty/LlamaCpp/lib/Win64/
```

Typical files include `llama.dll`, `ggml.dll`, `ggml-base.dll`, `ggml-cpu.dll`, and backend-specific libraries like `ggml-cuda.dll` or `ggml-vulkan.dll`.

### 3. Rebuild Your Unreal Project

Check the build log for:

```
GenAILlama: llama.cpp shared libraries found at <path>. Embedded inference enabled (dynamic loading).
```

That's it! The plugin loads the DLLs automatically at runtime.

<div style="padding: 10px 15px; background-color: #e6f7ff; border-left: 4px solid #07a2ff; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold;">CUDA Runtime</p>
  <p style="margin: 5px 0 0 0;">If you download CUDA-enabled libraries, your system needs the CUDA runtime installed (the NVIDIA GPU driver usually includes it). If CUDA is not available at runtime, the CUDA backend library simply won't load — the plugin will still work with CPU inference.</p>
</div>

---

## Option B: Compile From Source (Advanced)

Compile llama.cpp yourself for maximum control over GPU backends and optimizations.

### Prerequisites

- **Visual Studio 2019 or later** (with C++ Desktop Development workload)
- **CMake 3.14 or later** ([cmake.org](https://cmake.org/download/))
- **Git** ([git-scm.com](https://git-scm.com/))
- **GPU SDK** (optional, depending on backend):
  - **CUDA Toolkit** for NVIDIA GPUs ([developer.nvidia.com/cuda-downloads](https://developer.nvidia.com/cuda-downloads))
  - **Vulkan SDK** for AMD/Intel/NVIDIA GPUs ([vulkan.lunarg.com](https://vulkan.lunarg.com/))

### Choose Your GPU Backend

| Backend | Best For | Flag |
|---------|----------|------|
| **CUDA** | NVIDIA GPUs (best performance) | `-DGGML_CUDA=ON` |
| **Vulkan** | AMD, Intel, or NVIDIA GPUs (cross-vendor) | `-DGGML_VULKAN=ON` |
| **CPU** | Testing, or no discrete GPU | _(no GPU flag)_ |

### Build Steps

### 1. Clone llama.cpp

```bash
git clone https://github.com/ggml-org/llama.cpp.git
cd llama.cpp
git checkout b3600  # or any later release tag
```

### 2. Configure and Build

#### CUDA (NVIDIA)

```bash
cmake -B build -DBUILD_SHARED_LIBS=OFF -DGGML_CUDA=ON
cmake --build build --config Release
```

#### Vulkan (AMD/Intel/NVIDIA)

```bash
cmake -B build -DBUILD_SHARED_LIBS=OFF -DGGML_VULKAN=ON
cmake --build build --config Release
```

#### CPU Only

```bash
cmake -B build -DBUILD_SHARED_LIBS=OFF
cmake --build build --config Release
```

### 3. Copy Libraries

Copy all `.lib` files from `build/Release/` into your plugin directory:

```
<YourProject>/Plugins/GenAILlama/ThirdParty/LlamaCpp/lib/Win64/
```

Typical files include:
- `llama.lib`
- `ggml.lib`
- `ggml-base.lib`
- `ggml-cpu.lib`
- `ggml-cuda.lib` (CUDA only)
- `ggml-vulkan.lib` (Vulkan only)

<div style="padding: 10px 15px; background-color: #e6f7ff; border-left: 4px solid #07a2ff; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold;">Shared Builds (Optional)</p>
  <p style="margin: 5px 0 0 0;">If you built with <code>BUILD_SHARED_LIBS=ON</code>, also copy the <code>.dll</code> files into the same <code>lib/Win64/</code> directory. The plugin's Build.cs will automatically deploy them alongside your game executable.</p>
</div>

### 4. Rebuild Your Unreal Project

After placing the files, rebuild your Unreal project. Check the build log for:

```
GenAILlama: llama.cpp libraries found at <path>. Embedded inference enabled.
```

---

## Verification

1. Open your project in Unreal Editor.
2. Add an **Is Embedded Inference Available** node in a Blueprint &mdash; it should return `true`.
3. Use **Load Embedded Model** with a GGUF file to confirm everything works.

---

## Troubleshooting

#### "Libraries not found" in build log
- Check that `.lib` files are in `ThirdParty/LlamaCpp/lib/Win64/`, not in a subdirectory.
- Make sure you built with `BUILD_SHARED_LIBS=OFF`.

#### CUDA build fails
- Verify the CUDA Toolkit is installed and `nvcc` is in your PATH.
- Check that your Visual Studio version is supported by your CUDA Toolkit version.

#### Vulkan build fails
- Verify the Vulkan SDK is installed and `VULKAN_SDK` environment variable is set.

---

## See Also

- [Embedded Inference Setup](/docs/genai-llama/embedded-setup/) &mdash; Overview and troubleshooting
- [GenAI Llama Documentation](/docs/genai-llama/) &mdash; Full plugin reference
