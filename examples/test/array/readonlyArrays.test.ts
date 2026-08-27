import assert from "node:assert/strict";
import test from "node:test";
import { frozenTags } from "../../src/array/readonlyArrays.js";

test("freezeした配列にはpushできない", () => {
  const tags = frozenTags(["ts"]);
  assert.throws(() => (tags as string[]).push("node"), TypeError);
  assert.deepEqual(tags, ["ts"]);
});
