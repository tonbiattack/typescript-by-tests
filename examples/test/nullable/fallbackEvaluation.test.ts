import assert from "node:assert/strict";
import test from "node:test";
import { eagerDefault, lazyDefault } from "../../src/nullable/fallbackEvaluation.js";

test("値があってもeagerな既定値の式は評価される", () => {
  let eagerCalls = 0;
  const eagerFallback = () => { eagerCalls += 1; return "guest"; };
  assert.equal(eagerDefault("member", eagerFallback()), "member");
  assert.equal(eagerCalls, 1);

  let lazyCalls = 0;
  assert.equal(lazyDefault("member", () => { lazyCalls += 1; return "guest"; }), "member");
  assert.equal(lazyCalls, 0);
});
