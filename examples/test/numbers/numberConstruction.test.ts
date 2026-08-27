import assert from "node:assert/strict";
import test from "node:test";
import { showPrecision } from "../../src/numbers/numberConstruction.js";

test("0point1を十進形式で十分長く表示すると近似値が見える", () => {
  assert.equal(showPrecision(0.1), "0.10000000000000000555");
});
