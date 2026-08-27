import assert from "node:assert/strict";
import test from "node:test";
import { isBlank } from "../../src/string/stringWhitespace.js";

test("空白だけの文字列はisBlankでtrueになる", () => {
  assert.equal(isBlank(""), true);
  assert.equal(isBlank(String.fromCharCode(32, 10, 9)), true);
  assert.equal(isBlank(" TypeScript "), false);
});
