import assert from "node:assert/strict";
import test from "node:test";
import { registerDefault } from "../../src/map/visitCounts.js";

test("存在しないキーには既定値が登録される", () => {
  const visits = new Map<string, number>([["ts", 4]]);
  assert.equal(registerDefault(visits, "node"), 0);
  assert.equal(registerDefault(visits, "ts"), 4);
  assert.equal(visits.get("node"), 0);
});
