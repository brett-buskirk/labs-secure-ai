'use strict';

// Log-triage utility: parse structured log lines and summarize what deserves
// a human's attention. Deliberately small — the workshop's labs review, break,
// and gate changes to this code, so every line should be readable in one pass.

const LEVELS = ['DEBUG', 'INFO', 'WARN', 'ERROR'];

// Lines look like: "2026-09-01T12:00:00Z WARN auth: failed login for user=alice"
const LINE_RE = /^(\S+)\s+(DEBUG|INFO|WARN|ERROR)\s+([^:]+):\s+(.*)$/;

// Patterns that make a line worth a second look regardless of level.
const SUSPICIOUS = [
  /failed login/i,
  /permission denied/i,
  /invalid token/i,
  /unexpected redirect/i,
];

/**
 * Parse one log line into { timestamp, level, component, message },
 * or null if the line doesn't match the expected shape.
 */
function parseLine(line) {
  const m = LINE_RE.exec(line.trim());
  if (!m) return null;
  return { timestamp: m[1], level: m[2], component: m[3], message: m[4] };
}

/**
 * Triage an array of raw log lines. Returns:
 *   counts      – occurrences per level (all levels always present)
 *   suspicious  – parsed entries matching a suspicious pattern
 *   unparseable – count of lines that didn't match the expected shape;
 *                 they're counted rather than dropped silently, because a
 *                 malformed line is itself a signal worth surfacing.
 */
function triage(lines) {
  const counts = Object.fromEntries(LEVELS.map((l) => [l, 0]));
  const suspicious = [];
  let unparseable = 0;

  for (const line of lines) {
    if (line.trim() === '') continue;
    const entry = parseLine(line);
    if (!entry) {
      unparseable += 1;
      continue;
    }
    counts[entry.level] += 1;
    if (SUSPICIOUS.some((re) => re.test(entry.message))) {
      suspicious.push(entry);
    }
  }

  return { counts, suspicious, unparseable };
}

module.exports = { parseLine, triage, LEVELS };
