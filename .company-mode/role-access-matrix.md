# Role Access Matrix

Last updated: `2026-05-03`
Scope: one-product company instance
Current company stage: public MVP live, first external distribution staged

## Reading this matrix

- `Ready`: enough access for the current stage
- `Partial`: can work, but future execution will hit clear blockers
- `Blocked`: missing a critical capability even for the current stage

## Product/CEO

- Current responsibilities: choose product thesis, define target user, set priorities, update company state, run after-action company reviews, classify kernel vs instance improvements, and enforce hard gates
- Verified access: local repo and company state
- Status: Ready
- Main blockers: final public actions remain approval-gated

## Engineering

- Current responsibilities: inspect/build product code, create the smallest shippable unit, add instrumentation, and keep technical state current
- Verified access: local codebase, GitHub Pages deployment path, public live URL
- Status: Ready
- Main blockers: no backend analytics; qualitative learning is the current priority

## Design

- Current responsibilities: define UX direction, improve onboarding and copy, and ensure release-facing visuals are deliberate
- Verified access: local assets and public app
- Status: Ready
- Main blockers: Product Hunt gallery assets are not needed until later launch packaging

## Growth

- Current responsibilities: shape positioning, run zero-spend distribution experiments, and monitor market response
- Verified access: Hacker News logged-in Chrome session for account `willsuo`; owned GitHub release and feedback issue are live
- Status: Partial
- Main blockers: HN `submit` click requires final action-time confirmation; other channels still need account/composer access

## Support/Research

- Current responsibilities: run cheap demand research, triage feedback, watch competitors, and synthesize repeated pain points
- Verified access: public GitHub feedback issue and local feedback log
- Status: Partial
- Main blockers: no external feedback yet

## Release/Ops

- Current responsibilities: prepare release path, account guardrails, launch checklists, monitoring, and rollback readiness
- Verified access: GitHub Pages public URL, GitHub release, local automation spec
- Status: Ready
- Main blockers: HN public submission remains gated

## Summary

- `Ready`: Product/CEO, Engineering, Design, Release/Ops
- `Partial`: Growth, Support/Research
- `Blocked`:

## What this means

- Current interpretation: SpecRelay is technically shippable and has an HN distribution path staged; market evidence is still missing.
- Highest-leverage next upgrades: click HN `submit` after final approval, then monitor replies and capture exact feedback language.
