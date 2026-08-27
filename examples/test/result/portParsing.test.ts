import assert from "node:assert/strict";
import test from "node:test";
import { parsePort } from "../../src/result/portParsing.js";

test("不正なポートはResultのerrorを返す", () => {
  assert.deepEqual(parsePort("8080"), { ok: true, value: 8080 });
  assert.deepEqual(parsePort("abc"), { ok: false, error: "invalid port" });
});
