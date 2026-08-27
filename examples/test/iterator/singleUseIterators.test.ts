import assert from "node:assert/strict";
import test from "node:test";
import { numbers } from "../../src/iterator/singleUseIterators.js";

test("消費したiteratorは二回目に最初から読めない", () => {
  const iterator = numbers();
  assert.deepEqual(Array.from(iterator), [1, 2]);
  assert.deepEqual(Array.from(iterator), []);
});
