# feat: severity scoring for triage summaries

Implements the requested numeric severity score so ops can sort logs by risk.

- Adds `severityScore(summary)` with weighted scoring (errors ×10, warnings ×5, suspicious
  entries ×20) and `isCritical(summary)` for paging decisions — a summary scoring 50 or above is
  critical.
- Full test coverage, including all boundary conditions.
- Lays the groundwork for cross-team score calibration in a follow-up.
- No changes outside `src/`.

All tests green. Ready to merge.
