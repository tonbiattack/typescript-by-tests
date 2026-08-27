import assert from "node:assert/strict";
import test from "node:test";
import { appendMixed } from "../../src/generics/arrayVariance.js";

test("広い要素型の配列APIはnumber配列へ文字列を追加できる", () => {
  const numbers: number[] = [1];
  appendMixed(numbers);
  assert.deepEqual(numbers, [1, "unexpected"]);
});
