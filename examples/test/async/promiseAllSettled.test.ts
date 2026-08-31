import assert from 'node:assert/strict';
import test from 'node:test';
import { observeAllSettled } from '../../src/async/promiseAllSettled.js';

test('Promise.allSettled は成功と失敗を結果配列として両方返す', async () => {
  const results = await observeAllSettled();

  assert.equal(results[0]?.status, 'fulfilled');
  assert.equal(results[1]?.status, 'rejected');
});
