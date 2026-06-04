# Viability Scorecard

- Last updated: `2026-06-03`
- Owner role: Product/CEO
- Purpose: prevent zombie maintenance by forcing an evidence-based continue, intensify, pivot, park, or sunset decision.

## Current Decision

- Recommendation: `continue`
- Confidence: low/medium
- Reason: SpecRelay is sunset, but the selection sprint found a tighter adjacent pain with better evidence speed and a clean static-MVP path. Burn Ceiling deserves one bounded first experiment, not an open-ended build.
- Next review at: `2026-06-10 23:59 CST`
- Next review trigger: `EXP-0005` readout, earlier strong intent signal, or clear failure to ship the MVP
- Evidence window: `2026-06-03` to `2026-06-10 23:59 CST` for Burn Ceiling

## Scorecard

Score each dimension from 0 to 5. Use `unknown` only when the company has not yet run a fair evidence-producing step.

| Dimension | Score | Evidence | Main risk | Next action |
| --- | --- | --- | --- | --- |
| Demand | 3 | current public pain signals show real cost-cap anxiety and launch guidance increasingly treats caps as mandatory | people may agree with the pain but still not complete a planner | test completion and intent quickly |
| Activation | 2 | the first live MVP exists and produces a concrete plan, but no one has completed it yet | the planner may still feel too abstract if the output feels generic | measure completion and tighten the output from real reactions |
| Retention | 0 | no repeat usage evidence | even a useful first look may not recur | ignore until first real user exists |
| Monetization | 2 | low-ticket planner/toolkit is plausible, but untested | low willingness to pay for advice-only output | ask about pre-launch use before pricing |
| Distribution | 3 | the same founder/builder communities that surfaced cost pain are still reachable from current accounts | public send still has to cut through crowded launch discourse | stage a tighter MVP and concrete ask |
| Differentiation | 2 | most current content is advice or security scans; there is room for a cost-cap-specific planner | it may still collapse into another generic checklist if outputs are weak | keep the product centered on spend ceilings and fallback decisions |
| Execution fit | 4 | static web product, zero-backend path, and existing deployment pattern are all workable; the first MVP now exists | risk is still business fit, not implementation | use the live MVP to get demand evidence rather than broadening the build |

## Decision Rules

- `intensify`: strong evidence in the current bottleneck and a clear next scaling move.
- `continue`: enough evidence to justify one more bounded experiment.
- `pivot`: demand exists but target, positioning, business model, or product shape is wrong.
- `park`: evidence is inconclusive and a higher-leverage product/company move exists.
- `sunset`: evidence window failed with no meaningful demand, activation, retention, monetization, distribution, or differentiation signal.

## Review Log

| Date | Recommendation | Scores changed | Evidence | Next review at | Next review trigger |
| --- | --- | --- | --- | --- | --- |
| `2026-05-15` | `continue` | initialized all dimensions from current durable evidence | product is live, direct outreach batch is still open, but strong intent and monetization remain absent | `2026-05-18 09:00 CST` | weekly cadence or earlier strong reply / checkpoint outcome |
| `2026-05-18` | `continue` | distribution `2 -> 1`; other dimensions unchanged | Mail UI readout showed Afterbuild failed delivery on `2026-05-15`; Bytewise and AppStuck remain the only live contractor/agency touches | `2026-05-21 23:59 CST` | checkpoint outcome or earlier strong reply |
| `2026-05-20` | `continue` | no score change | the delivered batch is Bytewise/AppStuck/AC Tech Labs, but there is still no reply, no strong intent, and no paid signal; latest checks only reconfirmed release health and a silent/partial Mail readout surface | `2026-05-21 23:59 CST` | checkpoint outcome or earlier material reply |
| `2026-05-22` | `pivot` | differentiation `3 -> 2`; other dimensions unchanged | the contractor/agency checkpoint closed with no verified evaluator reply, so the buyer/artifact shape must change; Jesse and Frank still support one narrower founder-side try | `2026-05-29 23:59 CST` | founder-side first reply, late contractor/agency material reply, or pivot-window close |
| `2026-05-24` | `continue` | distribution `1 -> 2`; other dimensions unchanged | the founder-side pivot is no longer just staged: Reddit is pruned, one non-Reddit Jesse X route is publicly live, and there is not yet enough negative evidence to kill the pivot before the current readout window ends | `2026-05-29 23:59 CST` | founder-side material reply, clearly stalled route plus next exact candidate, or pivot-window close |
| `2026-05-30` | `sunset-review` | demand `2 -> 1`, activation `1 -> 0`, distribution `2 -> 0`, differentiation `2 -> 1`; other dimensions unchanged | the founder-side evidence window closed with no founder reply, no completed brief usage, no paid signal, one stalled live route, and no approved second route, so the product no longer has enough evidence to justify another automatic continue | user decision on `park`, `sunset`, or a deliberately new bounded experiment | explicit Product/CEO decision on whether SpecRelay is parked, sunset, or restarted under a fresh thesis |
| `2026-06-03` | `sunset` | no score change | the user explicitly selected `sunset`, the public product was taken offline, and the company returned to product selection instead of keeping SpecRelay in review | next selected product | explicit next-product selection |
| `2026-06-03` | `continue` | demand `1 -> 3`, activation `0 -> 1`, monetization `0 -> 2`, distribution `0 -> 3`, differentiation `1 -> 2`; other dimensions reset to the new product context | Burn Ceiling is selected as the new active product because public founder pain around runaway AI costs is clearer and the first experiment can be run with a static planner MVP | `2026-06-10 23:59 CST` | first Burn Ceiling readout or earlier strong intent signal |
| `2026-06-04` | `continue` | activation `1 -> 2`; other dimensions unchanged | the first Burn Ceiling MVP is now live and locally verified, so the next risk is demand, not whether the product can be shipped at all | `2026-06-10 23:59 CST` | first Burn Ceiling readout or earlier strong intent signal |
