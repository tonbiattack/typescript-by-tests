import assert from "node:assert/strict";
import test from "node:test";
import { isNotANumber } from "../../src/numbers/nanValues.js";

test("NaNは===では等しくない", () => {
  const result = Number("not-a-number");
  assert.equal(result === result, false);
  assert.equal(isNotANumber(result), true);
});
