# Viability Scorecard

- Last updated: `2026-05-20`
- Owner role: Product/CEO
- Purpose: prevent zombie maintenance by forcing an evidence-based continue, intensify, pivot, park, or sunset decision.

## Current Decision

- Recommendation: `continue`
- Confidence: low
- Reason: the current contractor/agency wedge still has a live evidence window through `2026-05-21 23:59 CST`, and the real delivered batch is now Bytewise, AppStuck, and AC Tech Labs after Afterbuild was downgraded to technical delivery failure. There is still no strong intent signal, no monetization proof, and today's monitoring added no new reply. Continue only to the existing checkpoint; do not extend the wedge by default.
- Next review at: `2026-05-21 23:59 CST`
- Next review trigger: weekly, every 5 active runs counted in `run-log.md`, after 3 weak/negative completed experiments, on material release/monetization/distribution result, or immediately when entering `sunset-review`
- Evidence window: `2026-05-01` to `2026-05-21 23:59 CST` for the current contractor/agency validation wedge

## Scorecard

Score each dimension from 0 to 5. Use `unknown` only when the company has not yet run a fair evidence-producing step.

| Dimension | Score | Evidence | Main risk | Next action |
| --- | --- | --- | --- | --- |
| Demand | 2 | two weak qualitative signals and a plausible adjacent service market, but no strong intent | the pain may be conditional or too narrow | read the current batch to checkpoint |
| Activation | 1 | live product exists, but no confirmed packet completion by a real evaluator | users may never start or finish the manual packet | keep output stable; do not add scope |
| Retention | 0 | no repeat usage evidence | even a useful first look may not recur | ignore until first real user exists |
| Monetization | 0 | no paid offer, no price test, no willingness-to-pay language | solving the wrong buyer/workflow shape | wait for workflow-fit evidence before pricing |
| Distribution | 1 | X outreach plus three delivered contractor/agency touches remain, but today's readout only reconfirmed Bytewise at `0` while AppStuck and AC Tech Labs AppleScript checks timed out | the batch may be too thin and too quiet, and the monitoring surface is still partly manual | apply the hard checkpoint rigorously and use Mail UI fallback if a time-sensitive reply check is needed |
| Differentiation | 3 | no-login/no-repo + stability-first pre-scope angle is distinct from repo-connected adjacencies like AppHandoff | differentiation may still be too abstract | keep the wedge narrow |
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
