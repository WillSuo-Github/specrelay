# Bytewise Fallback Runbook

Date: 2026-05-12

Status: sent on 2026-05-12. Keep as the source-of-truth runbook for Bytewise readout and future route logic.

## Why This Exists

Afterbuild was the first live contractor/agency validation attempt. If it stayed silent, the next decision should not reopen the whole target list.

The now-consumed live decision was:

```text
If Afterbuild does not reply within 72 hours, send one exact Bytewise message through one exact route.
```

## Current Readout

- Afterbuild message sent: 2026-05-11 23:07:39 CST from Apple Mail.
- Bytewise message sent: 2026-05-12 19:21:35 CST from Apple Mail.
- Afterbuild reply status: no reply yet.
- Bytewise reply status: no reply yet.
- GitHub issue #1: still open, no comments.
- X notifications: no useful new response after the Jesse stability-first URL follow-up.
- Live site: HTTP 200.

## Send Result

- The Bytewise outreach email was sent to `contact@bytewise.agency` at `2026-05-12 19:21:35 CST`.
- Sender used: `willsuosuo@gmail.com`.
- A later user instruction changed the company-wide preferred sender for future outreach emails to `ws.software@outlook.com`.
- No duplicate send was made after the sent-state was verified.

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

Pre-send verification for this runbook was:

1. Recipient exactly `contact@bytewise.agency`.
2. Subject matched the staged subject above.
3. Body contained the live URL once.
4. No attachment was intended.
5. The message stayed as a workflow-validation ask, not a disguised sales inquiry.

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

This runbook's send gate is consumed. The next direct-outreach gate, if needed later, is a fresh approval for the staged AC Tech Labs message in `docs/contractor-agency-validation-sprint.md`.
