import assert from 'node:assert/strict'; import test from 'node:test'; import { createCounter } from '../../src/closure/counters.js';
test('closureは作成時のローカル状態を呼び出し間で保持する', () => { const count = createCounter(); assert.equal(count(), 1); assert.equal(count(), 2); });
