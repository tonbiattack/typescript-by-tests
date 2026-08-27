import assert from "node:assert/strict";
import test from "node:test";
import { normalizeNfc } from "../../src/string/unicodeNormalization.js";

test("正規化前は異なりNFC後は同じ文字列になる", () => {
  const composed: string = "é";
  const decomposed: string = "é";
  assert.equal(composed === decomposed, false);
  assert.equal(normalizeNfc(composed) === normalizeNfc(decomposed), true);
});
