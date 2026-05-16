# Signal Sources

- Last updated: `2026-05-15`
- Owner role: Product/CEO + Support/Research + Engineering
- Purpose: let the company choose the right evidence sources for this product instead of assuming every company reads the same data.

## Current Signal Strategy

- Primary business question: will a founder, contractor, or agency actually use a manual stability-first handoff artifact before launch, scoping, or outside help?
- Current bottleneck: `distribution`
- Primary readout source: direct evaluator replies from Afterbuild, Bytewise, AppStuck, and active X targets
- Secondary readout source: GitHub feedback issue, live-site health, and exported packet quality
- Evidence quality: weak but real
- Missing source or integration: no product analytics, no reliable automated inbox/X readout surface, and no completed packet review
- Next readout: current three-touch contractor/agency batch checkpoint on `2026-05-21 23:59 CST`

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
| GitHub feedback issue #1 | evaluator comments and longer-form critique | GitHub repo access or public issue page | medium | live but silent | keep as passive review surface |
| Direct outreach replies (Afterbuild / Bytewise) | contractor/agency workflow fit | email inbox access | high if replies arrive | live batch in market | read replies before `2026-05-21 23:59 CST` |
| AppStuck contact route | contractor/agency workflow fit | public contact path; inbox follow-up access | medium/high if reply arrives | live batch in market | read reply before checkpoint |
| X replies and notifications | founder / builder language and segmentation | logged-in X session | medium | weak but useful | watch for direct critique or intent signal |
| GitHub Pages live URL | release reachability and public artifact health | public URL | medium | healthy | keep verifying on deploy-touching runs |
| Manual exported packet QA | output quality and product reliability | local browser QA | medium | already used | only revisit if product output changes |
| Product analytics | visitor, start, copy/download behavior | analytics service + privacy decision | currently unavailable | gap | request only if the current wedge survives |
| Competitor/community research | pain language, adjacent channels, positioning | public web access | medium | available | use only when the next move needs fresh target sourcing |

## Readout Log

| Date | Business question | Source used | Result | Confidence | State files updated | Next readout |
| --- | --- | --- | --- | --- | --- | --- |
| `2026-05-04` | do simple founder-maintained apps need a packet? | X reply from `@FSfakiotakis` | weak negative / segmentation signal | medium | `feedback.md`, `experiments.md`, `state.md` | test cases where another reviewer or contractor is involved |
| `2026-05-05` | should the packet lead with specification or stability? | X reply from `@jessecolesmith` | weak positive for stability-first workflow | medium | `feedback.md`, app output, `release.md` | test whether the updated packet fits handoff behavior |
| `2026-05-11` to `2026-05-14` | would contractor/agency evaluators use the packet before scoping? | Afterbuild email, Bytewise email, AppStuck contact form | batch is live; no verified reply yet | low | `feedback.md`, `experiments.md`, `state.md` | read reply quality or apply checkpoint logic |
| `2026-05-15` | is there any new repo-backed external signal before migration closeout? | GitHub issue + workflow status + live URL | no new repo-backed demand signal; release surface still healthy | high for release, low for demand | `release.md`, `business-audit.md`, `company-dashboard.md` | wait for direct replies or checkpoint |
| `2026-05-16` | if the current wedge fails, is the founder-side fallback precise enough to activate immediately? | repo-backed strategy review + founder-side runbook prep | yes for internal readiness; still no external validation yet | medium for readiness, low for demand | `state.md`, `revenue-pipeline.md` | wait for replies or checkpoint |

## Integration Requests

When the best source requires a website, service, account, SDK, login, API key, privacy answer, or user-created project, add the request to `account-needs.md` with:

- service name and URL
- why this source is needed now
- exact user action
- whether payment, credentials, or privacy changes are involved
- fallback source
- company action to resume afterward
