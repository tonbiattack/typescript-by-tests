import assert from 'node:assert/strict';
import test from 'node:test';
import { compareZeroAndEmpty } from '../../src/equality/coerciveEquality.js';

test('== は比較前に空文字を数値へ変換するが、=== は型が異なればfalseになる', () => {
  assert.deepEqual(compareZeroAndEmpty(), { loose: true, strict: false });
});
