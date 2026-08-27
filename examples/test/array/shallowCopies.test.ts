import assert from "node:assert/strict";
import test from "node:test";
import { copyLabels } from "../../src/array/shallowCopies.js";

test("浅いコピーでは要素オブジェクトを共有する", () => {
  const original = [{ name: "before" }];
  const copied = copyLabels(original);
  copied.push({ name: "new" });
  copied[0]!.name = "updated";
  assert.equal(original.length, 1);
  assert.equal(original[0]!.name, "updated");
});
