---
layout: wide
title: "GenAI Llama - Unreal Engine 向けローカル AI（旧 Unreal Ollama）"
category: products
permalink: /ja/unreal-ollama
author: "Muddy Terrain"
tags: [tools, unreal, gamedev, ai, ollama, local-ai, llama, genai-llama, mistral, phi, gemma, llama-cpp, embedded-inference, lm-studio, vllm]
lang: ja
hreflang_group: unreal-ollama
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1759079669/Screenshot_2025-09-28_133409_e7uag9.webp
---



<html lang="ja">

<body>

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1759079669/Screenshot_2025-09-28_133409_e7uag9.webp" alt="GenAI Llama - Unreal Engine でローカル AI モデルを実行" style="width: 100%;">
</figure>
</div>

<p><strong>クラウド API 不要、インターネット接続不要、リクエストごとの課金なし — Unreal Engine のゲームやアプリ内でローカル AI モデルを実行。</strong> GenAI Llama（旧 Unreal Ollama）は 2 つのモードをサポートします。HTTP 経由でローカル推論サーバー（Ollama、LM Studio、llama.cpp サーバー、vLLM、LocalAI、Jan）に接続するモードと、組み込み llama.cpp 推論によって GGUF モデルをゲームプロセス内で直接実行するモードです。Llama 3、Mistral、Phi、Gemma、DeepSeek など数百種類のモデルをローカルで実行できます。</p>

<div class="button-row">
  <a href="/t/genai-llama-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-llama-plugin" class="cta-button primary track-click" data-event-name="btn_clk_genai_llama_fab" data-event-location="top_cta" target="_blank" rel="noopener noreferrer">Fab.com で見る</a>
  <a href="/docs/genai-llama" class="cta-button secondary track-click" data-event-name="btn_clk_genai_llama_docs" data-event-location="top_cta">ドキュメント</a>
</div>

<div style="background-color: #f9f9f9; border-left: 4px solid #4a4a4a; padding: 25px; margin: 30px 0; border-radius: 4px;">
  <h2 style="margin-top: 0;">2 つの動作モード</h2>
  <p><strong>HTTP プロバイダー</strong> — 任意のローカル推論サーバーに接続。Ollama、LM Studio、llama.cpp サーバー、vLLM、LocalAI、Jan、または OpenAI 互換エンドポイントと即座に動作します。</p>
  <p><strong>組み込み推論（llama.cpp）</strong> — GGUF モデルをゲームプロセス内で直接実行。サーバー不要。PC およびモバイルで完全オフライン動作。オプション機能 — ターゲットプラットフォーム向けに llama.cpp ライブラリのコンパイルが必要です。</p>
</div>

<h2>主な機能：</h2>
<ul>
    <li>
        <p><strong>7 つの対応プロバイダー：</strong><br>
        Ollama、LM Studio、llama.cpp サーバー、vLLM、LocalAI、Jan（HTTP）、およびサーバーレスのインプロセス推論向け組み込み llama.cpp。</p>
    </li>
    <li>
        <p><strong>組み込み推論：</strong><br>
        GGUF モデルをゲームプロセス内で直接実行 — サーバー不要、ネットワーク不要、インターネット不要。ランタイムにモデルのロード・アンロードが可能。CUDA、Vulkan、Metal による GPU アクセラレーション対応。</p>
    </li>
    <li>
        <p><strong>100% ローカル＆オフライン：</strong><br>
        すべての AI 処理はプレイヤーのマシン上で実行されます。データはデバイスから外部に送信されません。プライバシーが重要なアプリケーションやオフラインゲームに最適です。</p>
    </li>
    <li>
        <p><strong>リクエストごとのコストゼロ：</strong><br>
        モデルをダウンロードすれば、API の請求なしで無制限に AI インタラクションを実行できます。サブスクリプションも不要です。</p>
    </li>
    <li>
        <p><strong>チャット補完＆ストリーミング：</strong><br>
        完全なチャット補完とリアルタイムのトークンごとストリーミング。タイプライター効果、ライブダイアログ、レスポンシブな AI コンパニオンを作成できます。</p>
    </li>
    <li>
        <p><strong>マルチモーダルビジョン：</strong><br>
        <code>llava</code> や <code>llama3.2-vision</code> などのモデルを使用してテキストとともに画像を送信。UTexture2D アセットを直接渡すだけ — プラグインが Base64 変換を自動的に処理します。</p>
    </li>
    <li>
        <p><strong>生成オプション：</strong><br>
        Temperature、Top P、Max Tokens、Seed、Stop シーケンス、JSON フォーマット出力、システムプロンプトをサポート。</p>
    </li>
    <li>
        <p><strong>サーバー管理：</strong><br>
        ヘルスチェック、利用可能なモデルの一覧表示、ランタイムでのプロバイダー切り替え。</p>
    </li>
    <li>
        <p><strong>Blueprint ＆ C++ 対応：</strong><br>
        非同期レイテントノードによる完全な Blueprint サポートと、デリゲートを備えた完全な C++ API。適切なライフタイム管理のために <code>UCancellableAsyncAction</code> で構築。</p>
    </li>
    <li>
        <p><strong>幅広いプラットフォームサポート：</strong><br>
        HTTP プロバイダー：Windows、macOS、Linux、Android、iOS、PS4、Xbox One、Switch、HoloLens。組み込み推論：Windows、macOS、Linux、Android、iOS。エンジンサポート：UE 5.1 〜 5.7。</p>
    </li>
</ul>

<h2>対応モデル</h2>
<p><a href="https://ollama.com/library" target="_blank" rel="noopener noreferrer">Ollama ライブラリ</a>の任意のモデル（HTTP）または <a href="https://huggingface.co/models?search=gguf" target="_blank" rel="noopener noreferrer">Hugging Face</a> の任意の GGUF モデル（組み込み）を使用できます：</p>
<ul>
    <li><strong>一般チャット：</strong> <code>llama3</code>、<code>mistral</code>、<code>gemma</code>、<code>phi-3</code>、<code>nemotron-3-nano</code></li>
    <li><strong>マルチモーダル（ビジョン）：</strong> <code>llava</code>、<code>llama3.2-vision</code>、<code>moondream</code></li>
    <li><strong>コーディング：</strong> <code>codellama</code>、<code>starcoder2</code>、<code>deepseek-coder</code></li>
    <li><strong>小型＆高速：</strong> <code>gemma3:1b</code>、<code>phi-3:mini</code>、<code>tinyllama</code>、<code>qwen2.5-0.5b</code></li>
</ul>

<h2>ユースケース：</h2>
<ul>
    <li><strong>オフライン NPC ダイアログ：</strong>インターネット接続なしで動作するキャラクターダイアログを生成 — シングルプレイヤーゲーム、コンソールタイトル、デモに不可欠。</li>
    <li><strong>プライバシー重視のアプリケーション：</strong>プレイヤーと AI のすべての会話をデバイス上に保持。データがマシンから外部に送信されることはありません。</li>
    <li><strong>AI 搭載の出荷ゲーム：</strong>組み込み推論によって GGUF モデルをゲームにバンドル。プレイヤーが追加でインストールするものは何もありません。</li>
    <li><strong>コンソール＆モバイル AI：</strong>HTTP プロバイダーは PS4、Xbox、Switch、HoloLens で動作。組み込み推論は Android および iOS で動作します。</li>
    <li><strong>ラピッドプロトタイピング：</strong>LM Studio の GUI や Ollama の CLI を使って AI 機能を即座にテスト。</li>
    <li><strong>ハイブリッドアーキテクチャ：</strong>ルーチンインタラクションにはローカルモデルを、ピークインテリジェンスが求められる場面にはクラウドモデル（<a href="/genai-unreal" class="track-click" data-event-name="lnk_clk_genai_unreal" data-event-location="post_genai_llama">GenAI for Unreal</a> プラグイン経由）を使用。</li>
</ul>

<h2>このプラグインを選ぶ理由</h2>
<ul>
    <li><strong>最も柔軟なローカル AI：</strong> 7 つのプロバイダー＋組み込み推論。これほどの範囲をカバーするプラグインは他にありません。</li>
    <li><strong>プロダクションレディ：</strong>適切なライフタイム管理、キャンセルサポート、スレッドセーフな組み込み推論を備えた <code>UCancellableAsyncAction</code> で構築。</li>
    <li><strong>コンソールサポート：</strong> HTTP プロバイダーは PS4、Xbox One、Switch、HoloLens で動作 — 他のどのローカル AI プラグインもサポートしていないプラットフォームです。</li>
    <li><strong>開発者による、開発者のための：</strong> <a href="/genai-unreal" class="track-click" data-event-name="lnk_clk_genai_unreal" data-event-location="post_genai_llama">GenAI for Unreal</a> と <a href="/genai-china" class="track-click" data-event-name="lnk_clk_genai_china" data-event-location="post_genai_llama">GenAI Chinese Models</a> を開発した同じチームが制作。</li>
    <li><strong>専用サポート：</strong> Discord に参加するかメールでお問い合わせください。</li>
</ul>

<h2>リソース＆サポート</h2>
<ul>
    <li><a href="/docs/genai-llama/" class="track-click" data-event-name="lnk_clk_genai_llama_docs" data-event-location="post_genai_llama">ドキュメント</a></li>
    <li><a href="/t/discord" class="track-click" data-event-name="lnk_clk_discord" data-event-location="post_genai_llama" target="_blank" rel="noopener noreferrer">Discord コミュニティ</a></li>
    <li><strong>プロフェッショナルサポート：</strong> <a href="mailto:mail@muddyterrain.com" class="track-click" data-event-name="lnk_clk_support_email" data-event-location="post_genai_llama">mail@muddyterrain.com</a></li>
</ul>

<div class="button-row">
  <a href="/t/genai-llama-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-llama-plugin" class="cta-button primary track-click" data-event-name="btn_clk_genai_llama_fab" data-event-location="btm_cta" target="_blank" rel="noopener noreferrer">Fab.com で見る</a>
  <a href="/docs/genai-llama" class="cta-button secondary track-click" data-event-name="btn_clk_genai_llama_docs" data-event-location="btm_cta">ドキュメント</a>
</div>

</body>
</html>
