# 基礎: Array・Map・不変性

## 目的

Array、Map、Set は便利なコレクションですが、更新対象・参照・コピーの境界を誤ると、意図しない状態共有を生みます。この章では mutable な操作、`readonly` 型、`Object.freeze`、浅いコピー、object key の参照同一性をテストで確認します。

| テーマ | 最初に読むテスト | 完成実装 |
|---|---|---|
| `push` による更新 | `examples/test/array/arrayPush.test.ts` | `examples/src/array/arrayPush.ts` |
| `readonly` と実行時凍結 | `examples/test/array/readonlyArrays.test.ts` | `examples/src/array/readonlyArrays.ts` |
| 浅いコピー | `examples/test/array/shallowCopies.test.ts` | `examples/src/array/shallowCopies.ts` |
| `const` と要素更新 | `examples/test/array/constArrays.test.ts` | `examples/src/array/constArrays.ts` |
| `Object.freeze` の深さ | `examples/test/object/frozenObjects.test.ts` | `examples/src/object/frozenObjects.ts` |
| `Map` への既定値登録 | `examples/test/map/visitCounts.test.ts` | `examples/src/map/visitCounts.ts` |
| object key の照合 | `examples/test/map/objectMapKeys.test.ts` | `examples/src/map/objectMapKeys.ts` |
| key type の区別 | `examples/test/map/mapKeyTypes.test.ts` | `examples/src/map/mapKeyTypes.ts` |
| `undefined` 値と `has` | `examples/test/map/undefinedMapValues.test.ts` | `examples/src/map/undefinedMapValues.ts` |
| `Set` の object 重複 | `examples/test/set/userIdSets.test.ts` | `examples/src/set/userIdSets.ts` |

## 最初のテスト

`arrayPush.test.ts` を開き、`appendNumber` の戻り値と引数が `strictEqual` であることを確認します。この assertion は、配列が新しく作られるという想定を否定します。

```bash
npm run test:examples
```

## Green にする

完成実装は `examples/src/array/arrayPush.ts` です。`push` は要素数を返す API ですが、この教材関数では後続の操作を読みやすくするため同じ配列を返しています。重要なのは戻り値の形ではなく、入力配列を変更するという副作用を契約として明示することです。

## 次の一歩

`copyLabels` の戻り値へ要素を追加しても元の配列が変わらない一方、要素 object の更新が共有されることを比較します。続けて `readonly` を削除して型検査結果を見比べ、実行時保護には `Object.freeze` も必要になることを確認してください。

## References

[1] [MDN — Array.prototype.push](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

[2] [TypeScript — Everyday Types: readonly arrays](https://www.typescriptlang.org/docs/handbook/2/objects.html#the-readonlyarray-type)

[3] [MDN — Map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)
