'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { ingestFrom } = require('./ingest');

test('ingestFrom exposes an async ingester', () => {
  assert.equal(typeof ingestFrom, 'function');
});
