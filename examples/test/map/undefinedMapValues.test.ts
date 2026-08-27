import assert from "node:assert/strict";
import test from "node:test";
import { isConfigured } from "../../src/map/undefinedMapValues.js";

test("getだけではundefined値のキーと未登録キーを区別できない", () => {
  const values = new Map<string, string | undefined>([["configured", undefined]]);
  assert.equal(values.get("configured"), undefined);
  assert.equal(values.get("missing"), undefined);
  assert.equal(isConfigured(values, "configured"), true);
  assert.equal(isConfigured(values, "missing"), false);
});
