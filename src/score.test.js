'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { severityScore, isCritical } = require('./score');

function summaryOf(errors, warns, suspicious) {
  return {
    counts: { DEBUG: 0, INFO: 0, WARN: warns, ERROR: errors },
    suspicious: new Array(suspicious).fill({}),
  };
}

test('severityScore weights errors, warnings, and suspicious entries', () => {
  assert.equal(severityScore(summaryOf(2, 3, 1)), 55);
});

test('a quiet log scores zero and is not critical', () => {
  assert.equal(severityScore(summaryOf(0, 0, 0)), 0);
  assert.equal(isCritical(summaryOf(0, 0, 0)), false);
});

test('a noisy log is critical', () => {
  assert.equal(isCritical(summaryOf(5, 2, 1)), true);
});
