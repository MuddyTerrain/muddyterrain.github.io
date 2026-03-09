---
layout: wide
title: "GenAI for Unreal プラグイン - Unreal Engine AI 統合"
category: products
permalink: /ja/genai-unreal
author: "Muddy Terrain"
tags: [documentation,sample]
lang: ja
hreflang_group: genai-unreal
image: https://res.cloudinary.com/dqq9t4hyy/image/upload//q_60/v1751299301/86187345-e044-4862-9acd-0c078ade41ab.webp
---

<html lang="ja">

<body>

<div class="image-wrapper">
<figure>
    <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1772931701/MainBanners_4_d9nmqo.webp" alt="ユースケース例" style="width: 100%;">
</figure>
</div>



<p><strong>毎日のように新しいAIモデルのリリースを追いかけるのに疲れましたか？もう大丈夫です。</strong> GenAI for Unreal は、統合レイヤーをすべて引き受ける、本番環境対応の決定版プラグインです。ゲームプレイの開発に集中してください。世界をリードするAIモデルへの安定的で統一された強力なインターフェースは私たちが提供します。本プラグインは、OpenAI の ChatGPT（最新の GPT-5.4、GPT-5.3 Codex、GPT-5.2 を含む）、Anthropic の Claude Opus/Sonnet 4.6、Google の Gemini 3.1 / Nano Banana 2、XAI の Grok 4.1/4/3、DeepSeek の R1、Inworld AI TTS など、現在最先端のすべての LLM API に対応しています。さらに、OpenAI Compatible Mode を使えば、Alibaba Qwen、Mistral、Groq、OpenRouter、Meta Llama、BigModel GLM-4 へのシームレスな切り替えや、Ollama によるローカルモデルの実行も可能で、究極の柔軟性とコスト効率を実現します。</p>

<p>GPT-5.4、Claude 4.6、Gemini 3.1、Inworld AI TTS、Function Calling、OpenAI <strong>Responses API</strong> に対応！！ 🎉</p>

<div class="button-row">
  <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="cta-button primary track-click" data-event-name="btn_clk_gen_ai_fab"  data-event-location="top_cta" target="_blank" rel="noopener noreferrer">Fab.com で見る</a>
  <a href="/docs/genai-unreal" class="cta-button secondary track-click" data-event-name="btn_clk_gen_ai_documentation"  data-event-location="top_cta">製品ドキュメント</a>
</div>

<div style="padding: 15px 20px; background-color: #f0f8ff; border-left: 4px solid #007acc; margin: 25px 0; border-radius: 6px;">
  <h2 style="margin-top: 0; font-size: 1.2em;">v2.0.1 の新機能！</h2>
  <p style="margin-bottom: 15px; font-size: 1em;">今回のリリースでは、多数の主要な新機能、統合、重要な修正が含まれています：</p>
  <ul style="margin: 0; padding-left: 20px;">
        <li>🌐 <strong>Inworld AI 統合：</strong> Inworld Text-to-Speech の完全サポート。標準エンドポイントおよびリアルタイムストリーミングエンドポイントに対応。</li>
        <li>🔗 <strong>OpenAI Responses API（Beta）：</strong> OpenAI の構造化 Responses API をサポートする新しい GenOAIResponses クラスを統合。</li>
        <li>🛠️ <strong>Function Calling（Tool Use）：</strong> Anthropic Claude および OpenAI Chat モデル向けのツール/ファンクションコール機能を追加。</li>
        <li>🧠 <strong>新モデル：</strong> Anthropic Claude 4.6 Opus & Sonnet、OpenAI GPT-5.4/5.3 Codex/Image-1.5、Google Gemini 3.1 Pro/Flash Lite/Flash Image Preview、ElevenLabs Scribe V2 & V2 Realtime、および Inworld TTS 1.5 Max/Mini/1。</li>
  </ul>
</div>

<h2>主な機能：</h2>
<ul>
    <li>
        <p><strong>リアルタイムテキストストリーミング：</strong> ⚡️<br>
        ダイナミックなリアルタイムレスポンスでキャラクターに命を吹き込みましょう。ストリーミング機能はテキストが生成されるたびにチャンク単位で配信するため、ライブナレーション付きの会話、応答性の高いAIコンパニオン、待ち時間のないインタラクティブなストーリーテリングの作成に最適です。</p>
    </li>
    <li>
        <p><strong>高度なチャットコンプリーション：</strong> 🤖<br>
        OpenAI、Anthropic、Google、XAI、DeepSeek のモデルを活用して、ダイナミックなNPC対話、プロシージャルなクエスト生成、リアルタイムのナラティブ適応でゲームを強化します。</p>
    </li>
    <li>
        <p><strong>推論モデル：</strong> 🧠<br>
        DeepSeek の R1 や XAI の Grok が持つ「発言前に思考する」独自の能力を活用し、コアとなるナラティブ要素や複雑な論理的出力を生成します。</p>
    </li>
    <li>
        <p><strong>マルチモーダル ビジョン/テキスト入力：</strong> 📸<br>
        モデルにゲーム画面を「見せる」ことができます。スクリーンショットや画像をテキストと共に直接入力として提供可能——Google Gemini にも対応！AI による実況解説、動的なプレイヤーガイド、環境認識型NPC対話の作成に最適です。</p>
    </li>
    <li>
        <p><strong>画像編集：</strong> 🎨<br>
        生成だけにとどまりません。強力なAI駆動ツールで既存の画像を編集し、エンジン内でビジュアルコンセプトを直接反復できます。</p>
    </li>
    <li>
        <p><strong>構造化 JSON 出力：</strong> ❤️‍🔥<br>
        サポートされているあらゆるモデルから複雑な JSON レスポンスを確実に取得できます。たとえば、100体のAI生成NPCそれぞれに固有のストーリー、種族、性別、名前を持たせた JSON を生成できます。</p>
    </li>
    <li>
        <p><strong>高品質な画像生成：</strong> 🖼️<br>
        OpenAI の DALL-E 2、DALL-E 3、GPT-Image-1 モデルに対応し、最先端の画像生成をワークフローに直接統合できます。</p>
    </li>
    <li>
        <p><strong>テキスト読み上げ（TTS）：</strong> 🔊<br>
        OpenAI および ElevenLabs の TTS モデルを使用して、ゲーム内の対話、ナレーション、AIキャラクターとのライブ会話向けにダイナミックで高品質なボイスラインを生成します。</p>
    </li>
    <li>
        <p><strong>Function Calling（Tool Use）：</strong> 🔧<br>
        AIモデルがゲームの関数を直接呼び出せるようにします。Anthropic Claude および OpenAI Chat モデルに対応しており、AI駆動のゲームプレイアクション、データ検索、動的なワールドインタラクションを可能にします。</p>
    </li>
    <li>
        <p><strong>OpenAI Responses API：</strong> 📋<br>
        OpenAI の新しい構造化 Responses API にアクセスし、より強力で制御されたモデル出力を取得できます。Blueprint および C++ の両方に完全対応。</p>
    </li>
    <li>
        <p><strong>効果音生成：</strong> 🎶<br>
        ElevenLabs の最先端オーディオモデルを使用して、テキストプロンプトからカスタム効果音を生成します。</p>
    </li>
    <li>
        <p><strong>音声文字起こし：</strong> 📝<br>
        OpenAI の Whisper、GPT-4o、および ElevenLabs の文字起こしモデルを使用して、プレイヤーの音声をテキストに変換し、ゲーム内の音声コマンドやインタラクティブな会話を実現します。</p>
    </li>
    <li>
        <p><strong>簡単サーバープロキシ設定：</strong> ☁️<br>
        セキュリティやカスタムロジックのためにリクエストを自社バックエンド経由でルーティングしたい場合に最適です。サーバープロキシ機能により、どのプロバイダーの API エンドポイントも単一の設定でオーバーライドでき、データフローを完全にコントロールできます。</p>
    </li>
    <li>
        <p><strong>OpenAI Compatible Mode：</strong> 🔄<br>
        Alibaba Qwen、Mistral、Groq、OpenRouter、Meta Llama、BigModel GLM-4、さらに Ollama によるローカルモデルに対応し、驚異的な柔軟性を実現します。コード変更なしでプロバイダーをシームレスに切り替え、コスト削減、プライバシー保護、オフライン機能を手に入れましょう。</p>
    </li>
    <li>
        <p><strong>安全な一元認証管理：</strong> 🔐<br>
        すべてのAPIキーを一つの安全な一元管理パネルで管理できます。ポータブルでない暗号化ファイルを使用し、キーをソース管理から分離して安全に保管します。</p>
    </li>
    <li>
        <p><strong>Blueprint & C++ 対応：</strong> 🔗<br>
        シンプルで強力な Blueprint ノードで素早くイテレーションし、同じ堅牢な自己管理型関数を C++ でも使用して最高のパフォーマンスと制御を実現します。</p>
    </li>
    <li>
        <p><strong>クロスプラットフォーム設計：</strong> 🌐<br>
        本プラグインはネットワーキングとファイル管理に Unreal Engine の標準的な高レベルモジュールのみを使用しているため、エンジンがサポートするすべてのプラットフォームで動作します。</p>
    </li>
</ul>

<img class="full-bleed" src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_60/v1756926286/Tests_4_rgysms.webp" alt="GenAI for Unreal Plugin Tests">


<h2>対応する統合とモデル</h2>
<div style="padding: 10px 15px; background-color: #fffbe6; border-left: 4px solid #ffc107; margin: 20px 0;">
  <p style="margin: 0; font-weight: bold; color: #856404;">免責事項</p>
  <p style="margin: 5px 0 0 0; color: #856404;">本プラグインの使用には、サポートされているAIプロバイダーのうち少なくとも1つの有効なAPIキーが必要です。<a href="/docs/genai-unreal/getting-api-keys/" class="track-click" data-event-name="lnk_clk_genai_api_keys_docs" data-event-location="post_genai" target="_blank" rel="noopener noreferrer">APIキーの取得方法</a>については、ドキュメントをご覧ください。</p>
</div>
<p>今日利用可能な最高のモデルに対応する、クリーンで統一されたAPI。</p>
<ul>
    <li><strong>OpenAI:</strong>
        <ul>
            <li><strong>チャット：</strong> <code>gpt-5.2</code>, <code>gpt-5.1</code>, <code>gpt-5</code>, <code>gpt-5-mini</code>, <code>gpt-5-nano</code>, <code>gpt-4.1</code>, <code>gpt-4o</code>, <code>gpt-4.1-mini</code>, <code>gpt-4.1-nano</code>, <code>gpt-4o-mini</code>.</li>
            <li><strong>Responses API：</strong> <code>gpt-5.4</code>, <code>gpt-5.4-pro</code>, <code>gpt-5.2</code>, <code>gpt-5.2-pro</code>, <code>gpt-5.3-codex</code>, <code>gpt-5.2-codex</code>, <code>gpt-5.1-codex-max</code>, <code>gpt-5-codex-mini</code>.</li>
            <li><strong>推論モデル：</strong> <code>o4-mini</code>, <code>o3</code>, <code>o3-pro</code>, <code>o3-mini</code>, <code>o1</code>, <code>o1-pro</code>.</li>
            <li><strong>画像生成：</strong> <code>gpt-image-1.5</code>, <code>gpt-image-1</code>, <code>gpt-image-1-mini</code>, <code>dall-e-3</code>, <code>dall-e-2</code>.</li>
            <li><strong>音声 TTS：</strong> <code>gpt-4o-mini-tts</code>, <code>tts-1</code>, <code>tts-1-hd</code>.</li>
            <li><strong>音声文字起こし：</strong> <code>gpt-4o-transcribe</code>, <code>gpt-4o-mini-transcribe</code>, <code>whisper-1</code>.</li>
            <li><strong>構造化出力（JSON Mode）</strong>  ✔</li>
            <li><strong>Function Calling（Tool Use）</strong>   ✔</li>
            <li><strong>テキスト・音声ストリーミング</strong>   ✔</li>
            <li><strong>マルチモーダルチャット</strong>   ✔</li>
            <li><strong>Realtime API：</strong> <code>gpt-realtime</code>, <code>gpt-realtime-mini</code>.</li>
        </ul>
    </li>
    <li><strong>Anthropic:</strong>
        <ul>
            <li><strong>チャット：</strong> <code>claude-opus-4-6</code>, <code>claude-sonnet-4-6</code>, <code>claude-opus-4.5</code>, <code>claude-sonnet-4.5</code>, <code>claude-haiku-4.5</code>, <code>claude-opus-4.1</code>, <code>claude-opus-4</code>, <code>claude-sonnet-4</code>, <code>claude-3-7-sonnet</code>, <code>claude-3-5-sonnet</code>, <code>claude-3-5-haiku</code>, <code>claude-3-haiku</code>, <code>claude-3-opus</code>.</li>
            <li><strong>マルチモーダルチャット</strong>   ✔</li>
            <li><strong>Function Calling（Tool Use）</strong>   ✔</li>
            <li><strong>Extended Thinking</strong>   ✔ (Claude 4.5+)</li>
        </ul>
    </li>
    <li><strong>XAI:</strong>
        <ul>
            <li><strong>チャット：</strong> <code>grok-4-fast-non-reasoning</code>, <code>grok-4-fast-reasoning</code>, <code>grok-4-1-fast-reasoning</code>, <code>grok-4-1-fast-non-reasoning</code>, <code>grok-4.1</code>, <code>grok-4</code>, <code>grok-4-eu</code>, <code>grok-code-fast-1</code>, <code>grok-3</code>, <code>grok-3-mini</code>, <code>grok-3-fast</code>, <code>grok-3-mini-fast</code>, <code>grok-2-vision-1212</code>, <code>grok-2-1212</code>.</li>
            <li><strong>推論モデル：</strong> <code>grok-4-fast-reasoning</code>, <code>grok-4-1-fast-reasoning</code>, <code>grok-4.1</code>, <code>grok-4</code>, <code>grok-3-mini</code>, <code>grok-3-mini-fast</code>.</li>
            <li><strong>テキストストリーミング</strong>  ✔</li>
            <li><strong>マルチモーダルチャット</strong>   ✔</li>
        </ul>
    </li>
    <li><strong>Google Gemini:</strong>
        <ul>
            <li><strong>チャット：</strong> <code>Gemini 3.1 Pro Preview</code>, <code>Gemini 3.1 Flash Lite Preview</code>, <code>Gemini 3 Pro Preview</code>, <code>Gemini 3 Flash Preview</code>, <code>Gemini 2.5 Flash</code>, <code>Gemini 2.5 Flash Lite</code>, <code>Gemini 2.5 Pro</code>.</li>
            <li><strong>推論モデル：</strong> <code>Gemini 2.5 Flash</code>, <code>Gemini 2.5 Pro</code>.</li>
            <li><strong>音声 TTS：</strong> <code>gemini-2.5-flash-preview-tts</code>, <code>gemini-2.5-pro-preview-tts</code>.</li>
            <li><strong>音声文字起こし：</strong> <code>Gemini 3.1 Pro Preview</code>, <code>Gemini 3.1 Flash Lite Preview</code>, <code>Gemini 3 Pro Preview</code>, <code>Gemini 3 Flash Preview</code>, <code>Gemini 2.5 Flash</code>, <code>Gemini 2.5 Pro</code>.</li>
            <li><strong>テキストストリーミング</strong>  ✔</li>
            <li><strong>マルチモーダルチャット</strong>   ✔</li>
            <li><strong>Realtime：</strong> <code>gemini-2.5-flash-native-audio-preview-09-2025</code>, <code>gemini-2.5-flash-native-audio-preview-12-2025</code>, <code>gemini-live-2.5-flash-preview</code>, <code>gemini-2.0-flash-live-001</code>.</li>
            <li><strong>画像生成：</strong> <code>gemini-3.1-flash-image-preview (Nano Banana 2)</code>, <code>gemini-3-pro-image-preview (Nano Banana Pro)</code>, <code>gemini-2.5-flash-image (Nano Banana)</code>, <code>imagen-4.0-generate-001</code>, <code>imagen-4.0-ultra-generate-001</code>, <code>imagen-4.0-fast-generate-001</code>.</li>
        </ul>
    </li>
    <li><strong>DeepSeek:</strong>
        <ul>
            <li><strong>チャット：</strong> <code>DeepSeek-V3.1</code>, <code>deepseek-chat</code>.</li>
            <li><strong>推論：</strong> <code>deepseek-reasoner</code>.</li>
            <li><strong>テキストストリーミング</strong>  ✔</li>
        </ul>
    </li>
    <li><strong>ElevenLabs:</strong>
        <ul>
            <li><strong>テキスト読み上げ：</strong> <code>eleven_v3</code>, <code>eleven_turbo_v2_5</code>, <code>eleven_flash_v2_5</code>, <code>eleven_flash_v2</code>, <code>eleven_multilingual_v3 (Alpha)</code>, <code>eleven_multilingual_v2</code>.</li>
            <li><strong>文字起こし：</strong> <code>scribe_v2</code>, <code>scribe_v2_realtime</code>, <code>scribe_v1</code>.</li>
            <li><strong>効果音：</strong> <code>eleven_text_to_sound_v2</code>.</li>
            <li><strong>音声ストリーミング</strong>  ✔</li>
        </ul>
    </li>
    <li><strong>Inworld AI:</strong>
        <ul>
            <li><strong>テキスト読み上げ：</strong> <code>inworld-tts-1.5-max</code>, <code>inworld-tts-1.5-mini</code>, <code>inworld-tts-1</code>.</li>
            <li><strong>音声ストリーミング</strong>  ✔</li>
        </ul>
    </li>
    <li><strong>Extended OpenAI Compatible Support:</strong>
        <ul>
            <li><strong>Alibaba Qwen:</strong>
                <ul>
                    <li><strong>チャット：</strong> <code>qvq-max</code>, <code>qvq-max-latest</code>, <code>qvq-max-2025-03-25</code>, <code>qwen-vl-max</code>, <code>qwen-vl-plus</code>, <code>qwen2.5-vl-72b-instruct</code>, <code>qwen2.5-vl-32b-instruct</code>, <code>qwen2.5-vl-7b-instruct</code>, <code>qwen2.5-vl-3b-instruct</code>.</li>
                    <li><strong>マルチモーダルチャット</strong>   ✔</li>
                </ul>
            </li>
            <li><strong>Mistral AI:</strong>
                <ul>
                    <li><strong>チャット：</strong> <code>mistral-large-2512</code>, <code>mistral-medium-2508</code>, <code>mistral-small-2506</code>, <code>ministral-14b-2512</code>, <code>ministral-8b-2512</code>, <code>ministral-3b-2512</code>, <code>magistral-medium-2509</code>, <code>magistral-small-2509</code>.</li>
                    <li><strong>テキストストリーミング</strong>  ✔</li>
                </ul>
            </li>
            <li><strong>Groq:</strong>
                <ul>
                    <li><strong>チャット：</strong> Groq に最適化された各種モデル。</li>
                    <li><strong>テキストストリーミング</strong>  ✔</li>
                </ul>
            </li>
            <li><strong>OpenRouter:</strong>
                <ul>
                    <li><strong>チャット：</strong> 複数プロバイダーの数百のモデルにアクセス可能。</li>
                    <li><strong>テキストストリーミング</strong>  ✔</li>
                </ul>
            </li>
            <li><strong>Meta Llama:</strong>
                <ul>
                    <li><strong>チャット：</strong> 各種 Llama バージョン。</li>
                    <li><strong>テキストストリーミング</strong>  ✔</li>
                </ul>
            </li>
            <li><strong>BigModel GLM-4:</strong>
                <ul>
                    <li><strong>チャット：</strong> <code>glm-4</code> および各バリアント。</li>
                    <li><strong>テキストストリーミング</strong>  ✔</li>
                </ul>
            </li>
            <li><strong>ローカルモデル（Ollama）：</strong>
                <ul>
                    <li><strong>チャット：</strong> <code>gemma3:1b</code>, <code>nemotron-3-nano</code>, <code>gpt-oss</code>, <code>llama3.1</code>, <code>phi3</code>, <code>llama3.2</code>.</li>
                    <li><strong>テキストストリーミング</strong>  ✔</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
<p>サポートフォーマット</p>
<ul>
    <li><strong>オーディオ：</strong>
        <ul>
            <li><strong>入力：</strong> <code>mp3</code>, <code>wav</code>, <code>mp4</code>, <code>mpeg</code>, <code>mpga</code>, <code>m4a</code>, <code>webm</code>.</li>
            <li><strong>出力：</strong> <code>pcm</code>.</li>
        </ul>
    </li>
    <li><strong>ボイス：</strong>
        <ul>
            <li><strong>OpenAI:</strong> <code>alloy</code>, <code>ash</code>, <code>ballad</code>, <code>coral</code>, <code>echo</code>, <code>sage</code>, <code>shimmer</code>, <code>verse</code>, <code>marin</code>, <code>cedar</code>.</li>
            <li><strong>Google:</strong> <code>Zephyr</code>, <code>Puck</code>, <code>Charon</code>, <code>Kore</code>, <code>Fenrir</code>, <code>Leda</code>, <code>Orus</code>, <code>Aoede</code>, <code>Callirrhoe</code>, <code>Autonoe</code>, <code>Enceladus</code>, <code>Iapetus</code>, <code>Umbriel</code>, <code>Algieba</code>, <code>Despina</code>, <code>Erinome</code>, <code>Algenib</code>, <code>Rasalgethi</code>, <code>Laomedeia</code>, <code>Achernar</code>, <code>Alnilam</code>, <code>Schedar</code>, <code>Gacrux</code>, <code>Pulcherrima</code>, <code>Achird</code>, <code>Zubenelgenubi</code>, <code>Vindemiatrix</code>, <code>Sadachbia</code>, <code>Sadaltager</code>, <code>Sulafat</code>.</li>
            <li><strong>ElevenLabs:</strong> 50以上のボイス。</li>
        </ul>
    </li>
    <li><strong>対応言語：</strong>
        <ul>
            <li><strong>Google:</strong> <code>Arabic</code>, <code>German</code>, <code>English</code>, <code>Spanish</code>, <code>French</code>, <code>Hindi</code>, <code>Indonesian</code>, <code>Italian</code>, <code>Japanese</code>, <code>Korean</code>, <code>Portuguese</code>, <code>Russian</code>, <code>Dutch</code>, <code>Polish</code>, <code>Thai</code>, <code>Turkish</code>, <code>Vietnamese</code>, <code>Romanian</code>, <code>Ukrainian</code>, <code>Bengali</code>, <code>Marathi</code>, <code>Tamil</code>, <code>Telugu</code>.</li>
            <li><strong>OpenAI:</strong> <code>Afrikaans</code>, <code>Arabic</code>, <code>Armenian</code>, <code>Azerbaijani</code>, <code>Belarusian</code>, <code>Bosnian</code>, <code>Bulgarian</code>, <code>Catalan</code>, <code>Chinese</code>, <code>Croatian</code>, <code>Czech</code>, <code>Danish</code>, <code>Dutch</code>, <code>English</code>, <code>Estonian</code>, <code>Finnish</code>, <code>French</code>, <code>Galician</code>, <code>German</code>, <code>Greek</code>, <code>Hebrew</code>, <code>Hindi</code>, <code>Hungarian</code>, <code>Icelandic</code>, <code>Indonesian</code>, <code>Italian</code>, <code>Japanese</code>, <code>Kannada</code>, <code>Kazakh</code>, <code>Korean</code>, <code>Latvian</code>, <code>Lithuanian</code>, <code>Macedonian</code>, <code>Malay</code>, <code>Marathi</code>, <code>Maori</code>, <code>Nepali</code>, <code>Norwegian</code>, <code>Persian</code>, <code>Polish</code>, <code>Portuguese</code>, <code>Romanian</code>, <code>Russian</code>, <code>Serbian</code>, <code>Slovak</code>, <code>Slovenian</code>, <code>Spanish</code>, <code>Swahili</code>, <code>Swedish</code>, <code>Tagalog</code>, <code>Tamil</code>, <code>Thai</code>, <code>Turkish</code>, <code>Ukrainian</code>, <code>Urdu</code>, <code>Vietnamese</code>, and <code>Welsh</code>.</li>
            <li><strong>ElevenLabs:</strong> <code>Afrikaans</code>, <code>Arabic</code>, <code>Armenian</code>, <code>Assamese</code>, <code>Azerbaijani</code>, <code>Belarusian</code>, <code>Bengali</code>, <code>Bosnian</code>, <code>Bulgarian</code>, <code>Catalan</code>, <code>Cebuano</code>, <code>Chichewa</code>, <code>Croatian</code>, <code>Czech</code>, <code>Danish</code>, <code>Dutch</code>, <code>English</code>, <code>Estonian</code>, <code>Filipino</code>, <code>Finnish</code>, <code>French</code>, <code>Galician</code>, <code>Georgian</code>, <code>German</code>, <code>Greek</code>, <code>Gujarati</code>, <code>Hausa</code>, <code>Hebrew</code>, <code>Hindi</code>, <code>Hungarian</code>, <code>Icelandic</code>, <code>Indonesian</code>, <code>Irish</code>, <code>Italian</code>, <code>Japanese</code>, <code>Javanese</code>, <code>Kannada</code>, <code>Kazakh</code>, <code>Kirghiz</code>, <code>Korean</code>, <code>Latvian</code>, <code>Lingala</code>, <code>Lithuanian</code>, <code>Luxembourgish</code>, <code>Macedonian</code>, <code>Malay</code>, <code>Malayalam</code>, <code>Mandarin Chinese</code>, <code>Marathi</code>, <code>Nepali</code>, <code>Norwegian</code>, <code>Pashto</code>, <code>Persian</code>, <code>Polish</code>, <code>Portuguese</code>, <code>Punjabi</code>, <code>Romanian</code>, <code>Russian</code>, <code>Serbian</code>, <code>Sindhi</code>, <code>Slovak</code>, <code>Slovenian</code>, <code>Somali</code>, <code>Spanish</code>, <code>Swahili</code>, <code>Swedish</code>, <code>Tamil</code>, <code>Telugu</code>, <code>Thai</code>, <code>Turkish</code>, <code>Ukrainian</code>, <code>Urdu</code>, <code>Vietnamese</code>, <code>Welsh</code>.</li>
        </ul>
    </li>
</ul>

<div class="button-row">
  <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="cta-button primary track-click" data-event-name="btn_clk_gen_ai_fab"  data-event-location="mid_cta" target="_blank" rel="noopener noreferrer">Fab.com で見る</a>
  <a href="/docs/genai-unreal" class="cta-button secondary track-click" data-event-name="btn_clk_gen_ai_documentation"  data-event-location="mid_cta">製品ドキュメント</a>
</div>

<h2>ユースケース：</h2>

<ul>
    <li><strong>真にダイナミックなNPC：</strong> プレイヤーの行動やワールドイベントに基づいてリアルタイムに対話を生成するキャラクターを作成できます。</li>
    <div class="image-wrapper">
    <figure>
        <img src="https://res.cloudinary.com/dqq9t4hyy/image/upload/q_50/v1751282014/BeFunky-collage232_logwgw.webp" alt="ユースケース例" style="width: 100%;">
        <figcaption class="image-caption">
        本プラグインを使用して構築されたサードパーティプロジェクト「Become Human」
        </figcaption>
    </figure>
    </div>
    <li><strong>プロシージャルコンテンツ生成：</strong> クエストやアイテムの説明から設定資料集まで、豊かで整合性のあるコンテンツをランタイムで瞬時に生成します。</li>
    <li><strong>AI駆動のゲームマスター：</strong> ビジョンと推論モデルを活用して、リアルタイムにゲームワールドを適応させるAIディレクターを作成します。</li>
    <li><strong>インタラクティブな音声駆動ゲームプレイ：</strong> TTS と音声文字起こしを組み合わせて、ゲーム内キャラクターとリアルな音声会話を実現します。</li>
    <li><strong>ラピッドプロトタイピングとワールド構築：</strong> エディタ内で画像生成と構造化 JSON を直接使用し、コンセプトアートや大量のワールドデータを素早く作成できます。</li>
</ul>

<h2>このプラグインを選ぶ理由</h2>
<ul>
    <li><strong>常に進化：</strong> 🧬 最先端のAI企業から新しいモデルや機能がリリースされるたびに、迅速にアップデートを提供します。</li>
    <li><strong>本番環境対応・テスト済み：</strong> ⚔️ すべての機能は、実際のAPIキーを使用してさまざまなユースケースやスケールで定期的にテストされています。1年以上にわたりユーザーフィードバックに基づくアップデートを重ねてきたプラグインです。</li>
    <li><strong>汎用的かつ適応性の高い設計：</strong> 🌵 クリーンで汎用的なアプローチでコードベースが構築されており、将来のモデルやAPIの変更にも迅速に対応できます。</li>
    <li><strong>開発者による、開発者のためのプラグイン：</strong> 💻 長年のプロフェッショナルなゲーム開発経験に基づき、安定性、充実したドキュメント、高いパフォーマンスの実装を保証します。</li>
    <li><strong>専任サポート：</strong> 📧 ご質問やカスタム改修のご要望は、サポートチームまでメールでお問い合わせください。喜んでお手伝いいたします。</li>
</ul>

<h2>リソースとサポート</h2>
<ul>
    <li><a href="/docs/genai-unreal/" class="track-click" data-event-name="lnk_clk_genai_docs" data-event-location="post_genai">ドキュメント</a></li>
    <li><a href="/t/discord" class="track-click" data-event-name="lnk_clk_discord" data-event-location="post_genai">Discord コミュニティ</a></li>
    <li><strong>プロフェッショナルサポートとカスタム開発：</strong> カスタムソリューション、機能リクエスト、エンタープライズサポートについては、以下のアドレスまで直接お問い合わせください： <a href="mailto:mail@muddyterrain.com" class="track-click" data-event-name="lnk_clk_support_email" data-event-location="post_genai">mail@muddyterrain.com</a></li>
</ul>

<div class="button-row">
  <a href="/t/genai-fab?utm_source=muddysite&utm_medium=main-site&utm_campaign=genai-plugin" class="cta-button primary track-click" data-event-name="btn_clk_gen_ai_fab"  data-event-location="btm_cta" target="_blank" rel="noopener noreferrer">Fab.com で見る</a>
  <a href="/docs/genai-unreal" class="cta-button secondary track-click" data-event-name="btn_clk_gen_ai_documentation"  data-event-location="btm_cta">製品ドキュメント</a>
</div>

</body>
</html>
