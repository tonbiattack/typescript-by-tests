import assert from "node:assert/strict";
import test from "node:test";
import { runTogether } from "../../src/async/promiseAllCancellation.js";

test("PromiseAllの失敗後も開始済み処理は完了する", async () => {
  let completed = false;
  const slow = Promise.resolve().then(() => { completed = true; return "done"; });
  const failed = Promise.reject(new Error("stop"));
  await assert.rejects(runTogether([slow, failed]));
  await slow;
  assert.equal(completed, true);
});
