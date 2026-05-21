# Viability Scorecard

- Last updated: `2026-05-22`
- Owner role: Product/CEO
- Purpose: prevent zombie maintenance by forcing an evidence-based continue, intensify, pivot, park, or sunset decision.

## Current Decision

- Recommendation: `pivot`
- Confidence: low
- Reason: the contractor/agency wedge reached its `2026-05-21 23:59 CST` checkpoint with no verified evaluator reply, no strong intent, no completed packet review, and no monetization proof. The underlying stability-first problem may still exist, but the current buyer and artifact shape are unproven. Pivot once to the founder-side stability brief instead of extending rescue-service outreach.
- Next review at: `2026-05-29 23:59 CST`
- Next review trigger: weekly, every 5 active runs counted in `run-log.md`, after 3 weak/negative completed experiments, on material release/monetization/distribution result, or immediately when entering `sunset-review`
- Evidence window: `2026-05-22` to `2026-05-29 23:59 CST` for the founder-side stability-brief pivot

## Scorecard

Score each dimension from 0 to 5. Use `unknown` only when the company has not yet run a fair evidence-producing step.

| Dimension | Score | Evidence | Main risk | Next action |
| --- | --- | --- | --- | --- |
| Demand | 2 | Jesse and Frank still imply a real stability-first problem, but not the validated contractor/agency buyer | the pain may exist only for a narrower founder workflow | test the founder-side brief once |
| Activation | 1 | live product exists, but no confirmed packet completion by a real evaluator or founder | users may never start or finish even the smaller brief | keep scope minimal and founder-facing |
| Retention | 0 | no repeat usage evidence | even a useful first look may not recur | ignore until first real user exists |
| Monetization | 0 | no paid offer, no price test, no willingness-to-pay language | solving the wrong buyer/workflow shape again | wait for founder-side usage intent before pricing |
| Distribution | 1 | the contractor/agency batch closed silent; the next exact route is one founder-side no-link public reply that still needs approval | distribution may remain too indirect if the founder-side route also cannot elicit usage intent | stop at the exact approval gate and read that founder-side route honestly |
| Differentiation | 2 | the smaller stability brief is more realistic than the full packet, but still unvalidated | it may still read as generic QA advice rather than a must-have artifact | keep the output narrow and concrete |
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
