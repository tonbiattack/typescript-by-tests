# アプリケーション: nullable とエラー

## 目的

外部入力、設定値、業務ルールでは「値がない」「値が不正」「処理に失敗した」を区別する必要があります。TypeScript は checked exception を持たないため、`undefined`、`null`、`Error`、`Result<T>`、`try/finally` のいずれで契約を表すかを意識的に選びます。

| テーマ | 最初に読むテスト | 完成実装 |
|---|---|---|
| `??` による既定値 | `examples/test/nullable/displayNames.test.ts` | `examples/src/nullable/displayNames.ts` |
| eager / lazy fallback | `examples/test/nullable/fallbackEvaluation.test.ts` | `examples/src/nullable/fallbackEvaluation.ts` |
| optional chaining | `examples/test/nullable/optionalChaining.test.ts` | `examples/src/nullable/optionalChaining.ts` |
| `??` と `||` | `examples/test/nullable/nullishDefaults.test.ts` | `examples/src/nullable/nullishDefaults.ts` |
| プロパティの不在 | `examples/test/nullable/absentProperties.test.ts` | `examples/src/nullable/absentProperties.ts` |
| 例外の契約 | `examples/test/exception/division.test.ts` | `examples/src/exception/division.ts` |
| `Result<T>` | `examples/test/result/portParsing.test.ts` | `examples/src/result/portParsing.ts` |
| `try/finally` | `examples/test/resources/resourceUsers.test.ts` | `examples/src/resources/resourceUsers.ts` |

## 最初のテスト

`nullishDefaults.test.ts` は `0 || 10` と `0 ?? 10` を比較します。どちらも既定値を選ぶ演算子のように見えますが、`0`、空文字、`false` が有効な業務値であるかによって安全な選択が変わります。

```bash
npm run test:examples
```

## Green にする

完成実装は `examples/src/nullable/nullishDefaults.ts` にあります。`||` が誤りなのではなく、falsy な値全体を「不在」とみなす明示的な要件にだけ適している点をテストで区別します。

## 次の一歩

`parsePort` に空文字、範囲外、少数値を追加し、throw ではなく `Result<T>` を返す利点と制約を検討してください。また `withResource` の `use` が Error を投げた場合にも `close` が呼ばれるテストを追加し、失敗時の状態を契約に含めます。

## References

[1] [TypeScript — Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

[2] [MDN — Nullish coalescing operator](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)

[3] [MDN — try...catch](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/try...catch)
