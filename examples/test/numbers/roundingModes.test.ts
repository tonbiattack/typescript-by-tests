import assert from "node:assert/strict";
import test from "node:test";
import { halfAwayFromZero } from "../../src/numbers/roundingModes.js";

test("MathRoundの負の半端値はゼロ方向になる", () => {
  assert.equal(Math.round(1.5), 2);
  assert.equal(Math.round(-1.5), -1);
  assert.equal(halfAwayFromZero(-1.5), -2);
});
