# Revenue Pipeline

- Last updated: `2026-05-21`
- Owner role: Growth + Product/CEO
- Purpose: keep business-development, distribution, and monetization state alive across wakes

## Business Health

- Business stage: `no-traction`
- Revenue status: no revenue and no willingness-to-pay signal yet
- User status: two weak qualitative signals, zero completed packet reviews, zero strong intent signals
- Distribution status: live GitHub Pages product plus X outreach; Bytewise, AppStuck, and AC Tech Labs are live contractor/agency touches, while Afterbuild failed delivery on `2026-05-15`; no repeatable winning channel yet
- Monetization status: model hypothesis chosen, but no price/package/purchase-path proof
- Current revenue bottleneck: `distribution`
- Business model hypothesis: `B2B/license` for the current wedge; see `business-model.md`
- Revenue data: see `revenue-ledger.md`
- Market context: see `market-map.md`
- Next cadence recommendation: exact hard-checkpoint wake at `2026-05-21 23:59 CST`, not a generic 24-hour loop
- Readout risk note: direct-email replies remain a primary evidence source, but current monitoring is mixed: GitHub/live URL checks are deterministic, Bytewise AppleScript count is still working, and AppStuck/AC Tech Labs remain only partially monitorable through automation, so Mail UI remains the fallback if a reply check becomes urgent

## Target Customers

| Segment | Pain | Where to reach | Evidence | Priority | Status |
| --- | --- | --- | --- | --- | --- |
| Agency intake owner | founders bring AI-built apps with unclear stability, scope, and risk before a quote | rescue-service sites, direct email, founder-ops communities | plausible from market research; not validated | 1 | batch live |
| Contractor inheriting AI-built prototype | first scoping call is noisy because the app's real state is undocumented | direct outreach, X, agency communities | plausible from product thesis; not validated | 1 | batch live |
| Founder preparing to launch or hand off | needs a smaller stability-first brief before outside help or pilot | X, founder communities, direct replies | weak founder-side language exists from Jesse/Frank | 2 | staged pivot |

## Leads / Prospects / Pain Signals

| Source | Segment | Pain signal | Next action | Gate | Status |
| --- | --- | --- | --- | --- | --- |
| Afterbuild Labs | agency / rescue-service | adjacent buyer who might value pre-scope clarity | do not count as live; delivery failed on `2026-05-15` because `afterbuildlabs.com` did not accept the connection | replacement outreach would be action-time gated | failed delivery |
| Bytewise | agency / rescue-service | adjacent buyer who might value audit/handoff context | wait for reply until checkpoint | none while waiting | live |
| AppStuck | rescue-service | adjacent buyer with async form route | wait for reply until checkpoint | none while waiting | live |
| AC Tech Labs | agency / rescue-service | adjacent buyer who might value pre-assessment clarity before a fit-call workflow | wait for reply until checkpoint | none while waiting | live |
| `@jessecolesmith` | founder / domain builder | stability-first workflow language | wait for any reply; use only as founder-side evidence, not monetization proof | public follow-up would be gated | weak positive logged |
| `@FSfakiotakis` | founder / operator | simple founder-maintained apps may not need this early | keep as segmentation constraint | any new public action gated | weak negative logged |
| Hacker News Show HN | public distribution | account too new (`fnop=toonew`) | do not retry unless HN becomes the chosen next channel | account trust would gate | blocked/stale for now |
| Founder-side target pool | founder / operator | demo-to-launch confidence gap is already visible in public Replit, Lovable, and SaaS threads | if pivot activates, use `docs/founder-stability-target-pool.md` to choose the first exact no-link reply candidate instead of rediscovering targets | public/direct action still gated | staged |

## Channel Experiments

| Channel | Hypothesis | Action | Cost | Approval needed | Result | Next step |
| --- | --- | --- | --- | --- | --- | --- |
| X replies | direct public evaluator replies can yield honest workflow language quickly | 11 public replies across first wave, follow-ups, and Jesse link | 0 | already executed; any further public action needs approval | 2 weak qualitative signals, 0 strong intent | keep only as passive readout until a new approval-worthy move exists |
| Direct rescue-service outreach | targeted evaluator messages may validate intake/scoping value faster than broad founder posting | Afterbuild email attempt, Bytewise email, AppStuck form, AC Tech Labs form | 0 | already executed | Afterbuild failed delivery; Bytewise/AppStuck/AC Tech Labs still have no reply yet | read the three live touches to checkpoint and treat Afterbuild as a technical miss, not a silence |
| GitHub owned surface | release + feedback issue can collect longer-form critique | live public issue and release note | 0 | no | no comments yet | keep passive |

## Monetization Hypotheses

| Hypothesis | Offer / price | Target user | Evidence needed | Gate | Status |
| --- | --- | --- | --- | --- | --- |
| Agency-intake workflow | paid per-project or team workflow | contractor / agency intake owner | one evaluator says it saves scoping or intake time | no pricing move until workflow value exists | active hypothesis |
| Founder stability brief | low-ticket self-serve report or toolkit | founder/operator preparing for launch or handoff | founder says the smaller brief is realistic and worth paying for | pivot decision first | staged fallback |

## Next Revenue Moves

| Priority | Move | Bottleneck | Expected signal | Approval needed | Status |
| --- | --- | --- | --- | --- | --- |
| 1 | wait for Bytewise, AppStuck, or AC Tech Labs reply through `2026-05-21 23:59 CST` and then force the wedge decision | distribution | reply quality that validates or kills the contractor/agency wedge | no | active |
| 2 | if the three live touches are silent or negative at the checkpoint, activate `docs/founder-stability-brief-pivot.md`, `docs/founder-stability-brief-runbook.md`, and `docs/founder-stability-target-pool.md` | decision | founder-side adjacent experiment instead of a fourth rescue-service outreach | no for internal pivot work; yes for future public/direct action | staged |

## Acquisition Cadence

- Cadence owner: Growth
- Current cadence: 24-hour external-wait readout while the current batch is live
- Rule: the company chooses cadence from business stage, signal strength, and bottleneck; do not wait for the user to prescribe lead/post counts.
- Cadence record: see `acquisition-cadence.md`

## Operating Notes

- In `pre-launch`, `no-traction`, and `monetization-search`, do not end an operating session with only internal maintenance unless this file records why no external signal action was possible and what the next concrete revenue move is.
- Keep final public actions, paid spend, pricing changes, legal claims, credentials, account changes, and irreversible release actions behind the approval gates in `.company-mode/company.md`.
