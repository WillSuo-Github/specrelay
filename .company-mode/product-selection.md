# Product Selection

- Last updated: `2026-06-03`
- Owner role: Product/CEO
- Purpose: choose the next active product deliberately when the current product is parked, pivoted, or sunset.

## Current Selection State

- Active product: `Burn Ceiling`
- Selection mode: closed because the next active product has now been selected
- Trigger to open selection: completed in this run after the user approved SpecRelay sunset
- Decision needed by: none until Burn Ceiling is validated, parked, pivoted, or sunset
- Current recommendation: build the first Burn Ceiling MVP before any broader new-product search reopens

## Selection Rules

- Keep exactly one active product in this company instance.
- Do not start another active product until the current product has a recorded `continue`, `pivot`, `park`, or `sunset` decision in `viability-scorecard.md` and `product-history.md`.
- If a candidate needs active operation while this product remains active, create a separate company instance instead of running two active products here.
- Prefer the smallest candidate that can produce decision-grade evidence with existing accounts, existing app assets, zero-cost distribution, and a plausible revenue path.
- The company may use existing WillSuo App Store apps, shared support/privacy URL patterns, reusable code, and prior product lessons as evidence, but must not copy product-specific facts blindly.

## Candidate Backlog

| Candidate | User problem | Existing asset / app reference | Evidence source | Distribution path | Monetization hypothesis | Required account/service | Score | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Burn Ceiling | AI founders do not know safe launch budgets, cap thresholds, or fallback plans before real users arrive | static site path, existing AI-builder research, public founder pain signals | `docs/product-selection-2026-06.md` | X, founder communities, SEO around AI cost caps | low-ticket self-serve planner / template pack | none initially | 28 | selected |
| Public vibe-app security smoke scan | founders want instant public-surface security checks for vibe-coded apps | static site path, public URL scanning concept | same sprint doc plus current security-scan market | X, Supabase, vibe-coding communities | free scan + paid remediation | possible later scanning infra | 25 | not selected |
| AI launch checklist worksheet | founders want a broader launch worksheet | static site path | crowded checklist market | SEO and founder communities | low-ticket template | none | 24 | not selected |
| Solo-founder morning ops brief | founders juggle Stripe, Supabase, and PostHog dashboards manually | none meaningful | weak evidence and heavier integration need | founder ops communities | subscription | product integrations | 17 | not selected |

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
| `2026-06-03` | select next active product | `Burn Ceiling` | strongest mix of pain clarity, static-MVP fit, faster evidence speed, and lower competitive crowding than another launch-checklist or security-only wedge | SpecRelay restart, security scanner, generic launch worksheet, morning ops brief | build first static MVP and run `EXP-0005` |

## Resume Plan After Park / Sunset

- Product-history entry required: completed
- Reusable assets to carry forward: static deployment path, no-backend operating pattern, outreach lessons, decision rules, and archive-page pattern
- Support/release cleanup required: completed for SpecRelay; the public page now serves only an archive notice
- Next candidate readout: closed for now; reopen only if Burn Ceiling later fails
- Account or service needs: none currently
