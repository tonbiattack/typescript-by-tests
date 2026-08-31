import assert from 'node:assert/strict'; import test from 'node:test'; import { upperCaseIfString } from '../../src/typeguard/stringValues.js';
test('unknownはtypeof型ガードの後だけstringとして使える', () => { assert.equal(upperCaseIfString('ts'), 'TS'); assert.equal(upperCaseIfString(1), undefined); });
