# labs-secure-ai

The hands-on lab repository for the **Secure AI-Assisted Development** workshop. It holds a small,
readable log-triage utility and, on staged branches, the pre-baked AI failure modes the labs teach
you to produce, recognize, and catch.

## Students: getting set up

1. Click **Use this template → Create a new repository** on GitHub, and keep your copy **public**:
   lab 05 requires branch protection with required status checks, which free GitHub accounts only
   get on public repos — and everything in here, planted "secrets" included, is synthetic and safe
   to publish by design.
2. **Check "Include all branches."** The staged lab branches ride along only if you do — your lab
   guide's setup section (lab 00) walks through verifying they arrived.
3. Clone *your* copy and follow the lab guide from there. Lab instructions live in the guide you
   received by email, not in this README.

## What's in here

| Where | What |
|---|---|
| `src/triage.js` | The app under review: parses log lines, counts levels, flags suspicious entries |
| `src/triage.test.js` | Its test suite (`npm test`, no dependencies) |
| `.github/workflows/` | CI (tests) — you'll add the security gates here in lab 05 |
| Staged branches | Pre-baked lab material (see below) — **never merge these into your main** |

## Staged branches

| Branch | Used in | Carries |
|---|---|---|
| `failure-modes` | Lab 01 | Diffs exhibiting the signature AI failure modes, for identification |
| `review-me` | Lab 04 | A realistic agent-generated PR with planted issues, for checklist review |
| `bad-merge` | Lab 05 | A PR designed to trip every gate you built, for the pipeline payoff |

All planted "secrets" in staged content are synthetic — shape-correct, invalid, unusable. They
exist so scanners have something real-shaped to catch. Do not replace them with real values.

## Everyone else

This is a teaching artifact: the failure modes are planted on purpose and documented as such. The
`main` branch is a clean, working, tested app; only the staged branches carry deliberate defects.
