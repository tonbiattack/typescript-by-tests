import assert from "node:assert/strict";
import test from "node:test";
import { dateInZone } from "../../src/datetime/timeZoneFormatting.js";

test("同じinstantはUTCとLosAngelesで日付が異なる", () => {
  const instant = new Date("2026-08-27T00:30:00.000Z");
  assert.equal(dateInZone(instant, "UTC"), "2026-08-27");
  assert.equal(dateInZone(instant, "America/Los_Angeles"), "2026-08-26");
});
