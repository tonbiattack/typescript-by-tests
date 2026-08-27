import assert from "node:assert/strict";
import test from "node:test";
import { elapsedHours } from "../../src/datetime/daylightSavingInstants.js";

test("夏時間開始日の二つの現地深夜は23時間離れている", () => {
  const losAngelesMidnightBefore = new Date("2026-03-08T08:00:00.000Z");
  const losAngelesMidnightAfter = new Date("2026-03-09T07:00:00.000Z");
  assert.equal(elapsedHours(losAngelesMidnightBefore, losAngelesMidnightAfter), 23);
});
