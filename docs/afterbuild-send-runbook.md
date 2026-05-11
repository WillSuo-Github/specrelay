# Afterbuild Send Runbook

Date: 2026-05-11

Status: non-public send runbook. Do not send email, submit forms, click paid audit CTA, book calls, DM, or publish without action-time confirmation.

## Why This Exists

The current narrow approval gate is no longer "which target should we choose?" That decision is effectively made.

The next live decision should be:

```text
Send one exact message to Afterbuild Labs through one exact route.
```

This runbook reduces that gate to a single confirmable action.

## Current Readout

- GitHub issue #1: still open, no comments.
- Live site: HTTP 200.
- X notifications: still no useful new response after the Jesse stability-first URL follow-up.
- Strong intent signals: 0.

## Why Afterbuild First

Afterbuild remains the highest-fit first evaluator because its public positioning is the closest match to SpecRelay's current question:

- It explicitly rescues AI-built apps from Lovable, Bolt, Cursor, Replit, v0, and Base44.
- It already sells async audits and fixed-scope rescue work.
- Its site explicitly invites email contact at `hello@afterbuildlabs.com`.
- Its offer is close enough to judge whether a founder-filled packet helps before a first audit, but far enough from SpecRelay's current product shape that the feedback would still be independent.

## Route Decision

Preferred route: direct email to `hello@afterbuildlabs.com`

Reason:

- Public contact route is clearly listed.
- Email keeps the message plain, reviewable, and reversible.
- Email avoids unintentionally triggering a paid audit flow.
- Email preserves the cleanest artifact for later readout.

Avoid as first route:

- `$49 audit` CTA: paid and not needed for validation.
- `Book a call`: booking is a stronger commitment than the experiment needs.
- Any X reply/DM path: not currently staged and still approval-gated.

## Final Send Package

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

## Send Checklist

Before sending, verify all of these in the live composer:

1. Recipient is exactly `hello@afterbuildlabs.com`.
2. Subject exactly matches the staged subject above.
3. Body contains the live URL only once.
4. No attachments are present.
5. No signature text adds unrelated product claims.
6. No line mentions pricing, partnerships, or a call ask.
7. The message still reads as a feedback request, not a sales pitch.

## Readout Template

If a reply arrives, classify it immediately in `.company-mode/feedback.md`:

- `strong`: packet reduces intake, scoping, audit, or handoff friction
- `weak`: generic encouragement or stability agreement without workflow fit
- `negative`: repo access makes packet irrelevant, or existing intake already solves the problem

Capture exact language for:

- whether they would read the packet before repo access
- which section matters most
- whether founders or agencies should own the packet
- whether the packet should stay manual or move closer to automated audit

## Fallback Sequence

If no reply arrives after 72 hours:

1. Do not send a second Afterbuild nudge automatically.
2. Move to Bytewise only with fresh approval.
3. Use the Bytewise message already staged in `docs/contractor-agency-validation-sprint.md`.

If Afterbuild replies negatively because repo access is mandatory:

1. Record that as real segmentation evidence, not just rejection.
2. Re-evaluate whether SpecRelay should remain founder-first.
3. Consider AC Tech Labs next because its readiness score surface is closer to pre-repo assessment.

## Exact Remaining Approval Gate

The narrowest remaining action is:

```text
Confirm sending the staged email to hello@afterbuildlabs.com with the exact subject/body in this runbook after final composer verification.
```
