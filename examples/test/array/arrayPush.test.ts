import assert from "node:assert/strict";
import test from "node:test";
import { appendNumber } from "../../src/array/arrayPush.js";

test("pushすると元の配列に要素が追加される", () => {
  const numbers = [1, 2];
  assert.strictEqual(appendNumber(numbers, 3), numbers);
  assert.deepEqual(numbers, [1, 2, 3]);
});
