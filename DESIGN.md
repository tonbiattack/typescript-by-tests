# DESIGN — Java by Tests から TypeScript by Tests への概念移植

## 目的

このリポジトリは、Java API を TypeScript の構文へ逐語訳するものではありません。参照元で扱う「一見すると同じに見えるが契約が異なる」という学習上の問いを、TypeScript と Node.js の慣用的な型・実行時 API・テスト方法へ置き換えます。[1]

| 設計原則 | 採用した判断 |
|---|---|
| 実行可能性 | 表示する Source/Test と `node --test` で実行するコードを同じファイルにする。 |
| 最小依存 | Node.js 標準の `node:test` と `node:assert/strict` を使い、追加テストフレームワークを導入しない。 |
| 厳格な型検査 | `strict`、`noUncheckedIndexedAccess`、`exactOptionalPropertyTypes`、`verbatimModuleSyntax` を有効にする。 |
| 言語への適合 | Java 固有の機構は、同じ設計上の注意を引き起こす TypeScript/Node.js の機構へ置換する。 |
| 範囲の誠実さ | 置換の理由を対応表に残し、同一 API でないことを明示する。 |

## 主要な置換

### 値比較と識別子

Java の `String.equals`、`record`、`equals`/`hashCode` は、JavaScript のプリミティブ比較、オブジェクトの参照同一性、`Set`/`Map` の object key 照合へ置き換えました。TypeScript の `interface` は実行時の値比較を作らないため、値オブジェクトの比較は `samePoint` のような明示的な関数で表します。

### コレクションと不変性

Java の `List.of`、`Arrays.asList`、mutable `ArrayList` は、Array の `push`、`readonly`、`Object.freeze`、スプレッド構文による浅いコピーを通じて扱います。特に `readonly` はコンパイル時の約束であり、`Object.freeze` は一段目だけの実行時保護であることを別テーマとして検証します。

### 不在とエラー

Java の `Optional` は `T | undefined`、`??`、optional chaining として再表現します。TypeScript は checked exception を持たないため、回復可能な失敗を呼び出し側に明示したい場合を discriminated union の `Result<T>` として扱います。例外が必要な事前条件違反には `Error` のサブクラスを使います。

### 数値

Java の `BigDecimal` は Node.js 標準には存在しないため、IEEE 754 `number` の精度、`NaN`、`Math.round` の負値に対する挙動を中心にします。金額などの正確な十進演算が必要な場面では、整数の最小単位または専用の十進演算ライブラリを選ぶべきという設計判断を示します。

### 非同期処理

Java の virtual thread、`CompletableFuture`、`ConcurrentHashMap` は、`async`/`await`、`Promise.all`、明示的なコンテキスト引数へ置き換えます。`Promise.all` は開始済み作業を中止しないことをテストで観測し、キャンセルには `AbortSignal` のような協調的な設計が別途必要であることを説明します。

### 日時

Java Time API の豊富な型群に相当する組込み API は Node.js にありません。そのため、`Date` が instant を表し、表示上の日付は `Intl.DateTimeFormat` のタイムゾーンで決まること、夏時間を挟む現地深夜の間隔が 24 時間でないことを確認します。日付だけの業務概念にはタイムゾーンを扱えるライブラリまたは Temporal の導入を別途検討してください。

## 教材ファイルの配置

```text
examples/src/<category>/<lesson>.ts        # 完成実装
examples/test/<category>/<lesson>.test.ts  # 仕様を固定するテスト
src/data/lessons.ts                        # 表示メタデータとファイル対応
```

テスト内の import は `.js` 拡張子を使います。これは TypeScript の `NodeNext` コンパイル後に ESM として解決されるファイル名と一致させるためです。[2]

## References

[1] [Java by Tests](https://github.com/tonbiattack/java-by-tests)

[2] [TypeScript — Modules: NodeNext](https://www.typescriptlang.org/docs/handbook/modules/reference.html#node16-nodenext)

[3] [Node.js — Test runner](https://nodejs.org/api/test.html)
