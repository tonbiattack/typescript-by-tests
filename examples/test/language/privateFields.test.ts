import assert from 'node:assert/strict';
import test from 'node:test';
import { Counter } from '../../src/language/privateFields.js';

test('privateは実行時プロパティとして書き換えられるが、#privateは外部から作れない', () => {
  const counter = new Counter();
  (counter as unknown as { count: number }).count = 10;
  counter.increment();

  assert.deepEqual(counter.values(), { count: 11, secret: 1 });
  assert.throws(() => Function('counter', 'return counter.#secret')(counter), SyntaxError);
});
