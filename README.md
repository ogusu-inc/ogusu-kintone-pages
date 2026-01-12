ogusu-kintone-pages

本リポジトリは、kintone の「URL指定 JavaScript / CSS カスタマイズ」で使用する
公開用 JavaScript ファイルを管理するためのリポジトリです。

本リポジトリは配信専用とし、編集・設計・レビューは
Private リポジトリ「ogusu-kintone-customize」で行います。

【目的】
・kintone の URL 指定 JavaScript を安定的に配信する
・GitHub Pages を用いた公開配信基盤とする
・kintone 管理画面への再アップロード作業を不要にする

【運用方針（重要）】
・本リポジトリは Public とする
・配信用のコピーのみを配置する
・本リポジトリで直接編集しない
・変更は必ず ogusu-kintone-customize で行い、コピーする

【ディレクトリ構成】
javascript/
└─ common/
   ├─ mobile/
   │  └─ portal-logo.js
   └─ pc/
      └─ portal-logo.js

【GitHub Pages 設定】
・Branch：main
・Folder：/root
・公開URL例：
  https://ogusu-inc.github.io/ogusu-kintone-pages/

【利用方法】
kintone 管理画面 → システム管理 → JavaScript / CSS カスタマイズ にて
「URLを指定して追加」を選択し、本リポジトリの JavaScript URL を登録する。

【注意事項】
・APIキー、トークン、機密情報を含めないこと
・業務ロジックやデータ更新処理は配置しないこと
・UI制御・表示制御用途に限定すること

【管理】
管理者：ogusu-fujita

【備考】
・本 README は運用ルールを兼ねる
・構成変更時は README を更新すること
