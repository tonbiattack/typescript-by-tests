# TypeScript by Tests

[![TypeScript examples](https://github.com/tonbiattack/typescript-by-tests/actions/workflows/ci.yml/badge.svg)](https://github.com/tonbiattack/typescript-by-tests/actions/workflows/ci.yml)
[![GitHub Pages](https://img.shields.io/badge/demo-GitHub%20Pages-181717?logo=github)](https://tonbiattack.github.io/typescript-by-tests/)
[![TypeScript 5](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js 22](https://img.shields.io/badge/Node.js-22-5FA04E?logo=nodedotjs&logoColor=white)](https://nodejs.org/)

**TypeScript by Tests** は、TypeScript 5 と Node.js 22 で見落としやすい言語仕様・実行時 API の挙動を、実行可能な **node:test** から学ぶ静的ドキュメントサイトです。各テーマでは最小の Source、振る舞いを固定する Test、具体的な期待値または例外を対にして表示します。

> TypeScript の文法を網羅するのではなく、**見た目は似ていても実行時の契約が異なる API・型・言語機能**を、実行できるテストとして読み解く教材です。

| Link | 内容 |
|---|---|
| [Live Demo](https://tonbiattack.github.io/typescript-by-tests/) | ブラウザで Source と Test を対比して読む。 |
| [Java by Tests](https://github.com/tonbiattack/java-by-tests) | Java 21 / JUnit 5 による姉妹リポジトリ。 |
| [Java Demo](https://tonbiattack.github.io/java-by-tests/) | Java版の実行可能な教材サイト。 |
| [Python by Tests](https://github.com/tonbiattack/python-by-tests) | Python / pytest による姉妹リポジトリ。 |
| [Python Demo](https://tonbiattack.github.io/python-by-tests/) | Python版の実行可能な教材サイト。 |
| [学習順のガイド](./LEARNING_PATH.md) | 関心に応じた開始地点と、Red → Green → Refactor の進め方。 |
| [言語間の対応表](./coverage-matrix.md) | Java版のテーマをTypeScript/Node.jsの概念へ置き換えた理由。 |

## 誰のための教材か

TypeScript を書いた経験はあるものの、`===`、`readonly`、`undefined`、`Object.freeze`、`Map`、`Promise`、`Date`、ジェネリクスの「型が通るのに実行時の想定が違った」を、短いコードとテストで確かめたい読者を対象にします。node:test の assertion を読み、実装を一行だけ変えて失敗を観測し、最小の修正で Green に戻す学び方を想定しています。

## 学習マップ

全 **50 テーマ**を 8 カテゴリに分けています。初めての場合は Language → Collections → Functional → Error Handling の順が読みやすい構成ですが、興味のある挙動から始められます。

| カテゴリ | テーマ数 | まず読むテーマ | 身に付ける問い |
|---|---:|---|---|
| Language | 14 | [`string: ===`](https://tonbiattack.github.io/typescript-by-tests/typescript/string/strict-equality/) | プリミティブ、参照、型変換、closure、実行時privateをどう区別するか。 |
| Collections | 9 | [`Array: push`](https://tonbiattack.github.io/typescript-by-tests/typescript/array/push/) | 可変性、浅いコピー、`readonly`、SetとMap key をどう扱うか。 |
| Numbers | 4 | [`number: 0.1 + 0.2`](https://tonbiattack.github.io/typescript-by-tests/typescript/numbers/decimal-precision/) | IEEE 754、`NaN`、丸めをどう検証するか。 |
| Functional | 9 | [`undefined: ??`](https://tonbiattack.github.io/typescript-by-tests/typescript/nullable/default/) | 不在、既定値、eager/lazy評価、iterator状態をどう表すか。 |
| Error Handling | 3 | [`Error: assert.throws`](https://tonbiattack.github.io/typescript-by-tests/typescript/exception/throws/) | throw、`Result<T>`、`try/finally` をどう使い分けるか。 |
| Generics | 5 | [`readonly number[]`](https://tonbiattack.github.io/typescript-by-tests/typescript/generics/number-constraint/) | unknown、literal型、コンパイル時の型と実行時の値をどう分けるか。 |
| Date / Time | 2 | [`Date: timezone`](https://tonbiattack.github.io/typescript-by-tests/typescript/datetime/time-zone-format/) | instant、表示上の日付、夏時間をどう分けるか。 |
| Concurrency | 4 | [`Promise: rejection`](https://tonbiattack.github.io/typescript-by-tests/typescript/async/promise-rejection/) | rejection、`Promise.all`、`allSettled`、明示的コンテキストをどう設計するか。 |

各テーマの Source と Test は [Live Demo](https://tonbiattack.github.io/typescript-by-tests/) で確認できます。コードをローカルで実行する場合は、次の手順を使ってください。

## すぐに始める

### 必要条件

Node.js **22 以上**と npm を用意してください。TypeScript、Astro、Shiki は開発依存として取得します。[1] [2]

### インストールと閲覧

```bash
npm install
npm run dev
```

### 実行可能な TypeScript 教材を検証する

```bash
npm run test:examples
```

### すべての品質ゲートを実行する

```bash
npm run verify
```

`npm run verify` は、strict な型検査、Node.js 標準テストランナーによる教材テスト、GitHub Pages 用サブパスでの静的ビルド、内部リンク検査を順に実行します。

| コマンド | 目的 |
|---|---|
| `npm run dev` | ローカルで教材サイトを閲覧する。 |
| `npm run test:examples` | `.test.ts` をコンパイルし、`node --test` で実行する。 |
| `npm run typecheck` | Astro と教材コードを strict な設定で型検査する。 |
| `GITHUB_ACTIONS=true npm run build` | GitHub Pages用の `/typescript-by-tests/` サブパスで静的ビルドする。 |
| `npm run verify:links` | 静的出力の内部リンクを検査する。 |
| `npm run verify` | 上記の品質ゲートを一括で実行する。 |

## このリポジトリが保証すること

ブラウザに表示する Source/Test と、ローカルで node:test が実行するコードは同じ `.ts` ファイルです。Astro はビルド時に `examples/src` と `examples/test` を読み込み、テーマ・タグ・観測結果だけを `src/data/lessons.ts` で管理します。そのため、説明用コードと検証対象が乖離しません。

```text
Browser
  ↓
GitHub Pages
  ↑
Astro static build ──→ src/pages + src/components
  ↑                         ↑
src/data/lessons.ts ─────── examples/src/**/*.ts
                                  ↑
                         examples/test/**/*.test.ts
                                  ↑
                    TypeScript compiler + node:test
```

| 品質ゲート | 守る契約 | 自動化場所 |
|---|---|---|
| TypeScript compiler | strictな型契約とESM importの整合性 | `tsc` / GitHub Actions |
| node:test | 全41テーマの期待値・例外・状態遷移 | Node.js / GitHub Actions |
| Astro check | 表示コンポーネントとメタデータの型整合性 | Astro / GitHub Actions |
| Static build | GitHub Pagesで公開できるHTML生成 | Astro / GitHub Actions |
| Link verification | サブパス下の内部リンクが実在すること | Node.js script / GitHub Actions |

## リポジトリ構成

```text
.
├── examples/
│   ├── src/                  # Sourceとして表示する完成実装
│   ├── test/                 # 挙動を固定するnode:test
│   └── tsconfig.json         # NodeNextでJavaScriptへコンパイルする設定
├── src/
│   ├── components/           # Source/Test パネル、目次、検索UI
│   ├── data/lessons.ts       # 41テーマのメタデータと実ファイルの対応
│   ├── layouts/              # 共通レイアウトと静的検索
│   └── pages/                # ホームと教材ページの静的ルート
├── docs/                     # カテゴリ別の補助ガイド
├── .github/                  # CI、Pagesデプロイ、Issueテンプレート
├── LEARNING_PATH.md          # カテゴリ別の学習導線
├── DESIGN.md                 # Java版からの概念移植の判断
├── coverage-matrix.md        # Java版との対応表
└── CONTRIBUTING.md           # 教材を追加・改善するための規約
```

## Java版との関係

このリポジトリは、[Java by Tests](https://github.com/tonbiattack/java-by-tests) の「短い Source/Test の対で、見落としやすい挙動を証明する」という教材方針を参照しています。ただし、Java の文章、実装、テストを複製していません。Java 固有の `BigDecimal`、checked exception、`record`、`HashMap` の `equals`/`hashCode`、virtual thread は、TypeScript/Node.jsにおける同じ設計上の問いへ置き換えています。詳細は [DESIGN.md](./DESIGN.md) と [coverage-matrix.md](./coverage-matrix.md) を参照してください。

## 新しいテーマを提案・追加する

新しい挙動を見つけたときは、[教材テーマ提案](https://github.com/tonbiattack/typescript-by-tests/issues/new?template=lesson-request.yml) を利用してください。不具合の報告には [バグ報告](https://github.com/tonbiattack/typescript-by-tests/issues/new?template=bug-report.yml) を使えます。実装を伴う更新では、**Source、Test、`lessons.ts` のメタデータ、観測結果**を同じ変更に含めます。詳細は [CONTRIBUTING.md](./CONTRIBUTING.md) を参照してください。

## ライセンス

このリポジトリには現時点でライセンスファイルを設定していません。再利用、配布、派生物の作成を予定する場合は、リポジトリ所有者へ確認してください。

## References

[1] [Node.js — Test runner](https://nodejs.org/api/test.html)

[2] [TypeScript Documentation](https://www.typescriptlang.org/docs/)

[3] [Astro Documentation](https://docs.astro.build/)

[4] [GitHub Pages: Custom GitHub Actions Workflows](https://docs.github.com/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
