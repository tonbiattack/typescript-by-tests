# TypeScript by Tests 教材拡張指示書

## 目的

TypeScript by Tests を「見落としやすい挙動だけを集めた教材」から、次の方向へ拡張する。

> **TypeScript の型システム、JavaScript 実行時、標準 API の重要な挙動を、実行可能な node:test から理解する教材**

ただし、TypeScript 入門サイト、構文リファレンス、型ユーティリティ一覧にはしない。

追加判断の最重要基準は、**そのテストを見ることで TypeScript / JavaScript の理解が一段深くなるか**である。

## 教材に追加してよいテーマ

### Pitfall

型上の見え方と実行時の挙動がずれやすいもの、または JavaScript 特有の誤解が起きやすいもの。

例:

- `==` / `===`
- truthy / falsy
- `null` / `undefined`
- `||` / `??`
- shallow copy
- object / array の参照共有
- `readonly` と runtime immutability の違い
- `Object.freeze` の shallow 性
- Promise rejection
- `this`

### Behavior

意外ではなくても、実務で重要でテストによる観測価値が高いもの。

例:

- optional chaining
- nullish coalescing
- Map / Set
- property enumeration order
- spread syntax
- destructuring default
- Promise.all / allSettled
- async / await
- Date / timezone
- iterator / generator

### Concept

TypeScript の型システムと JavaScript runtime の境界を、コンパイルと実行結果から理解できるもの。

例:

- structural typing
- union / intersection
- narrowing
- discriminated union
- `unknown` / `any` / `never`
- generic constraints
- type guard
- type assertion
- `satisfies`
- `as const`
- type erasure

## 追加しないテーマ

- `1 + 2 === 3` のような単純な構文確認
- 変数、if、for の基本文法だけを説明する内容
- node:test で確認する意味がほぼない内容
- 型定義だけを並べる TypeScript Handbook の要約
- React、Vue、NestJS など特定フレームワーク依存の内容
- DOM / browser API が必須で Node.js の教材として安定しない内容
- 実ネットワーク、実時刻、外部資格情報へ依存する内容
- テーマ数合わせだけを目的とした Java 版の機械的移植

## TypeScript 版で優先する領域

### 優先度 A

既存教材との重複を確認し、未整備なら優先する。

- `==` / `===`
- truthy / falsy
- `null` / `undefined`
- `||` / `??`
- optional chaining
- object / array の参照共有
- shallow copy / deep copy の境界
- `readonly` と runtime の違い
- `Object.freeze`
- structural typing
- union / intersection
- narrowing
- discriminated union
- `unknown` / `any` / `never`
- type guard
- type assertion
- `satisfies`
- Promise / async / await
- Promise.all / allSettled

### 優先度 B

- `as const`
- literal type widening
- excess property checking
- generic constraints
- conditional types
- mapped types
- utility types の代表的な挙動
- enum
- private field (`private` と `#private`)
- closure
- `this`
- prototype
- Map / Set
- iterator / generator
- property descriptors
- Date / timezone

### 優先度 C

最小コードで明確に示せる場合に追加する。

- distributive conditional types
- variance
- declaration merging
- module resolution の重要な挙動
- ESM / CommonJS 境界
- event loop / microtask queue

## TypeScript らしさを優先する

Java / Go 版とのテーマ数を揃える必要はない。

TypeScript では特に次を重視する。

- compile-time type と runtime value の境界
- structural typing
- JavaScript compatibility
- type erasure
- nullability
- mutability
- Promise / event loop
- object semantics
- ESM

Java 版の `record`、checked exception、JVM 固有機能などを無理に置き換えない。

対応テーマを作る場合も「同じ名前」ではなく、同じ設計上の問いを TypeScript でどう扱うかを考える。

## 型だけで終わるテーマの扱い

TypeScript では実行時テストだけでは示せない仕様がある。

その場合も教材化してよいが、次のどちらかを満たすこと。

1. コンパイル時の成立 / 不成立と実行時挙動を組み合わせて学びがある
2. strict typecheck が教材の契約として意味を持つ

単に「この型が書ける」というだけのテーマは追加しない。

型エラーを教材化する場合は、既存 CI を壊さずに検証できる構成にする。`@ts-expect-error` などを使う場合は、そのエラー自体が確認対象であることを明確にする。

## 各教材の作り方

既存の Source + Test 形式を維持する。

1. 一つの問いに絞る
2. Source を最小にする
3. node:test で値、例外、rejection、状態変化を固定する
4. 必要に応じて TypeScript compiler の型契約も利用する
5. `src/data/lessons.ts` に観測結果を記録する
6. compile-time と runtime のどちらの話か明確にする
7. 実務上の注意点がある場合は記載する

## 分類

新規テーマは可能なら次の観点を明示する。

- `Pitfall`: 誤解しやすさが主題
- `Behavior`: runtime / API 契約が主題
- `Concept`: 型システムや言語概念の理解が主題

分類を UI に追加すること自体は必須ではない。分類のためだけにサイトを複雑化しない。

## テーマ追加時の判断質問

- TypeScript 経験者でも結果や型の理由を説明しにくいか
- compile-time と runtime の違いを理解する助けになるか
- 実務のバグやレビューで役立つか
- node:test または strict typecheck で示す意味があるか
- 既存テーマと重複していないか
- JavaScript / TypeScript 固有の学びがあるか

3 個以上が弱い場合は追加しない。

## 実施手順

1. README、LEARNING_PATH、DESIGN、coverage-matrix、`src/data/lessons.ts`、既存 examples を確認する
2. Java 版との対応より TypeScript 固有の不足を先に洗い出す
3. Pitfall / Behavior / Concept の観点で優先順位を付ける
4. 一度に大量追加せず、意味のまとまり単位で実装する
5. Source / Test / Metadata / 説明を同期する
6. `npm run verify` を通す
7. 必要に応じて DESIGN / coverage-matrix も更新する
8. テーマ数が変わる場合は README / LEARNING_PATH も更新する

## 完了条件

- node:test または strict typecheck で契約を再現できる
- Source と Test が最小
- compile-time / runtime の区別が明確
- 表示内容と実行コードが一致
- 既存テーマと重複しない
- TypeScript / JavaScript 固有の学習価値がある
- 単なる文法チュートリアルではない
- `npm run verify` が成功する

テーマ数ではなく、**TypeScript の型と JavaScript の実行時を、実行可能な証拠として理解できるか**を品質基準にする。
