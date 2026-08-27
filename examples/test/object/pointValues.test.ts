import assert from "node:assert/strict";
import test from "node:test";
import { samePoint } from "../../src/object/pointValues.js";

test("同じ座標を持つ別オブジェクトは===で等しくない", () => {
  const left = { x: 1, y: 2 };
  const right = { x: 1, y: 2 };
  assert.equal(left === right, false);
  assert.equal(samePoint(left, right), true);
});
