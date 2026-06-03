# Company Dashboard

- Last updated: `2026-06-03`
- Owner role: Product/CEO
- Purpose: keep a one-page CEO view of company health, current bottleneck, live blockers, and the next revenue move.

## Current Snapshot

| Field | Current value | Evidence source | Confidence |
| --- | --- | --- | --- |
| Active product | `Burn Ceiling` | `company.md`, `product-history.md` | high |
| Last active run | `RUN-0041` | `run-log.md` | high |
| Active run count | 41 | `run-log.md` | medium |
| Business stage | `pre-product` | `state.md`, `product-selection.md` | high |
| Primary revenue bottleneck | `demand` | `state.md`, `revenue-pipeline.md` | high |
| Current business model | low-ticket self-serve planner / toolkit hypothesis | `business-model.md` | medium |
| Revenue status | `0 revenue, 0 paid signal` | `revenue-ledger.md` | high |
| User signal | `Burn Ceiling has 0 direct signals yet; SpecRelay archived with 2 weak historical signals` | `metrics.md`, `feedback.md` | high |
| Distribution signal | `SpecRelay routes are archived; Burn Ceiling has accessible founder channels but no live MVP or outreach yet` | `revenue-pipeline.md`, `signal-sources.md` | medium |
| Monetization signal | `no willingness-to-pay evidence yet` | `business-model.md`, `revenue-ledger.md` | high |
| Viability recommendation | `continue` for one bounded Burn Ceiling experiment | `viability-scorecard.md` | medium |
| Last business audit | `2026-06-03 no` | `business-audit.md` | high |
| Closer to revenue? | `no` | `business-audit.md`, `operating-quality.md` | medium |
| Open account/service blocker | `none blocking current build state` | `account-needs.md` | medium |
| Next wake | `none; no automation is armed right now` | `ops/automation-spec.md`, `state.md` | high |

## CEO Focus

- One-line company diagnosis: SpecRelay is archived, and Burn Ceiling is the new active pre-product bet because current founder pain is sharper around runaway AI cost than around another launch checklist.
- Highest-leverage next move: build the first static Burn Ceiling MVP and run `EXP-0005`.
- Narrowest approval/account gate, if any: none right now
- Current external signal opportunity: ship the MVP, then use already-identified founder channels around AI cost-cap pain
- Current real-progress status: the company executed a real sunset, took the old product offline, and selected a new active product with a bounded first experiment.
- Last run-log entry: `RUN-0041` Burn Ceiling selected as the next active product.
- Last business-audit answer: `no`.
- Next decision deadline: `2026-06-10 23:59 CST` Burn Ceiling readout.

## Operating Scoreboard

| Area | Status | Target / threshold | Current evidence | Next action |
| --- | --- | --- | --- | --- |
| Revenue | absent | first strong intent or paid-path clue | no active offer | keep the first test on usage intent, not pricing complexity |
| Users / demand | weak | 5 completed plans and 2 strong intent signals | no active direct signal yet | ship MVP and ask concretely about pre-launch use |
| Activation | absent | first completed guardrail plan | MVP not shipped yet | make the planner short and concrete |
| Retention | absent | repeated usage evidence after first completion | MVP not shipped yet | ignore until first real usage exists |
| Distribution | setup pending | one realistic zero-cost founder route | channels exist but no Burn Ceiling public touch yet | stage after MVP ship |
| Monetization | absent | one plausible low-ticket offer | only hypothesis exists | validate use first |
| Release / reachability | strong | truthful public surface | archive page is healthy | maintain only |
| Reliability | acceptable | no stale public claims | old interactive product is offline | keep archive notice simple |
| Account dependencies | manageable | all needs explicit and current | no blocking account need right now | record only if the next product requires one |
| Operating quality | medium | no zombie selection loop | selection completed and active product chosen | next run must ship MVP, not more abstract selection work |
| Business audit | current | before larger build commitment or `EXP-0005` close | `no` on `2026-06-03` | next audit before Burn Ceiling expands past the bounded MVP |

## Current Priorities

| Rank | Priority | Why it matters now | Expected signal | Owner lens | Status |
| --- | --- | --- | --- | --- | --- |
| 1 | Ship Burn Ceiling MVP | no evidence can arrive before the planner exists | first completed plans and feedback | Engineering + Product/CEO | active |
| 2 | Keep SpecRelay fully archived | stale links and old assets should not behave like a live product | truthful public/offline state | Release/Ops | active |
| 3 | Treat any late SpecRelay reply as archive-only evidence | late signals can still matter historically, but they no longer keep SpecRelay active | clean historical record | Support/Research | passive |

## Dashboard Rules

- Update this after every active company run that changes stage, bottleneck, revenue, users, distribution, monetization, viability, account blockers, release state, or operating quality.
- Keep it short. This file is the CEO index, not the full evidence archive.
- If this dashboard conflicts with detailed state files, trust the detailed file and fix the dashboard in the same run.
- Do not treat updating this dashboard as real progress unless it directly removes a current operating blocker.
