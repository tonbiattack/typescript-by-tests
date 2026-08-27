# 基礎: 値・参照・Unicode

## 目的

JavaScript の string と number はプリミティブですが、object と Array は参照型です。この違いを曖昧にしたまま `===`、`Set`、`Map`、文字列長、数値比較を使うと、実行時の意図がずれます。この章では小さな assertion を読み、値の同一性・参照同一性・UTF-16・浮動小数点を分けて確認します。

| テーマ | 最初に読むテスト | 完成実装 |
|---|---|---|
| string の `===` | `examples/test/string/stringEquality.test.ts` | `examples/src/string/stringEquality.ts` |
| object の参照比較 | `examples/test/object/pointValues.test.ts` | `examples/src/object/pointValues.ts` |
| Array の参照比較 | `examples/test/array/arrayEquality.test.ts` | `examples/src/array/arrayEquality.ts` |
| Unicode のコード単位 | `examples/test/string/unicodeLengths.test.ts` | `examples/src/string/unicodeLengths.ts` |
| Unicode 正規化 | `examples/test/string/unicodeNormalization.test.ts` | `examples/src/string/unicodeNormalization.ts` |
| `NaN` | `examples/test/numbers/nanValues.test.ts` | `examples/src/numbers/nanValues.ts` |
| 浮動小数点精度 | `examples/test/numbers/decimalPrecision.test.ts` | `examples/src/numbers/decimalPrecision.ts` |
| 小数の内部表現 | `examples/test/numbers/numberConstruction.test.ts` | `examples/src/numbers/numberConstruction.ts` |
| 丸め | `examples/test/numbers/roundingModes.test.ts` | `examples/src/numbers/roundingModes.ts` |

## 最初のテスト

`stringEquality.test.ts` は、リテラルと `join` で作った同じ内容の string を `===` で比較します。この一件を変更して Red を確認してから、プリミティブと object で比較規則が異なる理由を説明してください。

```bash
npm run test:examples
```

## Green にする

完成実装は `examples/src/string/stringEquality.ts` にあります。テストの目的は、string が常に値オブジェクトになると主張することではありません。JavaScript では string がプリミティブであるため、`===` が内容の等価性を返すという限定された契約を示すことです。

## 次の一歩

同じ内容の二つの object と二つの Array が `===` で false になるテストを追加し、なぜ `assert.deepEqual` とアプリケーションの値比較関数が同じ目的ではないかを比較してください。次に、絵文字、結合文字、`NaN`、`0.1 + 0.2` を入力として使い、表示と内部表現が異なる境界を確認します。

## References

[1] [MDN — Equality operators](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Strict_equality)

[2] [MDN — String length](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/length)
