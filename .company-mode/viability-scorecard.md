# Viability Scorecard

- Last updated: `2026-06-03`
- Owner role: Product/CEO
- Purpose: prevent zombie maintenance by forcing an evidence-based continue, intensify, pivot, park, or sunset decision.

## Current Decision

- Recommendation: `sunset`
- Confidence: high
- Reason: the founder-side evidence window already closed without validating demand, and the user has now explicitly chosen to sunset SpecRelay and take the product offline instead of parking or restarting it.
- Next review at: when the next product candidate is selected
- Next review trigger: explicit next-product selection, deliberate bounded restart proposal, or new product-selection evidence that chooses the next active product
- Evidence window: `2026-05-22` to `2026-05-29 23:59 CST` for the founder-side stability-brief pivot

## Scorecard

Score each dimension from 0 to 5. Use `unknown` only when the company has not yet run a fair evidence-producing step.

| Dimension | Score | Evidence | Main risk | Next action |
| --- | --- | --- | --- | --- |
| Demand | 1 | Jesse and Frank still imply a real stability-first problem, but no founder replied yes/no during the bounded founder-side window | the pain may exist only as vague commentary rather than a workflow someone will use | do not continue the same demand claim without a new wedge |
| Activation | 0 | live product exists, but no confirmed packet/brief completion by a real evaluator or founder | users may never start or finish even the smaller brief | stop extending the current flow automatically |
| Retention | 0 | no repeat usage evidence | even a useful first look may not recur | ignore until first real user exists |
| Monetization | 0 | no paid offer, no price test, no willingness-to-pay language | solving the wrong buyer/workflow shape again | wait for founder-side usage intent before pricing |
| Distribution | 0 | the contractor/agency batch closed silent, the founder-side window also closed without a founder reply, and the only second route was never approved into market | the current product may not have a repeatable zero-cost path under the present thesis | enter `sunset-review` before opening any new spread |
| Differentiation | 1 | the smaller stability brief is more realistic than the full packet, but still unvalidated after the bounded founder-side window | it may still read as generic QA advice rather than a must-have artifact | require a fresh wedge before further investment |
| Execution fit | 4 | static web product, low-cost ops, and reversible pivot path are all workable | risk is business fit, not implementation | maintain only |

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
