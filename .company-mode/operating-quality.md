# Operating Quality

- Last updated: `2026-06-03`
- Owner role: Product/CEO
- Purpose: measure whether the company is making real progress across runs instead of performing convincing internal activity.

## Current Quality Summary

- Source ledger: `run-log.md`
- Rolling window: last 10 active company runs
- Real-progress rate: `80%` (`8/10`)
- External-signal output rate: `8/10` runs either shipped a real external touch, staged the exact next gate, or closed a bounded evidence window with an explicit company decision
- No-progress streak: `0`
- Independent-check pass rate: `2/2` explicit schema-era checks; pre-schema runs were backfilled but not rescored line-by-line
- Account dependency closure rate: `100%` of current blocking needs are either closed or have explicit verification and resume steps
- Scenario regression status: not run in this instance; no kernel change was made in this migration
- Business audit status: current (`no` on `2026-06-03`); SpecRelay sunset is complete
- Current quality risk: `medium`
- Required correction: do not let Burn Ceiling drift into another abstract planning loop. The next company move must ship the smallest MVP and start collecting demand evidence.

## KPI Thresholds

| KPI | Target | Failure trigger | Corrective action |
| --- | --- | --- | --- |
| Real-progress rate | At least 60% over last 10 active runs; at least 80% in `pre-launch`, `no-traction`, and `monetization-search` unless blocked by real outside waits | Below target | Next run is failure recovery around the current revenue bottleneck |
| External-signal output rate | At least 1 external signal action, staged final gate, or direct blocker removal every 2 weak-signal runs | 2 weak-signal runs without one | Stop maintenance and produce/stage the nearest external signal |
| No-progress streak | 0 preferred; never more than 1 | 2 consecutive no-progress rounds | Use 10-minute cadence and resume execution before state hygiene |
| Independent-check pass rate | 100% for runs with public, release, account, privacy, or revenue claims | Any hard blocker or below-threshold score | Fix before closeout or record exact dependency |
| Account dependency closure rate | Every active need has status, verification method, fallback, resume action, and next check cadence | Any active need missing a field | Fix `account-needs.md` before closeout |
| Business audit freshness | Weekly Friday 17:00 local time or every 10 active runs | Audit overdue or two consecutive `no` answers | Run audit before ordinary backlog; force strategy reset or `sunset-review` |
| Scenario regression status | `scripts/run_scenario_tests.py` passes before reusable kernel commits | Any failure | Fix kernel or test expectation before commit |
| Dashboard freshness | Dashboard updated whenever core business facts change | Stale or contradictory dashboard | Update `company-dashboard.md` from detailed files |
| Revenue-bottleneck focus | 70/20/10 respected unless an emergency gate exists | Internal maintenance dominates weak-signal runs | Reclassify next run as failure recovery |

## Run Quality Log

This table is a summary view. The canonical per-run ledger and counters live in `run-log.md`.

| Date | Stage | Bottleneck | Main output | Real progress? | External signal / blocker removed | Independent-check decision | Account status change | Next correction |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `2026-05-11` | `no-traction` | `distribution` | Afterbuild send gate and then live email send | yes | first contractor/agency outreach sent | inferred pass | none | read reply quality, not more generic prep |
| `2026-05-12` | `no-traction` | `distribution` | Bytewise fallback gate and confirmed second email send | yes | second contractor/agency outreach sent | inferred pass | sender preference updated | keep external batch coherent |
| `2026-05-13` | `no-traction` | `distribution` | AC Tech + AppStuck candidate narrowing | yes | third-path decision got cleaner | inferred pass | none | avoid extra channel sprawl |
| `2026-05-14` | `no-traction` | `distribution` | AppStuck contact-form outreach executed | yes | third contractor/agency touch sent | inferred pass | none | wait for reply or checkpoint |
| `2026-05-14` | `no-traction` | `decision` | hard checkpoint decision tree | yes | active-product continue/pivot gate clarified | inferred pass | none | no more internal drift |
| `2026-05-15` | `no-traction` | `decision` | founder-side pivot staged | yes | adjacent experiment path clarified | inferred pass | none | do not activate before checkpoint |
| `2026-05-15` | `no-traction` | `decision` | schema migration and CEO catch-up | no | none | pass | none | next run must stay on live evidence, not more structure |
| `2026-05-15` | `no-traction` | `decision` | durable-state chronology repair | yes | future autonomous recovery no longer depends on contradictory review history | pass | none | next run should stay on live evidence, not more structure |
| `2026-05-16` | `no-traction` | `distribution` | founder-side validation runbook staged | yes | fallback path is now at a narrow future gate instead of abstract strategy | pass | none | wait for current batch; do not open new channel yet |
| `2026-05-17` | `no-traction` | `distribution` | founder-side target pool staged | yes | founder-side pivot no longer depends on rediscovering live public targets at checkpoint time | pass | none | keep waiting; use the staged target pool only if the pivot activates |
| `2026-05-17` | `no-traction` | `distribution` | direct-email readout blocker formalized as `ACC-0001` | yes | inbox monitoring is no longer falsely treated as reliable; exact user-action path is recorded | pass | `ACC-0001` opened | verify Mail permission or keep direct-email readout explicitly partial |
| `2026-05-18` | `no-traction` | `distribution` | Afterbuild delivery failure corrected; Mail UI readout verified; viability review refreshed | yes | a false live-touch assumption was removed and the blocker was closed without more setup | pass | `ACC-0001` closed | keep reading Bytewise/AppStuck to checkpoint; do not count technical failures as market silence |
| `2026-05-18` | `no-traction` | `distribution` | AC Tech Labs replacement outreach executed with verified `POST /api/contact` `200` | yes | the contractor/agency batch returned to three delivered touches after the Afterbuild miss | pass | none | wait for Bytewise/AppStuck/AC Tech Labs replies; do not add a fourth touch before checkpoint |
| `2026-05-18` | `no-traction` | `distribution` | no new external reply; stale current-state references repaired after external checks | yes | future recovery will not reintroduce “Afterbuild still live” or “AC still staged” assumptions | pass | none | remain in 24-hour external wait until a reply or the hard checkpoint |
| `2026-05-19` | `no-traction` | `distribution` | no new external reply; founder-side trigger corrected to the real delivered batch | yes | future pivot activation will use Bytewise/AppStuck/AC instead of the obsolete Afterbuild-based batch | pass | none | remain in 24-hour external wait until a reply or the hard checkpoint |
| `2026-05-19` | `no-traction` | `distribution` | no new external reply; AppleScript inbox counts reverified across the full live batch | yes | current wait-state monitoring now uses one consistent count surface for Bytewise/AppStuck/AC Tech Labs | pass | none | remain in 24-hour external wait until a reply or the hard checkpoint |
| `2026-05-20` | `no-traction` | `distribution` | no new external reply; due viability review and business audit completed before checkpoint | no | none; current market state is unchanged and AppStuck/AC Tech Labs AppleScript reads regressed to timeout in this run | pass with notes | none | keep the company in honest outside wait until a reply or the hard checkpoint |
| `2026-05-21` | `no-traction` | `distribution` | no new external reply; second consecutive no-progress wait round recorded and hard-checkpoint wake tightened to tonight | no | none; market evidence is still unchanged and only Bytewise was re-verified through automation in this run | pass with notes | none | do not allow a third passive round; force the wedge decision at `2026-05-21 23:59 CST` |
| `2026-05-22` | `no-traction` | `distribution` | contractor/agency wedge closed silent at the hard checkpoint; founder-side pivot activated | yes | the company replaced a failed wedge with one narrower adjacent experiment and an exact approval gate instead of drifting further | pass | none | stop at the founder-side approval gate and do not create a new passive wait loop |
| `2026-05-22` | `no-traction` | `distribution` | founder-side first Reddit action attempted, but post-send verification showed no public thread/profile evidence | yes | the company consumed the approval gate, attempted the live move, and prevented a false “post sent” claim from entering durable state | pass with notes | none | stop at the second founder-side approval gate; do not retry blindly or count the first click as a live touch |
| `2026-05-23` | `no-traction` | `distribution` | founder-side second Reddit action attempted, but post-send verification still showed no public thread/profile evidence | yes | the company consumed the next approval gate, attempted the live move, and prevented a second false “post sent” claim from entering durable state | pass with notes | none | stop at the third founder-side approval gate; do not retry blindly or count the second attempt as a live touch |
| `2026-05-23` | `no-traction` | `distribution` | blanket-approved Reddit founder-side sweep exhausted without any publicly verifiable send | yes | the company learned that Reddit is an execution blocker for this pivot and pruned the channel instead of continuing to misread platform failure as product progress | pass with notes | none | move to a non-Reddit founder-side route on the next active run |
| `2026-05-23` | `no-traction` | `distribution` | first non-Reddit founder-side replacement route sent and publicly verified on X | yes | the company replaced a failed channel with one live founder-side touch that can now generate real demand evidence | pass | none | wait for Jesse/X readout before opening another founder-side route |
| `2026-05-24` | `no-traction` | `distribution` | no new founder-side or contractor/agency reply after the first Jesse X wait cycle; due viability review refreshed | no | none; the company only re-verified the same live route, confirmed no GitHub signal, and kept the outside wait honest | pass with notes | none | do not allow another passive wait round without either a founder reply or the next exact founder-side candidate |
| `2026-05-25` | `no-traction` | `distribution` | Jesse route re-verified as stalled and the next exact X candidate staged | yes | the company prevented a second consecutive no-progress wait round by turning a stalled live route into one exact next approval gate | pass with notes | none | resolve the James Hsi gate before opening any broader founder-side spread |
| `2026-05-29` | `no-traction` | `decision` | no new external signal; due business audit completed before founder-side readout close | no | none; the company only reconfirmed silent external state and tightened the final checkpoint around the existing James Hsi gate | pass with notes | none | at `2026-05-29 23:59 CST`, either absorb approval/signal or force `sunset-review` instead of rolling into another maintenance loop |
| `2026-05-30` | `sunset-review` | `decision` | founder-side readout closed and obsolete heartbeat retired | yes | the company closed the active evidence window and removed the stale autonomous loop instead of extending the same silent wedge | pass with notes | none | next move must be explicit park / sunset / restart, not another automated wait |
| `2026-06-03` | `pre-product` | `decision` | user-approved sunset executed and public product taken offline | yes | the company removed the stale live product surface and reopened a clean active-product slot instead of leaving SpecRelay half-alive | pass with notes | none | next move must be fresh product selection with scored candidates |
| `2026-06-03` | `pre-product` | `demand` | product-selection sprint completed and Burn Ceiling chosen with one bounded experiment | yes | the company moved from an empty active-product slot into a single concrete next bet with a stop rule instead of drifting after sunset | pass with notes | none | next move must ship the MVP, not reopen abstract selection |
| `2026-06-04` | `public MVP live` | `demand` | first Burn Ceiling MVP shipped and locally QA-verified | yes | the company moved from selected idea to a live validation surface instead of staying in pre-product planning | pass with notes | none | next move must create external signal rather than more internal polish |

## Quality Review Questions

- Did this run change a real business state, public state, revenue state, account dependency, final-action gate, or decision-grade evidence?
- If not, why was the stop condition still valid?
- Did the company spend most effort on the current revenue bottleneck?
- Did independent check block anything?
- Did open account needs move closer to verification, resume, or closure?
- Is the next wake cadence consistent with progress and stage?

## Escalation Rules

- If quality risk is high, Product/CEO must choose failure recovery before ordinary backlog work.
- If the same quality failure appears twice, update the shared kernel or scenario tests.
- If the company repeatedly produces summaries without external signal movement, classify the next run as no-progress and use the 10-minute cadence.
