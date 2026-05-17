# Company Dashboard

- Last updated: `2026-05-17`
- Owner role: Product/CEO
- Purpose: keep a one-page CEO view of company health, current bottleneck, live blockers, and the next revenue move.

## Current Snapshot

| Field | Current value | Evidence source | Confidence |
| --- | --- | --- | --- |
| Active product | `SpecRelay` | `company.md`, `product-history.md` | high |
| Last active run | `RUN-0023` | `run-log.md` | high |
| Active run count | 23 | `run-log.md` | medium |
| Business stage | `no-traction` | `state.md`, `metrics.md`, `feedback.md` | medium |
| Primary revenue bottleneck | `distribution` | `state.md`, `revenue-pipeline.md` | medium |
| Current business model | `B2B/license` hypothesis with founder-side pivot staged but inactive | `business-model.md` | medium |
| Revenue status | `0 revenue, 0 paid signal` | `revenue-ledger.md` | high |
| User signal | `2 weak qualitative signals; 0 strong intent; 0 completed packet reviews` | `metrics.md`, `feedback.md` | high |
| Distribution signal | `three contractor/agency touches are in market, but no reply yet` | `feedback.md`, `revenue-pipeline.md` | medium |
| Monetization signal | `no willingness-to-pay evidence yet` | `business-model.md`, `revenue-ledger.md` | high |
| Viability recommendation | `continue` until the current evidence window closes | `viability-scorecard.md` | medium |
| Last business audit | `2026-05-15 mixed` | `business-audit.md` | medium |
| Closer to revenue? | `mixed` | `business-audit.md`, `operating-quality.md` | medium |
| Open account/service blocker | `ACC-0001` Mail readout permission blocks reliable local inbox verification for the current direct-outreach batch | `account-needs.md` | high |
| Next wake | `24-hour external wait unless a reply arrives first` | `ops/automation-spec.md`, `state.md` | high |

## CEO Focus

- One-line company diagnosis: product is live and narrowly positioned, but it still lacks proof that anyone will use the packet before handoff, launch, or scoping.
- Highest-leverage next move: let the current three-touch contractor/agency batch reach its `2026-05-21 23:59 CST` readout, then apply the continue/pivot rule without adding drift work.
- Narrowest approval/account gate, if any: any further public post, DM, follow-up with link, or new direct outreach remains action-time gated.
- Current external signal opportunity: a useful reply from Afterbuild, Bytewise, AppStuck, or an active X target that clarifies whether the packet changes real workflow behavior.
- Current real-progress status: business signal is still unchanged, but the current direct-email readout blocker is now explicit instead of being silently treated as monitored.
- Last run-log entry: `RUN-0023` Mail readout blocker formalization.
- Last business-audit answer: `mixed`.
- Next decision deadline: `2026-05-21 23:59 CST`.

## Operating Scoreboard

| Area | Status | Target / threshold | Current evidence | Next action |
| --- | --- | --- | --- | --- |
| Revenue | weak | first paid signal or credible willingness-to-pay proof | no paid offer or paid user yet | choose monetization test only after workflow value is validated |
| Users / demand | weak | 5 qualitative reviews, 2 strong intent signals | 2 weak X signals, 0 completed packet reviews | wait for the current contractor/agency batch or pivot readout |
| Activation | weak | at least one real evaluator completes or critiques a packet | no confirmed packet completion yet | keep output usable; do not expand scope |
| Retention | absent | repeated usage or repeat need evidence | no usage instrumentation | defer until first user signal exists |
| Distribution | weak | repeatable zero-cost evaluator channel | X plus 3 direct touches, but no repeatable winner | read the current batch to checkpoint |
| Monetization | absent | chosen paid offer plus willingness-to-pay evidence | current model is still hypothesis only | record next monetization test after readout |
| Release / reachability | strong | stable public surface | live GitHub Pages app and release issue are healthy | maintain only |
| Reliability | acceptable | growth not wasted by defects | product is stable enough for manual evaluation | no product expansion before evidence |
| Account dependencies | active | all needs explicit and current | `ACC-0001` blocks reliable local Mail readout for direct outreach replies | verify the permission path or keep direct-email readout explicitly partial |
| Operating quality | medium | no repeated internal-only loops | current run turned a silent monitoring gap into an explicit blocker with a resume path, and last 10-run real-progress rate is still healthy | stop adding internal prep after this until the next readout, gate, or blocker resolution |
| Business audit | current | weekly / 10-run answer | `mixed` on `2026-05-15` | next audit on `2026-05-22 17:00 CST` or earlier trigger |

## Current Priorities

| Rank | Priority | Why it matters now | Expected signal | Owner lens | Status |
| --- | --- | --- | --- | --- | --- |
| 1 | Read the three-touch contractor/agency batch to checkpoint | this is the only live external evidence window with real target fit | reply quality that answers whether the packet changes intake/scoping behavior | Product/CEO + Growth | waiting |
| 2 | Keep the founder-side stability-brief pivot ready but inactive | it is the cleanest adjacent experiment if the current wedge weakens | faster pivot decision with no more target rediscovery work needed | Product/CEO | staged |
| 3 | Do not open a new channel or product prematurely | more internal/channel spread would hide the actual signal deficit | cleaner continue/pivot/stop decision on `2026-05-21` | Product/CEO | active constraint |

## Dashboard Rules

- Update this after every active company run that changes stage, bottleneck, revenue, users, distribution, monetization, viability, account blockers, release state, or operating quality.
- Keep it short. This file is the CEO index, not the full evidence archive.
- If this dashboard conflicts with detailed state files, trust the detailed file and fix the dashboard in the same run.
- Do not treat updating this dashboard as real progress unless it directly removes a current operating blocker.
