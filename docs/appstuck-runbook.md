# AppStuck Runbook

Date: 2026-05-13

Status: non-public staged candidate. Do not send email, submit forms, or publish without fresh action-time confirmation.

## Why This Exists

Afterbuild and Bytewise are already in market. AC Tech Labs is staged, but its public route is a fit-call form that can distort this experiment.

AppStuck is a cleaner next candidate because it exposes both:

- a public email route: `hello@appstuck.com`
- a public contact form built around `link + current status + free assessment`

That makes it a better async validation surface than AC Tech Labs for the current question.

## Current Readout

- Afterbuild email sent: 2026-05-11 23:07:39 CST.
- Bytewise email sent: 2026-05-12 19:21:35 CST.
- Afterbuild reply status: no reply observed yet.
- Bytewise reply status: no reply observed yet.
- GitHub issue #1: still open, no comments.
- X notifications: still no useful new response after the Jesse stability-first URL follow-up.
- Live site: HTTP 200.

## Why AppStuck Next

AppStuck is the strongest next staged candidate because:

- it explicitly positions around fixing, finishing, and launching stuck AI-generated apps
- it publicly supports Lovable, Bolt, Cursor, Replit, Windsurf, Bubble, Webflow, and related platforms
- it repeatedly uses `free assessment` language rather than only pushing a fit call
- it offers a direct public email route, which is cleaner for a lightweight validation ask

Core validation question:

```text
Before a rescue service gives its first free assessment, would a founder-filled stability-first packet improve project-state clarity, or would the service still ignore it and go straight to the app/repo review?
```

## Public Route Decision

Preferred route: direct email to `hello@appstuck.com`

Secondary route: `https://www.appstuck.com/contact`

Reason:

- Email is the cleanest async route.
- The site itself advertises `free assessment` and shows the public mailbox.
- The contact form is usable, but email keeps the message out of a sales-heavy structure.

Observed public signals:

- home page meta description: `Stuck with your AI-generated app?... Free assessment.`
- customer-service email in structured data: `hello@appstuck.com`
- contact page prompt: `Tell us about your stuck project and we'll provide a free initial assessment and quote to get you back on track.`
- contact form fields include `Platform Used`, `Project Type`, and `Project Details`

## Final Send Package

Subject:

```text
Question from a handoff-packet tool for stuck AI app assessments
```

Body:

```text
Hi AppStuck team,

I am testing SpecRelay, a small zero-login tool for founders with AI-built apps before they ask someone else to rescue, audit, or finish the project.

The output is a stability-first handoff packet: core flows that must keep working, observed issues, affected QA paths, risk surface, integrations, and a short engineering brief.

Since your free assessment workflow already sees stuck Lovable/Bolt/Cursor/Replit-style apps before launch, I am trying to learn whether this kind of founder-filled packet would help before your first assessment, or whether you would still ignore it and go straight to the app/repo review.

If you are open to a quick critique, the useful answer is one of:

1. This would improve project-state clarity before the first assessment.
2. This is useful only after you inspect the app or repo directly.
3. This is redundant; founders should send different information first.

Live draft: https://willsuo-github.github.io/specrelay/

No sales ask. I am trying to validate whether this should become an intake aid for rescue services/agencies, or stay founder-facing.
```

## Contact Form Notes

AppStuck's contact form currently exposes:

- `Name`
- `Email`
- `Company`
- `Platform Used`
- `Project Type`
- `Project Details`

Interpretation:

- This form is more compatible with a truthful validation ask than AC Tech Labs because it naturally asks for current status and where the project is stuck.
- If email route quality changes, the form is still a viable fallback without forcing fake revenue or deadline answers.

## Validation Checklist

Before sending, verify all of these:

1. Afterbuild and Bytewise still have not produced a strong positive reply.
2. Recipient is exactly `hello@appstuck.com`, unless the form route is explicitly chosen instead.
3. Subject exactly matches the staged subject above.
4. Body contains the live URL only once.
5. No attachments are present.
6. No line implies an active paid rescue engagement or fake launch urgency.
7. The sender email is `ws.software@outlook.com`.

## Readout Interpretation

Strong signal:

- they say the packet would improve the first free assessment or reduce project-state ambiguity
- they say founders should send something like this before the rescue conversation
- they point to one specific section that helps or is missing

Weak signal:

- generic encouragement
- agreement that projects are messy without saying the packet would be used

Negative signal:

- they still need direct app/repo inspection and would ignore the packet
- they already have a better intake process that makes the packet redundant

## Exact Remaining Approval Gate

The narrowest remaining action in this runbook is:

```text
If Afterbuild and Bytewise still have not produced a useful reply, confirm sending the staged AppStuck email to hello@appstuck.com from ws.software@outlook.com after final composer verification.
```
