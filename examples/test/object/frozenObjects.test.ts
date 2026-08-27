import assert from "node:assert/strict";
import test from "node:test";
import { freezeConfig } from "../../src/object/frozenObjects.js";

test("freezeしたオブジェクトでも入れ子は変更できる", () => {
  const config = freezeConfig({ name: "app", flags: { debug: false } });
  assert.throws(() => { (config as { name: string }).name = "other"; }, TypeError);
  config.flags.debug = true;
  assert.equal(config.flags.debug, true);
});
