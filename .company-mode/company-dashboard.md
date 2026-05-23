# Company Dashboard

- Last updated: `2026-05-23`
- Owner role: Product/CEO
- Purpose: keep a one-page CEO view of company health, current bottleneck, live blockers, and the next revenue move.

## Current Snapshot

| Field | Current value | Evidence source | Confidence |
| --- | --- | --- | --- |
| Active product | `SpecRelay` | `company.md`, `product-history.md` | high |
| Last active run | `RUN-0035` | `run-log.md` | high |
| Active run count | 35 | `run-log.md` | medium |
| Business stage | `no-traction` | `state.md`, `metrics.md`, `feedback.md` | medium |
| Primary revenue bottleneck | `distribution` | `state.md`, `revenue-pipeline.md` | medium |
| Current business model | founder-side low-ticket self-serve brief / toolkit hypothesis | `business-model.md` | medium |
| Revenue status | `0 revenue, 0 paid signal` | `revenue-ledger.md` | high |
| User signal | `2 weak qualitative signals; 0 strong intent; 0 completed packet reviews` | `metrics.md`, `feedback.md` | high |
| Distribution signal | `contractor/agency checkpoint closed silent; founder-side stability-brief pivot is active; Reddit is pruned; one replacement founder-side X reply is now publicly visible in the Jesse thread` | `feedback.md`, `revenue-pipeline.md` | high |
| Monetization signal | `no willingness-to-pay evidence yet` | `business-model.md`, `revenue-ledger.md` | high |
| Viability recommendation | `pivot` to founder-side stability brief | `viability-scorecard.md` | medium |
| Last business audit | `2026-05-22 no` | `business-audit.md` | medium |
| Closer to revenue? | `no` | `business-audit.md`, `operating-quality.md` | medium |
| Open account/service blocker | `none blocking current wait state` | `account-needs.md` | medium |
| Next wake | `24h external wait on the live Jesse founder-side X reply, late contractor replies, GitHub issue feedback, or the founder-side pivot deadline` | `ops/automation-spec.md`, `state.md` | high |

## CEO Focus

- One-line company diagnosis: product is live, but the contractor/agency buyer did not validate; the only justified next try is the smaller founder-side stability brief.
- Highest-leverage next move: wait for the live Jesse founder-side X reply to produce a yes/no/maybe readout before creating another founder-side route.
- Narrowest approval/account gate, if any: no immediate gate while the live X founder-side replacement route is waiting for response; the next gate appears only if a second fresh public route is needed.
- Current external signal opportunity: either a reply to the live Jesse X ask, a late contractor/agency reply that materially challenges the pivot, or GitHub feedback issue activity.
- Current real-progress status: the company replaced a failed Reddit execution surface with a publicly verifiable founder-side X touch instead of stopping at channel prep.
- Last run-log entry: `RUN-0035` first non-Reddit founder-side X replacement route sent and publicly verified.
- Last business-audit answer: `no`.
- Next decision deadline: first founder-side approval or `2026-05-29 23:59 CST` founder-side readout.

## Operating Scoreboard

| Area | Status | Target / threshold | Current evidence | Next action |
| --- | --- | --- | --- | --- |
| Revenue | weak | first paid signal or credible willingness-to-pay proof | no paid offer or paid user yet | choose monetization test only after workflow value is validated |
| Users / demand | weak | 5 qualitative reviews, 2 strong intent signals | 2 weak X signals, 0 completed packet reviews | run one founder-side validation loop |
| Activation | weak | at least one real evaluator completes or critiques a packet | no confirmed packet completion yet | keep output usable; do not expand scope |
| Retention | absent | repeated usage or repeat need evidence | no usage instrumentation | defer until first user signal exists |
| Distribution | weak | repeatable zero-cost evaluator channel | contractor/agency wedge closed silent; founder-side pivot now has one live X route with public verification | wait for reply, then decide whether the route can repeat |
| Monetization | absent | chosen paid offer plus willingness-to-pay evidence | current model is still hypothesis only | record next monetization test only after founder-side usage intent appears |
| Release / reachability | strong | stable public surface | live GitHub Pages app and release issue are healthy | maintain only |
| Reliability | acceptable | growth not wasted by defects | product is stable enough for manual evaluation | no product expansion before evidence |
| Account dependencies | manageable | all needs explicit and current | no blocking account need right now; Mail UI remains the fallback when AppleScript readout regresses | keep using the verified Mail UI fallback if a reply check becomes urgent |
| Operating quality | medium | no repeated internal-only loops | latest run used the hard checkpoint to force a real strategy reset instead of a third passive wait round | stop at the next exact approval gate rather than reopening passive monitoring |
| Business audit | current | weekly / 10-run answer | `no` on `2026-05-22` | next audit on `2026-05-29 17:00 CST` or earlier material founder-side / late external reply |

## Current Priorities

| Rank | Priority | Why it matters now | Expected signal | Owner lens | Status |
| --- | --- | --- | --- | --- | --- |
| 1 | Read the live Jesse founder-side X route honestly | this is the first publicly verifiable non-Reddit founder-side touch after the Reddit prune | founder yes/no/maybe on the stability brief | Product/CEO + Growth | active |
| 2 | Treat any late Bytewise/AppStuck/AC reply as extra evidence, not as license to reopen the old wedge | late signals can still matter, but the default decision is already made | unexpected strong positive that challenges the pivot | Support/Research | passive |
| 3 | Do not spray more founder/community channels before this X readout lands or clearly stalls | more spread would muddy whether this replacement route can work at all | clean founder-side signal or a justified second route | Product/CEO | active constraint |

## Dashboard Rules

- Update this after every active company run that changes stage, bottleneck, revenue, users, distribution, monetization, viability, account blockers, release state, or operating quality.
- Keep it short. This file is the CEO index, not the full evidence archive.
- If this dashboard conflicts with detailed state files, trust the detailed file and fix the dashboard in the same run.
- Do not treat updating this dashboard as real progress unless it directly removes a current operating blocker.
