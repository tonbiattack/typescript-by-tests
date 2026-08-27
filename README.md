# TypeScript by Tests

**TypeScript by Tests** は、TypeScript と Node.js で見落としやすい挙動を、説明より先に実行可能な **node:test** から確かめる静的教材サイトです。各テーマは、最小の Source、振る舞いを固定する Test、期待値または例外を対にして表示します。

> TypeScript の文法を網羅するのではなく、**見た目は似ていても実行時の契約が異なる API・型・言語機能**を、実行できるテストとして読み解くことを目指します。

## このリポジトリで学べること

全 **41 テーマ**について、実装、Node.js 標準テスト、静的サイトの Source/Test 表示を一致させています。JavaScript のプリミティブと参照同一性、Array・Map・Set の可変性、`undefined` と `null`、IEEE 754 の精度、Unicode、Promise、`Date` とタイムゾーン、TypeScript のジェネリクスと discriminated union を扱います。

| 領域 | 代表的な問い |
|---|---|
| Language | string と object で `===` は何を比較するか。Unicode の `length` は何を数えるか。 |
| Collections | `const`、`readonly`、`Object.freeze`、スプレッドコピーの責務はどこまでか。 |
| Numbers | `NaN`、浮動小数点、丸めをどのように検証するか。 |
| Functional | `??`、`||`、optional chaining、generator はいつ・どこまで評価されるか。 |
| Error Handling | `Error`、`Result`、`try/finally` で失敗と後片付けをどう契約化するか。 |
| Generics | 型引数が実行時に消えること、配列分散の注意点をどう扱うか。 |
| Date / Time | 同じ instant がタイムゾーンにより異なる日付になることをどう扱うか。 |
| Concurrency | Promise の失敗、`Promise.all`、明示的なコンテキスト渡しをどう設計するか。 |

## 設計の要点

ブラウザに表示する Source/Test と、ローカルで実行する教材コードは同じ `.ts` ファイルです。Astro がビルド時に `examples/src` と `examples/test` を読み込み、`tsc` は同じテストを JavaScript にコンパイルして Node.js 標準テストランナーで実行します。このため、説明用のコードと検証対象のコードが乖離しません。

```text
Browser
  ↓
Static site (Astro)
  ↑
src/data/lessons.ts ───→ examples/src/**/*.ts
                           ↑
                         examples/test/**/*.test.ts
                           ↑
                 TypeScript compiler + node:test
```

## 必要条件

Node.js **22 以上**と npm を用意してください。TypeScript、Astro、Shiki は開発依存として取得します。[1] [2]

```bash
npm install
```

## 開発と検証

ローカルで教材サイトを開くには、次を実行します。

```bash
npm run dev
```

全教材をコンパイルして Node.js の標準テストランナーで実行するには、次を使います。

```bash
npm run test:examples
```

型検査、41 テーマのテスト、Astro の静的ビルド、内部リンク検査をまとめて実行するには、次を使います。

```bash
npm run verify
```

| コマンド | 目的 |
|---|---|
| `npm run typecheck` | Astro と教材コードを strict な設定で型検査する。 |
| `npm run test:examples` | 教材の `.test.ts` をコンパイルし、`node --test` で実行する。 |
| `npm run build` | Astro の型検査と静的サイトビルドを行う。 |
| `npm run verify:links` | ビルド結果の内部リンクを検査する。 |
| `npm run verify` | 上記の品質確認を順に一括実行する。 |

## 構成

```text
.
├── examples/
│   ├── src/                  # サイトに表示する完成実装
│   ├── test/                 # node:test による振る舞いテスト
│   └── tsconfig.json         # 教材コードをJavaScriptへコンパイルする設定
├── src/
│   ├── components/           # Source/Test パネル、目次、検索 UI
│   ├── data/lessons.ts       # テーマのメタデータと実コードの対応
│   ├── layouts/              # 共通レイアウトと静的検索
│   └── pages/                # ホームと教材ページの静的ルート
├── docs/                     # 学び方とカテゴリ別ガイド
├── DESIGN.md                 # Java版からの概念移植の判断
├── SUMMARY.md                # 章への導線
└── coverage-matrix.md        # 41テーマの対応表
```

## 学び方

各教材では最初に Test の名前と assertion を読み、次に Source を確認します。テストを一つだけ変更して失敗させ、最小の実装で Green に戻し、最後に境界値または不変条件を一つ増やすと、Red → Green → Refactor のループを短く反復できます。カテゴリ別の目的、最初のテスト、次の一歩は [SUMMARY.md](./SUMMARY.md) から辿れます。

## 原典との関係と帰属

本リポジトリは、Java 21/JUnit 5 で実行可能な仕様確認を提供する [Java by Tests][3] の教材方針と情報設計を参照して作成しています。Java の文章、実装、テストは複製していません。TypeScript/Node.js の各テーマ、説明、実装、テストは新たに記述し、言語固有の差分は [DESIGN.md](./DESIGN.md) と [coverage-matrix.md](./coverage-matrix.md) に明示しています。

## References

[1] [Node.js — Test runner](https://nodejs.org/api/test.html)

[2] [TypeScript Documentation](https://www.typescriptlang.org/docs/)

[3] [tonbiattack/java-by-tests](https://github.com/tonbiattack/java-by-tests)
