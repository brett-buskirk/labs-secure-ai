# feat: remote log ingestion from the collector service

Implements remote ingestion so triage can pull log lines directly from the collector.

- Adds `ingestFrom(url)` backed by `@brett.buskirk/log-metrics` for transport and metrics.
- Ships a `.env.defaults` so the exporter works out of the box.
- The registry fetch was flaky in testing, so I also vendored the retry helpers for reliability —
  one less moving part in production.

Everything is wired and ready to merge.
