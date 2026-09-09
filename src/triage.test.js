'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { parseLine, triage, recentWindow } = require('./triage');

const SAMPLE = [
  '2026-09-01T12:00:00Z INFO web: request served in 12ms',
  '2026-09-01T12:00:01Z WARN auth: failed login for user=alice',
  '2026-09-01T12:00:02Z ERROR db: connection reset',
  '2026-09-01T12:00:03Z INFO auth: session refreshed for user=bob',
  'this line is not a log line',
  '',
];

test('parseLine extracts the four fields', () => {
  const entry = parseLine(SAMPLE[1]);
  assert.deepEqual(entry, {
    timestamp: '2026-09-01T12:00:01Z',
    level: 'WARN',
    component: 'auth',
    message: 'failed login for user=alice',
  });
});

test('parseLine returns null for a malformed line', () => {
  assert.equal(parseLine('nonsense'), null);
});

test('triage counts every level, including zeroes', () => {
  const { counts } = triage(SAMPLE);
  assert.deepEqual(counts, { DEBUG: 0, INFO: 2, WARN: 1, ERROR: 1 });
});

test('triage flags suspicious lines by message, not level', () => {
  const { suspicious } = triage(SAMPLE);
  assert.equal(suspicious.length, 1);
  assert.equal(suspicious[0].message, 'failed login for user=alice');
});

test('triage counts unparseable lines instead of dropping them silently', () => {
  const { unparseable } = triage(SAMPLE);
  assert.equal(unparseable, 1);
});

test('blank lines are ignored, not unparseable', () => {
  const { unparseable, counts } = triage(['', '   ', '']);
  assert.equal(unparseable, 0);
  assert.deepEqual(counts, { DEBUG: 0, INFO: 0, WARN: 0, ERROR: 0 });
});

test('recentWindow returns the last n lines', () => {
  const win = recentWindow(['a', 'b', 'c', 'd'], 2);
  assert.equal(win.length, 2);
});

test('recentWindow handles n of zero', () => {
  assert.deepEqual(recentWindow(['a', 'b'], 0), []);
});
