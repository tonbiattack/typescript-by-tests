import assert from "node:assert/strict";
import test from "node:test";
import { valueFor } from "../../src/map/objectMapKeys.js";

test("同じIDを持つ別オブジェクトではMapを検索できない", () => {
  const stored = { id: "a" };
  const map = new Map([[stored, "value"]]);
  assert.equal(valueFor(map, stored), "value");
  assert.equal(valueFor(map, { id: "a" }), undefined);
});
