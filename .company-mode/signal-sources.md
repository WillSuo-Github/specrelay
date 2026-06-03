# Signal Sources

- Last updated: `2026-06-03`
- Owner role: Product/CEO + Support/Research + Engineering
- Purpose: let the company choose the right evidence sources for this product instead of assuming every company reads the same data.

## Current Signal Strategy

- Primary business question: which next candidate deserves to become the active product?
- Current bottleneck: `decision`
- Primary readout source: fresh market research, current accessible channels, and candidate scoring from the next product-selection sprint
- Secondary readout source: archived SpecRelay lessons and any genuinely late SpecRelay reply
- Evidence quality: archived for SpecRelay, not active for the next product yet
- Missing source or integration: no new product-specific analytics or live channel evidence exists because no next product has been selected
- Next readout: scored candidate shortlist plus one selected next product

## Source Selection Rules

- Choose sources from the current product, platform, stage, and bottleneck.
- If the product is on the App Store, App Store Connect, public App Store pages, app reviews, TestFlight, Xcode Organizer, crash logs, and purchase/subscription reports are natural first sources.
- If behavior, activation, retention, cohorts, or feature usage matter and no sufficient source exists, the company may decide to add Firebase or another analytics service, then record the service/account/integration need in `account-needs.md` and the implementation work in `roadmap.md` or `experiments.md`.
- If the product is a GitHub Pages web surface, GitHub Pages deployment status, browser verification, public page indexing, simple analytics, and inbound links may be natural sources.
- If acquisition is the bottleneck, channel analytics, post/reply visibility, referral evidence, public pain signals, search results, and competitor surfaces may be stronger than app telemetry.
- Do not fabricate readouts. If a source is unavailable, record the gap, choose the best fallback, and decide whether the gap blocks the current decision.

## Candidate Sources

| Source | Best for | Account / access needed | Evidence quality | Status | Next action |
| --- | --- | --- | --- | --- | --- |
| Archived GitHub feedback issue #1 | historical evaluator comments | GitHub repo access or public issue page | medium | live but silent | keep as archive only |
| Archived outreach replies | late counter-evidence on SpecRelay | Mail UI inbox access | medium/high if replies arrive | archived | log only if something materially changes history |
| GitHub Pages live URL | public archive-surface health | public URL | high | healthy | verify after deploy-touching runs |
| Competitor/community research | next-product candidate discovery | public web access | medium | available | use in the next selection sprint |
| Logged-in X / HN / Chrome surfaces | next-product channel fit checks | existing sessions | medium | available | use only after a next candidate exists |

## Readout Log

| Date | Business question | Source used | Result | Confidence | State files updated | Next readout |
| --- | --- | --- | --- | --- | --- | --- |
| `2026-05-04` | do simple founder-maintained apps need a packet? | X reply from `@FSfakiotakis` | weak negative / segmentation signal | medium | `feedback.md`, `experiments.md`, `state.md` | test cases where another reviewer or contractor is involved |
| `2026-05-05` | should the packet lead with specification or stability? | X reply from `@jessecolesmith` | weak positive for stability-first workflow | medium | `feedback.md`, app output, `release.md` | test whether the updated packet fits handoff behavior |
| `2026-05-11` to `2026-05-18` | would contractor/agency evaluators use the packet before scoping? | Afterbuild email attempt, Bytewise email, AppStuck contact form, AC Tech Labs contact form | Afterbuild failed delivery; the current delivered batch is Bytewise/AppStuck/AC Tech Labs; no verified reply yet | medium for batch state, low for demand | `feedback.md`, `experiments.md`, `state.md` | read reply quality or apply checkpoint logic |
| `2026-05-15` | is there any new repo-backed external signal before migration closeout? | GitHub issue + workflow status + live URL | no new repo-backed demand signal; release surface still healthy | high for release, low for demand | `release.md`, `business-audit.md`, `company-dashboard.md` | wait for direct replies or checkpoint |
| `2026-05-16` | if the current wedge fails, is the founder-side fallback precise enough to activate immediately? | repo-backed strategy review + founder-side runbook prep | yes for internal readiness; still no external validation yet | medium for readiness, low for demand | `state.md`, `revenue-pipeline.md` | wait for replies or checkpoint |
| `2026-05-17` | if the current wedge fails, does the founder-side pivot already have concrete public targets instead of only abstract positioning? | repo-backed checks + current public community research | yes for target readiness; still no founder-side validation yet | medium for readiness, low for demand | `state.md`, `revenue-pipeline.md`, `market-map.md` | wait for replies or checkpoint |
| `2026-05-17` | is direct-email reply monitoring actually reliable on this machine? | Mail AppleScript attempt + `~/Library/Mail` access check | no for automation surfaces; AppleScript readout did not yield deterministic results and filesystem access to `~/Library/Mail` was denied by macOS permissions | high for the automation gap | `account-needs.md`, `state.md`, `company-dashboard.md` | try Mail UI readout before escalating |
| `2026-05-18` | can direct-email reply state still be recovered without system-permission changes? | Mail UI search/readout through Computer Use | yes; Afterbuild failure thread was visible, and Bytewise/AppStuck had no inbox matches | high | `feedback.md`, `account-needs.md`, `state.md`, `revenue-pipeline.md` | keep using Mail UI readout during the current evidence window |
| `2026-05-18` | did any new contractor/agency reply arrive after the AC Tech Labs submission? | GitHub issue check + workflow status + live URL + AppleScript inbox count for Bytewise | no repo-backed external signal; latest deploy succeeded; Bytewise inbox count remained `0`; no new verified AppStuck or AC Tech Labs reply was added | medium | `feedback.md`, `state.md`, `run-log.md` | keep the 24-hour wait until reply or checkpoint |
| `2026-05-19` | did any contractor/agency reply arrive after the first AC replacement wait cycle? | GitHub issue check + workflow status + live URL + AppleScript inbox counts for Bytewise/AppStuck/AC Tech Labs | no; latest deploy succeeded; all three counts returned `0`; no new verified reply was added | medium | `feedback.md`, `state.md`, `run-log.md` | keep the 24-hour wait until reply or checkpoint |
| `2026-05-19` | is the AppleScript inbox-count path stable enough to reuse for the full live batch? | GitHub issue check + workflow status + live URL + second AppleScript count cycle for Bytewise/AppStuck/AC Tech Labs | yes for the current wait state; the same count path returned `0` across all three live touches again | medium/high | `feedback.md`, `state.md`, `run-log.md` | reuse this path during the remaining evidence window unless it regresses |
| `2026-05-20` | is the current three-touch batch still silent, and is the Mail automation path still stable enough for checkpoint monitoring? | GitHub issue check + workflow status + live URL + AppleScript inbox count for Bytewise plus AppleScript timeout attempts for AppStuck/AC Tech Labs | no new repo-backed external signal; latest deploy succeeded; Bytewise stayed `0`; AppStuck and AC Tech Labs timed out in AppleScript, so the current Mail automation is only partial again | medium | `feedback.md`, `state.md`, `run-log.md`, `viability-scorecard.md`, `business-audit.md` | keep the 24-hour wait to checkpoint and use Mail UI fallback if a reply check becomes urgent |
| `2026-05-21` | did any new pre-checkpoint external signal appear before the hard decision wake? | GitHub issue check + workflow status + live URL + AppleScript inbox count for Bytewise | no new repo-backed external signal; latest deploy succeeded; Bytewise stayed `0`; AppStuck and AC Tech Labs remain only partially monitorable from automation in this run | medium | `feedback.md`, `state.md`, `run-log.md`, `business-audit.md`, `ops/automation-spec.md` | wake again at the exact hard checkpoint and apply the continue/pivot rule there |
| `2026-05-22` | did the contractor/agency wedge validate by the hard checkpoint? | GitHub issue check + workflow status + live URL + Bytewise inbox count + prior checkpoint monitoring history | no; no verified contractor/agency reply landed by the checkpoint, so the wedge closed `inconclusive` and the founder-side stability brief became the active next experiment | medium | `feedback.md`, `state.md`, `run-log.md`, `experiments.md`, `viability-scorecard.md`, `business-audit.md` | stop at the founder-side approval gate or read any late contractor reply as extra evidence only |
| `2026-05-22` | did the first approved founder-side community reply actually enter market? | logged-in Reddit thread check + profile comments-page check after the final `Comment` click | no public verification; the reply text did not appear on the target thread or on `u/Fit_Hamster_4754/comments/`, so no founder-side touch can be claimed yet | medium | `feedback.md`, `state.md`, `run-log.md`, `experiments.md`, `revenue-pipeline.md`, `ops/automation-spec.md` | stop at the second founder-side approval gate instead of retrying the first route blindly |
| `2026-05-23` | did the second approved founder-side community reply actually enter market? | logged-in Reddit thread check + visible composer-button submission attempt + profile comments-page check | no public verification; the reply text did not appear on the target thread or on `u/Fit_Hamster_4754/comments/`, and the visible `Comment` control only became disabled without producing a public comment | medium | `feedback.md`, `state.md`, `run-log.md`, `experiments.md`, `revenue-pipeline.md`, `ops/automation-spec.md` | stop at the third founder-side approval gate instead of retrying the second route blindly |
| `2026-05-23` | is Reddit still a valid founder-side execution surface after the remaining safe routes are attempted? | logged-in Reddit thread checks + profile comments-page checks across r/lovable and the second r/SaaS route | no; the remaining safe Reddit founder-side public pool also failed to produce a publicly visible reply, so Reddit is now an execution blocker for this pivot instead of the active route | medium/high | `feedback.md`, `state.md`, `run-log.md`, `experiments.md`, `revenue-pipeline.md`, `role-access-matrix.md`, `ops/automation-spec.md` | move the next route to X or another logged-in non-Reddit channel |
| `2026-05-23` | did the first non-Reddit founder-side replacement route actually enter market? | logged-in X send confirmation + `with_replies` verification + direct public status URL check | yes; the Jesse founder-side no-link reply is publicly visible at `https://x.com/thefuckkingguy/status/2058104945103212971` | high for send verification | `feedback.md`, `state.md`, `run-log.md`, `experiments.md`, `revenue-pipeline.md`, `company-dashboard.md`, `ops/automation-spec.md` | wait for founder response before creating another live route |
| `2026-05-24` | did the first live Jesse founder-side X route produce any new response after the first wait cycle? | direct X status URL + `with_replies` + GitHub issue check + live URL check + attempted Mail AppleScript late-reply sweep | no new founder response yet; GitHub remained silent; the live URL stayed healthy; late contractor/agency monitoring remained partial because Mail AppleScript access was denied in this run | medium | `feedback.md`, `state.md`, `run-log.md`, `viability-scorecard.md`, `company-dashboard.md` | keep the outside wait honest and do not open a second founder-side route yet |
| `2026-05-25` | is the first Jesse founder-side X route still an active waiting surface, or has it clearly stalled? | direct X status URL + `with_replies` + GitHub issue check + live URL check | stalled; the founder-side post remained public but still had no founder reply and still only `2` visible views after roughly 32 hours, while GitHub stayed silent | medium/high | `feedback.md`, `state.md`, `run-log.md`, `revenue-pipeline.md`, `company-dashboard.md`, `ops/automation-spec.md` | treat Jesse as stalled and move the company to one exact approval-gated next X candidate |
| `2026-05-29` | did any new founder-side or late contractor signal appear before the due business audit and tonight's founder-side readout close? | GitHub issue check + live URL check + public Jesse/with_replies checks + James Hsi target reachability check | no; GitHub remained silent, the live URL stayed healthy, Jesse remained stalled, and James Hsi is still only a staged target rather than a live touch | medium/high | `business-audit.md`, `state.md`, `run-log.md`, `company-dashboard.md`, `ops/automation-spec.md` | keep the exact James Hsi gate alive only until `2026-05-29 23:59 CST`, then run the founder-side readout close / sunset decision |
| `2026-05-30` | did the founder-side evidence window close with any validating reply or second live route? | GitHub issue check + live URL check + public Jesse/with_replies checks + James Hsi target reachability check | no; the window closed with 0 founder replies, 0 strong intent, one stalled Jesse route, and one unsent James Hsi gate | high for the window close, medium for the strategy implication | `experiments.md`, `viability-scorecard.md`, `state.md`, `run-log.md`, `company-dashboard.md`, `revenue-pipeline.md`, `ops/automation-spec.md` | enter `sunset-review` and stop further autonomous waiting |

## Integration Requests

When the best source requires a website, service, account, SDK, login, API key, privacy answer, or user-created project, add the request to `account-needs.md` with:

- service name and URL
- why this source is needed now
- exact user action
- whether payment, credentials, or privacy changes are involved
- fallback source
- company action to resume afterward
