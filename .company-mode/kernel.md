# Kernel Link

- Kernel model: shared company kernel
- Kernel repository: `https://github.com/WillSuo-Github/custom-agent-skills.git`
- Kernel local workspace: `/Users/willsuo/.agents/skills/company-mode`
- Kernel branch: `main`
- Kernel commit at bootstrap: `installed-copy`
- Bootstrap date: `2026-05-01`

## Startup Policy

On company-mode startup, sync the shared kernel repository with `git pull --ff-only` when that kernel worktree is clean and a remote is configured. Then read this company instance's local `.company-mode/` state.

## Boundary

- Kernel files define reusable company operating behavior.
- This company instance owns its product facts, evidence, metrics, roadmap, feedback, release state, and account state.
- Do not copy product facts from another company instance into this instance.
- If this company discovers a generic operating improvement, update the shared kernel so other company instances benefit.
