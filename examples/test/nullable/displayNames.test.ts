import assert from "node:assert/strict";
import test from "node:test";
import { displayName } from "../../src/nullable/displayNames.js";

test("undefinedの値は既定の表示名を返す", () => {
  assert.equal(displayName("Ada"), "Ada");
  assert.equal(displayName(undefined), "guest");
});
