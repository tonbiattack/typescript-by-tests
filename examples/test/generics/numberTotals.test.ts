import assert from "node:assert/strict";
import test from "node:test";
import { sum } from "../../src/generics/numberTotals.js";

test("numberのreadonly配列を合計できる", () => {
  assert.equal(sum([1, 2]), 3);
  assert.equal(sum([1.5, 2.5]), 4);
});
