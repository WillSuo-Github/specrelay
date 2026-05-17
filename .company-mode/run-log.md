# Run Log

- Last updated: `2026-05-17`
- Owner role: Product/CEO + Release/Ops
- Purpose: provide the canonical active-run ledger and counter source for cadence, operating quality, viability review, and business audit triggers.

## Current Counters

- Total active runs: 23
- Last run ID: `RUN-0023`
- Next run ID: `RUN-0024`
- Last active run at: `2026-05-17 23:10 CST`
- Last real-progress run ID: `RUN-0023`
- Last no-progress run ID: `RUN-0019`
- No-progress streak: 0
- Runs since viability review: 4
- Runs since business audit: 4
- Rolling quality window: last 10 active runs

## Trigger State

| Trigger | Source | Due when | Current status | Required action |
| --- | --- | --- | --- | --- |
| Viability review | `run-log.md`, `viability-scorecard.md` | Monday 09:00 local, 5 active runs, 3 weak/negative experiments, material result, or `sunset-review` | completed in `RUN-0019`; next due `2026-05-18 09:00 CST` or earlier trigger | review before ordinary backlog if due |
| Business audit | `run-log.md`, `business-audit.md` | Friday 17:00 local, 10 active runs, two no-progress rounds, completed evidence window, or before park/sunset/product-selection | completed in `RUN-0019`; next due `2026-05-22 17:00 CST` or earlier trigger | audit before ordinary backlog if due |
| Failure recovery | `run-log.md`, `operating-quality.md` | no-progress streak >= 2 or invalid stop | not due | resume execution around the current revenue bottleneck if triggered |

## Active Run Definition

An active run is a company-mode turn that operates an existing or newly bootstrapped company instance by classifying business health, choosing a revenue bottleneck, executing or staging a bounded operating session, and updating durable state. Count the run even if it ends as `no-progress`.

Do not count pure kernel installation, repository maintenance, one-off user questions about the kernel, or rule-only edits as an active company run unless they also operate a real company instance and remove its active blocker in the same turn.

## Closeout Rules

- Assign the next `RUN-####` ID at the start of an active run.
- Append exactly one row to the run table before CEO/user closeout.
- Update counters from the appended row; do not infer active-run counts from chat history or automation wake count.
- Use this file as the source of truth for `every 5 active runs`, `every 10 active runs`, no-progress streaks, and rolling operating-quality windows.
- Historical rows `RUN-0001` to `RUN-0018` were backfilled on `2026-05-15` from existing durable records in `state.md`, `release.md`, `experiments.md`, `feedback.md`, and git history. When the old schema lacked exact minute timestamps, time-of-day is approximate.
- If a prior row is wrong, append a correction row or annotate the current row. Do not rewrite historical evidence unless correcting the current incomplete run before closeout.

## Run Table

| Run ID | Date/time | Stage | Bottleneck | Objective | Steps | Main output | Real progress? | External signal / blocker removed | Independent check | Business audit | Viability review | Account state change | Files changed | Next wake |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `RUN-0001` | `2026-05-01 20:00 CST` | `pre-launch` | `release` | build and ship the first public MVP | observe -> decide -> prepare -> verify | public SpecRelay MVP launched on GitHub Pages | yes | product became externally reachable | inferred pass | n/a | n/a | none | app, release, state | 12h |
| `RUN-0002` | `2026-05-02 10:00 CST` | `no-traction` | `distribution` | stage first growth sprint and release gate clarity | observe -> decide -> prepare | growth sprint and owned launch assets staged | yes | first owned distribution path clarified | inferred pass | n/a | n/a | none | docs, release, roadmap | 12h |
| `RUN-0003` | `2026-05-03 09:30 CST` | `no-traction` | `distribution` | deploy feedback CTA and rule-check initial channels | observe -> prepare -> verify | feedback issue path and channel exploration documented | yes | reviewers had a public feedback surface | inferred pass | n/a | n/a | none | app, docs, release | 12h |
| `RUN-0004` | `2026-05-03 18:30 CST` | `no-traction` | `distribution` | attempt HN, then pivot to X target discovery and first replies | observe -> publish -> verify | HN block recorded; six X replies sent | yes | first direct public evaluator touches entered market | inferred pass | n/a | n/a | none | docs, feedback, release | 12h |
| `RUN-0005` | `2026-05-04 11:30 CST` | `no-traction` | `demand` | read first evaluator response and send shorter Frank follow-up | observe -> decide -> publish | first segmentation signal logged; Frank no-link follow-up sent | yes | first real founder feedback captured | inferred pass | n/a | n/a | none | feedback, experiments, state | 12h |
| `RUN-0006` | `2026-05-04 20:30 CST` | `no-traction` | `distribution` | send second-wave outreach to Lech, Jesse, and Hiten | observe -> prepare -> publish | one URL follow-up and two no-link replies sent | yes | broader evaluator batch entered market | inferred pass | n/a | n/a | none | docs, feedback, release | 12h |
| `RUN-0007` | `2026-05-05 20:30 CST` | `no-traction` | `activation` | incorporate Jesse's stability-first feedback into the product | observe -> decide -> prepare -> verify | stability-first pass added to generated packet | yes | product fit improved against real user language | inferred pass | n/a | n/a | none | app, release, feedback | 12h |
| `RUN-0008` | `2026-05-06 13:30 CST` | `no-traction` | `distribution` | send Jesse stability-first follow-up with live URL | prepare -> publish -> verify | Jesse follow-up posted after verification | yes | another targeted evaluator touch entered market | inferred pass | n/a | n/a | none | feedback, release, state | 12h |
| `RUN-0009` | `2026-05-06 21:30 CST` | `no-traction` | `distribution` | prepare sharper evaluator pack and target discovery | observe -> decide -> prepare | contractor/agency/domain-builder evaluator assets created | yes | next approved outreach path narrowed | inferred pass | n/a | n/a | none | docs, experiments, roadmap | 12h |
| `RUN-0010` | `2026-05-07 21:30 CST` | `no-traction` | `distribution` | stage contractor/agency validation sprint and differentiate no-login positioning | observe -> decide -> prepare -> verify | contractor validation sprint and positioning docs deployed | yes | higher-fit evaluator segment selected | inferred pass | n/a | n/a | none | docs, release, state | 24h |
| `RUN-0011` | `2026-05-11 18:30 CST` | `no-traction` | `distribution` | narrow Afterbuild approval gate | observe -> decide -> prepare | exact Afterbuild send runbook staged | yes | approval gate shrank to one verifiable action | inferred pass | n/a | n/a | none | docs, state, roadmap | 24h |
| `RUN-0012` | `2026-05-11 23:07 CST` | `no-traction` | `distribution` | execute first contractor/agency outreach | publish -> verify | Afterbuild email sent and confirmed in Sent mail | yes | first rescue-service email entered market | inferred pass | n/a | n/a | none | feedback, release, experiments | 24h |
| `RUN-0013` | `2026-05-12 17:27 CST` | `no-traction` | `distribution` | stage Bytewise fallback gate | observe -> decide -> prepare | exact Bytewise fallback route documented | yes | second rescue-service path staged | inferred pass | n/a | n/a | none | docs, state, automation | 24h |
| `RUN-0014` | `2026-05-12 19:21 CST` | `no-traction` | `distribution` | confirm and record second contractor/agency outreach plus sender policy | publish -> verify | Bytewise email status recorded; sender policy changed to Outlook for future outreach | yes | second rescue-service email entered market | inferred pass | n/a | n/a | sender preference updated | state, docs, company | 24h |
| `RUN-0015` | `2026-05-13 23:00 CST` | `no-traction` | `distribution` | narrow third candidate and cleaner async route | observe -> decide -> prepare | AC Tech Labs and AppStuck runbooks staged | yes | third-path candidate improved without distortion | inferred pass | n/a | n/a | none | docs, experiments, roadmap | 24h |
| `RUN-0016` | `2026-05-14 07:00 CST` | `no-traction` | `distribution` | avoid another maintenance-only round and execute AppStuck touch | publish -> verify | AppStuck contact form submitted with `ws.software@outlook.com` | yes | third contractor/agency touch entered market | inferred pass | n/a | n/a | none | docs, state, feedback | 24h |
| `RUN-0017` | `2026-05-14 15:00 CST` | `no-traction` | `decision` | define hard checkpoint for the contractor/agency wedge | observe -> decide -> prepare | explicit three-touch decision tree documented for `2026-05-21 23:59 CST` | yes | active-product decision path became explicit | inferred pass | n/a | n/a | none | docs, state, automation | 24h |
| `RUN-0018` | `2026-05-15 07:00 CST` | `no-traction` | `decision` | stage founder-side fallback before checkpoint pressure | observe -> decide -> prepare | founder-side stability-brief pivot asset documented | yes | adjacent pivot path became explicit | inferred pass | n/a | n/a | none | docs, state, roadmap | 24h |
| `RUN-0019` | `2026-05-15 19:39 CST` | `no-traction` | `decision` | migrate to latest company-mode schema without overwriting product facts | observe -> decide -> prepare -> verify | missing starter-kit files migrated; counters, audit, viability, dashboard, and ledgers aligned to SpecRelay facts | no | none; governance surface upgraded but no new market evidence created | pass | `mixed` | `continue` | none | `.company-mode/*`, `ops/*` | 24h |
| `RUN-0020` | `2026-05-15 23:15 CST` | `no-traction` | `decision` | remove contradictory state chronology before the next autonomous recovery | observe -> decide -> prepare -> verify | `state.md` CEO review chronology normalized; schema counters advanced cleanly | yes | stale/contradictory durable-state blocker removed from future company operation | pass | n/a | n/a | none | `.company-mode/state.md`, `.company-mode/run-log.md`, `.company-mode/company-dashboard.md`, `.company-mode/operating-quality.md` | 24h |
| `RUN-0021` | `2026-05-16 15:08 CST` | `no-traction` | `distribution` | compress the founder-side fallback into an exact future validation gate while the current batch waits | observe -> decide -> prepare -> verify | `docs/founder-stability-brief-runbook.md` created and linked into durable state | yes | future fallback path is now narrowed to exact asks and gates | pass | n/a | n/a | none | `docs/founder-stability-brief-runbook.md`, `.company-mode/state.md`, `.company-mode/revenue-pipeline.md`, `.company-mode/signal-sources.md`, `.company-mode/experiments.md`, `.company-mode/company-dashboard.md`, `.company-mode/operating-quality.md`, `.company-mode/run-log.md` | 24h |
| `RUN-0022` | `2026-05-17 07:08 CST` | `no-traction` | `distribution` | stage a real founder-side target pool so the fallback can create signal immediately if activated | observe -> decide -> research -> prepare -> verify | `docs/founder-stability-target-pool.md` created with ranked public targets and an exact first approval candidate | yes | founder-side fallback no longer depends on rediscovering targets at checkpoint time | pass | n/a | n/a | none | `docs/founder-stability-target-pool.md`, `.company-mode/state.md`, `.company-mode/revenue-pipeline.md`, `.company-mode/signal-sources.md`, `.company-mode/market-map.md`, `.company-mode/experiments.md`, `.company-mode/company-dashboard.md`, `.company-mode/operating-quality.md`, `.company-mode/independent-check.md`, `.company-mode/run-log.md` | 24h |
| `RUN-0023` | `2026-05-17 23:10 CST` | `no-traction` | `distribution` | verify whether direct-outreach replies are actually monitorable from this machine and formalize any blocker | observe -> verify -> decide -> prepare | `ACC-0001` opened for Mail readout permission after AppleScript and `~/Library/Mail` access failed to provide reliable local inbox monitoring | yes | direct-email readout blocker is now explicit with exact user action, verification, fallback, and resume path | pass | n/a | n/a | `ACC-0001` opened | `.company-mode/account-needs.md`, `.company-mode/state.md`, `.company-mode/signal-sources.md`, `.company-mode/revenue-pipeline.md`, `.company-mode/company-dashboard.md`, `.company-mode/operating-quality.md`, `.company-mode/independent-check.md`, `.company-mode/run-log.md` | 24h |

## Correction Log

| Date | Run ID | Correction | Reason | Files updated |
| --- | --- | --- | --- | --- |
| `2026-05-15` | `RUN-0001` - `RUN-0018` | Historical baseline reconstructed into the new schema | `run-log.md` did not exist before kernel migration; counters had to be backfilled from durable records | `run-log.md`, `operating-quality.md`, `business-audit.md`, `viability-scorecard.md`, `company-dashboard.md` |
