# Automation Spec

This file is the recoverable automation spec for this one-product company instance.

## Current App Automation

- Automation id: `specrelay-company-heartbeat`
- Kind: heartbeat attached to the current thread
- Status: active
- Current cadence: 12-hour wake while waiting for X outreach approval, another usable channel/account, direct outreach path, or external feedback
- Reason: public deployment, GitHub release, feedback issue, live-app feedback CTA, channel exploration, and X target discovery are complete; HN Show HN was attempted after approval but rejected with `fnop=toonew`, and no user feedback exists yet

## Policy

- Company automation may be instantiated in app-local storage, but the recoverable source of truth must live in this repository.
- Local automation ids, target thread ids, and app-local storage paths are not canonical.
- If `.company-mode/kernel.md` points to a shared kernel repository, sync that kernel before operating when its worktree is clean and a remote is configured.
- If the installed `company-mode` skill has `scripts/sync_company_kernel.py`, attempt to refresh the installed kernel from `custom-agent-skills` before every company-mode startup. If refresh succeeds, immediately read the updated installed `SKILL.md` path printed by the helper and use it as current-turn operating context. If refresh fails, continue with the installed copy and log the gap. Runtime metadata may still require the next trigger or a Codex restart, but operating instructions can be refreshed in-turn by reading the updated file.
- Once the user explicitly starts company operation, leave a self-wake heartbeat armed after every active run.
- Use a 10-minute next wake for non-external-wait states.
- Use a 12-hour next wake when the company is genuinely waiting on external product, market, user, review, or approval feedback.
- During an active run, do not stop merely because a subtask finished, a draft was produced, a summary was written, or several plausible internal tasks exist.
- Before the final stop-check, produce a CEO status report and run `ops/ceo-after-action-review.md`.
- Product/CEO may execute non-hard-gated improvements without asking user approval. Reusable improvements should update the shared kernel or starter kit.
- When running original low-cost distribution posts, route through Design before Growth publishes. Design should generate a deliberate product-specific image through Codex by default, or explicitly select/adapt an existing approved asset when that is higher quality or safer than generating a new one. Record the asset path or generation prompt plus any exception reason. Skip the visual only when the post is a direct reply, channel rules or format make images inappropriate, the image would imply unshipped capabilities, or urgency makes text-only the more responsible path.
- Do not treat one post, one draft, one image, or one concept as a complete low-cost distribution loop. When external signal is weak, run a real growth sprint: evidence scan, channel/rule check, at least two safe candidate actions, publication-quality verification, and readout plan.
- During weak-signal post-launch operation, visibility checks and feedback reads are only inputs. Each active run should materially advance one growth output before ending: a verified public post/reply staged to the exact final action-time gate, a rule-checked new channel, a public asset or SEO/support page moved closer to publication, a copy asset derived from real user language, or an evidence-backed channel prune. If one public action is gated, continue to the next non-gated growth task instead of reverting to monitoring-only work.
- Before clicking a final public `Post`, `Publish`, `Reply`, or equivalent control, verify the composer content through the most reliable available surface, including body text, links, and attached media. If screenshot, accessibility tree, DOM, or platform preview disagree, treat the composer as unsafe or stale and refresh, reopen, or re-stage before publishing.
- Hard approval gates remain: paid spend, irreversible data changes, legal commitments, domain or credential changes, API key creation/download, non-delegated public actions, and release/account changes under the wrong provider.

## Canonical Heartbeat Prompt

```text
Operate this one-product company instance from its durable state. At startup, refresh the installed company-mode kernel from `custom-agent-skills` with `scripts/sync_company_kernel.py --update-installed` when that helper is available; if refresh succeeds, immediately read the updated installed `SKILL.md` path printed by the helper and use it as current-turn operating context; if refresh fails, continue and log the gap. Runtime metadata may still require the next trigger or a Codex restart, but operating instructions can be refreshed in-turn by reading the updated file. Sync the shared company kernel first if `.company-mode/kernel.md` points to a clean local kernel repository with a configured remote. Read local repo instructions, `.company-mode/` files, `ops/automation-spec.md`, and `ops/ceo-after-action-review.md`. Assess the current product, evidence, blockers, permissions, active roles, and highest-leverage next action.

Continue the run until a real stopping point: outside-world wait, actual approval gate, or no meaningful internal work left. Execute bounded actions within delegated authority and update durable state when facts change. When signal is weak, treat visibility checks and feedback reads as inputs, not the main output. Run due low-cost distribution or learning actions as a real growth sprint rather than one isolated post: scan evidence, check rules, select at least two safe candidate actions, verify publication quality, and record a readout plan. Each active run should materially advance one growth output before ending: a verified public post/reply staged to the exact final action-time gate, a rule-checked new channel, a public asset or SEO/support page moved closer to publication, a copy asset derived from real user language, or an evidence-backed channel prune. If one public action is gated, continue to the next non-gated growth task instead of reverting to monitoring-only work. Original growth posts should route through Design before Growth publishes; Design should generate a deliberate product-specific image through Codex by default, or explicitly select/adapt an existing approved asset when that is higher quality or safer, and record the asset path or generation prompt unless a documented exception applies. Before any final public `Post`, `Publish`, or `Reply`, verify actual composer text, links, and media through reliable surfaces; if screenshot, accessibility tree, DOM, or preview disagree, re-stage rather than clicking a stale control.

Before the final stop-check, produce a CEO status report and run the Product/CEO company review. Classify improvements as instance-only, kernel, template, migration, or hard-gated. Execute non-hard-gated improvements without asking user approval. For reusable company improvements, use the kernel sync helper to get an editable `custom-agent-skills` worktree, then update the shared kernel or starter kit when accessible.

Respect hard gates on paid spend, irreversible data changes, legal commitments, domain or credential changes, API key creation/download, non-delegated public actions, and release/account changes under the wrong provider.

Before ending, choose the next wake outcome and keep the heartbeat armed: 10 minutes for internal work or short waits, 12 hours for genuine external waits. If repo-backed company materials changed, stage, commit, and push them when push access is available.
```
