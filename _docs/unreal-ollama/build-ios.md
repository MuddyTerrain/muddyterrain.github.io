---
layout: documentation
title: Build for iOS
permalink: /docs/genai-llama/build-ios/
nav_order: 8
description: "Build llama.cpp for iOS with Metal acceleration to run GGUF models directly inside Unreal Engine games on Apple devices."
tags: [ios, embedded-inference, llama-cpp, metal, apple-silicon, gguf]
---

Step-by-step instructions for cross-compiling llama.cpp for iOS (ARM64) for use with GenAI Llama's embedded inference.

---

## Prerequisites

- **macOS** with **Xcode** installed (includes the iOS SDK and toolchain)
- **CMake 3.14 or later**
  ```bash
  brew install cmake
  ```
- **Git**

---

## GPU Backend

| Backend | Notes |
|---------|-------|
| **Metal** | Hardware accelerated on all Apple Silicon iOS devices (A7 and later). Recommended. |
| **CPU** | Always works, significantly slower. |

All modern iPhones and iPads support Metal. There is no reason to build CPU-only for iOS unless you need to debug a Metal-specific issue.

---

## Build Steps

### 1. Clone llama.cpp

```bash
git clone https://github.com/ggml-org/llama.cpp.git
cd llama.cpp
git checkout b3600  # or any later release tag
```

### 2. Configure and Build

#### Metal (Recommended)

```bash
cmake -B build \
  -DCMAKE_SYSTEM_NAME=iOS \
  -DCMAKE_OSX_ARCHITECTURES=arm64 \
  -DBUILD_SHARED_LIBS=OFF \
  -DGGML_METAL=ON
cmake --build build --config Release
```

#### CPU Only

```bash
cmake -B build \
  -DCMAKE_SYSTEM_NAME=iOS \
  -DCMAKE_OSX_ARCHITECTURES=arm64 \
  -DBUILD_SHARED_LIBS=OFF
cmake --build build --config Release
```

<div style="padding: 10px 15px; background-color: #e6f7ff; border-left: 4px solid #07a2ff; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold;">Simulator Builds</p>
  <p style="margin: 5px 0 0 0;">If you need to test on the iOS Simulator (Apple Silicon Mac), add <code>-DCMAKE_OSX_SYSROOT=iphonesimulator</code> to the cmake command. Note that Unreal Engine's iOS packaging targets real devices, not the simulator.</p>
</div>

### 3. Copy Libraries

Copy all `.a` files from `build/` (and its subdirectories) into your plugin directory:

```
<YourProject>/Plugins/GenAILlama/ThirdParty/LlamaCpp/lib/IOS/
```

```bash
find build -name "*.a" -exec cp {} /path/to/ThirdParty/LlamaCpp/lib/IOS/ \;
```

The plugin automatically links the required Apple frameworks (Accelerate, Metal, MetalKit, Foundation) when building for iOS.

### 4. Rebuild Your Unreal Project

After placing the files, rebuild your Unreal project targeting iOS. Check the build log for:

```
GenAILlama: llama.cpp libraries found at <path>. Embedded inference enabled.
```

---

## Model Size Considerations

iOS devices have limited RAM. Choose models carefully to avoid system termination:

| Model | Q4_K_M Size | RAM Usage (Approx.) | Recommended For |
|---|---|---|---|
| Qwen2.5-0.5B | ~400 MB | ~600 MB | iPhone / iPad (any) |
| TinyLlama 1.1B | ~637 MB | ~900 MB | iPhone 12+ / iPad Air+ |
| Gemma-2B | ~1.4 GB | ~2 GB | iPhone 14 Pro+ / iPad Pro |

<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">Memory Warning</p>
  <p style="margin: 5px 0 0 0; color: #856404;">iOS aggressively terminates apps that use too much memory. Test on real devices with representative model sizes. Use smaller quantizations (Q4_K_M or Q4_K_S) to reduce memory usage.</p>
</div>

---

## Troubleshooting

#### CMake fails to find iOS SDK
- Ensure Xcode is installed (not just Command Line Tools).
- Run `sudo xcode-select -s /Applications/Xcode.app` to set the active developer directory.

#### Linker errors about missing symbols
- Verify you built with the iOS toolchain (`CMAKE_SYSTEM_NAME=iOS`), not the macOS default.
- Ensure all `.a` files were copied (including `libggml-metal.a` for Metal builds).

#### App terminated on device
- Check memory usage &mdash; the model may be too large for the device.
- Reduce `Context Size` and use smaller models.

---

## See Also

- [Embedded Inference Setup](/docs/genai-llama/embedded-setup/) &mdash; Overview and troubleshooting
- [GenAI Llama Documentation](/docs/genai-llama/) &mdash; Full plugin reference
