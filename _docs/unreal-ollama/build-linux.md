---
layout: documentation
title: Build for Linux
permalink: /docs/genai-llama/build-linux/
nav_order: 6
description: "Enable embedded LLM inference on Linux by downloading prebuilt llama.cpp libraries or compiling from source with CUDA or Vulkan."
tags: [linux, embedded-inference, llama-cpp, cuda, vulkan, gpu-acceleration]
---

Step-by-step instructions for enabling embedded inference on Linux (x64) with GenAI Llama.

---

## Option A: Download Prebuilt Libraries (Easiest)

The llama.cpp project publishes prebuilt shared libraries for every release. No compilation required.

### 1. Download

Go to the [llama.cpp GitHub Releases](https://github.com/ggml-org/llama.cpp/releases) page and download:

| GPU | Archive to Download |
|-----|-------------------|
| **NVIDIA** | `llama-b*-bin-ubuntu-x64-cuda-cu*.*.tar.gz` |
| **AMD / Intel** | `llama-b*-bin-ubuntu-x64-vulkan-*.tar.gz` |
| **CPU only** | `llama-b*-bin-ubuntu-x64-cpu-*.tar.gz` |

### 2. Extract and Copy

Extract the archive and copy **all `.so` files** into:

```
<YourProject>/Plugins/GenAILlama/ThirdParty/LlamaCpp/lib/Linux/
```

### 3. Rebuild Your Unreal Project

Check the build log for:

```
GenAILlama: llama.cpp shared libraries found at <path>. Embedded inference enabled (dynamic loading).
```

<div style="padding: 10px 15px; background-color: #e6f7ff; border-left: 4px solid #07a2ff; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold;">Ubuntu-based Builds</p>
  <p style="margin: 5px 0 0 0;">The prebuilt binaries are compiled on Ubuntu. They should work on most glibc-based distributions. If you encounter compatibility issues on a different distro, use Option B to compile from source.</p>
</div>

---

## Option B: Compile From Source (Advanced)

Compile llama.cpp yourself for maximum control over backends and optimizations.

### Prerequisites

- **GCC or Clang** (C++17 support)
- **CMake 3.14 or later**
- **Git**
- **GPU SDK** (optional, depending on backend):
  - **CUDA Toolkit** for NVIDIA GPUs
  - **Vulkan SDK** for AMD/Intel/NVIDIA GPUs

```bash
# Ubuntu / Debian
sudo apt update
sudo apt install build-essential cmake git

# Fedora
sudo dnf install gcc-c++ cmake git
```

### Choose Your GPU Backend

| Backend | Best For | Flag |
|---------|----------|------|
| **CUDA** | NVIDIA GPUs (best performance) | `-DGGML_CUDA=ON` |
| **Vulkan** | AMD, Intel, or NVIDIA GPUs | `-DGGML_VULKAN=ON` |
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

Copy all `.a` files from `build/` (and its subdirectories) into your plugin directory:

```
<YourProject>/Plugins/GenAILlama/ThirdParty/LlamaCpp/lib/Linux/
```

```bash
find build -name "*.a" -exec cp {} /path/to/ThirdParty/LlamaCpp/lib/Linux/ \;
```

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
- Check that `.a` files are in `ThirdParty/LlamaCpp/lib/Linux/`, not in a subdirectory.
- Make sure you built with `BUILD_SHARED_LIBS=OFF`.

#### CUDA build fails
- Verify the CUDA Toolkit is installed: `nvcc --version`
- Ensure your GCC version is compatible with your CUDA Toolkit.

#### Vulkan build fails
- Install the Vulkan SDK and ensure `VULKAN_SDK` is set.
- On Ubuntu: `sudo apt install libvulkan-dev`

---

## See Also

- [Embedded Inference Setup](/docs/genai-llama/embedded-setup/) &mdash; Overview and troubleshooting
- [GenAI Llama Documentation](/docs/genai-llama/) &mdash; Full plugin reference
