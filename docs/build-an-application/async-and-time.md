# アプリケーション: 非同期と日時

## 目的

非同期処理と日時の不具合は、コードを読んだだけでは見逃しやすい実行時契約に由来します。この章では Promise が失敗・並列実行・コンテキスト伝搬で何を保証するか、`Date` と `Intl` が instant と表示上の日付をどのように分けるかをテストで確認します。

| テーマ | 最初に読むテスト | 完成実装 |
|---|---|---|
| 明示的なコンテキスト | `examples/test/async/explicitContext.test.ts` | `examples/src/async/explicitContext.ts` |
| rejection reason | `examples/test/async/promiseFailures.test.ts` | `examples/src/async/promiseFailures.ts` |
| `Promise.all` と取消し | `examples/test/async/promiseAllCancellation.test.ts` | `examples/src/async/promiseAllCancellation.ts` |
| タイムゾーン表示 | `examples/test/datetime/timeZoneFormatting.test.ts` | `examples/src/datetime/timeZoneFormatting.ts` |
| 夏時間と経過時間 | `examples/test/datetime/daylightSavingInstants.test.ts` | `examples/src/datetime/daylightSavingInstants.ts` |

## 最初のテスト

`promiseAllCancellation.test.ts` は、一つの Promise が reject した後でも、すでに開始した別の処理が完了することを確認します。テストの `completed` が true になるまでを読んで、`Promise.all` が何を中止しないかを言語化してください。

```bash
npm run test:examples
```

## Green にする

完成実装は `examples/src/async/promiseAllCancellation.ts` にあります。`Promise.all` は複数の結果を集めるだけで、他の作業へ停止指示を送る仕組みではありません。中止が必要な処理には、`AbortSignal` の受け取りと確認を各作業の API 契約に含めます。

## 次の一歩

`handleRequest` へ `AbortSignal` を渡す版を作り、開始前に中止済みの場合、実行中に中止される場合、完了後に中止される場合を別のテストにしてください。日時については、同じ instant を UTC と日本標準時でも表示し、instant・タイムゾーン・暦日が別の概念であることを確認します。

## References

[1] [MDN — Promise.all](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

[2] [MDN — Intl.DateTimeFormat](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)

[3] [Node.js — AbortController](https://nodejs.org/api/globals.html#class-abortcontroller)
