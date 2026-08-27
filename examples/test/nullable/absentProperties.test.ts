import assert from "node:assert/strict";
import test from "node:test";
import { hasNickname } from "../../src/nullable/absentProperties.js";

test("プロパティの不在とundefined値はin演算子で区別できる", () => {
  assert.equal(hasNickname({}), false);
  assert.equal(hasNickname({ nickname: undefined }), true);
});
