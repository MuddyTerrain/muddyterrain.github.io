---
layout: documentation
title: Build for Android (Experimental)
permalink: /docs/genai-llama/build-android/
nav_order: 12
description: "Cross-compile llama.cpp for Android ARM64 with Vulkan or CPU support for embedded LLM inference in Unreal Engine games."
tags: [android, embedded-inference, llama-cpp, gguf, cross-compilation, vulkan]
---

Step-by-step instructions for cross-compiling llama.cpp for Android (ARM64) for use with GenAI Llama's embedded inference.

---

## Prerequisites

- **Android NDK** (r25 or later recommended)
  - Included with Android Studio, or download standalone from [developer.android.com/ndk](https://developer.android.com/ndk/downloads)
- **CMake 3.14 or later**
- **Git**

Set the `ANDROID_NDK` environment variable to point to your NDK installation:

```bash
export ANDROID_NDK=/path/to/android-ndk-r25c
```

---

## Choose Your GPU Backend

| Backend | Best For | Flag |
|---------|----------|------|
| **Vulkan** | Most modern Android devices (recommended) | `-DGGML_VULKAN=ON` |
| **CPU** | Older devices, or testing | _(no GPU flag)_ |

<div style="padding: 10px 15px; background-color: #e6f7ff; border-left: 4px solid #07a2ff; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold;">Vulkan Support</p>
  <p style="margin: 5px 0 0 0;">Most Android devices released since 2017 support Vulkan. For maximum compatibility with older devices, build with CPU-only as a fallback.</p>
</div>

---

## Build Steps

### 1. Clone llama.cpp

```bash
git clone https://github.com/ggml-org/llama.cpp.git
cd llama.cpp
git checkout b3600  # or any later release tag
```

### 2. Configure and Build

#### Vulkan (Recommended)

```bash
cmake -B build \
  -DCMAKE_TOOLCHAIN_FILE=$ANDROID_NDK/build/cmake/android.toolchain.cmake \
  -DANDROID_ABI=arm64-v8a \
  -DANDROID_PLATFORM=android-26 \
  -DBUILD_SHARED_LIBS=OFF \
  -DGGML_VULKAN=ON
cmake --build build --config Release
```

#### CPU Only

```bash
cmake -B build \
  -DCMAKE_TOOLCHAIN_FILE=$ANDROID_NDK/build/cmake/android.toolchain.cmake \
  -DANDROID_ABI=arm64-v8a \
  -DANDROID_PLATFORM=android-26 \
  -DBUILD_SHARED_LIBS=OFF
cmake --build build --config Release
```

<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">Important</p>
  <p style="margin: 5px 0 0 0; color: #856404;">Always use <code>arm64-v8a</code> as the ABI. This matches the ARM64 architecture required by modern Android devices and Unreal Engine's Android target.</p>
</div>

### 3. Copy Libraries

Copy all `.a` files from `build/` (and its subdirectories) into your plugin directory:

```
<YourProject>/Plugins/GenAILlama/ThirdParty/LlamaCpp/lib/Android/
```

```bash
find build -name "*.a" -exec cp {} /path/to/ThirdParty/LlamaCpp/lib/Android/ \;
```

### 4. Rebuild Your Unreal Project

After placing the files, rebuild your Unreal project targeting Android. Check the build log for:

```
GenAILlama: llama.cpp libraries found at <path>. Embedded inference enabled.
```

---

## Model Size Considerations

Mobile devices have limited RAM and no swap. Choose models carefully:

| Model | Q4_K_M Size | RAM Usage (Approx.) | Recommended For |
|---|---|---|---|
| Qwen2.5-0.5B | ~400 MB | ~600 MB | Low-end devices |
| TinyLlama 1.1B | ~637 MB | ~900 MB | Mid-range devices |
| Gemma-2B | ~1.4 GB | ~2 GB | High-end devices |

Set `GPU Layers = 0` (CPU only) if you encounter GPU memory issues on specific devices.

---

## Troubleshooting

#### CMake can't find the NDK toolchain
- Verify `ANDROID_NDK` points to the correct directory.
- The toolchain file should be at `$ANDROID_NDK/build/cmake/android.toolchain.cmake`.

#### Vulkan build fails
- Ensure your NDK version includes Vulkan headers (NDK r21+ includes them).
- Try building with CPU-only first to isolate the issue.

#### App crashes on older devices
- Check that the device supports the minimum Android API level (26).
- Try reducing `GPU Layers` or using CPU-only inference.

---

## See Also

- [Embedded Inference Setup](/docs/genai-llama/embedded-setup/) &mdash; Overview and troubleshooting
- [GenAI Llama Documentation](/docs/genai-llama/) &mdash; Full plugin reference
