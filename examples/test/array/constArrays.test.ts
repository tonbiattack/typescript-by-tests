import assert from "node:assert/strict";
import test from "node:test";
import { addTag } from "../../src/array/constArrays.js";

test("const配列には要素を追加できる", () => {
  const tags = ["ts"];
  addTag(tags, "node");
  assert.deepEqual(tags, ["ts", "node"]);
});
