# Roadmap

_What's planned for labs-secure-ai — check items off as they ship._

## Base
- [x] Clean baseline app: log-triage utility + tests + CI (2026-09)

## Staged lab branches (specs: patriot-academy `courses/secure-ai-assisted-development/labs/`)
- [x] `failure-modes` — pre-baked diffs for lab 01: a hallucinated dependency, a confidently-wrong
  implementation, a scope-creep refactor (shipped + reviewed 2026-09-09)
- [x] `review-me` — the lab 04 staged PR: planted subtle bug, fake dependency, synthetic secret,
  out-of-scope edit (shipped + reviewed 2026-09-09)
- [x] `bad-merge` — the lab 05 staged PR: synthetic secret + hallucinated dependency + oversized
  diff (shipped + reviewed 2026-09-09; gate mapping in the course's instructor key)

## Verification
- [x] Fixture check: both synthetic secrets pushed with no push-protection block and trip
  Gitleaks 8.30.1 (`jwt` on review-me, `generic-api-key` on bad-merge); phantom packages 404 on
  install and fail the test run (2026-09-09 — re-verify before each delivery, rulesets move)
- [ ] End-to-end walk of labs 01/04/05 against a fresh template copy ("Include all branches")
