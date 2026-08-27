import assert from "node:assert/strict";
import test from "node:test";
import { nicknameOf } from "../../src/nullable/optionalChaining.js";

test("optional chainingは途中のundefinedで評価を止める", () => {
  assert.equal(nicknameOf({ profile: { nickname: "ada" } }), "ada");
  assert.equal(nicknameOf({}), undefined);
  assert.equal(nicknameOf(undefined), undefined);
});
