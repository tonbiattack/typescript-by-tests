import assert from "node:assert/strict";
import test from "node:test";
import { sameNumbers } from "../../src/array/arrayEquality.js";

test("同じ要素の別配列は===で等しくならない", () => {
  const left = [1, 2];
  const right = [1, 2];
  assert.equal(left === right, false);
  assert.equal(sameNumbers(left, right), true);
});
