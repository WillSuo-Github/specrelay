# Experiments

## Active

| Date | Hypothesis | Change | Metric | Result | Next step |
| --- | --- | --- | --- | --- | --- |
| 2026-05-01 | Founders need a structured packet before contractor handoff or launch QA | Ship a zero-login web tool that generates a readiness score, risk register, QA checklist, stability-first pass, and engineering brief | Completed handoff packets and qualitative reviews | Live MVP plus owned GitHub release and feedback issue are public; two useful X responses are logged; three contractor/agency touches are now in market through Afterbuild, Bytewise, and AppStuck; no completed packet review or strong intent yet | Wait for Afterbuild, Bytewise, or AppStuck to reply; if all three stay silent or come back negative and fresh approval is granted, move to the staged AC Tech Labs route in `docs/ac-tech-labs-runbook.md` |

## Candidate Growth Actions

| Channel | Candidate action | Gate |
| --- | --- | --- |
| Direct founder/contractor/agency outreach | Send 10 targeted evaluator messages using the staged drafts | Requires a real LinkedIn/X/email/intro path and final message verification |
| Stability-first evaluator outreach | Use `docs/stability-first-evaluator-pack.md` and `docs/stability-first-target-discovery.md` to screen contractors, agencies, hands-on domain builders, and technical reviewers | Non-public assets are ready; any public post, reply, DM, or direct outreach remains action-time gated |
| Contractor/agency validation sprint | Send exactly one staged message first, preferably Afterbuild Labs, then read whether the reply mentions intake/scoping/audit friction | Staged in `docs/contractor-agency-validation-sprint.md`; direct outreach remains action-time gated |
| Afterbuild send runbook | Reduce the live decision to one exact route + composer check instead of a broad outreach choice | Staged in `docs/afterbuild-send-runbook.md`; direct outreach remains action-time gated |
| Bytewise fallback runbook | Reduce the second contractor/agency touch to one exact route with a clean, honest validation ask | Completed: the exact email route and message were documented in `docs/bytewise-fallback-runbook.md`, then the outreach was sent during the later direct-action run |
| AC Tech Labs runbook | Reduce the third contractor/agency candidate to one exact public route while preserving truthful validation framing | Staged in `docs/ac-tech-labs-runbook.md`; direct outreach remains action-time gated |
| AppStuck runbook | Promote the next candidate to a cleaner async route when the AC Tech Labs fit-call form would distort the experiment | Completed: `docs/appstuck-runbook.md` narrowed the route and the public AppStuck contact form was submitted during the later direct-action run |
| Hacker News Show HN | Post the prepared Show HN if a suitable account exists | Attempted after approval; blocked by HN `fnop=toonew`; retry only with older/trusted account |
| X targeted replies/DMs | Monitor active replies and prepare follow-ups only for engaged targets | Jesse stability-first URL follow-up sent after user confirmation; further public touches require fresh action-time confirmation |
| Indie Hackers / LinkedIn | Post a visual-first build-in-public note with the generated SpecRelay asset and a concrete ask for AI-builder founders | Public post is action-time gated; draft staged in `docs/growth-sprint.md`; account required |
| Product Hunt | Prepare launch draft, thumbnail, gallery images, and maker first comment | Launch later after early reviewers/assets; personal Product Hunt account required |
| Reddit r/nocode, r/SaaS, or adjacent community | Reply with a useful handoff checklist and only link if channel rules allow | Rule and composer verification required before posting; draft staged in `docs/growth-sprint.md` |
| GitHub owned channel | Release note plus public feedback issue for reviewers | Completed: release `v0.1.0` and issue #1 are public |

## Rule Check Notes

- 2026-05-01: Initial channel/rule check added to `docs/growth-sprint.md`.
- 2026-05-03: Channel exploration added to `docs/channel-exploration.md`; current best sequence is direct outreach, Hacker News Show HN, Indie Hackers/LinkedIn/X, Product Hunt later, Reddit carefully.
- 2026-05-03: HN composer staged with a URL-only Show HN submission; after approval, HN rejected it with `fnop=toonew`, so no public post was created.
- 2026-05-03: X target discovery added in `docs/x-target-discovery.md`; first wave should use specific replies before URL-heavy DMs.
- 2026-05-03: After user confirmation, six first-wave X public replies were verified in composer and sent without links; no immediate response observed.
- 2026-05-04: `@FSfakiotakis` replied that his simple Lovable B2B app is founder-maintained and not handed off; he offered free access to inspect the app. This is useful segmentation feedback but not a strong intent signal.
- 2026-05-04: User confirmed the first `@FSfakiotakis` follow-up, but X rejected it as 24 characters over the limit; no public follow-up was sent.
- 2026-05-04: User confirmed the shortened `@FSfakiotakis` follow-up; composer showed 17 characters remaining and the public no-link reply was sent.
- 2026-05-04: User confirmed the next public outreach action; no new GitHub issue comments or X mentions were present, so Growth sent one URL follow-up to engaged reviewer `@LechMazur` and two no-link second-wave replies to `@jessecolesmith` and `@HitenDharpure`.
- 2026-05-05: `@jessecolesmith` replied that he starts by playing with the app, promotes improvements from observed issues, and always starts with stability/basic features. Frank also liked the no-link follow-up. Product added a stability-first pass to the generated packet and staged a Jesse follow-up, but did not send it.
- 2026-05-06: No new GitHub issue comments or useful X responses. Prepared `docs/stability-first-evaluator-pack.md` as a non-public growth/research asset for the next approved outreach path.
- 2026-05-06: User confirmed the staged Jesse follow-up; X composer target/content was verified and the stability-first URL reply was sent.
- 2026-05-06: Follow-up heartbeat found no new GitHub issue comments or useful X response after the Jesse URL follow-up. Prepared `docs/stability-first-target-discovery.md` from AI-app rescue agencies, handoff/rescue services, and relevant Reddit discussion surfaces; no public action was taken.
- 2026-05-07: Follow-up heartbeat found no new GitHub issue comments or useful X response after the Jesse URL follow-up. Added `docs/contractor-agency-validation-sprint.md` with staged Afterbuild Labs, Bytewise, and AC Tech Labs messages. AppHandoff was logged as an adjacent SaaS benchmark for repo-connected handoff automation; no public/direct action was taken.
- 2026-05-11: Follow-up heartbeat found no GitHub issue comments, live URL remained healthy, and X notifications still showed no useful new response after the Jesse URL follow-up. Added `docs/afterbuild-send-runbook.md` to narrow the next approval gate to one exact email route and composer checklist; no public/direct action was taken.
- 2026-05-11: User confirmed the direct outreach action and requested the system route. The staged Afterbuild Labs email was verified in Apple Mail and sent to `hello@afterbuildlabs.com`; the message then appeared in `All Sent`. No reply yet.
- 2026-05-12: Follow-up heartbeat found no GitHub issue comments, no inbound Afterbuild reply in Apple Mail, live URL remained healthy, and X notifications still showed no useful new response after the Jesse URL follow-up. Added `docs/bytewise-fallback-runbook.md` to narrow the fallback path to one exact Bytewise email route after the 72-hour wait window; no public/direct action was taken.
- 2026-05-12: User later approved the Bytewise outreach directly; the email had already been sent during the interrupted send flow, so no duplicate send was made. Future company outreach emails should use `ws.software@outlook.com` unless explicitly overridden.
- 2026-05-13: Follow-up heartbeat found no GitHub issue comments, no useful new X response after the Jesse URL follow-up, and no new contractor/agency reply observed before staging the next asset. Added `docs/ac-tech-labs-runbook.md` to narrow the third candidate to one exact public fit-call form route with a truthful field strategy; no public/direct action was taken.
- 2026-05-13: Later follow-up heartbeat re-checked GitHub, Mail inbox counts, and X notifications; still no new useful external feedback. Added `docs/appstuck-runbook.md` and promoted AppStuck above AC Tech Labs because it offers a public email route and a less distortive free-assessment contact form. No public/direct action was taken.
- 2026-05-14: User confirmed moving again instead of accepting another maintenance-only round. System Mail did not yield a verifiable sent item from `ws.software@outlook.com`, so the AppStuck outreach was executed through the public free-assessment contact form and verified by the thank-you redirect. The next staged contractor/agency candidate is now AC Tech Labs if the first three touches fail.
- Current safest next public action after deployment: wait for Afterbuild, Bytewise, Jesse, or another active target to respond. Do not send additional URLs, DMs, or new direct outreach without fresh approval.
- Reddit remains reply-first and no-link by default unless the live rules and thread context explicitly allow a URL.
