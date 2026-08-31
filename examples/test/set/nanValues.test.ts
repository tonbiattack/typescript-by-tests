import assert from 'node:assert/strict'; import test from 'node:test'; import { deduplicateNaN } from '../../src/set/nanValues.js';
test('SetはNaNを同じ値として重複除去する', () => { const values = deduplicateNaN(); assert.equal(values.size, 1); assert.equal(values.has(Number.NaN), true); });
