---
layout: documentation
title: Build for macOS
permalink: /docs/genai-llama/build-macos/
nav_order: 10
description: "Set up embedded LLM inference on macOS using prebuilt llama.cpp libraries or Metal-accelerated compilation for Apple Silicon."
tags: [macos, embedded-inference, llama-cpp, metal, apple-silicon, gpu-acceleration]
---

Step-by-step instructions for enabling embedded inference on macOS with GenAI Llama.

---

## Option A: Download Prebuilt Libraries (Easiest)

The llama.cpp project publishes prebuilt shared libraries for every release. No compilation required.

### 1. Download

Go to the [llama.cpp GitHub Releases](https://github.com/ggml-org/llama.cpp/releases) page and download:

| Mac Type | Archive to Download |
|----------|-------------------|
| **Apple Silicon (M1/M2/M3/M4)** | `llama-b*-bin-macos-arm64.zip` |
| **Intel** | `llama-b*-bin-macos-x64.zip` |

### 2. Extract and Copy

Extract the archive and copy **all `.dylib` files** into:

```
<YourProject>/Plugins/GenAILlama/ThirdParty/LlamaCpp/lib/Mac/
```

### 3. Rebuild Your Unreal Project

Check the build log for:

```
GenAILlama: llama.cpp shared libraries found at <path>. Embedded inference enabled (dynamic loading).
```

The Apple Silicon builds include Metal support by default for hardware-accelerated inference.

---

## Option B: Compile From Source (Advanced)

Compile llama.cpp yourself for maximum control over backends and optimizations.

### Prerequisites

- **Xcode Command Line Tools** (or full Xcode)
  ```bash
  xcode-select --install
  ```
- **CMake 3.14 or later**
  ```bash
  brew install cmake
  ```
- **Git**

### Choose Your GPU Backend

| Backend | Best For | Flag |
|---------|----------|------|
| **Metal** | All Apple Silicon Macs (recommended) | `-DGGML_METAL=ON` |
| **CPU** | Intel Macs, or testing | _(no GPU flag)_ |

Metal is hardware-accelerated on all Apple Silicon (M1/M2/M3/M4) and provides the best performance on macOS.

### Build Steps

### 1. Clone llama.cpp

```bash
git clone https://github.com/ggml-org/llama.cpp.git
cd llama.cpp
git checkout b3600  # or any later release tag
```

### 2. Configure and Build

#### Metal (Recommended)

```bash
cmake -B build -DBUILD_SHARED_LIBS=OFF -DGGML_METAL=ON
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
<YourProject>/Plugins/GenAILlama/ThirdParty/LlamaCpp/lib/Mac/
```

Typical files include:
- `libllama.a`
- `libggml.a`
- `libggml-base.a`
- `libggml-cpu.a`
- `libggml-metal.a` (Metal only)

You can use this command to find and copy all static libraries:

```bash
find build -name "*.a" -exec cp {} /path/to/ThirdParty/LlamaCpp/lib/Mac/ \;
```

### 4. Rebuild Your Unreal Project

After placing the files, rebuild your Unreal project. The plugin automatically links the required Apple frameworks (Accelerate, Metal, MetalKit, Foundation).

Check the build log for:

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
- Check that `.a` files are in `ThirdParty/LlamaCpp/lib/Mac/`, not in a subdirectory.
- Make sure you built with `BUILD_SHARED_LIBS=OFF`.

#### Metal build fails
- Ensure Xcode Command Line Tools are installed: `xcode-select --install`
- Metal is only available on macOS 10.13+ with supported hardware.

---

## See Also

- [Embedded Inference Setup](/docs/genai-llama/embedded-setup/) &mdash; Overview and troubleshooting
- [GenAI Llama Documentation](/docs/genai-llama/) &mdash; Full plugin reference
