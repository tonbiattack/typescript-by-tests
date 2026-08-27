import assert from "node:assert/strict";
import test from "node:test";
import { uniqueUserIds } from "../../src/set/userIdSets.js";

test("別インスタンスの同じIDはSetで重複しない", () => {
  const users = [{ id: "u-42" }, { id: "u-42" }];
  assert.equal(new Set(users).size, 2);
  assert.equal(uniqueUserIds(users).size, 1);
});
