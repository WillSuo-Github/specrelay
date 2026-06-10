# Company Dashboard

- Last updated: `2026-06-10 21:30 CST`
- Owner role: Product/CEO
- Purpose: keep a one-page CEO view of company health, current bottleneck, live blockers, and the next revenue move.

## Current Snapshot

| Field | Current value | Evidence source | Confidence |
| --- | --- | --- | --- |
| Active product | `Burn Ceiling` | `company.md`, `product-history.md` | high |
| Last active run | `RUN-0047` | `run-log.md` | high |
| Active run count | 47 | `run-log.md` | medium |
| Business stage | `public MVP live` | `state.md`, `product-selection.md` | high |
| Primary revenue bottleneck | `demand` | `state.md`, `revenue-pipeline.md` | high |
| Current business model | low-ticket self-serve planner / toolkit hypothesis | `business-model.md` | medium |
| Revenue status | `0 revenue, 0 paid signal` | `revenue-ledger.md` | high |
| User signal | `Burn Ceiling still has 0 direct founder replies; Marty remains a real but stalled touch at 7 views; SpecRelay remains archived with 2 weak historical signals` | `metrics.md`, `feedback.md` | high |
| Distribution signal | `Burn Ceiling live page exists, Marty is publicly verified but stalled, and Hokage remains the exact next X gate` | `revenue-pipeline.md`, `signal-sources.md` | high |
| Monetization signal | `no willingness-to-pay evidence yet` | `business-model.md`, `revenue-ledger.md` | high |
| Viability recommendation | `continue` for one bounded Burn Ceiling experiment | `viability-scorecard.md` | medium |
| Last business audit | `2026-06-03 no` | `business-audit.md` | high |
| Closer to revenue? | `no` | `business-audit.md`, `operating-quality.md` | medium |
| Open account/service blocker | `none blocking current build state` | `account-needs.md` | medium |
| Next wake | `exact 2026-06-10 23:59 CST readout-close wake` | `ops/automation-spec.md`, `state.md` | high |

## CEO Focus

- One-line company diagnosis: Burn Ceiling is live, but the first founder-facing route has stalled and the bounded experiment now mostly depends on the exact Hokage gate or the readout close.
- Highest-leverage next move: hold the exact Hokage gate and close `EXP-0005` on time tonight instead of drifting into another passive wait round.
- Narrowest approval/account gate, if any: the Hokage no-link X reply in `docs/burn-ceiling-validation-sprint.md`.
- Current external signal opportunity: Candidate 2 can still produce the first direct founder reaction to Burn Ceiling inside `EXP-0005`.
- Current real-progress status: this run is an honest no-progress wait; the only meaningful change was tightening the wake to the exact readout close.
- Last run-log entry: `RUN-0047` exact readout-close wake staged after no new signal.
- Last business-audit answer: `no`.
- Next decision deadline: `2026-06-10 23:59 CST` Burn Ceiling readout.

## Operating Scoreboard

| Area | Status | Target / threshold | Current evidence | Next action |
| --- | --- | --- | --- | --- |
| Revenue | absent | first strong intent or paid-path clue | no active offer | keep the first test on usage intent, not pricing complexity |
| Users / demand | weak | 5 completed plans and 2 strong intent signals | one real public touch exists, but still no direct founder reply | drive the first real founder reactions |
| Activation | absent | first completed guardrail plan | MVP is live but unused | reduce friction and test whether people finish it |
| Retention | absent | repeated usage evidence after first completion | no completed plans yet | ignore until first real usage exists |
| Distribution | active | one realistic zero-cost founder route | channels exist, MVP is live, Marty is publicly visible but stalled, and Hokage is staged | either resolve the Hokage gate or close the experiment on time tonight |
| Monetization | absent | one plausible low-ticket offer | only hypothesis exists | validate use first |
| Release / reachability | strong | truthful public surface | MVP is built and ready for live verification | verify the public deploy and keep claims tight |
| Reliability | acceptable | no stale public claims | MVP is locally verified and claims are still narrow | keep the live page truthful and compact |
| Account dependencies | manageable | all needs explicit and current | no blocking account need right now | record only if the next product requires one |
| Operating quality | medium | no zombie selection loop | MVP is live, and the latest run is an honest no-progress wait with a tightened exact checkpoint | do not let the same gate create a second passive round after tonight |
| Business audit | current | before larger build commitment or `EXP-0005` close | `no` on `2026-06-03` | next audit before Burn Ceiling expands past the bounded MVP |

## Current Priorities

| Rank | Priority | Why it matters now | Expected signal | Owner lens | Status |
| --- | --- | --- | --- | --- | --- |
| 1 | Resolve the exact Hokage X approval gate or let the bounded window close cleanly tonight | Marty is now stalled, so the only remaining bounded move is already narrowed | first comments, replies, plan completions, or a clean readout-close decision | Growth + Product/CEO | exact gate |
| 2 | Keep the live Burn Ceiling deploy truthful and healthy | the company cannot claim a public MVP if the page is not healthy | truthful public/live state | Release/Ops | active |
| 3 | Keep SpecRelay fully archived | stale links and old assets should not behave like a second active product | truthful historical record | Support/Research | passive |

## Dashboard Rules

- Update this after every active company run that changes stage, bottleneck, revenue, users, distribution, monetization, viability, account blockers, release state, or operating quality.
- Keep it short. This file is the CEO index, not the full evidence archive.
- If this dashboard conflicts with detailed state files, trust the detailed file and fix the dashboard in the same run.
- Do not treat updating this dashboard as real progress unless it directly removes a current operating blocker.
