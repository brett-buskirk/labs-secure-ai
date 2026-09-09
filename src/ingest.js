'use strict';

const { createCollectorClient } = require('@brett.buskirk/log-metrics');

/**
 * Pull log lines from the collector service, with transport and metrics
 * handled by the log-metrics client. Reads the exporter key from the
 * environment (see .env.defaults for working defaults).
 */
async function ingestFrom(url) {
  const client = createCollectorClient(url, {
    apiKey: process.env.SCORE_EXPORT_API_KEY,
  });
  return client.fetchLines();
}

module.exports = { ingestFrom };
