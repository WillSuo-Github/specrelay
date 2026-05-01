# SpecRelay Market Research

Last updated: 2026-05-01

## Market Signals

- AI-assisted software creation is mainstream, but trust is weak. Stack Overflow's 2025 Developer Survey reported 84% of developers use or plan to use AI tools, while 46% do not trust AI-tool output accuracy and 45% say debugging AI-generated code is time-consuming.
- AI-generated code introduces concrete security risk. Veracode's 2025 GenAI Code Security Report found 45% of tested AI-generated code samples failed security tests and introduced OWASP Top 10 vulnerabilities.
- The visible AI-app-builder category is moving beyond technical users. Lovable positions itself as a full-stack engineer replacement with GitHub sync and one-click deploy, which makes the downstream readiness gap visible to non-engineers.
- Existing adjacent tools cluster around SEO/AI visibility monitoring, security scanning, or generic launch checklists. PageLens, for example, focuses on always-on marketing visibility across Google, AI answers, Reddit, LinkedIn, and reviews, not prototype-to-engineering handoff.

## User Pain

Primary segment: nontechnical or semi-technical founders who used Lovable, Bolt, Replit, Cursor, or v0 to build a working prototype and now need help before a customer pilot, contractor handoff, or public launch.

Observed pain pattern:

- They can produce screens and flows, but they cannot reliably say what is complete, risky, or engineer-ready.
- They struggle to brief a contractor because the artifact is a running prototype, not a scoped spec with test paths, data assumptions, and known defects.
- They often discover launch blockers late: auth flows, mobile breakage, missing analytics, role permissions, data retention, payment states, and email deliverability.

## Competitive Map

| Category | Examples | Gap |
| --- | --- | --- |
| AI app builders | Lovable, Bolt, Replit, Cursor, v0 | Generate prototypes; do not create neutral launch proof or contractor-ready handoff packets. |
| AppSec scanners | Veracode, Snyk, Semgrep | Too technical and broad for a founder trying to explain prototype risk to a contractor. |
| Launch checklists | Notion templates, indie launch lists | Generic; not tied to AI-generated app failure modes or engineering handoff. |
| AI/GEO visibility tools | PageLens and similar tools | Solve discovery and marketing visibility, not app readiness or delivery risk. |

## Product Decision

Build SpecRelay: a zero-login web tool that converts founder inputs about an AI-built prototype into:

- Launch readiness score
- Priority risk register
- Workflow-specific QA checklist
- Engineering handoff brief
- Copyable/downloadable Markdown packet

MVP excludes automated code scanning, browser crawling, paid accounts, backend storage, and legal/security certification claims. That keeps the first release reversible, fast to validate, and below approval gates.

## First Hypothesis

If SpecRelay can generate a useful contractor-ready packet in under 10 minutes, founders will use it as a bridge between AI prototype creation and paid engineering help.

## First Success Signal

Within the first validation window, get at least 5 qualitative evaluations from AI-app-builder users or contractors, with at least 2 saying they would use the packet before a handoff call.

## Sources

- Stack Overflow, 2025 Developer Survey press release: https://stackoverflow.co/company/press/archive/stack-overflow-2025-developer-survey/
- Veracode, 2025 GenAI Code Security Report summary: https://www.veracode.com/report/genai-code-security-report/
- Lovable product positioning: https://lovable.dev/
- PageLens positioning: https://pagelens.ai/
