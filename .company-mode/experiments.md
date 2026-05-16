# Experiments

- Last updated: `2026-05-16`
- Owner role: Product/CEO + relevant execution role
- Purpose: track bounded evidence windows that can change product, growth, monetization, viability, and business-audit decisions.

## Current Experiment State

- Active experiment: `EXP-0003 contractor/agency wedge validation`
- Bottleneck tested: `distribution`
- Evidence window: `2026-05-01` to `2026-05-21 23:59 CST`
- Readout due: `2026-05-21 23:59 CST`
- Current decision pressure: continue the contractor/agency wedge, pivot to the founder-side stability brief, or enter `sunset-review`
- Last completed experiment result: `EXP-0002` produced weak-but-useful stability-first language and justified continuing with a sharper evaluator segment
- Weak/negative completed experiments since last viability review: 0

## Experiment Rules

- Every active experiment must name a bottleneck, target segment, success metric, readout date, and decision rule before execution starts.
- Do not keep running experiments with no readout date.
- If the readout date passes without enough evidence, mark the experiment `inconclusive` and decide whether the next move is a better readout, strategy reset, or viability review.
- If an experiment is weak or negative, update `viability-scorecard.md` when the result affects continuation risk.
- If an experiment changes distribution, monetization, revenue, activation, retention, or account needs, mirror the result into the relevant state files.

## Open Experiments

| ID | Status | Bottleneck | Hypothesis | Target segment | Change / action | Success metric | Baseline | Target / threshold | Evidence source | Start date | Readout due | Authority gate | Owner lens |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `EXP-0003` | active | distribution | a founder-filled stability-first packet may save intake/scoping time for contractor/agency evaluators before repo access | contractor / agency intake owner / rescue-service reviewer | live product + Afterbuild email + Bytewise email + AppStuck contact form | at least one reply that says the packet would reduce back-and-forth, save scoping time, or is missing one specific section | 0 strong intent signals; no completed packet reviews | 1 weak-positive-or-stronger evaluator reply by `2026-05-21 23:59 CST`; strong threshold is clear workflow value | direct replies, GitHub issue, X feedback | `2026-05-01` | `2026-05-21 23:59 CST` | further outreach remains action-time gated | Product/CEO + Growth |
| `EXP-0004` | staged | decision | if the contractor/agency wedge weakens, a founder-side stability brief may be a more realistic adjacent product shape | founder/operator preparing to launch or hand off an AI-built app | `docs/founder-stability-brief-pivot.md` + `docs/founder-stability-brief-runbook.md` | at least one founder says the smaller brief is realistic and useful before outside help | not active yet | activate only if `EXP-0003` resolves weak/negative | founder replies and future validation | `2026-05-15` | activation only after `EXP-0003` readout | future public/direct action would be gated | Product/CEO |

## Readout Log

| Date | Experiment ID | Result | Evidence observed | Confidence | Decision | State files updated | Next step |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `2026-05-03` | `EXP-0001` | `inconclusive` | HN Show HN attempt failed with `fnop=toonew`; it tested account trust, not product demand | high for channel block | stop the HN route for now | `experiments.md`, `release.md`, `feedback.md` | move to direct targeted outreach |
| `2026-05-05` | `EXP-0002` | `continue` | Frank gave a weak negative segmentation signal; Jesse gave a weak positive stability-first workflow signal | medium | narrow the product and outreach toward stability-first evaluator use | `feedback.md`, `release.md`, app output, `state.md` | run contractor/agency wedge with sharper framing |

## Active

| Date | Hypothesis | Change | Metric | Result | Next step |
| --- | --- | --- | --- | --- | --- |
| 2026-05-01 | Founders need a structured packet before contractor handoff or launch QA | Ship a zero-login web tool that generates a readiness score, risk register, QA checklist, stability-first pass, and engineering brief | Completed handoff packets and qualitative reviews | Live MVP plus owned GitHub release and feedback issue are public; two useful X responses are logged; three contractor/agency touches are now in market through Afterbuild, Bytewise, and AppStuck; no completed packet review or strong intent yet | Wait for Afterbuild, Bytewise, or AppStuck to reply; then apply `docs/post-three-touch-decision-tree.md` at the hard checkpoint on `2026-05-21 23:59 CST`. If the wedge degrades, switch to `docs/founder-stability-brief-pivot.md` instead of extending contractor/agency outreach by default |

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
- 2026-05-14: Later heartbeat found no new external signal. Added `docs/post-three-touch-decision-tree.md` so the company now has an explicit hard checkpoint and pivot/continue logic for the current three-touch contractor/agency batch instead of deciding ad hoc later.
- 2026-05-15: Repo-backed checks still showed no new signal: GitHub issue #1 has no comments, the latest deploy succeeded, and the live URL returned HTTP 200. Prepared `docs/founder-stability-brief-pivot.md` so the company has a concrete founder-side adjacent experiment ready if the contractor/agency wedge weakens at the `2026-05-21 23:59 CST` checkpoint.
- 2026-05-16: Repo-backed checks still showed no new signal: GitHub issue #1 has no comments, the latest deploy succeeded, and the live URL returned HTTP 200. Prepared `docs/founder-stability-brief-runbook.md` so the founder-side fallback now has exact validation asks and a narrow future approval gate instead of only a positioning memo.
- Current safest next public action after deployment: wait for Afterbuild, Bytewise, Jesse, or another active target to respond. Do not send additional URLs, DMs, or new direct outreach without fresh approval.
- Reddit remains reply-first and no-link by default unless the live rules and thread context explicitly allow a URL.
