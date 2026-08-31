import assert from 'node:assert/strict'; import test from 'node:test'; import { acceptState, states } from '../../src/types/constAssertions.js';
test('as constは配列要素をliteral unionとして保つ', () => { assert.deepEqual(states, ['ready', 'failed']); assert.equal(acceptState('ready'), 'ready'); });
