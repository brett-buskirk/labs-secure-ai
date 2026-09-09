# Lab 05 — Catch the Bad Merge (staged branch)

This branch carries one feature commit, made by an AI coding agent given this task:

> "Add remote log ingestion so triage can pull lines from the collector service."

You open this PR **after** wiring your security pipeline (Semgrep, Gitleaks, OSV-Scanner, and
AgentGate with a diff-size cap) and turning on branch protection requiring the checks.

## What to do

1. In **your copy**, open a pull request from `bad-merge` into `main`, pasting `PULL-REQUEST.md`
   as the description.
2. Watch the checks run — and watch which gates fail, and why. Match each failure to the failure
   mode it caught.
3. Note what stays **green**, too: a passing scanner means "no findings," not "no problems."
   Which planted problem did no scanner flag?
4. Remediate with your agent the way Module 3 taught: strip what shouldn't ship, drop what
   doesn't resolve, and split the honest remainder into small, reviewable PRs.
5. Verify your clean PRs pass every gate — then merge them, reading each diff as its author.

*The planted "secret" on this branch is synthetic — shape-correct, invalid, unusable. Do not
replace it with a real value.*
