# Bytewise Fallback Runbook

Date: 2026-05-12

Status: non-public fallback runbook. Do not send email, submit forms, book calls, or publish without fresh action-time confirmation and the Afterbuild 72-hour wait window expiring first.

## Why This Exists

Afterbuild is the first live contractor/agency validation attempt. If it stays silent, the next decision should not reopen the whole target list.

The next live decision should be:

```text
If Afterbuild does not reply within 72 hours, send one exact Bytewise message through one exact route.
```

## Current Readout

- Afterbuild message sent: 2026-05-11 23:07:39 CST from Apple Mail.
- Afterbuild reply status: no reply yet as of 2026-05-12 heartbeat.
- GitHub issue #1: still open, no comments.
- X notifications: no useful new response after the Jesse stability-first URL follow-up.
- Live site: HTTP 200.

## Trigger Window

Do not use this fallback before:

```text
2026-05-14 23:07 CST
```

Use it only if there is still no Afterbuild reply by then and no stronger incoming signal appears first.

## Why Bytewise Next

Bytewise is the best second target because its public positioning is close to the exact question SpecRelay is testing:

- It explicitly rescues or rebuilds AI-generated prototypes from Lovable, Bolt, Cursor, v0, Replit Agent, Bubble, and Base44.
- Its contact flow asks for current platform, user count, pain, scope, and budget, which makes intake friction part of its real workflow.
- It also exposes a direct public email route, which is a cleaner validation surface than pretending to be a normal rescue client in a structured intake form.

## Route Decision

Preferred route: direct email to `contact@bytewise.agency`

Public source:

- Home: https://bytewise.agency/
- Contact: https://bytewise.agency/contact/

Reason:

- Email preserves an honest validation ask instead of forcing fake budget/scope answers into a client-intake form.
- Email is reversible, reviewable, and easier to classify later.
- The public contact form is useful as evidence of Bytewise's intake workflow, but it is not the best first route for this research question.

Avoid as first route:

- Contact form: it asks for budget, active users, platform, roadmap, and capacity as if we are already a rescue client. That muddies the validation ask.
- Free audit / book-a-call CTA: stronger commitment than this experiment needs.

## Final Send Package

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

No sales ask. I am trying to learn whether this should become an intake aid for rescue services/agencies, or stay founder-facing.
```

## Validation Checklist

Before sending, verify all of these:

1. Afterbuild still has not replied and the 72-hour wait window has actually expired.
2. Recipient is exactly `contact@bytewise.agency`.
3. Subject exactly matches the staged subject above.
4. Body contains the live URL only once.
5. No attachments are present.
6. No line implies an active rescue budget, booked project, or fake client urgency.
7. The message still reads as a workflow-validation ask, not a disguised sales inquiry.

## Contact Form Notes

Bytewise's contact page currently asks for these structured intake fields:

- name
- email
- company
- subject
- repo or product URL
- primary stack
- urgency
- scope type
- rough budget
- current platform
- active users
- current pain
- primary use case
- what the AI should do
- requested capacity
- roadmap
- current stage
- target launch
- what are we building
- freeform message

Interpretation:

- This is evidence that Bytewise already fights intake ambiguity directly.
- If Bytewise says a founder-filled packet would reduce that intake back-and-forth, that is strong validation.
- If Bytewise says the form plus repo access already solves the problem, that is also strong evidence, just negative for the current wedge.

## Readout Template

If Bytewise replies, classify it immediately in `.company-mode/feedback.md`:

- `strong`: the packet would reduce intake/scoping/audit friction before repo access
- `weak`: generic encouragement without workflow fit
- `negative`: the packet is unnecessary because form plus repo access already solves the problem

Capture exact language for:

- whether they would read the packet before repo access
- which section matters most
- whether intake owner or founder should complete it
- whether structured intake form plus repo access already dominates this job

## Exact Remaining Approval Gate

The narrowest remaining action in this runbook is:

```text
If Afterbuild is still silent after 2026-05-14 23:07 CST, confirm sending the staged Bytewise email to contact@bytewise.agency after final composer verification.
```
