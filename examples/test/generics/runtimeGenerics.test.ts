import assert from "node:assert/strict";
import test from "node:test";
import { runtimeConstructor } from "../../src/generics/runtimeGenerics.js";

test("異なる型引数の配列は実行時に同じArrayとして見える", () => {
  const strings: string[] = ["ts"];
  const numbers: number[] = [1];
  assert.strictEqual(runtimeConstructor(strings), runtimeConstructor(numbers));
  assert.strictEqual(runtimeConstructor(strings), Array);
});
