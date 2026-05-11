# Contractor / Agency Validation Sprint

Date: 2026-05-07

Status: non-public staged growth asset. Do not send email, submit contact forms, post replies, like, follow, DM, book calls, or start paid audits without action-time confirmation.

Route-verified send runbook: `docs/afterbuild-send-runbook.md`
Current send state: Afterbuild first-touch email sent on 2026-05-11; Bytewise is the next fallback candidate only if no reply arrives after 72 hours and fresh approval is granted.

## Objective

Validate whether the sharper SpecRelay wedge is useful to people who already inherit, audit, rescue, or harden AI-built apps.

The test is not "do you like SpecRelay?" The test is:

```text
Would a stability-first handoff packet reduce intake, scoping, audit, or handoff friction before you touch an AI-built app?
```

## Current External Readout

- GitHub issue #1: open, no comments.
- Live site: HTTP 200.
- X notifications: no new useful response after the Jesse stability-first URL follow-up.
- Strong intent signals: 0.

## Fresh Market Readout

The category is getting more explicit. Several services now sell AI-app rescue, production hardening, or handoff workflows for Lovable/Bolt/Cursor/Replit-style projects:

- Afterbuild Labs sells fixed-scope AI-app rescue and async audits for Lovable, Bolt, Cursor, Replit, v0, Windsurf, Claude Code, and Base44 projects.
- AppStuck takes over stuck AI-generated apps and frames the problem as finishing, stabilizing, launching, and maintaining messy AI-generated code.
- Bytewise has a contact/intake path specifically for vibe-code rescue, code audit, current platform, user count, and "what is hurting right now."
- Pimp Your Code explicitly packages launch QA, handoff, audit, rescue, and refactor for AI-built apps.
- AC Tech Labs offers a Bolt/Lovable readiness score and productized rescue/hardening sprints.
- AppHandoff is a direct adjacent benchmark: an MCP-powered Lovable-to-production bridge with repo scanning, mismatch detection, Kanban, bot PRs, and SaaS pricing.

Strategic interpretation: do not race into automation yet. AppHandoff covers the repo-connected team workflow. SpecRelay's near-term wedge should stay lower-friction and earlier in the funnel: before a founder submits a repo, books an audit, or asks an agency to quote.

## Target Queue

| Priority | Target | Route to stage | Why this target | Best validation ask |
| --- | --- | --- | --- | --- |
| 1 | Afterbuild Labs | `hello@afterbuildlabs.com`; sent on 2026-05-11 | Most explicitly sells async audits and fixed-scope AI-app rescue | Waiting to learn whether a founder-completed stability-first packet improves the async audit input |
| 2 | Bytewise | Contact form or email; do not submit without confirmation | Intake already asks current platform, stack, user count, pain, scope, and budget | Which SpecRelay sections would reduce intake back-and-forth before a free assessment? |
| 3 | AC Tech Labs | Contact/fit-call path; do not book without confirmation | Their readiness score overlaps the "pre-handoff assessment" surface | Is SpecRelay's narrative packet complementary to a readiness score, or redundant? |
| 4 | AppStuck | Free assessment/contact path; do not submit without confirmation | Their handoff language maps to stuck AI-code takeover and launch completion | Would a packet improve project-state clarity before the first discovery meeting? |
| 5 | Pimp Your Code | Quote/intake path; do not submit without confirmation | Explicitly names launch QA plus handoff | Would the packet be useful before choosing quick fix, makeover, bodyguard, finisher, or full treatment? |
| 6 | AppHandoff | Competitor benchmark first; possible later partnership/research outreach | It validates the handoff category but solves with repo/MCP automation | Do not contact first; use it to sharpen positioning against automated repo-connected tools. |

## Staged Message: Afterbuild Labs

Preferred first action if the user approves one direct outreach.

Subject:

```text
Question from a handoff-packet tool for AI app rescue work
```

Body:

```text
Hi Afterbuild Labs team,

I am testing SpecRelay, a small zero-login tool for founders with AI-built apps before they ask someone else to audit, rescue, or productionize the project.

The output is a stability-first handoff packet: core flows that must keep working, observed issues, affected QA paths, risk surface, integrations, and a short engineering brief.

Since your async audit/rescue workflow already sees Lovable/Bolt/Cursor/Replit-style apps before they are production-ready, I am trying to learn whether this kind of founder-filled packet would help before the first audit/scoping pass, or whether you would still ignore it and go straight to repo inspection.

If you are open to a quick critique, the useful answer is one of:

1. This would reduce intake/scoping back-and-forth.
2. This is useful only after repo access.
3. This is redundant; founders should send different information first.

Live draft: https://willsuo-github.github.io/specrelay/

No sales ask. I am trying to validate whether this should become an intake aid for rescue services/agencies, or stay founder-facing.
```

Send gate: user must confirm target, route, account, and final body before sending.

## Staged Message: Bytewise

Use if choosing an agency-intake target instead of a rescue-service target.

Subject:

```text
Does this reduce vibe-code rescue intake friction?
```

Body:

```text
Hi Bytewise team,

I saw your vibe-code rescue / code audit intake asks for current platform, stack, user count, pain, scope, and what is hurting right now.

I am testing whether founders with Lovable/Bolt/Cursor/Replit-style prototypes can give agencies a better first packet before a quote or audit.

SpecRelay creates a stability-first handoff packet: core flows, observed issues, affected QA paths, risk surface, integrations, launch decision, and engineering brief.

The useful feedback is not whether the site looks good. It is whether a packet like this would reduce discovery back-and-forth before you scope work, or whether the agency still needs repo access and a call first.

Live draft: https://willsuo-github.github.io/specrelay/
```

Send gate: user must confirm target, route, account, and final body before sending.

## Staged Message: AC Tech Labs

Use if testing against readiness-score overlap.

Subject:

```text
Readiness score vs handoff packet for Bolt/Lovable MVPs
```

Body:

```text
Hi AC Tech Labs team,

I noticed your Bolt/Lovable readiness score and rescue/hardening positioning.

I am testing a neighboring idea: before a founder books a fit call or asks for a hardening sprint, should they produce a stability-first handoff packet?

SpecRelay captures core flows, observed issues, affected QA paths, risk surface, integrations, and a short engineering brief. It is more narrative than a readiness score and less technical than a repo audit.

Would that help you assess a founder's project before a call, or is a checklist/score plus repo access enough?

Live draft: https://willsuo-github.github.io/specrelay/
```

Send gate: user must confirm target, route, account, and final body before sending.

## AppHandoff Positioning Note

AppHandoff is the clearest adjacent benchmark found so far. It appears to pursue a repo-connected, team/agency SaaS workflow: MCP contracts, mismatch detection, Kanban, human review, bot PRs, and monthly pricing.

SpecRelay should not copy that route until manual packet demand is proven. The current differentiation to validate:

| AppHandoff-style route | SpecRelay route |
| --- | --- |
| Requires connected repos and production workflow | No login, no repo access, useful before first scoping conversation |
| Detects frontend/backend mismatches automatically | Captures human-observed stability and risk context |
| Fits teams/agencies already operating a delivery pipeline | Fits founders before they know what to send a reviewer |
| SaaS pricing once workflow is adopted | Possible lead-gen/intake aid or paid packet review once demand is proven |

If target feedback says "we need this only when it connects to the repo," revisit automated scanning. If target feedback says "this would make intake cleaner before the audit," keep SpecRelay manual and push toward agency intake partnerships.

## Success Criteria

Strong signal:

- A rescue service or agency says the packet would reduce intake/scoping/audit back-and-forth.
- They say founders should complete it before submitting a project or booking a call.
- They try the tool and name one section that should be added, removed, or reformatted for their workflow.

Weak signal:

- Generic encouragement.
- "Stability matters" without saying the packet would be used.
- "Send us the repo" with no interest in pre-scope context.

Negative signal:

- Multiple high-fit services say repo access makes a pre-scope packet irrelevant.
- They already have a better intake form/checklist that makes SpecRelay redundant.
- They would only use it if it generated tickets from code automatically.

## Recommended Next Approval Gate

Ask the user for confirmation to send exactly one direct outreach message first:

```text
Confirm sending the Afterbuild Labs message above through the safest available route, after final route/account/composer verification.
```

No other public or direct action should happen in the same approval without a separate confirmation.
