# Product Selection

- Last updated: `2026-05-30`
- Owner role: Product/CEO
- Purpose: choose the next active product deliberately when the current product is parked, pivoted, or sunset.

## Current Selection State

- Active product: `SpecRelay`
- Selection mode: active because the current product has entered `sunset-review`
- Trigger to open selection: the founder-side pivot window has now closed without a founder reply or approved second route
- Decision needed by: next Product/CEO decision on whether SpecRelay is `park`, `sunset`, or restarted under a fresh bounded thesis
- Current recommendation: do not auto-start another product. First decide whether SpecRelay is merely parked for later manual restart or fully sunset.

## Selection Rules

- Keep exactly one active product in this company instance.
- Do not start another active product until the current product has a recorded `continue`, `pivot`, `park`, or `sunset` decision in `viability-scorecard.md` and `product-history.md`.
- If a candidate needs active operation while this product remains active, create a separate company instance instead of running two active products here.
- Prefer the smallest candidate that can produce decision-grade evidence with existing accounts, existing app assets, zero-cost distribution, and a plausible revenue path.
- The company may use existing WillSuo App Store apps, shared support/privacy URL patterns, reusable code, and prior product lessons as evidence, but must not copy product-specific facts blindly.

## Candidate Backlog

| Candidate | User problem | Existing asset / app reference | Evidence source | Distribution path | Monetization hypothesis | Required account/service | Score | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Founder-side stability brief | founder needs a smaller pre-launch / pre-handoff artifact than a full agency-intake packet | live SpecRelay app, stability-first pass, founder-side pivot doc | Jesse feedback, current product, `docs/founder-stability-brief-pivot.md` | existing GitHub Pages app plus future founder outreach | low-ticket self-serve tool or paid report | none immediate | 25 | staged pivot, not yet active |

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

## Resume Plan After Park / Sunset

- Product-history entry required: yes
- Reusable assets to carry forward: live GitHub Pages surface, stability-first packet logic, outreach research, decision rules, and no-login/no-repo positioning lessons
- Support/release cleanup required: none unless the product is fully sunset and the public page should be archived
- Next candidate readout: only after Product/CEO chooses whether SpecRelay is parked, sunset, or deliberately restarted
- Account or service needs: none currently
