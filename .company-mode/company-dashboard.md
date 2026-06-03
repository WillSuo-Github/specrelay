# Company Dashboard

- Last updated: `2026-06-03`
- Owner role: Product/CEO
- Purpose: keep a one-page CEO view of company health, current bottleneck, live blockers, and the next revenue move.

## Current Snapshot

| Field | Current value | Evidence source | Confidence |
| --- | --- | --- | --- |
| Active product | `none selected` | `company.md`, `product-history.md` | high |
| Last active run | `RUN-0040` | `run-log.md` | high |
| Active run count | 40 | `run-log.md` | medium |
| Business stage | `pre-product` with selection active | `state.md`, `product-selection.md` | high |
| Primary revenue bottleneck | `decision` | `state.md`, `product-selection.md` | high |
| Current business model | none active; previous SpecRelay model retired | `business-model.md` | high |
| Revenue status | `0 revenue, 0 paid signal` | `revenue-ledger.md` | high |
| User signal | `SpecRelay ended with 2 weak qualitative signals; no active product has new user signal yet` | `metrics.md`, `feedback.md` | high |
| Distribution signal | `SpecRelay routes are archived; no active distribution wedge exists until the next product is selected` | `revenue-pipeline.md`, `signal-sources.md` | high |
| Monetization signal | `none active` | `business-model.md`, `revenue-ledger.md` | high |
| Viability recommendation | `sunset` for SpecRelay | `viability-scorecard.md` | high |
| Last business audit | `2026-06-03 no` | `business-audit.md` | high |
| Closer to revenue? | `no` | `business-audit.md`, `operating-quality.md` | medium |
| Open account/service blocker | `none blocking current wait state` | `account-needs.md` | medium |
| Next wake | `none; no automation is armed while the company is between products` | `ops/automation-spec.md`, `state.md` | high |

## CEO Focus

- One-line company diagnosis: SpecRelay is finished and offline; the company now needs a better next product, not more maintenance on the old one.
- Highest-leverage next move: shortlist and score fresh candidates, then choose one next active product with a bounded first experiment.
- Narrowest approval/account gate, if any: none right now
- Current external signal opportunity: only genuinely late SpecRelay replies that materially change the archived evidence
- Current real-progress status: the company executed a real sunset, took the old product offline, and cleared the active-product slot
- Last run-log entry: `RUN-0040` sunset executed; archive page deployed; selection restarted.
- Last business-audit answer: `no`.
- Next decision deadline: next active Product/CEO selection run.

## Operating Scoreboard

| Area | Status | Target / threshold | Current evidence | Next action |
| --- | --- | --- | --- | --- |
| Revenue | absent | select a next product with a plausible paid path | no active offer | choose a candidate with clearer willingness-to-pay potential |
| Users / demand | absent | choose a next product with faster evidence | no active product | selection must privilege evidence speed |
| Activation | absent | define first meaningful user outcome for the next product | no active product | do not build before that outcome is explicit |
| Retention | absent | repeated usage evidence on the next product | no active product | ignore until a new product exists |
| Distribution | reset | one realistic zero-cost channel for the next product | old SpecRelay channels are archived | choose the next product partly on channel fit |
| Monetization | absent | one plausible monetization path on the next product | none active | require it during selection |
| Release / reachability | strong | truthful public surface | archive page is healthy | maintain only |
| Reliability | acceptable | no stale public claims | old interactive product is offline | keep archive notice simple |
| Account dependencies | manageable | all needs explicit and current | no blocking account need right now | record only if the next product requires one |
| Operating quality | medium | no zombie selection loop | sunset was executed instead of extended | next run must produce candidate scoring, not open-ended ideation |
| Business audit | current | before next active product starts | `no` on `2026-06-03` | next audit before committing to a new active product |

## Current Priorities

| Rank | Priority | Why it matters now | Expected signal | Owner lens | Status |
| --- | --- | --- | --- | --- | --- |
| 1 | Run a fresh candidate shortlist and score it | the company has no active product now | one chosen next product with a bounded first experiment | Product/CEO + Support/Research | active |
| 2 | Keep SpecRelay fully archived | stale links and old assets should not behave like a live product | truthful public/offline state | Release/Ops | active |
| 3 | Treat any late SpecRelay reply as archive-only evidence | late signals can still matter historically, but they no longer keep SpecRelay active | clean historical record | Support/Research | passive |

## Dashboard Rules

- Update this after every active company run that changes stage, bottleneck, revenue, users, distribution, monetization, viability, account blockers, release state, or operating quality.
- Keep it short. This file is the CEO index, not the full evidence archive.
- If this dashboard conflicts with detailed state files, trust the detailed file and fix the dashboard in the same run.
- Do not treat updating this dashboard as real progress unless it directly removes a current operating blocker.
