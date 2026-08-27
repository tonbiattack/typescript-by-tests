# coverage matrix

この表は、原典の 41 テーマを TypeScript/Node.js の慣用的な概念に置き換えた対応表です。すべての行は、実装、Node.js 標準テスト、静的サイトの Source/Test 表示を持ちます。

| # | TypeScript テーマ | カテゴリ | 原典からの置換理由 |
|---:|---|---|---|
| 1 | [string: プリミティブ文字列の === は値を比較する](./typescript/string/strict-equality) | Language | プリミティブ値、構造的型付け、discriminated union に再表現 |
| 2 | [string: trim 後の長さで空白だけを判定する](./typescript/string/is-blank) | Language | プリミティブ値、構造的型付け、discriminated union に再表現 |
| 3 | [string: 連結は元の文字列を変更しない](./typescript/string/immutable-concatenation) | Language | プリミティブ値、構造的型付け、discriminated union に再表現 |
| 4 | [Array: push は同じ配列を変更する](./typescript/array/push) | Collections | Array、Map、Set の可変性・参照同一性に再表現 |
| 5 | [readonly: 型だけでは配列を実行時に凍結しない](./typescript/array/readonly) | Collections | Array、Map、Set の可変性・参照同一性に再表現 |
| 6 | [Array: スプレッドによるコピーは浅い](./typescript/array/shallow-copy) | Collections | Array、Map、Set の可変性・参照同一性に再表現 |
| 7 | [Map: キーがない時だけ既定値を登録する](./typescript/map/default-value) | Collections | Array、Map、Set の可変性・参照同一性に再表現 |
| 8 | [number: NaN は自分自身とも === で等しくない](./typescript/numbers/nan) | Numbers | IEEE 754 の number と整数最小単位の設計へ再表現 |
| 9 | [number: 0.1 + 0.2 は厳密な 0.3 にならない](./typescript/numbers/decimal-precision) | Numbers | IEEE 754 の number と整数最小単位の設計へ再表現 |
| 10 | [object: 同じプロパティでも === は別の参照なら false](./typescript/object/value-equality) | Language | プリミティブ値、構造的型付け、discriminated union に再表現 |
| 11 | [Set: オブジェクトの重複判定は参照同一性で行う](./typescript/set/object-identity) | Language | プリミティブ値、構造的型付け、discriminated union に再表現 |
| 12 | [undefined: ?? で値がない場合だけ既定値を選ぶ](./typescript/nullable/default) | Functional | nullable、Array、generator の評価規則へ再表現 |
| 13 | [default: 引数は呼び出し前に評価され、supplier は必要時まで遅延できる](./typescript/nullable/eager-lazy) | Functional | nullable、Array、generator の評価規則へ再表現 |
| 14 | [optional chaining: 値がない処理を連鎖で止める](./typescript/nullable/map-chain) | Functional | nullable、Array、generator の評価規則へ再表現 |
| 15 | [Array: filter は新しい配列を返し、入力を変更しない](./typescript/array/filter) | Functional | nullable、Array、generator の評価規則へ再表現 |
| 16 | [Array: map は呼び出した時点で評価される](./typescript/array/eager-map) | Functional | nullable、Array、generator の評価規則へ再表現 |
| 17 | [Object.freeze: 凍結は一段目だけに適用される](./typescript/object/freeze-shallow) | Functional | nullable、Array、generator の評価規則へ再表現 |
| 18 | [Error: assert.throws で失敗の契約を確かめる](./typescript/exception/throws) | Error Handling | Error、Result、try/finally の契約へ再表現 |
| 19 | [Result: TypeScriptには checked exception がない](./typescript/result/no-checked-exceptions) | Error Handling | Error、Result、try/finally の契約へ再表現 |
| 20 | [generics: readonly number[] は数値配列を読み取れる](./typescript/generics/number-constraint) | Generics | readonly 配列、配列分散、コンパイル時型へ再表現 |
| 21 | [generics: mutable な配列の共変性は不正な値を混入させ得る](./typescript/generics/array-variance) | Generics | readonly 配列、配列分散、コンパイル時型へ再表現 |
| 22 | [Date: 同じ instant でもタイムゾーンで日付が異なる](./typescript/datetime/time-zone-format) | Date / Time | Date の instant と Intl のタイムゾーン表示へ再表現 |
| 23 | [try/finally: 成功時も失敗時も後片付けを行う](./typescript/resources/try-finally) | Error Handling | Error、Result、try/finally の契約へ再表現 |
| 24 | [Map: オブジェクトキーはプロパティではなく参照で照合する](./typescript/map/object-key-identity) | Collections | Array、Map、Set の可変性・参照同一性に再表現 |
| 25 | [number: Math.round は負の 0.5 をゼロ方向へ丸める](./typescript/numbers/rounding) | Numbers | IEEE 754 の number と整数最小単位の設計へ再表現 |
| 26 | [?? と ||: 0 や空文字を既定値扱いするかが異なる](./typescript/nullable/nullish-vs-or) | Functional | nullable、Array、generator の評価規則へ再表現 |
| 27 | [Map: number の 1 と string の "1" は別のキー](./typescript/map/key-types) | Collections | Array、Map、Set の可変性・参照同一性に再表現 |
| 28 | [number: 十進数 0.1 は二進浮動小数点の近似値である](./typescript/numbers/from-number) | Numbers | IEEE 754 の number と整数最小単位の設計へ再表現 |
| 29 | [optional property: 省略、undefined、null は別の状態になり得る](./typescript/nullable/absent-state) | Functional | nullable、Array、generator の評価規則へ再表現 |
| 30 | [string: length は UTF-16 のコード単位を数える](./typescript/string/code-point-count) | Language | プリミティブ値、構造的型付け、discriminated union に再表現 |
| 31 | [string: 見た目が同じ Unicode 文字列でも === が異なる](./typescript/string/unicode-normalization) | Language | プリミティブ値、構造的型付け、discriminated union に再表現 |
| 32 | [Map: get の undefined だけでは未登録と undefined 値を区別できない](./typescript/map/undefined-value) | Collections | Array、Map、Set の可変性・参照同一性に再表現 |
| 33 | [const: 配列の再代入は防ぐが、要素の変更は防がない](./typescript/array/const-mutation) | Collections | Array、Map、Set の可変性・参照同一性に再表現 |
| 34 | [generator: iterator は一度進めた位置から再開する](./typescript/iterator/single-use) | Functional | nullable、Array、generator の評価規則へ再表現 |
| 35 | [Date: 夏時間の切替をまたぐ日付境界は 24 時間ではない](./typescript/datetime/dst-instant) | Date / Time | Date の instant と Intl のタイムゾーン表示へ再表現 |
| 36 | [Array: 同じ要素の別配列も === では等しくない](./typescript/array/reference-equality) | Language | プリミティブ値、構造的型付け、discriminated union に再表現 |
| 37 | [discriminated union: kind による網羅的な分岐を表す](./typescript/language/discriminated-union) | Language | プリミティブ値、構造的型付け、discriminated union に再表現 |
| 38 | [async: コンテキストを引数で明示して非同期処理へ渡す](./typescript/async/explicit-context) | Concurrency | Promise、async/await、明示的コンテキストへ再表現 |
| 39 | [Promise: await は rejection の元の Error を送出する](./typescript/async/promise-rejection) | Concurrency | Promise、async/await、明示的コンテキストへ再表現 |
| 40 | [Promise.all: 一つが失敗しても他の処理を自動では中止しない](./typescript/async/promise-all) | Concurrency | Promise、async/await、明示的コンテキストへ再表現 |
| 41 | [generics: 型引数は JavaScript 実行時には存在しない](./typescript/generics/runtime-erasure) | Generics | readonly 配列、配列分散、コンパイル時型へ再表現 |

## 範囲上の注記

Java 固有の `BigDecimal` の scale、checked exception、`record` の自動的な値比較、`HashMap` の `equals`/`hashCode`、virtual thread、`ConcurrentHashMap` は機械的に移植していません。各項目は TypeScript/Node.js で同じ設計上の問いを生む API または実行時挙動へ置換しています。

## 参照

[1] [Java by Tests](https://github.com/tonbiattack/java-by-tests)
