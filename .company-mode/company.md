# Company

## Company Instance

- Company name: `Mark-1 Company`
- Kernel model: shared company kernel plus one-product company instance
- Kernel repository: `https://github.com/WillSuo-Github/custom-agent-skills.git`
- Kernel local workspace: `/Users/willsuo/.agents/skills/company-mode`
- Kernel commit at bootstrap: `installed-copy`
- Canonical local workspace: `/Users/willsuo/files/Github/Mark/Mark-1`
- Bootstrap date: `2026-05-01`

## Product

- Working name: `none selected`
- Category: product selection
- Current stage: pre-product, no active product selected
- Primary platform: undecided
- Operating model: one company instance operates one active product. Other products should get their own company instances that share the same kernel.

## Target User

- Active target user: none selected
- Selection criteria: painful repeated workflow, zero-cost distribution path, plausible near-term monetization, and a bounded first evidence window
- Archived note: SpecRelay-specific target-user facts now live in `product-history.md`, `feedback.md`, and `docs/market-research.md`

## North-Star Metric

- Primary KPI: active product selected with one bounded first experiment
- Current baseline: 0
- First decision target: 1 selected next product with one target segment, one channel, and one stop rule
- Max evaluation window: 7 days from the next product-selection sprint start

## Distribution Thesis

- Primary acquisition channel: start from channels already available in the current environment, then choose the next product partly on channel fit
- Secondary channel: owned static web surface plus public research pages when they help validation
- Current positioning: no active public product; the public page is an archive notice while the company chooses the next product

## Delegated Authority

- Pre-approved actions: local research, code changes, build/test work, documentation, drafts, company operating files, product planning, reversible product improvements, and CEO after-action improvements that stay outside hard approval gates
- Approval-gated actions: paid spend, irreversible production or customer data changes, legal or financial commitments, domain or credential changes, API key creation/download, non-delegated public representative actions, and release/account changes under the wrong provider
- Spending limit: 0 unless explicitly approved

## Constraints

- Brand and tone: calm, technical, practical, founder-friendly
- Outbound company email sender preference: use `ws.software@outlook.com` for future company outreach emails unless the user explicitly overrides it for a specific send
- Progress accounting rule: monitoring-only or runbook-only heartbeat rounds do not count as company progress. If a clean next market action exists, allow at most one maintenance-only round before executing that action, stopping at its exact approval gate, or classifying the round as no-progress.
- Growth visual rule: original low-cost launch, progress, positioning, and experiment posts should normally include a deliberate product-specific image or graphic generated, selected, or adapted by Design through Codex before Growth publishes. Skip the image only for direct replies, unsuitable channel rules/formats, risk of implying unshipped capabilities, or urgent text-only responses.
- Tech constraints: first release must run as a static frontend without backend accounts, paid services, uploaded secrets, or external APIs
- Operating constraints: operate exactly one active product in this company instance
- Sunset constraint: do not reopen SpecRelay automatically. It is archived unless Product/CEO explicitly selects a bounded restart as the next active product.
- CEO after-action rule: after each active company run, report company status to Product/CEO, inspect the whole company, and execute any non-hard-gated improvement without asking user approval
- Kernel-evolution rule: if an improvement is reusable across companies, classify it as a kernel/template/migration improvement and update the shared kernel rather than only this instance
- Compliance constraints: do not fabricate external actions, customer feedback, product status, or market data
- Hard no-go zones: spend money without approval, make irreversible release/account/data changes casually, create or download credentials without approval, publish unverified claims, or run multiple active products inside this company instance
