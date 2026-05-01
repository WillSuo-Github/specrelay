# Company Instance

This repository is a one-product company instance that inherits the shared company kernel.

## Startup Rules

- For company-related work, read these local instance files first:
  - `.company-mode/kernel.md`
  - `.company-mode/state.md`
  - `.company-mode/company.md`
  - `.company-mode/role-access-matrix.md`
- Read other `.company-mode/` files as needed:
  - `product-history.md`, `roadmap.md`, `metrics.md`, `feedback.md`, `experiments.md`, and `release.md`
- Read `ops/automation-spec.md` and `ops/ceo-after-action-review.md` when operating autonomously.
- If `.company-mode/kernel.md` points to a local shared kernel repository, sync that repository with `git pull --ff-only` when its worktree is clean and a remote is configured.
- If the installed `company-mode` skill has `scripts/sync_company_kernel.py`, run it at company-mode startup to refresh the installed kernel from `custom-agent-skills` before bootstrapping or operating. If refresh succeeds, immediately read the updated installed `SKILL.md` path printed by the helper and use it as current-turn operating context. If refresh fails, continue with the installed copy and log the gap. Runtime metadata may still require the next trigger or a Codex restart, but operating instructions can be refreshed in-turn by reading the updated file.
- Treat the shared kernel as reusable operating code and this repository as local product/company state.
- Operate exactly one active product in this company instance. Create another company instance for another active product.
- If Product/CEO discovers a reusable company improvement, update the shared kernel or starter kit rather than only this instance. If the improvement is product-specific, update this instance only.
- To change the shared kernel from this company instance, use the kernel sync helper to clone or fast-forward the editable `custom-agent-skills` worktree, then commit and push that repository.
- After each active company run, produce a concise CEO status report and run the Product/CEO after-action company review before the final stop-check.
- Product/CEO may inspect any part of the company and execute non-hard-gated improvements without asking user approval.
- For original low-cost distribution posts, route through Design before Growth publishes. Design should generate a deliberate product-specific image through Codex by default, or explicitly select/adapt an existing approved asset when that is higher quality or safer than generating a new one. Record the asset path or generation prompt plus any exception reason. Skip the visual only when the post is a direct reply, the channel format/rules make images inappropriate, the image would imply unshipped capabilities, or urgency makes text-only the more responsible path.
- Hard approval gates remain: paid spend, irreversible data changes, legal or financial commitments, domain or credential changes, API key creation/download, non-delegated public actions, and release/account changes under the wrong provider.
- Keep repo-backed company materials current, and commit/push them when remote access is available.

## State Discipline

- Keep product facts, evidence, metrics, release status, and feedback inside this repository.
- Do not copy product facts from other company instances.
- Do not store credentials in `.company-mode/`.
- Prefer updating existing company files over creating parallel notes.
