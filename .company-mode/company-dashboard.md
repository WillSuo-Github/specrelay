# Company Dashboard

- Last updated: `2026-05-30`
- Owner role: Product/CEO
- Purpose: keep a one-page CEO view of company health, current bottleneck, live blockers, and the next revenue move.

## Current Snapshot

| Field | Current value | Evidence source | Confidence |
| --- | --- | --- | --- |
| Active product | `SpecRelay` | `company.md`, `product-history.md` | high |
| Last active run | `RUN-0039` | `run-log.md` | high |
| Active run count | 39 | `run-log.md` | medium |
| Business stage | `sunset-review` | `state.md`, `metrics.md`, `feedback.md` | medium |
| Primary revenue bottleneck | `distribution` | `state.md`, `revenue-pipeline.md` | medium |
| Current business model | founder-side low-ticket self-serve brief / toolkit hypothesis | `business-model.md` | medium |
| Revenue status | `0 revenue, 0 paid signal` | `revenue-ledger.md` | high |
| User signal | `2 weak qualitative signals; 0 strong intent; 0 completed packet reviews` | `metrics.md`, `feedback.md` | high |
| Distribution signal | `contractor/agency checkpoint closed silent; founder-side stability-brief pivot is active; Reddit is pruned; Jesse entered market but now reads as stalled; one exact next X candidate is staged` | `feedback.md`, `revenue-pipeline.md` | high |
| Monetization signal | `no willingness-to-pay evidence yet` | `business-model.md`, `revenue-ledger.md` | high |
| Viability recommendation | `sunset-review` for SpecRelay | `viability-scorecard.md` | high |
| Last business audit | `2026-05-29 no` | `business-audit.md` | medium |
| Closer to revenue? | `no` | `business-audit.md`, `operating-quality.md` | medium |
| Open account/service blocker | `none blocking current wait state` | `account-needs.md` | medium |
| Next wake | `none; autonomous heartbeat retired until Product/CEO makes a park / sunset / restart decision` | `ops/automation-spec.md`, `state.md` | high |

## CEO Focus

- One-line company diagnosis: product is live, but neither the contractor/agency wedge nor the founder-side wedge produced a validating reply inside their bounded windows.
- Highest-leverage next move: make an explicit Product/CEO decision on whether SpecRelay is parked, sunset, or restarted under a fresh bounded experiment.
- Narrowest approval/account gate, if any: none for continued automation; the next meaningful move is a company-level decision, not another staged public reply inside the closed founder-side window.
- Current external signal opportunity: only a genuinely late Jesse or contractor/agency reply that materially changes the evidence.
- Current real-progress status: the company closed the founder-side evidence window, entered `sunset-review`, and retired the stale heartbeat instead of drifting into zombie maintenance.
- Last run-log entry: `RUN-0039` founder-side readout closed; SpecRelay entered `sunset-review`.
- Last business-audit answer: `no`.
- Next decision deadline: first founder-side approval or `2026-05-29 23:59 CST` founder-side readout.

## Operating Scoreboard

| Area | Status | Target / threshold | Current evidence | Next action |
| --- | --- | --- | --- | --- |
| Revenue | weak | first paid signal or credible willingness-to-pay proof | no paid offer or paid user yet | choose monetization test only after workflow value is validated |
| Users / demand | weak | 5 qualitative reviews, 2 strong intent signals | 2 weak X signals, 0 completed packet/brief reviews | do not keep the same wedge alive without a new thesis |
| Activation | weak | at least one real evaluator completes or critiques a packet | no confirmed packet completion yet | keep output usable; do not expand scope |
| Retention | absent | repeated usage or repeat need evidence | no usage instrumentation | defer until first user signal exists |
| Distribution | failed current window | repeatable zero-cost evaluator channel | contractor/agency wedge closed silent; founder-side pivot also closed with no founder reply and no second live touch | choose park / sunset / restart instead of more waiting |
| Monetization | absent | chosen paid offer plus willingness-to-pay evidence | current model is still hypothesis only | record next monetization test only after founder-side usage intent appears |
| Release / reachability | strong | stable public surface | live GitHub Pages app and release issue are healthy | maintain only |
| Reliability | acceptable | growth not wasted by defects | product is stable enough for manual evaluation | no product expansion before evidence |
| Account dependencies | manageable | all needs explicit and current | no blocking account need right now; Mail UI remains the fallback when AppleScript readout regresses | keep using the verified Mail UI fallback if a reply check becomes urgent |
| Operating quality | medium | no repeated internal-only loops | latest run closed the founder-side readout and retired the obsolete heartbeat instead of reopening the same wedge | hold no further automation until a real decision is made |
| Business audit | current | weekly / 10-run answer | `no` on `2026-05-29` | next audit only if SpecRelay is resumed as an active product |

## Current Priorities

| Rank | Priority | Why it matters now | Expected signal | Owner lens | Status |
| --- | --- | --- | --- | --- | --- |
| 1 | Decide whether SpecRelay is parked, sunset, or deliberately restarted | the current evidence window is over and no further autonomous work should happen under the old thesis | explicit company-level disposition | Product/CEO | active |
| 2 | Treat any late Jesse or contractor/agency reply as extra evidence only | late signals can still matter, but they arrive after the bounded window has closed | unexpected strong positive that could justify reopening the case | Support/Research | passive |
| 3 | Do not create another founder-side channel under the closed window | more spread would only revive zombie maintenance | clean disposition instead of drift | Product/CEO | active constraint |

## Dashboard Rules

- Update this after every active company run that changes stage, bottleneck, revenue, users, distribution, monetization, viability, account blockers, release state, or operating quality.
- Keep it short. This file is the CEO index, not the full evidence archive.
- If this dashboard conflicts with detailed state files, trust the detailed file and fix the dashboard in the same run.
- Do not treat updating this dashboard as real progress unless it directly removes a current operating blocker.
