import assert from "node:assert/strict";
import test from "node:test";
import { mapImmediately } from "../../src/array/eagerArrays.js";

test("Arrayのmapは直ちにコールバックを評価する", () => {
  let calls = 0;
  const doubled = mapImmediately([1, 2], () => { calls += 1; });
  assert.equal(calls, 2);
  assert.deepEqual(doubled, [2, 4]);
});
