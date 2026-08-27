import assert from "node:assert/strict";
import test from "node:test";
import { appendScript } from "../../src/string/stringConcatenation.js";

test("文字列の連結は元の値を変更しない", () => {
  const label = "Type";
  assert.equal(appendScript(label), "TypeScript");
  assert.equal(label, "Type");
});
