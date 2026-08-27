import assert from "node:assert/strict";
import test from "node:test";
import { withNullish, withOr } from "../../src/nullable/nullishDefaults.js";

test("ゼロはORでは既定値になるがnullishでは保持される", () => {
  assert.equal(withOr(0), 10);
  assert.equal(withNullish(0), 0);
  assert.equal(withNullish(undefined), 10);
});
