# CLAUDE.md — labs-secure-ai

## What this repo is
The **staged lab template** for the *Secure AI-Assisted Development* workshop (authored in the
private `patriot-academy` repo — its `courses/secure-ai-assisted-development/labs/` specs are the
source of truth for what every branch here must contain). Students copy this repo via GitHub's
template flow ("Include all branches") and run the workshop's labs against their own copy.

## The rules that make this repo unusual
1. **`main` stays clean, working, and tested — always.** It's the app students trust as their
   baseline. Deliberate defects never merge to `main`.
2. **All planted failure modes live on the staged branches only** (`failure-modes`, `review-me`,
   `bad-merge`), which are never PR'd into `main` here — students exercise them as PRs in their
   own copies. That's also why this repo's own AgentGate config stays standard: the gate only runs
   on PRs, and the fixtures never arrive by PR.
3. **Fixture secrets are synthetic by design**: shape-correct (recognizable prefix + high-entropy
   body) so scanners bite, invalid so nothing is ever at risk. Prefer shapes that GitHub push
   protection does not hard-block (generic keys, JWTs) — verify a fixture actually pushes and
   actually trips Gitleaks before calling it done. Never plant a real credential, obviously.
4. **This is a public teaching artifact.** Every planted defect is documented as deliberate in the
   README and branch content. Don't add real vulnerabilities to `main`, and don't add planted ones
   anywhere without documenting them.
5. **Course alignment beats local cleverness.** A change to staged content that drifts from the
   patriot-academy lab specs breaks the workshop — check the spec first, update it first if the
   change is right.

## Estate floors apply
Branch → PR → **stop for Brett to merge**; signed commits with a trailer naming the authoring
model; the `brett-buskirk` account active for writes; issue/PR wiring per the estate manual
(assignee, labels, Estate board #17).
