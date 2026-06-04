# Company Dashboard

- Last updated: `2026-06-04`
- Owner role: Product/CEO
- Purpose: keep a one-page CEO view of company health, current bottleneck, live blockers, and the next revenue move.

## Current Snapshot

| Field | Current value | Evidence source | Confidence |
| --- | --- | --- | --- |
| Active product | `Burn Ceiling` | `company.md`, `product-history.md` | high |
| Last active run | `RUN-0042` | `run-log.md` | high |
| Active run count | 42 | `run-log.md` | medium |
| Business stage | `public MVP live` | `state.md`, `product-selection.md` | high |
| Primary revenue bottleneck | `demand` | `state.md`, `revenue-pipeline.md` | high |
| Current business model | low-ticket self-serve planner / toolkit hypothesis | `business-model.md` | medium |
| Revenue status | `0 revenue, 0 paid signal` | `revenue-ledger.md` | high |
| User signal | `Burn Ceiling has 0 direct signals yet; SpecRelay archived with 2 weak historical signals` | `metrics.md`, `feedback.md` | high |
| Distribution signal | `Burn Ceiling live page exists; founder channels are reachable, but no direct validation touch has been sent yet` | `revenue-pipeline.md`, `signal-sources.md` | medium |
| Monetization signal | `no willingness-to-pay evidence yet` | `business-model.md`, `revenue-ledger.md` | high |
| Viability recommendation | `continue` for one bounded Burn Ceiling experiment | `viability-scorecard.md` | medium |
| Last business audit | `2026-06-03 no` | `business-audit.md` | high |
| Closer to revenue? | `no` | `business-audit.md`, `operating-quality.md` | medium |
| Open account/service blocker | `none blocking current build state` | `account-needs.md` | medium |
| Next wake | `12h active heartbeat` | `ops/automation-spec.md`, `state.md` | high |

## CEO Focus

- One-line company diagnosis: Burn Ceiling is now live as a small truthful planner, but demand is still completely unproven.
- Highest-leverage next move: stage the first exact founder-facing validation route against the live MVP and run `EXP-0005`.
- Narrowest approval/account gate, if any: none right now
- Current external signal opportunity: ship the MVP, then use already-identified founder channels around AI cost-cap pain
- Current real-progress status: the company shipped the first Burn Ceiling MVP into the existing public surface.
- Last run-log entry: `RUN-0042` Burn Ceiling MVP shipped locally and prepared for live validation.
- Last business-audit answer: `no`.
- Next decision deadline: `2026-06-10 23:59 CST` Burn Ceiling readout.

## Operating Scoreboard

| Area | Status | Target / threshold | Current evidence | Next action |
| --- | --- | --- | --- | --- |
| Revenue | absent | first strong intent or paid-path clue | no active offer | keep the first test on usage intent, not pricing complexity |
| Users / demand | weak | 5 completed plans and 2 strong intent signals | no active direct signal yet | drive the first real founder reactions |
| Activation | absent | first completed guardrail plan | MVP is live but unused | reduce friction and test whether people finish it |
| Retention | absent | repeated usage evidence after first completion | no completed plans yet | ignore until first real usage exists |
| Distribution | setup pending | one realistic zero-cost founder route | channels exist and the MVP is live | stop at the exact first public-action gate |
| Monetization | absent | one plausible low-ticket offer | only hypothesis exists | validate use first |
| Release / reachability | strong | truthful public surface | MVP is built and ready for live verification | verify the public deploy and keep claims tight |
| Reliability | acceptable | no stale public claims | MVP is locally verified and claims are still narrow | keep the live page truthful and compact |
| Account dependencies | manageable | all needs explicit and current | no blocking account need right now | record only if the next product requires one |
| Operating quality | medium | no zombie selection loop | MVP shipped; next run must create external signal | avoid drifting back into internal-only work |
| Business audit | current | before larger build commitment or `EXP-0005` close | `no` on `2026-06-03` | next audit before Burn Ceiling expands past the bounded MVP |

## Current Priorities

| Rank | Priority | Why it matters now | Expected signal | Owner lens | Status |
| --- | --- | --- | --- | --- | --- |
| 1 | Stage first founder validation route | no demand signal exists until real founders see the planner | first comments, replies, or plan completions | Growth + Product/CEO | active |
| 2 | Verify live Burn Ceiling deploy | the company cannot claim a public MVP if the page is not healthy | truthful public/live state | Release/Ops | active |
| 3 | Keep SpecRelay fully archived | stale links and old assets should not behave like a second active product | truthful historical record | Support/Research | passive |

## Dashboard Rules

- Update this after every active company run that changes stage, bottleneck, revenue, users, distribution, monetization, viability, account blockers, release state, or operating quality.
- Keep it short. This file is the CEO index, not the full evidence archive.
- If this dashboard conflicts with detailed state files, trust the detailed file and fix the dashboard in the same run.
- Do not treat updating this dashboard as real progress unless it directly removes a current operating blocker.
