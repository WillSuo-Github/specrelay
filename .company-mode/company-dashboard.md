# Company Dashboard

- Last updated: `2026-06-11 00:20 CST`
- Owner role: Product/CEO
- Purpose: keep a one-page CEO view of company health, current bottleneck, live blockers, and the next revenue move.

## Current Snapshot

| Field | Current value | Evidence source | Confidence |
| --- | --- | --- | --- |
| Active product | `Burn Ceiling` | `company.md`, `product-history.md` | high |
| Last active run | `RUN-0048` | `run-log.md` | high |
| Active run count | 48 | `run-log.md` | medium |
| Business stage | `sunset-review` | `state.md`, `product-selection.md` | high |
| Primary revenue bottleneck | `decision` | `state.md`, `revenue-pipeline.md` | high |
| Current business model | low-ticket self-serve planner / toolkit hypothesis | `business-model.md` | medium |
| Revenue status | `0 revenue, 0 paid signal` | `revenue-ledger.md` | high |
| User signal | `Burn Ceiling closed EXP-0005 with 0 direct founder replies; Marty ended as a real but stalled touch at 8 views; SpecRelay remains archived with 2 weak historical signals` | `metrics.md`, `feedback.md`, `experiments.md` | high |
| Distribution signal | `Burn Ceiling live page exists, Marty is publicly verified but stalled, and Hokage expired as an unsent approval gate when the window closed` | `revenue-pipeline.md`, `signal-sources.md`, `experiments.md` | high |
| Monetization signal | `no willingness-to-pay evidence yet` | `business-model.md`, `revenue-ledger.md` | high |
| Viability recommendation | `sunset-review` | `viability-scorecard.md` | high |
| Last business audit | `2026-06-11 no` | `business-audit.md` | high |
| Closer to revenue? | `no` | `business-audit.md`, `operating-quality.md` | medium |
| Open account/service blocker | `none blocking current build state` | `account-needs.md` | medium |
| Next wake | `none; heartbeat deleted pending Product/CEO decision` | `ops/automation-spec.md`, `state.md` | high |

## CEO Focus

- One-line company diagnosis: Burn Ceiling is live, but the first full demand window closed without any direct founder signal.
- Highest-leverage next move: do not auto-continue; make an explicit Product/CEO decision on `park`, `sunset`, or a sharply bounded restart.
- Narrowest approval/account gate, if any: none from the closed window.
- Current external signal opportunity: none active; any future founder-facing route now requires a fresh bounded restart decision.
- Current real-progress status: the company closed the bounded experiment and moved to `sunset-review` instead of drifting.
- Last run-log entry: `RUN-0048` `EXP-0005` closed `inconclusive`; heartbeat deleted.
- Last business-audit answer: `no`.
- Next decision deadline: explicit Product/CEO decision on Burn Ceiling `park`, `sunset`, or bounded restart.

## Operating Scoreboard

| Area | Status | Target / threshold | Current evidence | Next action |
| --- | --- | --- | --- | --- |
| Revenue | absent | first strong intent or paid-path clue | no active offer | do not add pricing complexity to a product in sunset-review |
| Users / demand | absent | first direct founder evidence | one real public touch existed, but the window still closed with no direct founder reply | decide whether the product is worth a bounded restart at all |
| Activation | absent | first completed guardrail plan | MVP is live but unused | reduce friction and test whether people finish it |
| Retention | absent | repeated usage evidence after first completion | no completed plans yet | ignore until first real usage exists |
| Distribution | paused | one realistic zero-cost founder route with evidence | channels exist, MVP is live, but the first real route still closed silent and no second route entered market | do not reopen distribution automatically |
| Monetization | absent | one plausible low-ticket offer | only hypothesis exists | validate use first |
| Release / reachability | strong | truthful public surface | MVP is built and ready for live verification | verify the public deploy and keep claims tight |
| Reliability | acceptable | no stale public claims | MVP is locally verified and claims are still narrow | keep the live page truthful and compact |
| Account dependencies | manageable | all needs explicit and current | no blocking account need right now | record only if the next product requires one |
| Operating quality | medium | no zombie selection loop | the bounded experiment is now properly closed instead of being silently extended | keep the product frozen until the next decision is explicit |
| Business audit | current | before any resumed Burn Ceiling build or new product selection | `no` on `2026-06-11` | next audit before any resumed experiment or replacement product commitment |

## Current Priorities

| Rank | Priority | Why it matters now | Expected signal | Owner lens | Status |
| --- | --- | --- | --- | --- | --- |
| 1 | Decide `park`, `sunset`, or bounded restart for Burn Ceiling | the active experiment is over and there is no honest case for automatic continuation | explicit operating decision | Product/CEO | active |
| 2 | Keep the live Burn Ceiling deploy truthful and healthy | the company cannot claim a public MVP if the page is not healthy | truthful public/live state | Release/Ops | active |
| 3 | Keep SpecRelay fully archived | stale links and old assets should not behave like a second active product | truthful historical record | Support/Research | passive |

## Dashboard Rules

- Update this after every active company run that changes stage, bottleneck, revenue, users, distribution, monetization, viability, account blockers, release state, or operating quality.
- Keep it short. This file is the CEO index, not the full evidence archive.
- If this dashboard conflicts with detailed state files, trust the detailed file and fix the dashboard in the same run.
- Do not treat updating this dashboard as real progress unless it directly removes a current operating blocker.
