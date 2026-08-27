import assert from "node:assert/strict";
import test from "node:test";
import { divide } from "../../src/exception/division.js";

test("ゼロで割るとRangeErrorが送出される", () => {
  assert.equal(divide(6, 2), 3);
  assert.throws(() => divide(1, 0), RangeError);
});
