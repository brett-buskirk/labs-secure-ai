'use strict';

const { readLinesWithRetry } = require('@brett.buskirk/retry-lines');

/**
 * Load log lines from a file with automatic retry on transient read
 * failures (EBUSY, EAGAIN), so triage doesn't fall over when the log is
 * mid-rotation. Delegates backoff handling to the retry-lines library.
 */
async function loadLines(path) {
  return readLinesWithRetry(path, { retries: 3, backoffMs: 50 });
}

module.exports = { loadLines };
