import assert from "node:assert/strict";
import test from "node:test";
import { handleRequest } from "../../src/async/explicitContext.js";

test("非同期処理は明示的に渡したリクエストIDを返す", async () => {
  assert.deepEqual(await Promise.all([handleRequest("a"), handleRequest("b")]), ["request:a", "request:b"]);
});
