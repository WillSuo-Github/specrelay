# Business Model

- Last updated: `2026-06-03`
- Owner role: Product/CEO + Growth
- Rule: the company may choose and change the business model from evidence. Do not ask the user to choose by default.

## Current Model Hypothesis

- Selected model: `template/toolkit`
- Why this model: Burn Ceiling can start as a fast, no-login self-serve planner and exported action plan before any heavier integration or audit workflow exists
- Target customer: solo founders and small teams launching AI-backed apps
- Paid offer: likely a low-ticket planner pack or exportable guardrail template set
- Price / package: not priced yet; likely one-off purchase first
- Purchase path: none configured yet
- Evidence supporting it: public launch guidance now treats cost caps as mandatory, and public founder pain is concrete because runaway charges are directly financial
- Evidence against it: no one has yet said they would complete or pay for a cost-cap planner specifically
- Next monetization experiment: after the first MVP, test whether founders would use the planner before launch and whether they expect a one-off toolkit or a paid report

## Candidate Models

| Model | Fit for this product | Evidence needed | Setup needed | Authority / gate | Status |
| --- | --- | --- | --- | --- | --- |
| Paid app | weak for current wedge | self-serve founder demand and direct willingness to pay | payment path and product simplification | pre-authorized if the route changes later | low priority |
| Subscription | weak for current wedge | repeat usage and recurring workflow value | ongoing product usage and billing setup | still needs monetization proof | low priority |
| In-app purchase | weak for current wedge | a clear unlock or report purchase moment | purchase flow | not relevant now | low priority |
| Freemium | possible only after founder-side pivot | free activation plus paid upgrade intent | product gating | needs clearer consumer path | candidate if pivot activates |
| B2B/license | weakened by the silent contractor/agency checkpoint | proof that the packet saves intake/scoping time for reviewers | simple sales copy and later payment path | public legal/commercial claims still gated | parked |
| Template/toolkit | strongest current hypothesis | willingness to buy a reusable founder-side artifact rather than a workflow tool | lightweight checkout or GitHub distribution | still needs clear paid intent | active hypothesis |
| Sponsorship/affiliate | poor fit | trusted audience and relevant partner | channel scale | legal/commercial claims gated | not pursuing |

## Pricing Notes

- Current price: none
- Price anchor from competitors: not established; adjacent rescue services sell custom work, not this exact artifact
- Expected value to user: set a safe launch burn ceiling, fallback plan, and guardrail checklist before traffic or paid users arrive
- Next price test: only after one founder says the planner would change how they launch or cap spend
- Risk of confusing existing users: pricing too early would create false certainty while demand is still unproven

## Purchase Path

- App Store product status: not applicable to the current static-web path
- IAP/subscription status: not applicable
- External payment status: not configured
- Analytics/receipt tracking: none
- Known blockers: no validated buyer, no offer packaging, and no purchase path configured

## Decision Log

| Date | Decision | Evidence | Result to watch | Revisit trigger |
| --- | --- | --- | --- | --- |
| `2026-05-15` | choose `B2B/license` as the current model hypothesis and keep founder-side low-ticket self-serve as pivot only | contractor/agency wedge is the sharpest current external test; no monetization proof yet | whether any evaluator says the packet would save intake/scoping time | any strong positive reply, the `2026-05-21 23:59 CST` checkpoint, or founder-side pivot activation |
| `2026-05-22` | switch the active model hypothesis to `template/toolkit` around a founder-side stability brief | the contractor/agency wedge closed silent at the checkpoint, while Jesse/Frank still support one narrower founder-side try | whether any founder says they would complete the brief before launch or before asking for help | founder-side approval gate clears, a founder reply lands, or the new pivot window closes |
| `2026-06-03` | retire the active model hypothesis | SpecRelay is sunset and no new active product exists yet | next chosen product must name its own model hypothesis from scratch | next product-selection decision |
| `2026-06-03` | choose `template/toolkit` for Burn Ceiling | the selected product can produce a concrete exportable output without backend integrations, and a low-ticket planner is the simplest monetization path if demand appears | whether founders will complete the planner and describe pre-launch use intent | first Burn Ceiling MVP readout |
