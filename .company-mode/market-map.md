# Market Map

- Last updated: `2026-06-03`
- Owner role: Support/Research + Growth
- Purpose: keep competitive, keyword, channel, and public pain-signal context current enough for the company to find users without paid promotion.

## Market Thesis

- Category: AI app cost-cap and launch-guardrail planner
- Target segment: launch-stage AI app founders and small builder teams
- Core pain: founders ship AI-backed apps without a safe spend ceiling, fallback plan, or launch guardrails and discover cost problems only after users arrive
- Current wedge: no-login 5-minute planner that outputs a burn ceiling, fallback plan, and launch guardrail checklist
- Why now: public founder discussion and launch-guidance content in 2026 increasingly treat cost caps and guardrails as mandatory, not optional

## Competitors and Alternatives

See `docs/product-selection-2026-06.md` for the current selection sprint and direct source links.

| Product / alternative | Platform | Pricing | Positioning | Strength | Weakness | Opportunity |
| --- | --- | --- | --- | --- | --- | --- |
| Spreadsheet planning | docs / sheets | free | founders hand-calculate traffic and token budgets | flexible and familiar | slow, inconsistent, no built-in guardrails | Burn Ceiling can compress this into one faster launch plan |
| Generic launch checklist posts | blogs / templates | free or cheap | broad launch advice | easy to find | too broad and rarely cost-specific | Burn Ceiling can stay concrete on spend ceilings and fallback plans |
| Security scanners | web SaaS | mixed | scan vibe-coded apps for secrets, auth gaps, and config mistakes | real pain and clear outputs | different wedge; not cost planning | keep cost planning separate instead of becoming another scanner |
| Agency / rescue services | service | custom | founders ask for help after cost, auth, or scale issues land | strong pain proof | expensive and late in the journey | Burn Ceiling should sit earlier, before public traffic and before a rescue handoff |

## App Store / Search Map

| Keyword | Intent | Competitors seen | Search result quality | Opportunity | Next action |
| --- | --- | --- | --- | --- | --- |

## Public Pain Signals

| Source | User language / pain | Segment | Evidence strength | Possible response | Status |
| --- | --- | --- | --- | --- | --- |
| r/replit runaway-charges thread | a builder reports losing `$355` in `10 days` from repeated agent charges | launch-stage builder | high | use cost-panic language, not generic launch-copy | active |
| developersIndia AI-cost discussion | cost caps are becoming the forcing function for more disciplined AI product decisions | builder / founder | medium | keep the planner framed around hard caps and fallback decisions | active |
| AI MVP launch checklist content | current launch guidance now treats daily caps, fallbacks, and logging as mandatory | founder / small team | medium | match the product to those concrete launch tasks | active |
| Archived SpecRelay feedback | stability-first and real-world launch pain still matter | founder/operator | low/medium | keep outputs practical and non-abstract | archive-only |

## Channels

| Channel | Audience fit | Rules / norms | Content angle | Account needed | Status |
| --- | --- | --- | --- | --- | --- |
| GitHub Pages | owned surface | factual product/support/privacy pages | product page, support, SEO | no | available |
| X | founder/build-in-public and targeted founder replies | factual, non-spammy, reply-context-sensitive | direct cost-cap and launch-guardrail questions | logged-in session | available; public action still gated |
| Hacker News | maker/discovery | account trust matters | launch-story or discussion around runaway AI cost | older/trusted account | currently blocked by `fnop=toonew` |
| GitHub Pages | owned surface | factual product/support/privacy pages | live planner and lightweight SEO | no | available |
| Hacker News | maker/discovery | account trust matters | Show HN or discussion | older/trusted account | currently blocked by `fnop=toonew` |

## Distribution Decision Loop

- The company chooses the next distribution direction from product stage, audience, public pain signals, channel rules, expected evidence speed, and account availability.
- Before treating a channel as blocked, check whether the account/session/page already exists through the most reliable available surface, such as browser, platform UI, public profile, repository settings, or existing company state.
- If the account/session does not exist or requires login, 2FA, service setup, credentials, payment, or host-app confirmation, record the exact dependency in `account-needs.md` and choose a fallback channel when useful work remains.
- Do not ask the user to define the acquisition rhythm. Record the chosen rhythm and readout plan in `acquisition-cadence.md`.

## Differentiation

- Current differentiated promise: no-login cost-cap planner for AI app launches, with a burn ceiling, fallback plan, and guardrail checklist in one pass
- Proof available: live MVP, exported plan, current public cost-pain signals, and a static zero-backend delivery path
- Proof missing: completed plans, direct founder intent, willingness to pay
- Most attackable niche: launch-stage AI founders and small teams before public traffic or paid acquisition

## Research Queue

| Priority | Question | Why it matters | Method | Status |
| --- | --- | --- | --- | --- |
| 1 | will founders complete a cost-cap plan before launch without being pushed by a crisis? | this decides whether Burn Ceiling is a real product or just good advice | live MVP plus founder-facing validation routes | active |
| 2 | which copy triggers stronger response: runaway-bill fear, launch discipline, or fallback confidence? | this shapes the first outward validation sprint | X/community copy staging after MVP ship | queued |
