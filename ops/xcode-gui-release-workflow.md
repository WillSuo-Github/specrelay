# Xcode GUI Release Workflow

Use this runbook when an iOS app company is doing Apple account-side signing, capabilities, archive, Organizer, or TestFlight work on the user's Mac.

## Rule

Prefer Xcode's GUI for Apple release work that depends on account, provider, team, provisioning profile, capability, App Group, or connected-device state.

Terminal commands are still useful for:

- Local simulator builds with signing disabled.
- Preflight scripts.
- Read-only project/build-setting inspection.
- Device and certificate inventory.
- Logs and post-action verification.

Do not keep pushing command-line packaging flags when the live problem is Xcode account/team/profile state. Open Xcode, inspect the visible team/provider/profile UI, and use the Product menu, Signing & Capabilities editor, Devices window, Archives window, and Organizer where they make the state safer to see.

## Typical Sequence

1. Run local preflight from the terminal.
2. Open the `.xcodeproj` or `.xcworkspace` in Xcode.
3. Select the intended scheme and a real connected device.
4. In each app/extension target, inspect Signing & Capabilities.
5. Confirm the selected team/provider exactly matches the approved team.
6. Add or verify capabilities such as App Groups through the Xcode UI.
7. Let Xcode repair or regenerate provisioning profiles only under the confirmed team.
8. Build and Run from Xcode on the physical device.
9. Use Xcode Organizer for archives and TestFlight upload when moving beyond device QA.
10. Use terminal commands afterward only to verify entitlements, profiles, logs, or build artifacts.

## Stop Conditions

Stop before clicking a final repair, register, upload, submit, or invite control if:

- Xcode shows the wrong team/provider.
- The Team ID is hidden or differs from the approved value.
- Automatic signing wants to create or use identifiers under the wrong team.
- A capability conflict appears under another account.
- The physical device is unavailable, untrusted, or not paired.
- The app would be uploaded or submitted before device QA passes.
