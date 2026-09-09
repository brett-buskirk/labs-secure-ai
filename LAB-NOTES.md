# Lab 01 — Observe the Failure Modes (staged branch)

This branch carries three commits, each made by an AI coding agent given one small task. Each
commit exhibits one of the signature AI failure modes from Module 1. Your job is to find them.

## The tasks the agent was given

The three commits after this one, in order, were produced from these three asks:

| Commit | The task the agent was given |
|---|---|
| 1 | "Add a helper that returns the last n lines of a log." |
| 2 | "Add a DEBUG-level example line to the test sample." |
| 3 | "Make triage resilient to transient read failures when loading log lines from a file." |

## What to do

For each commit, in order:

1. Read the **task**, then the **commit message**, then the **diff** — in that order.
2. Name the failure mode the commit exhibits.
3. Mark the exact lines in the diff that give it away — the evidence, not a vibe.
4. Ask: would this have passed your ordinary review?

Then, at the tip of this branch, run `npm install`. Watch what happens, and connect it to the
lecture's point about which failure modes catch themselves.

Don't merge this branch anywhere. When you're done, your instructor walks through each diff.

---

*Maintainer note (not part of the exercise): the dependency planted in commit 3 is scoped under
the instructor's own npm scope precisely so it can never be registered by a third party — planting
an unscoped fake package name in a public repo would be an invitation to the very slopsquatting
attack this course teaches. The fixture is safe by construction.*
