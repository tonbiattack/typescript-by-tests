# Validation Record

## 実施日

2026-08-27（GMT+9）に、クリーンな依存関係取得後の環境で実行しました。

| 検証 | コマンド | 結果 |
|---|---|---|
| 型検査 | `npm run typecheck` | 成功 |
| 教材テスト | `npm run test:examples` | **41 passed / 0 failed** |
| 静的サイトビルド | `GITHUB_ACTIONS=true npm run build` | **42 pages** を生成 |
| 内部リンク | `npm run verify:links` | **42 pages** を検査して成功 |
| 一括検証 | `npm run verify` | 成功 |

## 検証の対象

`examples/src` に 41 件の完成実装、`examples/test` に対応する 41 件の Node.js 標準テストを置いています。`src/data/lessons.ts` は各テーマの表示メタデータと実在する Source/Test ファイルを対応付けます。Astro の静的生成では、ホームページと 41 件の教材ページを出力します。

## 実行上の注記

本プロジェクトの `package.json` は Node.js 22 以上を指定します。依存関係を取得するときは、Node.js 22 系の最新メンテナンスリリースを推奨します。テストとビルドはこの記録のコマンドで再実行できます。
