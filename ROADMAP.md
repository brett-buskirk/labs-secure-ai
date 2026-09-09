# Roadmap

_What's planned for labs-secure-ai — check items off as they ship._

## Base
- [x] Clean baseline app: log-triage utility + tests + CI (2026-09)

## Staged lab branches (specs: patriot-academy `courses/secure-ai-assisted-development/labs/`)
- [ ] `failure-modes` — pre-baked diffs for lab 01: a hallucinated dependency, a confidently-wrong
  implementation, a scope-creep refactor
- [ ] `review-me` — the lab 04 staged PR: planted subtle bug, fake dependency, synthetic secret,
  out-of-scope edit
- [ ] `bad-merge` — the lab 05 staged PR: synthetic secret + hallucinated dependency + oversized
  diff, built to trip Gitleaks / SCA / AgentGate respectively

## Verification
- [ ] Fixture check: every synthetic secret pushes cleanly (no push-protection hard block) and
  trips Gitleaks in a student-side pipeline
- [ ] End-to-end walk of labs 01/04/05 against a fresh template copy ("Include all branches")
