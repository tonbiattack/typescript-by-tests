# 補足: 型システムと実行時

## 目的

TypeScript の型は JavaScript の実行時へそのまま残るわけではありません。ジェネリクス、`readonly`、discriminated union はコンパイル時の設計支援であり、実行時のデータ検証や状態遷移の責務を自動的には代替しません。この章では型の恩恵と実行時の境界を分けて確認します。

| テーマ | 最初に読むテスト | 完成実装 |
|---|---|---|
| 数値配列を読む契約 | `examples/test/generics/numberTotals.test.ts` | `examples/src/generics/numberTotals.ts` |
| 配列分散 | `examples/test/generics/arrayVariance.test.ts` | `examples/src/generics/arrayVariance.ts` |
| 型引数の実行時消去 | `examples/test/generics/runtimeGenerics.test.ts` | `examples/src/generics/runtimeGenerics.ts` |
| discriminated union | `examples/test/language/paymentMethods.test.ts` | `examples/src/language/paymentMethods.ts` |
| iterator の状態 | `examples/test/iterator/singleUseIterators.test.ts` | `examples/src/iterator/singleUseIterators.ts` |
| object 値比較 | `examples/test/object/pointValues.test.ts` | `examples/src/object/pointValues.ts` |

## 最初のテスト

`arrayVariance.test.ts` は、`number[]` を `(number | string)[]` を受ける関数へ渡し、関数が文字列を追加できることを示します。strict な設定であっても、変更可能な配列を公開する API の設計には注意が必要です。

```bash
npm run test:examples
```

## Green にする

完成実装は `examples/src/generics/arrayVariance.ts` にあります。この教材は安全な API の例ではなく、どのような状態破壊が型検査を通り得るかを観測する例です。通常の読み取り処理では `readonly T[]` を選び、書き込みの API では必要な型パラメータを狭く保ちます。

## 次の一歩

`Payment` の union へ新しい `cash` の variant を追加し、`describe` の switch を更新しない状態で `npm run typecheck` を実行してください。次に、外部 JSON を `unknown` として受け、型ガードを通した後だけ `Payment` として扱う関数を追加します。型検査と実行時検証の責務が異なることを確認できます。

## References

[1] [TypeScript — Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)

[2] [TypeScript — Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

[3] [MDN — Iteration protocols](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Iteration_protocols)
