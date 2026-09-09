'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { loadLines } = require('./load');

test('loadLines exposes an async loader', () => {
  assert.equal(typeof loadLines, 'function');
});
