import assert from "node:assert/strict";
import test from "node:test";
import { typedKeys } from "../../src/map/mapKeyTypes.js";

test("Mapはnumberとstringの同じ見た目のキーを区別する", () => {
  const values = typedKeys();
  assert.equal(values.size, 2);
  assert.equal(values.get(1), "number");
  assert.equal(values.get("1"), "string");
});
