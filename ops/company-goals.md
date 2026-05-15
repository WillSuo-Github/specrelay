# Company Goals

This runbook defines the repo-backed goal layer for this one-product company instance.

## Canonical Rule

Keep the instance's durable top-level goal at `.company-mode/goal.md`. App-local goal surfaces, including any Codex Goal feature, are mirrors unless they are synced back into the file.

## Required Sections

- `Goal Statement`: the durable reason this company instance exists now.
- `Current Milestone`: the nearest evidence-producing checkpoint.
- `Success Conditions`: measurable or observable conditions that justify continuing.
- `Stop / Pivot Conditions`: conditions that trigger park, sunset, or product-selection work.
- `Current Constraints`: hard constraints that shape execution.
- `Codex App Goal Sync`: how to mirror the file into any available app Goal surface.

## Operating Rules

- Product/CEO owns the goal.
- Read the goal during startup, next-action selection, CEO after-action review, and continuation/sunset decisions.
- Do not bury a material goal change only in `state.md`, roadmap, or chat history.
- Keep product-specific facts out of the shared kernel. The kernel owns the schema and habit; this instance owns the goal content.
- If Codex exposes a first-class Goal API/tool, sync from `.company-mode/goal.md` to that surface and record the sync result in state. If no tool is exposed, continue using `.company-mode/goal.md`.
