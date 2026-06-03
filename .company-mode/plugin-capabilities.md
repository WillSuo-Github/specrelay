# Plugin Capabilities

- Last updated: `2026-06-03`
- Owner role: Product/CEO + Release/Ops
- Purpose: record which specialist plugins are applicable, ready, partial, blocked, or not applicable for this one-product company instance.

## Current Readiness

| Plugin | Applicability | Readiness | Best company use | Required preflight / context | Current blocker | Fallback workflow | Resume action | Evidence source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Data Analytics | evaluate per bottleneck | unknown | KPI design, metric diagnostics, experiment readouts, dashboards, reports, market sizing | Data Analytics user-context preflight | none recorded | use reviewed `.company-mode/` files, App Store/public surfaces, CSV/export, or pasted data | run preflight when quantitative workflow is selected | `references/plugin-capability-routing.md`, `signal-sources.md` |
| Product Design | evaluate per bottleneck | unknown | UX audits, design briefs, visual ideation, prototypes, release visuals, design QA | Product Design user-context preflight; `get-context` for design/build work | none recorded | use existing screenshots/Figma/code and native platform judgment | run Product Design preflight and `get-context` when design workflow is selected | `references/plugin-capability-routing.md`, `roadmap.md`, `release.md` |
| Sales | conditional | not applicable until B2B motion is recorded | account research, meeting prep, call follow-up, deal strategy, customer-development, business cases | Sales user-context preflight | no B2B/license/account/deal motion recorded | use public pain signals and zero-cost consumer channels | enable only after `business-model.md` or `revenue-pipeline.md` records a B2B/customer-development hypothesis | `business-model.md`, `revenue-pipeline.md` |

## Readiness Status Model

- `unknown`: the company has not checked whether the plugin is useful or available for this product.
- `not applicable`: the plugin does not fit the current business model, stage, or bottleneck.
- `candidate`: the plugin may fit the current bottleneck but has not been selected for a workflow.
- `ready`: the plugin workflow can run with available context and no known blocker.
- `partial`: the plugin can help, but source/context gaps reduce confidence.
- `blocked`: a required account, connector, source, visual target, transcript, CRM, dashboard, or other dependency is missing.
- `retired`: the company intentionally stopped using this plugin for the current product path.

## Source And Context Needs

| Plugin | Required source / context | Why it matters | Account need ID | Status | Fallback | Next check |
| --- | --- | --- | --- | --- | --- | --- |

When a plugin is blocked by a required source, connector, account, login, transcript, CRM, dashboard, visual target, service, SDK, or privacy review, mirror the exact dependency into `account-needs.md`.

## Portable Data Analytics Setup

Data Analytics source routing is machine-local. It should not be committed with this company instance, and it must not contain credentials.

When this company instance is deployed to a new computer, run this from the loaded `company-mode` skill directory before the first Data Analytics workflow:

```bash
python3 scripts/configure_data_analytics_sources.py --target <workspace> --profile apple-local-cli
```

This configures the new machine to use local `asc` readouts or reviewed exports for App Store metrics, Firebase CLI or reviewed exports for behavior/config signals, local repo and `.company-mode` files for company docs, and manual/pasted context for sources that are not connected yet. The script never reads or writes App Store Connect keys, Firebase tokens, plugin auth, passwords, or private customer data.

## Routing Notes

- Company Mode chooses the business bottleneck and final decision. Plugins own specialist workflow execution only.
- Do not run Sales for consumer-only App Store growth unless `business-model.md` or `revenue-pipeline.md` records a B2B, license, enterprise, account, deal, meeting, or customer-development motion.
- Do not run Product Design implementation without the required Product Design context path and a visual/source target when that plugin requires one.
- Do not let Data Analytics fabricate missing metrics, dashboards, semantic layers, accounts, SDKs, or data warehouses.
- Never store credentials, API keys, passwords, private customer contact details, or raw secret-bearing connector outputs in this file.

## Usage Log

| Date | Plugin | Company bottleneck | Workflow used | Result | State files updated | Next action |
| --- | --- | --- | --- | --- | --- | --- |
