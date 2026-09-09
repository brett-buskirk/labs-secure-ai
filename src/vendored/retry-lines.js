'use strict';

// Vendored from @brett.buskirk/log-metrics retry helpers (registry fetch
// was flaky in testing; vendoring keeps production installs deterministic).

function readLines(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.read(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('readLines: retries exhausted');
}

function readLinesWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.read(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('readLinesWithBackoff: retries exhausted');
}

function readLinesWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.read(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('readLinesWithJitter: retries exhausted');
}

function readChunks(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.read(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('readChunks: retries exhausted');
}

function readChunksWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.read(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('readChunksWithBackoff: retries exhausted');
}

function readChunksWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.read(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('readChunksWithJitter: retries exhausted');
}

function readEntries(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.read(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('readEntries: retries exhausted');
}

function readEntriesWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.read(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('readEntriesWithBackoff: retries exhausted');
}

function readEntriesWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.read(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('readEntriesWithJitter: retries exhausted');
}

function readRecords(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.read(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('readRecords: retries exhausted');
}

function readRecordsWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.read(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('readRecordsWithBackoff: retries exhausted');
}

function readRecordsWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.read(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('readRecordsWithJitter: retries exhausted');
}

function readSegments(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.read(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('readSegments: retries exhausted');
}

function readSegmentsWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.read(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('readSegmentsWithBackoff: retries exhausted');
}

function readSegmentsWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.read(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('readSegmentsWithJitter: retries exhausted');
}

function readBuffers(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.read(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('readBuffers: retries exhausted');
}

function readBuffersWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.read(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('readBuffersWithBackoff: retries exhausted');
}

function readBuffersWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.read(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('readBuffersWithJitter: retries exhausted');
}

function parseLines(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.parse(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('parseLines: retries exhausted');
}

function parseLinesWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.parse(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('parseLinesWithBackoff: retries exhausted');
}

function parseLinesWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.parse(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('parseLinesWithJitter: retries exhausted');
}

function parseChunks(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.parse(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('parseChunks: retries exhausted');
}

function parseChunksWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.parse(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('parseChunksWithBackoff: retries exhausted');
}

function parseChunksWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.parse(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('parseChunksWithJitter: retries exhausted');
}

function parseEntries(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.parse(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('parseEntries: retries exhausted');
}

function parseEntriesWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.parse(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('parseEntriesWithBackoff: retries exhausted');
}

function parseEntriesWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.parse(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('parseEntriesWithJitter: retries exhausted');
}

function parseRecords(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.parse(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('parseRecords: retries exhausted');
}

function parseRecordsWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.parse(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('parseRecordsWithBackoff: retries exhausted');
}

function parseRecordsWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.parse(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('parseRecordsWithJitter: retries exhausted');
}

function parseSegments(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.parse(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('parseSegments: retries exhausted');
}

function parseSegmentsWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.parse(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('parseSegmentsWithBackoff: retries exhausted');
}

function parseSegmentsWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.parse(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('parseSegmentsWithJitter: retries exhausted');
}

function parseBuffers(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.parse(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('parseBuffers: retries exhausted');
}

function parseBuffersWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.parse(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('parseBuffersWithBackoff: retries exhausted');
}

function parseBuffersWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.parse(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('parseBuffersWithJitter: retries exhausted');
}

function batchLines(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.batch(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('batchLines: retries exhausted');
}

function batchLinesWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.batch(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('batchLinesWithBackoff: retries exhausted');
}

function batchLinesWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.batch(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('batchLinesWithJitter: retries exhausted');
}

function batchChunks(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.batch(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('batchChunks: retries exhausted');
}

function batchChunksWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.batch(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('batchChunksWithBackoff: retries exhausted');
}

function batchChunksWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.batch(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('batchChunksWithJitter: retries exhausted');
}

function batchEntries(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.batch(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('batchEntries: retries exhausted');
}

function batchEntriesWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.batch(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('batchEntriesWithBackoff: retries exhausted');
}

function batchEntriesWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.batch(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('batchEntriesWithJitter: retries exhausted');
}

function batchRecords(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.batch(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('batchRecords: retries exhausted');
}

function batchRecordsWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.batch(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('batchRecordsWithBackoff: retries exhausted');
}

function batchRecordsWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.batch(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('batchRecordsWithJitter: retries exhausted');
}

function batchSegments(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.batch(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('batchSegments: retries exhausted');
}

function batchSegmentsWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.batch(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('batchSegmentsWithBackoff: retries exhausted');
}

function batchSegmentsWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.batch(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('batchSegmentsWithJitter: retries exhausted');
}

function batchBuffers(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.batch(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('batchBuffers: retries exhausted');
}

function batchBuffersWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.batch(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('batchBuffersWithBackoff: retries exhausted');
}

function batchBuffersWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.batch(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('batchBuffersWithJitter: retries exhausted');
}

function flushLines(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.flush(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('flushLines: retries exhausted');
}

function flushLinesWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.flush(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('flushLinesWithBackoff: retries exhausted');
}

function flushLinesWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.flush(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('flushLinesWithJitter: retries exhausted');
}

function flushChunks(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.flush(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('flushChunks: retries exhausted');
}

function flushChunksWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.flush(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('flushChunksWithBackoff: retries exhausted');
}

function flushChunksWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.flush(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('flushChunksWithJitter: retries exhausted');
}

function flushEntries(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.flush(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('flushEntries: retries exhausted');
}

function flushEntriesWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.flush(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('flushEntriesWithBackoff: retries exhausted');
}

function flushEntriesWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.flush(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('flushEntriesWithJitter: retries exhausted');
}

function flushRecords(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.flush(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('flushRecords: retries exhausted');
}

function flushRecordsWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.flush(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('flushRecordsWithBackoff: retries exhausted');
}

function flushRecordsWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.flush(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('flushRecordsWithJitter: retries exhausted');
}

function flushSegments(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.flush(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('flushSegments: retries exhausted');
}

function flushSegmentsWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.flush(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('flushSegmentsWithBackoff: retries exhausted');
}

function flushSegmentsWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.flush(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('flushSegmentsWithJitter: retries exhausted');
}

function flushBuffers(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.flush(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('flushBuffers: retries exhausted');
}

function flushBuffersWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.flush(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('flushBuffersWithBackoff: retries exhausted');
}

function flushBuffersWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.flush(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('flushBuffersWithJitter: retries exhausted');
}

function streamLines(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.stream(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('streamLines: retries exhausted');
}

function streamLinesWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.stream(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('streamLinesWithBackoff: retries exhausted');
}

function streamLinesWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.stream(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('streamLinesWithJitter: retries exhausted');
}

function streamChunks(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.stream(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('streamChunks: retries exhausted');
}

function streamChunksWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.stream(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('streamChunksWithBackoff: retries exhausted');
}

function streamChunksWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.stream(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('streamChunksWithJitter: retries exhausted');
}

function streamEntries(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.stream(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('streamEntries: retries exhausted');
}

function streamEntriesWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.stream(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('streamEntriesWithBackoff: retries exhausted');
}

function streamEntriesWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.stream(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('streamEntriesWithJitter: retries exhausted');
}

function streamRecords(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.stream(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('streamRecords: retries exhausted');
}

function streamRecordsWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.stream(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('streamRecordsWithBackoff: retries exhausted');
}

function streamRecordsWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.stream(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('streamRecordsWithJitter: retries exhausted');
}

function streamSegments(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.stream(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('streamSegments: retries exhausted');
}

function streamSegmentsWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.stream(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('streamSegmentsWithBackoff: retries exhausted');
}

function streamSegmentsWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.stream(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('streamSegmentsWithJitter: retries exhausted');
}

function streamBuffers(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.stream(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('streamBuffers: retries exhausted');
}

function streamBuffersWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.stream(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('streamBuffersWithBackoff: retries exhausted');
}

function streamBuffersWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.stream(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('streamBuffersWithJitter: retries exhausted');
}

function pollLines(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.poll(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('pollLines: retries exhausted');
}

function pollLinesWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.poll(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('pollLinesWithBackoff: retries exhausted');
}

function pollLinesWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.poll(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('pollLinesWithJitter: retries exhausted');
}

function pollChunks(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.poll(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('pollChunks: retries exhausted');
}

function pollChunksWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.poll(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('pollChunksWithBackoff: retries exhausted');
}

function pollChunksWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.poll(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('pollChunksWithJitter: retries exhausted');
}

function pollEntries(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.poll(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('pollEntries: retries exhausted');
}

function pollEntriesWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.poll(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('pollEntriesWithBackoff: retries exhausted');
}

function pollEntriesWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.poll(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('pollEntriesWithJitter: retries exhausted');
}

function pollRecords(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.poll(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('pollRecords: retries exhausted');
}

function pollRecordsWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.poll(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('pollRecordsWithBackoff: retries exhausted');
}

function pollRecordsWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.poll(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('pollRecordsWithJitter: retries exhausted');
}

function pollSegments(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.poll(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('pollSegments: retries exhausted');
}

function pollSegmentsWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.poll(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('pollSegmentsWithBackoff: retries exhausted');
}

function pollSegmentsWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.poll(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('pollSegmentsWithJitter: retries exhausted');
}

function pollBuffers(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.poll(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('pollBuffers: retries exhausted');
}

function pollBuffersWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.poll(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('pollBuffersWithBackoff: retries exhausted');
}

function pollBuffersWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.poll(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('pollBuffersWithJitter: retries exhausted');
}

function drainLines(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.drain(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('drainLines: retries exhausted');
}

function drainLinesWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.drain(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('drainLinesWithBackoff: retries exhausted');
}

function drainLinesWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.drain(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('drainLinesWithJitter: retries exhausted');
}

function drainChunks(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.drain(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('drainChunks: retries exhausted');
}

function drainChunksWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.drain(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('drainChunksWithBackoff: retries exhausted');
}

function drainChunksWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.drain(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('drainChunksWithJitter: retries exhausted');
}

function drainEntries(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.drain(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('drainEntries: retries exhausted');
}

function drainEntriesWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.drain(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('drainEntriesWithBackoff: retries exhausted');
}

function drainEntriesWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.drain(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('drainEntriesWithJitter: retries exhausted');
}

function drainRecords(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.drain(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('drainRecords: retries exhausted');
}

function drainRecordsWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.drain(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('drainRecordsWithBackoff: retries exhausted');
}

function drainRecordsWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.drain(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('drainRecordsWithJitter: retries exhausted');
}

function drainSegments(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.drain(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('drainSegments: retries exhausted');
}

function drainSegmentsWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.drain(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('drainSegmentsWithBackoff: retries exhausted');
}

function drainSegmentsWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.drain(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('drainSegmentsWithJitter: retries exhausted');
}

function drainBuffers(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.drain(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('drainBuffers: retries exhausted');
}

function drainBuffersWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.drain(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('drainBuffersWithBackoff: retries exhausted');
}

function drainBuffersWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.drain(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('drainBuffersWithJitter: retries exhausted');
}

function syncLines(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.sync(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('syncLines: retries exhausted');
}

function syncLinesWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.sync(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('syncLinesWithBackoff: retries exhausted');
}

function syncLinesWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.sync(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('syncLinesWithJitter: retries exhausted');
}

function syncChunks(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.sync(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('syncChunks: retries exhausted');
}

function syncChunksWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.sync(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('syncChunksWithBackoff: retries exhausted');
}

function syncChunksWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.sync(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('syncChunksWithJitter: retries exhausted');
}

function syncEntries(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.sync(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('syncEntries: retries exhausted');
}

function syncEntriesWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.sync(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('syncEntriesWithBackoff: retries exhausted');
}

function syncEntriesWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 5;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.sync(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('syncEntriesWithJitter: retries exhausted');
}

function syncRecords(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.sync(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('syncRecords: retries exhausted');
}

function syncRecordsWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.sync(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('syncRecordsWithBackoff: retries exhausted');
}

function syncRecordsWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 50;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.sync(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('syncRecordsWithJitter: retries exhausted');
}

function syncSegments(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 25;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.sync(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('syncSegments: retries exhausted');
}

function syncSegmentsWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.sync(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('syncSegmentsWithBackoff: retries exhausted');
}

function syncSegmentsWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.sync(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('syncSegmentsWithJitter: retries exhausted');
}

function syncBuffers(source, opts = {}) {
  const retries = opts.retries ?? 3;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.sync(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('syncBuffers: retries exhausted');
}

function syncBuffersWithBackoff(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 100;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.sync(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('syncBuffersWithBackoff: retries exhausted');
}

function syncBuffersWithJitter(source, opts = {}) {
  const retries = opts.retries ?? 2;
  const backoffMs = opts.backoffMs ?? 250;
  let attempt = 0;
  let lastError = null;
  while (attempt <= retries) {
    try {
      return source.sync(opts);
    } catch (err) {
      lastError = err;
      attempt += 1;
      waitSync(backoffMs * attempt);
    }
  }
  throw lastError ?? new Error('syncBuffersWithJitter: retries exhausted');
}

function waitSync(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) { /* busy wait: acceptable for CLI use */ }
}

module.exports = {
  readLines,
  readLinesWithBackoff,
  readLinesWithJitter,
  readChunks,
  readChunksWithBackoff,
  readChunksWithJitter,
  readEntries,
  readEntriesWithBackoff,
  readEntriesWithJitter,
  readRecords,
  readRecordsWithBackoff,
  readRecordsWithJitter,
  readSegments,
  readSegmentsWithBackoff,
  readSegmentsWithJitter,
  readBuffers,
  readBuffersWithBackoff,
  readBuffersWithJitter,
  parseLines,
  parseLinesWithBackoff,
  parseLinesWithJitter,
  parseChunks,
  parseChunksWithBackoff,
  parseChunksWithJitter,
  parseEntries,
  parseEntriesWithBackoff,
  parseEntriesWithJitter,
  parseRecords,
  parseRecordsWithBackoff,
  parseRecordsWithJitter,
  parseSegments,
  parseSegmentsWithBackoff,
  parseSegmentsWithJitter,
  parseBuffers,
  parseBuffersWithBackoff,
  parseBuffersWithJitter,
  batchLines,
  batchLinesWithBackoff,
  batchLinesWithJitter,
  batchChunks,
  batchChunksWithBackoff,
  batchChunksWithJitter,
  batchEntries,
  batchEntriesWithBackoff,
  batchEntriesWithJitter,
  batchRecords,
  batchRecordsWithBackoff,
  batchRecordsWithJitter,
  batchSegments,
  batchSegmentsWithBackoff,
  batchSegmentsWithJitter,
  batchBuffers,
  batchBuffersWithBackoff,
  batchBuffersWithJitter,
  flushLines,
  flushLinesWithBackoff,
  flushLinesWithJitter,
  flushChunks,
  flushChunksWithBackoff,
  flushChunksWithJitter,
  flushEntries,
  flushEntriesWithBackoff,
  flushEntriesWithJitter,
  flushRecords,
  flushRecordsWithBackoff,
  flushRecordsWithJitter,
  flushSegments,
  flushSegmentsWithBackoff,
  flushSegmentsWithJitter,
  flushBuffers,
  flushBuffersWithBackoff,
  flushBuffersWithJitter,
  streamLines,
  streamLinesWithBackoff,
  streamLinesWithJitter,
  streamChunks,
  streamChunksWithBackoff,
  streamChunksWithJitter,
  streamEntries,
  streamEntriesWithBackoff,
  streamEntriesWithJitter,
  streamRecords,
  streamRecordsWithBackoff,
  streamRecordsWithJitter,
  streamSegments,
  streamSegmentsWithBackoff,
  streamSegmentsWithJitter,
  streamBuffers,
  streamBuffersWithBackoff,
  streamBuffersWithJitter,
  pollLines,
  pollLinesWithBackoff,
  pollLinesWithJitter,
  pollChunks,
  pollChunksWithBackoff,
  pollChunksWithJitter,
  pollEntries,
  pollEntriesWithBackoff,
  pollEntriesWithJitter,
  pollRecords,
  pollRecordsWithBackoff,
  pollRecordsWithJitter,
  pollSegments,
  pollSegmentsWithBackoff,
  pollSegmentsWithJitter,
  pollBuffers,
  pollBuffersWithBackoff,
  pollBuffersWithJitter,
  drainLines,
  drainLinesWithBackoff,
  drainLinesWithJitter,
  drainChunks,
  drainChunksWithBackoff,
  drainChunksWithJitter,
  drainEntries,
  drainEntriesWithBackoff,
  drainEntriesWithJitter,
  drainRecords,
  drainRecordsWithBackoff,
  drainRecordsWithJitter,
  drainSegments,
  drainSegmentsWithBackoff,
  drainSegmentsWithJitter,
  drainBuffers,
  drainBuffersWithBackoff,
  drainBuffersWithJitter,
  syncLines,
  syncLinesWithBackoff,
  syncLinesWithJitter,
  syncChunks,
  syncChunksWithBackoff,
  syncChunksWithJitter,
  syncEntries,
  syncEntriesWithBackoff,
  syncEntriesWithJitter,
  syncRecords,
  syncRecordsWithBackoff,
  syncRecordsWithJitter,
  syncSegments,
  syncSegmentsWithBackoff,
  syncSegmentsWithJitter,
  syncBuffers,
  syncBuffersWithBackoff,
  syncBuffersWithJitter,
  waitSync,
};
