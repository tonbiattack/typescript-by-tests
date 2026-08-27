# TypeScript by Tests — 学習順のガイド

## この教材の読み方

各テーマでは、まず Test の名前と assertion を読み、次に Source を確認します。完成実装を先に読むよりも、どの入力に何を期待し、どの例外を契約として扱うかを先に捉えられます。ローカルでテストを一度通した後、実装を一行だけ変えて Red を観測し、最小の修正で Green に戻してください。

```bash
npm run test:examples
```

> **テストは「コードが動く」ことの印ではなく、どの振る舞いを残すかを再実行可能にした記録です。**

## 最初の一周

TypeScript の型とJavaScriptの実行時挙動の差分を順に確認したい場合は、次の4カテゴリから始めます。

| 順序 | カテゴリ | 最初のテーマ | 最初のテスト | 次の一歩 |
|---:|---|---|---|---|
| 1 | Language | [`string: ===`](https://tonbiattack.github.io/typescript-by-tests/typescript/string/strict-equality/) | `stringEquality.test.ts` | object/Arrayの参照同一性とUnicodeを比較する。 |
| 2 | Collections | [`Array: push`](https://tonbiattack.github.io/typescript-by-tests/typescript/array/push/) | `arrayPush.test.ts` | `readonly`、`Object.freeze`、浅いコピーを比較する。 |
| 3 | Functional | [`undefined: ??`](https://tonbiattack.github.io/typescript-by-tests/typescript/nullable/default/) | `displayNames.test.ts` | `??` と `||`、eager/lazy評価を確認する。 |
| 4 | Error Handling | [`Error: assert.throws`](https://tonbiattack.github.io/typescript-by-tests/typescript/exception/throws/) | `division.test.ts` | `Result<T>` と `try/finally` を比較する。 |

## 関心から選ぶ学習マップ

| 関心 | 読むカテゴリ | 代表的なテーマ | 学ぶ設計判断 |
|---|---|---|---|
| 値と参照 | Language / Collections | string、object、Array、Set、Map key | `===`が値を比べる場面と参照を比べる場面をどう区別するか。 |
| 不変性 | Collections / Functional | `const`、`readonly`、`Object.freeze`、浅いコピー | 型上の制約と実行時保護をどう分けるか。 |
| 不在と入力値 | Functional / Error Handling | `undefined`、optional chaining、`??`、`Result<T>` | 不在・不正・例外をどのAPI境界で表すか。 |
| 数値 | Numbers | `NaN`、浮動小数点、丸め | 近似値と丸め規則をどうテストへ固定するか。 |
| 日時 | Date / Time | `Date`、`Intl.DateTimeFormat`、夏時間 | instant・タイムゾーン・暦日をどう区別するか。 |
| 非同期 | Concurrency | rejection、`Promise.all`、明示的コンテキスト | 失敗・キャンセル・共有状態をどう設計するか。 |
| 型システム | Generics / Language | readonly配列、配列分散、型消去、discriminated union | コンパイル時型と実行時値の境界をどう扱うか。 |

## 各テーマで試すこと

1. テスト名を自分の言葉で読み替えます。
2. `assert.equal`、`assert.deepEqual`、`assert.throws`、`assert.rejects` が何を固定するかを一つずつ説明します。
3. Sourceの一行を変更し、失敗メッセージの expected / actual、またはError型を観測します。
4. 最小の変更でテストを通します。
5. 境界値、入力不変性、失敗時の状態のいずれかを一つ追加します。

Java版からTypeScript版への概念の置換理由は [DESIGN.md](./DESIGN.md) と [coverage-matrix.md](./coverage-matrix.md) に記録しています。新しいテーマを追加する場合は、[CONTRIBUTING.md](./CONTRIBUTING.md) に従い、Source、Test、メタデータ、観測結果を同期してください。

## References

[1] [Node.js — Test runner](https://nodejs.org/api/test.html)

[2] [TypeScript Documentation](https://www.typescriptlang.org/docs/)

[3] [TypeScript by Tests — Live Demo](https://tonbiattack.github.io/typescript-by-tests/)
