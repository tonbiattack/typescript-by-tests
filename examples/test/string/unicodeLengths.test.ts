import assert from "node:assert/strict";
import test from "node:test";
import { codePointLength } from "../../src/string/unicodeLengths.js";

test("絵文字はlengthでは2だがArrayFromでは1になる", () => {
  assert.equal("🚀".length, 2);
  assert.equal(codePointLength("🚀"), 1);
});
