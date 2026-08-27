import assert from "node:assert/strict";
import test from "node:test";
import { positives } from "../../src/array/positiveNumbers.js";

test("filterは正の数だけを残す", () => {
  const input = [-2, 1, 3];
  assert.deepEqual(positives(input), [1, 3]);
  assert.deepEqual(input, [-2, 1, 3]);
});
