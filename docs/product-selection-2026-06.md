# Product Selection Sprint — 2026-06-03

## Outcome

- Previous product: `SpecRelay` is sunset and archived.
- Next selected product: `Burn Ceiling`
- Category: AI app cost-cap and launch-guardrail planner
- Selection reason: strongest combination of repeated pain, low-infrastructure MVP fit, fast evidence path, and lower competitive crowding than another generic launch checklist or another security-only scanner.

## Current Market Signals

### 1. Runaway cost is now a visible founder pain

- Replit builders are reporting real financial damage from runaway agent or model usage, including a public case of `$355` lost in `10 days` from repeated agent charges: [I am a Beginner Developer Facing a Financial Crisis Due to Replit's Agent Runaway Charges](https://www.reddit.com/r/replit/comments/1ryocv7/i_am_a_beginner_developer_facing_a_financial/)
- Broader builder discussion is already shifting toward cost caps as a forcing function for more disciplined product decisions: [all of a sudden AI there's a narrative change that AI doesn't replace?](https://www.reddit.com/r/developersIndia/comments/1ttjiyr/all_of_a_sudden_ai_theres_a_narrative_change_that/)

### 2. Current launch guidance increasingly treats cost caps as mandatory

- Recent AI MVP launch guidance explicitly calls out hard token or daily cost caps, fallbacks, and logging as non-negotiable before launch: [AI Startup MVP Launch Checklist 2026](https://speedmvps.com/blog/ai-startup-mvp-launch-checklist-2026)
- The same pattern appears in adjacent launch-checklist content, but mostly as advice or consulting content rather than a focused lightweight planner product.

### 3. Security scanning is real, but crowded

- There is strong pain around RLS, exposed keys, and auth/webhook failures, but the space already has multiple focused scanners: [VibeScan](https://vibe-scan.app/), [LaunchGuard](https://www.launchguard.dev/), [GetLeaked](https://getleaked.sh/)
- That makes security-demand real but weakens our odds of standing out quickly with another scanner-first wedge.

## Candidate Scorecard

Score dimensions: demand, build fit, distribution fit, monetization fit, evidence speed, reuse, risk. Each 0 to 5.

| Candidate | Demand | Build fit | Distribution fit | Monetization fit | Evidence speed | Reuse | Risk | Total | Decision |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Burn Ceiling — AI app cost-cap planner | 4 | 4 | 4 | 3 | 5 | 4 | 4 | 28 | selected |
| Public security smoke scan for vibe-coded apps | 5 | 3 | 4 | 3 | 4 | 4 | 2 | 25 | not selected |
| AI launch checklist / guardrail worksheet | 3 | 5 | 3 | 2 | 3 | 4 | 4 | 24 | too broad |
| Solo-founder morning ops brief for Supabase/Stripe/PostHog | 3 | 2 | 2 | 4 | 2 | 1 | 3 | 17 | too integration-heavy |

## Why Burn Ceiling Won

1. The pain is expensive, immediate, and already public.
2. A static planner MVP can test the wedge without backend, keys, or provider integrations.
3. The first workflow is concrete: estimate expected usage, set safe caps, choose fallback models, and export an action plan before launch.
4. It reuses the team's existing static-site, copy, and founder-channel execution path without repeating the same SpecRelay thesis.

## First MVP Shape

- Input:
  - app type
  - monthly active users or daily requests
  - model/provider mix
  - expected request size and output size
  - launch budget tolerance
  - whether fallback models, daily limits, logging, and kill switches exist
- Output:
  - daily and monthly burn ceiling
  - top 3 runaway-risk scenarios
  - recommended cap and alert thresholds
  - fallback plan
  - launch-day guardrail checklist

## First Experiment

- Experiment id: `EXP-0005`
- Window: `2026-06-03` to `2026-06-10 23:59 CST`
- Success threshold:
  - 5 completed guardrail plans, and
  - at least 2 strong-intent signals saying the planner would be used before launch or before turning on paid traffic
- Failure rule:
  - if the MVP launches and we still cannot get completion or strong intent inside the window, do not drift into another generic checklist product

## Explicit Rejections

- Do not restart `SpecRelay` without new evidence.
- Do not choose another generic launch checklist product; current search results already show that surface is crowded and low-differentiation.
- Do not choose an integration-heavy ops brief before we prove founders will even do a lighter planning step.
