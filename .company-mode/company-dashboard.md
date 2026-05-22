# Company Dashboard

- Last updated: `2026-05-22`
- Owner role: Product/CEO
- Purpose: keep a one-page CEO view of company health, current bottleneck, live blockers, and the next revenue move.

## Current Snapshot

| Field | Current value | Evidence source | Confidence |
| --- | --- | --- | --- |
| Active product | `SpecRelay` | `company.md`, `product-history.md` | high |
| Last active run | `RUN-0033` | `run-log.md` | high |
| Active run count | 33 | `run-log.md` | medium |
| Business stage | `no-traction` | `state.md`, `metrics.md`, `feedback.md` | medium |
| Primary revenue bottleneck | `distribution` | `state.md`, `revenue-pipeline.md` | medium |
| Current business model | founder-side low-ticket self-serve brief / toolkit hypothesis | `business-model.md` | medium |
| Revenue status | `0 revenue, 0 paid signal` | `revenue-ledger.md` | high |
| User signal | `2 weak qualitative signals; 0 strong intent; 0 completed packet reviews` | `metrics.md`, `feedback.md` | high |
| Distribution signal | `contractor/agency checkpoint closed silent; founder-side stability-brief pivot is active; the first approved r/replit reply and second approved r/SaaS reply did not become publicly verifiable, so the next exact gate is now the third founder-side candidate` | `feedback.md`, `revenue-pipeline.md` | high |
| Monetization signal | `no willingness-to-pay evidence yet` | `business-model.md`, `revenue-ledger.md` | high |
| Viability recommendation | `pivot` to founder-side stability brief | `viability-scorecard.md` | medium |
| Last business audit | `2026-05-22 no` | `business-audit.md` | medium |
| Closer to revenue? | `no` | `business-audit.md`, `operating-quality.md` | medium |
| Open account/service blocker | `none blocking current wait state` | `account-needs.md` | medium |
| Next wake | `paused at the exact third founder-side approval gate unless a late reply or late visible Reddit post materially changes the readout` | `ops/automation-spec.md`, `state.md` | high |

## CEO Focus

- One-line company diagnosis: product is live, but the contractor/agency buyer did not validate; the only justified next try is the smaller founder-side stability brief.
- Highest-leverage next move: stop at one exact founder-side approval gate instead of reopening contractor/agency outreach, counting another unverified post as progress, or inventing more internal prep.
- Narrowest approval/account gate, if any: the next founder-side public reply remains action-time gated.
- Current external signal opportunity: either a late contractor/agency reply that materially challenges the checkpoint decision, a late visible Reddit reply from one of the first two attempts, or a founder-side reply after approval of the next pivot action.
- Current real-progress status: the second founder-side public action was attempted, but post-send verification prevented the company from falsely counting it as a live market touch; the next move is now one exact third approval gate.
- Last run-log entry: `RUN-0033` founder-side second reply attempted but not publicly verified; next gate shifted to the third candidate.
- Last business-audit answer: `no`.
- Next decision deadline: first founder-side approval or `2026-05-29 23:59 CST` founder-side readout.

## Operating Scoreboard

| Area | Status | Target / threshold | Current evidence | Next action |
| --- | --- | --- | --- | --- |
| Revenue | weak | first paid signal or credible willingness-to-pay proof | no paid offer or paid user yet | choose monetization test only after workflow value is validated |
| Users / demand | weak | 5 qualitative reviews, 2 strong intent signals | 2 weak X signals, 0 completed packet reviews | run one founder-side validation loop |
| Activation | weak | at least one real evaluator completes or critiques a packet | no confirmed packet completion yet | keep output usable; do not expand scope |
| Retention | absent | repeated usage or repeat need evidence | no usage instrumentation | defer until first user signal exists |
| Distribution | weak | repeatable zero-cost evaluator channel | contractor/agency wedge closed silent; founder-side first route is staged but not yet approved | stop at the exact founder-side gate |
| Monetization | absent | chosen paid offer plus willingness-to-pay evidence | current model is still hypothesis only | record next monetization test only after founder-side usage intent appears |
| Release / reachability | strong | stable public surface | live GitHub Pages app and release issue are healthy | maintain only |
| Reliability | acceptable | growth not wasted by defects | product is stable enough for manual evaluation | no product expansion before evidence |
| Account dependencies | manageable | all needs explicit and current | no blocking account need right now; Mail UI remains the fallback when AppleScript readout regresses | keep using the verified Mail UI fallback if a reply check becomes urgent |
| Operating quality | medium | no repeated internal-only loops | latest run used the hard checkpoint to force a real strategy reset instead of a third passive wait round | stop at the next exact approval gate rather than reopening passive monitoring |
| Business audit | current | weekly / 10-run answer | `no` on `2026-05-22` | next audit on `2026-05-29 17:00 CST` or earlier material founder-side / late external reply |

## Current Priorities

| Rank | Priority | Why it matters now | Expected signal | Owner lens | Status |
| --- | --- | --- | --- | --- | --- |
| 1 | Stop at the third founder-side approval gate | this is still the cleanest adjacent experiment with any surviving language fit after the first two routes failed public verification | one approved no-link founder-side reply route | Product/CEO + Growth | gated |
| 2 | Treat any late Bytewise/AppStuck/AC reply as extra evidence, not as license to reopen the old wedge | late signals can still matter, but the default decision is already made | unexpected strong positive that challenges the pivot | Support/Research | passive |
| 3 | Do not open a second adjacent wedge or more rescue-service outreach | more spread would hide the failed checkpoint and muddy the pivot readout | clean founder-side signal or clean stop | Product/CEO | active constraint |

## Dashboard Rules

- Update this after every active company run that changes stage, bottleneck, revenue, users, distribution, monetization, viability, account blockers, release state, or operating quality.
- Keep it short. This file is the CEO index, not the full evidence archive.
- If this dashboard conflicts with detailed state files, trust the detailed file and fix the dashboard in the same run.
- Do not treat updating this dashboard as real progress unless it directly removes a current operating blocker.
