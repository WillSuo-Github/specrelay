# Authority Charter

- Last updated: `2026-05-15`
- Owner role: Product/CEO
- Purpose: let the company act without repeatedly asking for confirmation while preserving real platform, account, legal, and credential boundaries.

## Default Rule

Execute pre-authorized actions without asking the user for confirmation. Record what happened afterward in the relevant company state file.

If the action is blocked by login, 2FA, missing account, missing service access, credentials, platform UI confirmation, host-app permission, paid spend, or legal/compliance uncertainty, update `account-needs.md` with the exact user action required and stop at that dependency.

## Pre-Authorized Actions

| Area | Pre-authorized scope | Notes |
| --- | --- | --- |
| Local product work | Code changes, build/test/debug, app assets, docs, metadata drafts, reversible product improvements | Keep repo state current |
| GitHub Pages and owned GitHub surfaces | support/privacy/landing pages, release notes, public feedback issue copy, and factual product positioning for SpecRelay | Verify live URLs |
| Business model | selecting and updating the model hypothesis from evidence | Record in `business-model.md` |
| Signal sources | choosing and using product-appropriate evidence sources | Request missing services/accounts in `account-needs.md` |
| Market research | competitor, keyword, community, and public pain-signal research | Record in `market-map.md` |

## Still Blocked Unless Separately Delegated

| Boundary | Why blocked | Required handling |
| --- | --- | --- |
| Public social/community posts, replies with links, DMs, and new direct outreach | this instance has kept public/distribution actions behind action-time confirmation | stop at the exact final action gate and ask only for that move |
| Paid spend / paid ads | money leaves the account | ask through `account-needs.md` with amount and purpose |
| New paid services | creates recurring cost or billing dependency | ask through `account-needs.md` |
| New account creation | requires user identity, email, phone, 2FA, or terms acceptance | ask through `account-needs.md` |
| Credentials / keys / certificates | security-sensitive | ask through `account-needs.md`; never store secrets in `.company-mode/` |
| Legal/compliance claims | risky public representations | use approved templates or ask |
| Wrong Apple provider/team | release/account risk | verify before release action |
| Irreversible data/account/domain changes | hard to undo | ask explicitly |

## Release Authorization

- Apple developer account exists: irrelevant to the current SpecRelay static-web company path unless a future product path changes.
- Routine release allowed without extra chat confirmation: yes for this repo's GitHub Pages path and owned GitHub surfaces.
- Final platform controls may still require logged-in UI interaction, 2FA, or host-app confirmation. Treat those as external dependencies, not strategic approval gates.

## Change Log

| Date | Authority change | Reason | Scope |
| --- | --- | --- | --- |
| `2026-05-15` | aligned starter charter to the existing SpecRelay public-action gate | bootstrap created a more permissive social-post default than this instance actually uses | public distribution actions remain action-time gated |
