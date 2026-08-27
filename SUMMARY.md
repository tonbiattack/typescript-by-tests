# TypeScript by Tests — 学習目次

この教材では、まず Source と Test の対を読み、次にテストを一つ失敗させ、最小の実装で通す流れを反復します。全ての個別テーマは静的サイトの `/typescript/<slug>/` で閲覧でき、実装とテストは `examples/` にあります。

| ガイド | 目的 | 対象テーマ |
|---|---|---:|
| [基礎: 値・参照・Unicode](./docs/fundamentals/values-and-unicode.md) | プリミティブ、参照、文字列、数値の基本的な実行時挙動を確認する。 | 10 |
| [基礎: Array・Map・不変性](./docs/fundamentals/collections-and-immutability.md) | 可変性、浅いコピー、キーの照合、`readonly` の境界を確認する。 | 11 |
| [アプリケーション: nullable とエラー](./docs/build-an-application/nullable-and-errors.md) | `undefined`、`null`、Result、例外、後片付けの API 契約を設計する。 | 9 |
| [アプリケーション: 非同期と日時](./docs/build-an-application/async-and-time.md) | Promise の失敗・キャンセルと、instant・タイムゾーンを扱う。 | 5 |
| [補足: 型システムと実行時](./docs/questions-and-answers/types-and-runtime.md) | ジェネリクス、discriminated union、型消去、配列分散を確認する。 | 6 |

## 進め方

最初の一周では、各テーマの Test を読んで assertion が何を固定しているかを自分の言葉で説明してください。次に、完成実装を一行だけ壊して `npm run test:examples` を実行し、Red の出力を観測します。最後に元へ戻して Green を確認し、境界値・失敗時の状態・入力不変性を一つ追加します。

> テストは「コードが動く」という印ではなく、**どの入力に何が返り、どの失敗を契約として扱うか**を再実行可能にした記録です。

詳細な対応範囲は [coverage-matrix.md](./coverage-matrix.md)、Java版からの置換判断は [DESIGN.md](./DESIGN.md) を参照してください。

## References

[1] [Node.js — Test runner](https://nodejs.org/api/test.html)

[2] [TypeScript Documentation](https://www.typescriptlang.org/docs/)

[3] [Java by Tests](https://github.com/tonbiattack/java-by-tests)
