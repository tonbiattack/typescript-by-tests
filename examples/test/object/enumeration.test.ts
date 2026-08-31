import assert from 'node:assert/strict'; import test from 'node:test'; import { enumerableKeys } from '../../src/object/enumeration.js';
test('Object.keysはown propertyだけ、for inは継承したenumerable propertyも列挙する', () => { assert.deepEqual(enumerableKeys(), { keys: ['own'], iterated: ['own', 'inherited'] }); });
