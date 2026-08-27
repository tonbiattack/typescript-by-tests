import assert from "node:assert/strict";
import test from "node:test";
import { describe } from "../../src/language/paymentMethods.js";

test("支払い方法の全kindをswitchで分岐できる", () => {
  assert.equal(describe({ kind: "card", last4: "1234" }), "card:1234");
  assert.equal(describe({ kind: "bankTransfer", transactionId: "tx-42" }), "bank:tx-42");
});
