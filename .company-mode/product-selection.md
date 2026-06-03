# Product Selection

- Last updated: `2026-06-03`
- Owner role: Product/CEO
- Purpose: choose the next active product deliberately when the current product is parked, pivoted, or sunset.

## Current Selection State

- Active product: none
- Selection mode: active because SpecRelay has now been explicitly sunset
- Trigger to open selection: the user approved sunset and asked the company to restart product selection after taking SpecRelay offline
- Decision needed by: next active Product/CEO selection run
- Current recommendation: do not restart SpecRelay. Select a fresh candidate and define a new bounded first experiment before any new build or outreach work.

## Selection Rules

- Keep exactly one active product in this company instance.
- Do not start another active product until the current product has a recorded `continue`, `pivot`, `park`, or `sunset` decision in `viability-scorecard.md` and `product-history.md`.
- If a candidate needs active operation while this product remains active, create a separate company instance instead of running two active products here.
- Prefer the smallest candidate that can produce decision-grade evidence with existing accounts, existing app assets, zero-cost distribution, and a plausible revenue path.
- The company may use existing WillSuo App Store apps, shared support/privacy URL patterns, reusable code, and prior product lessons as evidence, but must not copy product-specific facts blindly.

## Candidate Backlog

| Candidate | User problem | Existing asset / app reference | Evidence source | Distribution path | Monetization hypothesis | Required account/service | Score | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SpecRelay restart | AI-app founders may still need a pre-launch stability brief | archived SpecRelay code, docs, and public lessons | prior X feedback and failed wedges | old X/GitHub/public routes only | low-ticket toolkit | none | 8 | rejected for now |
| Fresh candidate discovery | not selected yet | repo, current company kernel, existing channels | next research sprint | to be chosen | to be chosen | none initially | unknown | active |

## Scoring Rubric

Score each candidate from 0 to 5.

| Dimension | Meaning |
| --- | --- |
| Demand | Clear painful problem or repeated public signal |
| Build fit | Can be built, shipped, or adapted with current capabilities |
| Distribution fit | Has a realistic zero-cost channel or App Store/search path |
| Monetization fit | Has a plausible paid app, IAP, subscription, license, or other revenue route |
| Evidence speed | Can produce a real signal quickly |
| Reuse | Can reuse code, support pages, app assets, audience, or lessons |
| Risk | Low legal, account, platform, privacy, or maintenance burden |

## Decision Log

| Date | Decision | Selected product / candidate | Why | Rejected alternatives | Next action |
| --- | --- | --- | --- | --- | --- |
| `2026-05-15` | keep selection closed | `SpecRelay` remains active | current evidence window is still open through `2026-05-21 23:59 CST`; founder-side pivot is adjacent enough that a full new-product search would be premature | unrelated new products | wait for the current batch or activate the staged pivot |
| `2026-05-30` | open selection mode | `SpecRelay` still active but now in `sunset-review` | the founder-side window closed with no founder replies, no strong intent, and no second live touch, so the company can no longer justify automatic continuation | unrelated new products still remain out of scope until SpecRelay is explicitly parked or sunset | decide whether to park SpecRelay, sunset it, or authorize a genuinely new bounded experiment |
| `2026-06-03` | sunset prior product and restart selection | no active product | the user explicitly chose sunset and requested a clean restart plus public takedown | restarting the same SpecRelay thesis without new evidence | run a fresh candidate scan and pick one next active product |

## Resume Plan After Park / Sunset

- Product-history entry required: completed
- Reusable assets to carry forward: static deployment path, no-backend operating pattern, outreach lessons, decision rules, and archive-page pattern
- Support/release cleanup required: completed for SpecRelay; the public page now serves only an archive notice
- Next candidate readout: after the next selection sprint produces scored candidates
- Account or service needs: none currently
