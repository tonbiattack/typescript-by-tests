import assert from 'node:assert/strict'; import test from 'node:test'; import { enumRuntimeValue } from '../../src/enum/buildState.js';
test('numeric enumはJavaScript実行時に逆引き可能なobjectとして残る', () => { assert.deepEqual(enumRuntimeValue(), { numeric: 0, name: 'Ready' }); });
