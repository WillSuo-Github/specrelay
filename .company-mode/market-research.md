# Market Research

This file summarizes the active product research. The fuller research note is in `docs/market-research.md`.

## Decision

Active product: SpecRelay.

Segment: founders using AI app builders who need to turn a prototype into a launch QA checklist and engineering handoff packet.

Why this direction: the AI app-builder wave creates many working demos, but the next step is messy: test paths, data assumptions, auth/payment risk, mobile state, known issues, and contractor-readable scope. This gap is narrower and more defensible for a first MVP than broad security scanning or generic launch advice.

## Evidence Snapshot

- Stack Overflow 2025 Developer Survey: 84% of developers use or plan to use AI tools, while 46% do not trust AI-tool output accuracy and 45% cite time-consuming AI-code debugging.
- Veracode 2025 GenAI Code Security Report: 45% of tested AI-generated code samples failed security tests and introduced OWASP Top 10 vulnerabilities.
- Lovable's product positioning shows the category is explicitly telling users they can build full-stack apps and deploy quickly.
- Adjacent tools such as PageLens validate AI-era visibility workflows but do not address prototype-to-engineering handoff.
- 2026-05-07 scan: AI-app rescue and hardening services now explicitly market to Lovable/Bolt/Cursor/Replit-style projects, and AppHandoff appears to be a direct adjacent SaaS benchmark for Lovable-to-production handoff.

## Positioning

SpecRelay is the handoff packet between a vibe-coded prototype and a serious launch review.

Near-term differentiation: stay lower-friction and earlier than repo-connected automation. SpecRelay should prove that a founder-filled stability-first packet helps before an audit, rescue quote, or agency scoping call.
