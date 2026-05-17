# Account Needs

- Last updated: `2026-05-17`
- Owner role: Release/Ops + Product/CEO
- Purpose: record external accounts, services, logins, credentials, or platform access the company needs the user to set up.

## Current Blocking Needs

The company is still in a real outside wait on replies, but one real readout dependency is now explicit: direct outreach replies are part of the primary evidence loop, and current local automation cannot reliably read Mail because both AppleScript access and `~/Library/Mail` filesystem access are blocked by macOS permissions.

| ID | Priority | Service / account | Needed for | Required user action | Why now | Fallback | Resume action after completion | Verification method | Next check cadence | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `ACC-0001` | high | macOS Mail readout permission for Codex/Terminal | reliable verification of Afterbuild / Bytewise reply state from the local machine | grant the current Codex/Terminal process the needed macOS permission path for Mail readout: either Automation access to control Mail via AppleScript, or filesystem access that allows reading `~/Library/Mail` metadata, whichever prompt/path the system exposes first | the company now depends on direct outreach replies as the primary readout source, and repeated heartbeats should not keep pretending inbox monitoring is reliable when the local permission surface is blocked | continue using GitHub issue state, Pages health, and any user-reported inbox observations; treat direct-email monitoring as partial until verified | rerun the local Mail readout checks, then record whether Afterbuild / Bytewise have replied and close or downgrade this need | successful local readout command returning deterministic sent/inbox results without permission denial or indefinite hang | every heartbeat until resolved or made stale | `user-action-needed` |

## Status Model

Use explicit statuses so account/service requests can resume without relying on memory:

- `proposed`: company identified a likely need but has not proven it is required.
- `requested`: company recorded the exact user action and resume plan.
- `user-action-needed`: waiting on the user to create an account, log in, finish 2FA, grant access, create a service, or complete another external step.
- `ready-for-verification`: user reports the step is done or the company sees evidence that access may now exist.
- `verified`: company verified the account/session/service/page through browser, app, public, repo-backed, or platform UI evidence.
- `resumed`: company executed the recorded resume action after verification.
- `closed`: dependency is no longer blocking and all related state files were updated.
- `blocked`: verification failed, access is insufficient, wrong account/team/provider is visible, or a hard gate remains.
- `stale`: request is no longer relevant because the company chose another path.

## Resume Loop

When the user completes a request or the company suspects access now exists:

1. Move the row to `ready-for-verification`.
2. Verify through the most reliable available surface before using the account or service.
3. If verification succeeds, set status to `verified`, run the exact resume action, then set status to `resumed` or `closed`.
4. If verification fails, set status to `blocked`, record what is missing, and choose a fallback if useful work remains.
5. Mirror material changes into `state.md`, `revenue-pipeline.md`, `release.md`, `market-map.md`, `signal-sources.md`, or `experiments.md` when affected.

## Watchlist

| Service / account | Possible future need | Trigger | Notes |
| --- | --- | --- | --- |
| Trusted Hacker News account | retry Show HN with a non-`fnop=toonew` account | only if HN becomes the next chosen channel again | not currently blocking the contractor/agency or founder-side path |
| Product Hunt account | launch packaging and post-launch discovery | only after stronger evaluator signal | not needed now |
| Lightweight analytics service | visitor / activation readout | only if the current wedge survives and qualitative feedback is still too thin | may require privacy and account setup |

## Request Format

When the company needs a new account or service, record:

- stable need ID
- service name and URL
- exact purpose
- why it is needed now
- what the user must do
- whether payment is involved
- whether credentials/API keys/certificates are involved
- safe fallback if the user does not complete it
- exact company action to resume afterward
- verification method
- next check cadence
- current status from the status model

## Completed Needs

| Date completed | ID | Service / account | Completed action | Verification evidence | Remaining limits |
| --- | --- | --- | --- | --- | --- |
