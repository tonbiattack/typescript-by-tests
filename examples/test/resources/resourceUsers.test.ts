import assert from "node:assert/strict";
import test from "node:test";
import { withResource } from "../../src/resources/resourceUsers.js";

test("withResourceは処理後にcloseを必ず呼ぶ", () => {
  const events: string[] = [];
  withResource({ use: () => events.push("used"), close: () => events.push("closed") });
  assert.deepEqual(events, ["used", "closed"]);
});
