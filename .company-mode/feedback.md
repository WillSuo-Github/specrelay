# Feedback Log

Two direct qualitative responses so far. No completed packet review yet. Current research points toward contractor/agency rescue workflows as the next sharper validation surface.

## Public Feedback Surface

- GitHub issue #1 is open for evaluator reviews: https://github.com/WillSuo-Github/specrelay/issues/1
- 2026-05-03 heartbeat check: no comments on the feedback issue yet.
- 2026-05-03: live app now links to issue #1 from the result panel, and exported Markdown includes the same feedback URL.
- 2026-05-03: six no-link public X replies were sent to first-wave evaluator targets. No replies or direct feedback were observed immediately after sending.
- 2026-05-04 heartbeat check: no comments on the feedback issue yet.
- 2026-05-04 user-confirmed X micro-sprint: one URL follow-up was sent to engaged reviewer `@LechMazur`; no-link questions were sent to second-wave targets `@jessecolesmith` and `@HitenDharpure`. No new feedback was observed before sending.
- 2026-05-05 heartbeat check: GitHub issue #1 still had no comments; X notifications showed one `@jessecolesmith` reply and one `@FSfakiotakis` like on the no-link follow-up.
- 2026-05-06 heartbeat check: GitHub issue #1 still had no comments; X notifications showed no new useful responses beyond the existing Jesse reply and Frank like.
- 2026-05-06 user-confirmed X action: stability-first URL follow-up was sent to `@jessecolesmith`; no response observed yet.
- 2026-05-06 follow-up heartbeat check: GitHub issue #1 still had no comments; X notifications showed no new useful response to the Jesse stability-first URL follow-up. Prepared `docs/stability-first-target-discovery.md` from current contractor/agency/community surfaces; no public action was taken.
- 2026-05-07 heartbeat check: GitHub issue #1 still had no comments; X notifications showed no new useful response after the Jesse stability-first URL follow-up; live site returned HTTP 200. Prepared `docs/contractor-agency-validation-sprint.md`; no public/direct action was taken.
- 2026-05-11 heartbeat check: GitHub issue #1 still had no comments; live site returned HTTP 200; X notifications still showed no useful new response after the Jesse stability-first URL follow-up. Prepared `docs/afterbuild-send-runbook.md`; no public/direct action was taken.
- 2026-05-11 user-confirmed direct action: sent the staged Afterbuild Labs email to `hello@afterbuildlabs.com` from `willsuosuo@gmail.com` via Apple Mail. Composer fields were verified before send, and the message then appeared in `All Sent`. No reply yet.
- 2026-05-12 heartbeat check: GitHub issue #1 still had no comments; live site returned HTTP 200; inbox state was treated as no inbound Afterbuild reply at the time; X notifications still showed no useful new response after the Jesse stability-first URL follow-up. Prepared `docs/bytewise-fallback-runbook.md`; no public/direct action was taken.
- 2026-05-12 user-confirmed direct action: the Bytewise validation email to `contact@bytewise.agency` was already sent from `willsuosuo@gmail.com` via Apple Mail at `2026-05-12 19:21:35 CST` during the interrupted send flow. No duplicate send was made after that fact was verified. Future company outreach emails should use `ws.software@outlook.com` unless explicitly overridden.
- 2026-05-13 heartbeat check: GitHub issue #1 still had no comments; live site returned HTTP 200; no useful new X response was observed after the Jesse stability-first URL follow-up; no new contractor/agency reply was observed before staging the next asset. Prepared `docs/ac-tech-labs-runbook.md`; no public/direct action was taken.
- 2026-05-13 follow-up heartbeat check: GitHub issue #1 still had no comments; live site returned HTTP 200; Mail inbox counts for Afterbuild and Bytewise were still zero; X notifications still showed no useful new response after the Jesse stability-first URL follow-up. Prepared `docs/appstuck-runbook.md` and promoted AppStuck above AC Tech Labs as the cleaner next async route. No public/direct action was taken.
- 2026-05-14 user-confirmed direct action: system Mail could not produce a verifiable sent item from `ws.software@outlook.com`, so the AppStuck outreach was submitted through the public contact form using `ws.software@outlook.com` instead. Submission success was verified by the `https://www.appstuck.com/contact/thank-you` redirect.
- 2026-05-18 heartbeat check: Mail UI search verified that the Afterbuild email did not quietly wait in market; it entered a delay/failure thread and ended with `Delivery Status Notification (Failure)` on `2026-05-15`, citing recipient-server connection timeouts to `afterbuildlabs.com`. The same Mail UI check showed no inbox matches for Bytewise or AppStuck replies. GitHub issue #1 still had no comments and the live site still returned HTTP 200.
- 2026-05-18 user-confirmed direct action: submitted the AC Tech Labs public contact form at `https://www.aclabs.io/contact` using `Will Suo` and `ws.software@outlook.com` with an explicitly truthful validation framing. Browser network trace verified `POST /api/contact` returned `200` with `{\"ok\":true}`. No call was booked.
- 2026-05-18 follow-up heartbeat check: GitHub issue #1 still had no comments, Pages deploy `25999304626` completed successfully, the live site still returned HTTP 200, and AppleScript inbox count for `bytewise` still returned `0`. No new verified AppStuck or AC Tech Labs reply was added in this run.
- 2026-05-19 heartbeat check: GitHub issue #1 still had no comments, latest Pages deploy `26019045739` completed successfully, the live site still returned HTTP 200, and AppleScript inbox counts returned `0` for `bytewise`, `appstuck`, and `aclabs`. No new verified reply was added in this run.
- 2026-05-19 follow-up heartbeat check: GitHub issue #1 still had no comments, latest Pages deploy `26019045739` remained successful, the live site still returned HTTP 200, and the same AppleScript inbox-count path again returned `0` for `bytewise`, `appstuck`, and `aclabs`. No new verified reply was added in this run.

## Direct Feedback

### 2026-05-04 - Frank Sfakiotakis / `@FSfakiotakis`

Source: X mention reply to first-wave public outreach.

Segment: founder/operator using Lovable in B2B.

Exact language:

```text
I did not hand it over. My use case is so simple that I can manage and maintain + update by myself. If you're interested I can give you free access to my app so that you can see what it looks like to @DanielSmidstrup as well.
```

Interpretation:

- This is a useful negative/segmentation signal, not a strong intent signal.
- Simple founder-maintained B2B apps may not feel acute handoff pain until a contractor, reviewer, or teammate needs to touch the app.
- The better wedge may be "when someone else must review/change/operate the prototype" rather than "every AI-built app needs a packet."

Suggested next action:

- Public follow-up is staged in `docs/x-target-discovery.md`, but it remains action-time gated.

### 2026-05-05 - Jesse Smith / `@jessecolesmith`

Source: X reply to second-wave no-link public question.

Segment: tradesman/domain expert building a custom AI/vibe-coded workflow around Jobber and email.

Exact language:

```text
Honestly, just have to play with it.
Improvements get promoted into existence so I take the issues as they come.
Always start with stability. Basic features and build on top of that.
```

Interpretation:

- This is useful process feedback, not a strong intent signal.
- For hands-on domain builders, an upfront handoff packet may feel too abstract unless it maps to "play with it, stabilize basics, promote observed issues."
- The packet should emphasize the next stability pass before a broader QA or feature roadmap.

Suggested next action:

- Product updated to include a stability-first pass.
- Public follow-up with the updated URL was sent after user confirmation. Wait for Jesse to critique whether the update matches contractor handoff behavior.

## Research-Derived Pain Themes

- AI-assisted coding adoption is high, while trust and debugging burden remain weak points.
- AI-generated code can pass functional checks while failing security expectations.
- AI-builder users need a bridge artifact between prototype output and contractor/customer review.
- The first direct founder response suggests the pain is conditional: simple apps maintained by the founder alone may not need handoff until external review or maintenance appears.
- The first domain-builder response suggests the handoff packet must align with stability-first iteration, not just abstract requirements capture.
- Current market/channel scan shows an emerging service category around rescuing, auditing, hardening, and handing off AI-built apps. That may be a better evaluator segment than generic founder audiences.
- AppHandoff is a direct adjacent benchmark for a repo-connected Lovable-to-production handoff workflow. SpecRelay's near-term differentiation should remain pre-repo, no-login, and founder-filled unless high-fit reviewers ask for automation.

## Open Questions

- Do founders want a handoff packet enough to complete a 5-10 minute intake?
- Is the buyer the founder, contractor, agency, or AI-builder marketplace?
- Which output matters most: QA checklist, risk register, developer brief, or launch score?
- Does a technical reviewer who already agrees with UI/QA review loops find the manual packet concrete enough to inspect?
- Does the new stability-first pass make the packet feel closer to how hands-on builders actually improve AI-built tools?
- Would an AI-app rescue service or agency intake owner ask founders to complete a packet before scoping or quoting work?
- Is the winning buyer/user actually a rescue service or agency intake owner, not the founder?
