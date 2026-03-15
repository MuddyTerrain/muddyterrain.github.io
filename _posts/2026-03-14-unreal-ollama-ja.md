---
layout: wide
title: "Unreal Ollama - Unreal Engine ローカル AI プラグイン"
category: products
permalink: /ja/unreal-ollama
author: "Muddy Terrain"
tags: [tools, unreal, gamedev, ai, ollama, local-ai, open-source]
lang: ja
hreflang_group: unreal-ollama
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1759079669/Screenshot_2025-09-28_133409_e7uag9.webp
---



<html lang="ja">

<body>

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1759079669/Screenshot_2025-09-28_133409_e7uag9.webp" alt="Unreal Ollama - Unreal Engine でローカル AI モデルを実行" style="width: 100%;">
</figure>
</div>

<p><strong>強力なオープンソース AI モデルを Unreal Engine 内でローカル実行 — クラウド API 不要、API キー不要、リクエストごとの課金なし。</strong> Unreal Ollama は、<a href="https://ollama.com/" target="_blank" rel="noopener noreferrer">Ollama</a> を Unreal Engine と統合する無料のオープンソースプラグインです。Ollama ライブラリの任意のモデルでチャット補完、リアルタイムストリーミング、マルチモーダルビジョンをサポートします。</p>

<div class="button-row">
  <a href="https://github.com/MuddyTerrain/unreal-ollama" class="cta-button primary track-click" data-event-name="btn_clk_unreal_ollama_github" data-event-location="top_cta" target="_blank" rel="noopener noreferrer">GitHub で見る</a>
  <a href="/docs/unreal-ollama" class="cta-button secondary track-click" data-event-name="btn_clk_unreal_ollama_docs" data-event-location="top_cta">ドキュメント</a>
</div>

<div style="background-color: #f9f9f9; border-left: 4px solid #4a4a4a; padding: 25px; margin: 30px 0; border-radius: 4px;">
  <h2 style="margin-top: 0;">無料＆オープンソース</h2>
  <p>Unreal Ollama は個人プロジェクトでも商用プロジェクトでも完全に無料で使用できます。ソースコードは GitHub で公開されています。マーケットプレイスでの購入は不要 — クローンしてプロジェクトに配置するだけですぐに開発を始められます。</p>
  <p>お役に立てましたら、GitHub で <strong>Star</strong> をお願いします！</p>
</div>

<h2>主な機能：</h2>
<ul>
    <li>
        <p><strong>100% ローカル＆オフライン：</strong> 🔒<br>
        すべての AI 処理はお使いのマシン上で実行されます。データはデバイスから外部に送信されず、ランタイムにインターネット接続は不要で、API キーの管理も必要ありません。プライバシーが重要なアプリケーションやオフラインゲームに最適です。</p>
    </li>
    <li>
        <p><strong>リクエストごとのコストゼロ：</strong> 💰<br>
        モデルをダウンロードすれば、API の請求を気にすることなく無制限に AI インタラクションを実行できます。電気代のコストで何百万もの NPC ダイアログを生成できます。</p>
    </li>
    <li>
        <p><strong>チャット補完：</strong> 🤖<br>
        プロンプトを送信して完全なレスポンスを取得。シンプルな非同期ノードがすべてを処理 — フリーズなし、ゲームスレッドのブロックなし。</p>
    </li>
    <li>
        <p><strong>リアルタイムストリーミング：</strong> ⚡️<br>
        AI レスポンスを生成されるたびに一語ずつ受信。タイプライター効果、ライブダイアログ、最小限の体感遅延のレスポンシブ AI コンパニオンを作成できます。</p>
    </li>
    <li>
        <p><strong>マルチモーダルビジョンサポート：</strong> 📸<br>
        <code>llava</code> などのモデルを使用してテキストとともに画像を送信。プロジェクトから Texture2D アセットを直接渡すだけ — プラグインが Base64 変換を自動的に処理します。</p>
    </li>
    <li>
        <p><strong>Blueprint ＆ C++ 対応：</strong> 🔗<br>
        シンプルなレイテントノードによる完全な Blueprint サポートと、最大のパフォーマンスと制御のための静的関数とデリゲートを備えた完全な C++ API。</p>
    </li>
    <li>
        <p><strong>幅広いエンジンサポート：</strong> 🌐<br>
        Unreal Engine 5.1 から 5.6 に対応。最大の互換性のために UE 5.1 でビルドされ、Unreal の「低バージョンで開発、高バージョンにアップグレード」アプローチに準拠。</p>
    </li>
</ul>

<h2>対応モデル</h2>
<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">前提条件</p>
  <p style="margin: 5px 0 0 0; color: #856404;">このプラグインには、ターゲットマシンに <a href="https://ollama.com/" target="_blank" rel="noopener noreferrer">Ollama</a> がインストールされ実行されている必要があります。<a href="https://ollama.com/library" target="_blank" rel="noopener noreferrer">ollama.com/library</a> で完全なモデルライブラリを閲覧できます。</p>
</div>
<p>Ollama ライブラリの任意のモデルを使用できます。人気のある選択肢：</p>
<ul>
    <li><strong>一般チャット：</strong> <code>llama3</code>、<code>mistral</code>、<code>gemma</code>、<code>phi-3</code>、<code>nemotron-3-nano</code></li>
    <li><strong>マルチモーダル（ビジョン）：</strong> <code>llava</code>、<code>llava-llama3</code>、<code>moondream</code></li>
    <li><strong>コーディング：</strong> <code>codellama</code>、<code>starcoder2</code>、<code>deepseek-coder</code></li>
    <li><strong>小型＆高速：</strong> <code>gemma3:1b</code>、<code>phi-3:mini</code>、<code>tinyllama</code></li>
</ul>

<h2>ユースケース：</h2>
<ul>
    <li><strong>オフライン NPC ダイアログ：</strong>インターネット接続なしで動作するキャラクターダイアログを生成 — シングルプレイヤーゲームやデモに不可欠。</li>
    <li><strong>プライバシー重視のアプリケーション：</strong>プレイヤーと AI のすべての会話をデバイス上に保持。データがマシンから外部に送信されることはありません。</li>
    <li><strong>ラピッドプロトタイピング：</strong>アカウント、支払い方法、API キーの設定なしで AI 機能を即座にテスト。モデルをプルするだけで開始できます。</li>
    <li><strong>ゼロコスト開発：</strong>クラウド API コストを蓄積することなく、開発中に AI 機能を反復できます。</li>
    <li><strong>ハイブリッドアーキテクチャ：</strong>ルーチンインタラクションにはローカルモデルを、ピークインテリジェンスが求められる場面にはクラウドモデル（<a href="/genai-unreal" class="track-click" data-event-name="lnk_clk_genai_unreal" data-event-location="post_unreal_ollama">GenAI for Unreal</a> プラグイン経由）を使用。</li>
</ul>

<h2>このプラグインを選ぶ理由</h2>
<ul>
    <li><strong>永久無料：</strong> 🆓 オープンソースで商用利用可能。隠れた費用やサブスクリプションはありません。</li>
    <li><strong>シンプルな統合：</strong> 🧩 プラグインをプロジェクトに配置して有効にするだけで、数分で AI とのチャットを開始できます。</li>
    <li><strong>プロダクションレディ：</strong> ⚔️ 適切なライフタイム管理を備えた <code>UCancellableAsyncAction</code> で構築。出荷ゲームで安全に使用できます。</li>
    <li><strong>開発者による、開発者のための：</strong> 💻 <a href="/genai-unreal" class="track-click" data-event-name="lnk_clk_genai_unreal" data-event-location="post_unreal_ollama">GenAI for Unreal</a> と <a href="/genai-china" class="track-click" data-event-name="lnk_clk_genai_china" data-event-location="post_unreal_ollama">Gen AI China</a> を開発した同じチームが制作。</li>
    <li><strong>専用サポート：</strong> 📧 Discord に参加するかメールでお問い合わせください。</li>
</ul>

<h2>リソース＆サポート</h2>
<ul>
    <li><a href="/docs/unreal-ollama/" class="track-click" data-event-name="lnk_clk_unreal_ollama_docs" data-event-location="post_unreal_ollama">ドキュメント</a></li>
    <li><a href="https://github.com/MuddyTerrain/unreal-ollama" class="track-click" data-event-name="lnk_clk_unreal_ollama_github" data-event-location="post_unreal_ollama" target="_blank" rel="noopener noreferrer">GitHub リポジトリ</a></li>
    <li><a href="/t/discord" class="track-click" data-event-name="lnk_clk_discord" data-event-location="post_unreal_ollama" target="_blank" rel="noopener noreferrer">Discord コミュニティ</a></li>
    <li><strong>プロフェッショナルサポート：</strong> <a href="mailto:mail@muddyterrain.com" class="track-click" data-event-name="lnk_clk_support_email" data-event-location="post_unreal_ollama">mail@muddyterrain.com</a></li>
</ul>

<div class="button-row">
  <a href="https://github.com/MuddyTerrain/unreal-ollama" class="cta-button primary track-click" data-event-name="btn_clk_unreal_ollama_github" data-event-location="btm_cta" target="_blank" rel="noopener noreferrer">GitHub で見る</a>
  <a href="/docs/unreal-ollama" class="cta-button secondary track-click" data-event-name="btn_clk_unreal_ollama_docs" data-event-location="btm_cta">ドキュメント</a>
</div>

</body>
</html>
