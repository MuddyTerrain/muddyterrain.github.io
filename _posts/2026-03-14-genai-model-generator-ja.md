---
layout: wide
title: "GenAI Model Generator - AI 3D モデル生成 Unreal Engine プラグイン"
category: products
permalink: /ja/genai-model-generator
author: "Muddy Terrain"
tags: [tools, unreal, gamedev, ai, 3d-models, textures, meshy, tripo, rodin]
lang: ja
hreflang_group: genai-model-generator
image: https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1756686888/china-dragon.webp
---



<html lang="ja">

<body>

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1756686888/china-dragon.webp" alt="GenAI Model Generator - Unreal Engine での AI 3D モデル生成" style="width: 100%;">
</figure>
</div>

<p><strong>AI を使用して Unreal Engine 内で直接 3D モデルと PBR テクスチャを生成。</strong> GenAI Model Generator は、Unreal プロジェクトを最も強力な AI 3D 生成サービス — Meshy、Hyper3D Rodin、Tripo AI、fal.ai、Google — に単一の統合インターフェースで接続するプロダクションレディなプラグインです。テキストから 3D、画像から 3D、リテクスチャリング、AI テクスチャ生成のすべてを Blueprint または C++ から利用できます。</p>

<div class="button-row">
  <a href="/docs/genai-modelgenerator" class="cta-button primary track-click" data-event-name="btn_clk_modelgen_docs" data-event-location="top_cta">ドキュメント</a>
  <a href="/t/discord" class="cta-button secondary track-click" data-event-name="btn_clk_join_discord" data-event-location="top_cta" target="_blank" rel="noopener noreferrer">Discord に参加</a>
</div>

<div style="background-color: #f9f9f9; border-left: 4px solid #4a4a4a; padding: 25px; margin: 30px 0; border-radius: 4px;">
  <h2 style="margin-top: 0;">5 プロバイダー、1 つのプラグイン</h2>
  <p>単一の API で最高の AI 3D 生成サービスにアクセス。ワークフローを変更することなく Meshy、Hyper3D Rodin、Tripo AI、fal.ai、Google を切り替えられます。各プロバイダーにはそれぞれの強みがあり、各タスクに最適なツールを使用できます。</p>
  <p>このプラグインは新しいプロバイダーやモデルが利用可能になり次第、<strong>無料アップデート</strong>を提供します。お役に立てましたら、Fab で<strong>5 つ星の評価</strong>をお願いします！</p>
</div>

<h2>主な機能：</h2>
<ul>
    <li>
        <p><strong>テキストから 3D 生成：</strong> 🎨<br>
        プレーンテキストで 3D モデルを記述し、完全に形成されたアセットを受け取ります。Meshy と Tripo AI がサポートし、品質と速度のトレードオフに応じた複数のモデルバージョンを提供。</p>
    </li>
    <li>
        <p><strong>画像から 3D 生成：</strong> 📸<br>
        2D 画像やコンセプトアートを 3D モデルに変換。すべてのプロバイダー — Meshy、Hyper3D Rodin、Tripo AI、fal.ai（Hunyuan3D、TripoSR、Rodin、Trellis 2 バックエンド）でサポート。</p>
    </li>
    <li>
        <p><strong>AI リテクスチャリング：</strong> 🖌️<br>
        テキスト説明に基づいて既存の 3D モデルに AI 生成テクスチャを適用。Meshy を通じて、単一のプロンプトでプレースホルダーアセットをプロダクションレディなアートに変換。</p>
    </li>
    <li>
        <p><strong>PBR テクスチャ生成：</strong> 🧱<br>
        Google AI を使用して、個別または完全な PBR テクスチャセット — ベースカラー、ノーマル、ラフネス、メタリックマップ — を生成。シームレス/タイル可能テクスチャとリファレンス画像スタイル転送をサポート。</p>
    </li>
    <li>
        <p><strong>複数の出力フォーマット：</strong> 📦<br>
        生成されたモデルを GLB、FBX、OBJ、USDZ、STL フォーマットでエクスポート。メッシュトポロジー（三角形またはクワッド）とポリゴン数（100 ～ 300,000 三角形）を制御。</p>
    </li>
    <li>
        <p><strong>進捗トラッキング：</strong> 📊<br>
        すべての生成タスクにリアルタイム進捗コールバック（0-100%）が含まれ、ユーザーにローディングバーやステータス更新を表示できます。</p>
    </li>
    <li>
        <p><strong>セキュアなキー管理：</strong> 🔐<br>
        すべての API キーはソースコントロールから分離された非ポータブルな暗号化ファイルに保存。単一の設定パネルから 5 つのプロバイダーすべてのキーを管理。</p>
    </li>
    <li>
        <p><strong>Blueprint & C++ 対応：</strong> 🔗<br>
        すべての機能が非同期 Blueprint ノードとデリゲート付き C++ 静的関数の両方で利用可能。適切なライフタイム管理のために <code>UCancellableAsyncAction</code> で構築。</p>
    </li>
    <li>
        <p><strong>内蔵エディターツール：</strong> 🛠️<br>
        コードを書くことなく、Slate ベースのエディターウィジェットから直接 3D モデルを生成。結果をプレビューし、生成されたアセットをコンテンツブラウザにインポート。</p>
    </li>
</ul>

<h2>対応プロバイダーと機能</h2>
<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">免責事項</p>
  <p style="margin: 5px 0 0 0; color: #856404;">このプラグインは、少なくとも 1 つのサポートされているプロバイダーの有効な API キーが必要です。<a href="/docs/genai-modelgenerator/getting-api-keys/" class="track-click" data-event-name="lnk_clk_modelgen_api_keys_docs" data-event-location="post_modelgen">API キーの取得方法</a>についてはドキュメントをご覧ください。</p>
</div>

<ul>
    <li><strong>Meshy AI：</strong>
        <ul>
            <li><strong>テキストから 3D：</strong>モデル v4、v5、v6、カスタマイズ可能なアートスタイル</li>
            <li><strong>画像から 3D：</strong>リファレンス画像を 3D モデルに変換</li>
            <li><strong>リテクスチャリング：</strong>既存メッシュに AI テクスチャを適用</li>
            <li>対称モード（自動/オン/オフ）、設定可能なトポロジー</li>
        </ul>
    </li>
    <li><strong>Hyper3D Rodin：</strong>
        <ul>
            <li><strong>画像から 3D ＆テキストから 3D：</strong>4 つの品質ティア（Regular、Sketch、Detail、Smooth）</li>
            <li>4 つのメッシュ品質レベル（500 ～ 300K 三角形）</li>
            <li>PBR と Shaded マテリアルオプション</li>
        </ul>
    </li>
    <li><strong>Tripo AI：</strong>
        <ul>
            <li><strong>テキストから 3D ＆画像から 3D：</strong>モデルバージョン v2.0 と v2.5</li>
            <li>クリーンなトポロジーによる高速生成</li>
        </ul>
    </li>
    <li><strong>fal.ai：</strong>
        <ul>
            <li><strong>画像から 3D：</strong>複数の推論バックエンドを通じて</li>
            <li>Hunyuan3D v2.1、TripoSR、Rodin、Trellis 2</li>
            <li>設定可能な推論ステップとガイダンススケール</li>
        </ul>
    </li>
    <li><strong>Google：</strong>
        <ul>
            <li><strong>テクスチャ生成：</strong>NanoBanana 2 / Gemini ベースの PBR テクスチャ作成</li>
            <li>ベースカラー、ノーマル、ラフネス、メタリック、完全 PBR セット</li>
            <li>シームレス/タイル可能テクスチャサポート</li>
        </ul>
    </li>
</ul>

<h2>ユースケース：</h2>
<ul>
    <li><strong>ラピッドプロトタイピング：</strong>開発中にテキスト記述からプレースホルダーおよびプロダクション品質の 3D アセットを生成し、イテレーション時間を劇的に短縮。</li>
    <li><strong>ランタイムコンテンツ生成：</strong>プレイヤー入力やプロシージャル生成システムに基づいて、ランタイムにユニークな 3D アセットを動的に作成。</li>
    <li><strong>コンセプトアートから 3D パイプライン：</strong>2D コンセプトアートを 3D モデルに直接変換し、アートディレクションと 3D プロダクションのギャップを埋める。</li>
    <li><strong>テクスチャオーサリング：</strong>エンジンを離れることなく、環境、プロップ、マテリアルの PBR テクスチャセットを生成。</li>
    <li><strong>アセットリフレッシュ：</strong>AI 生成マテリアルで既存モデルをリテクスチャし、異なるビジュアルディレクションを素早く探索。</li>
</ul>

<h2>このプラグインを選ぶ理由</h2>
<ul>
    <li><strong>マルチプロバイダーの柔軟性：</strong> 🌐 1 つのプラグインで 5 つの異なる AI プロバイダーにアクセス。結果を比較し、各アセットに最適なものを選択。</li>
    <li><strong>プロダクションレディ：</strong> ⚔️ 全体にわたる非同期処理、進捗トラッキング、タスクキャンセル、適切なエラーハンドリング。</li>
    <li><strong>常に進化：</strong> 🧬 AI 3D 生成の進化に合わせて、新しいプロバイダーやモデルバージョンを定期的に追加。</li>
    <li><strong>開発者による、開発者のための：</strong> 💻 <a href="/genai-unreal" class="track-click" data-event-name="lnk_clk_genai_unreal" data-event-location="post_modelgen">GenAI for Unreal</a> と <a href="/genai-china" class="track-click" data-event-name="lnk_clk_genai_china" data-event-location="post_modelgen">Gen AI China</a> を開発した同じチームが制作。</li>
    <li><strong>専用サポート：</strong> 📧 ご質問やカスタム修正のリクエストはサポートチームまでメールでお問い合わせください。</li>
</ul>

<h2>リソース＆サポート</h2>
<ul>
    <li><a href="/docs/genai-modelgenerator/" class="track-click" data-event-name="lnk_clk_modelgen_docs" data-event-location="post_modelgen">ドキュメント</a></li>
    <li><a href="/t/discord" class="track-click" data-event-name="lnk_clk_discord" data-event-location="post_modelgen" target="_blank" rel="noopener noreferrer">Discord コミュニティ</a></li>
    <li><strong>プロフェッショナルサポート＆カスタム開発：</strong> <a href="mailto:mail@muddyterrain.com" class="track-click" data-event-name="lnk_clk_support_email" data-event-location="post_modelgen">mail@muddyterrain.com</a></li>
</ul>

<div class="button-row">
  <a href="/docs/genai-modelgenerator" class="cta-button primary track-click" data-event-name="btn_clk_modelgen_docs" data-event-location="btm_cta">ドキュメント</a>
  <a href="/t/discord" class="cta-button secondary track-click" data-event-name="btn_clk_join_discord" data-event-location="btm_cta" target="_blank" rel="noopener noreferrer">Discord に参加</a>
</div>

</body>
</html>
