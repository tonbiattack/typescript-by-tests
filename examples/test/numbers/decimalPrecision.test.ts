import assert from "node:assert/strict";
import test from "node:test";
import { addCents } from "../../src/numbers/decimalPrecision.js";

test("小数の加算は厳密な0point3と等しくない", () => {
  assert.equal(0.1 + 0.2 === 0.3, false);
  assert.equal(addCents(10, 20), 30);
});
