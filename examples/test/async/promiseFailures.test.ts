import assert from "node:assert/strict";
import test from "node:test";
import { failedOperation } from "../../src/async/promiseFailures.js";

test("awaitはPromiseの失敗で元のErrorを送出する", async () => {
  const error = new RangeError("invalid input");
  await assert.rejects(failedOperation(error), (received) => received === error);
});
