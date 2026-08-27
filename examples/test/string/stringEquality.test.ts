import assert from "node:assert/strict";
import test from "node:test";
import { sameText } from "../../src/string/stringEquality.js";

test("同じ内容の文字列は===で等しい", () => {
  assert.equal(sameText("Type", ["Ty", "pe"].join("")), true);
});
