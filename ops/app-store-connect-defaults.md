# App Store Connect Defaults

Use this runbook when a WillSuo-owned app company needs repeatable App Store Connect metadata. Treat it as reusable precedent, not a mandatory route. The company decides which fields fit the current product after checking implementation facts, release target, existing live apps, account/provider state, and privacy facts.

These are user-approved reusable operating defaults as of `2026-05-03`. They are not credentials. Do not store Apple passwords, 2FA material, API keys, certificates, private keys, provisioning profile secrets, or App Store Connect API key downloads in the company kernel.

## Reusable Contact Defaults

- Feedback email: `ws.software@outlook.com`
- Support email: `ws.software@outlook.com`
- App Review contact first name: `Yanke`
- App Review contact last name: `Li`
- App Review contact email: `ws.software@outlook.com`
- App Review contact phone: `+8618737090323`
- Copyright pattern: `<current year> will suo`
- Legal address: not recorded in the shared kernel; ask before using if App Store Connect, a public support page, or a legal document requires it.

## Reusable App Store Connect Patterns

- Primary language default: `English (U.S.)`, unless the product is clearly localized first.
- SKU pattern: `<app-slug>-ios-001` for first iOS SKU; keep SKU stable once used.
- Support URL pattern: `https://willsuo-github.github.io/apps/support/?app=<slug>`
- Privacy Policy URL pattern: `https://willsuo-github.github.io/apps/privacy/?app=<slug>`
- Optional clean support redirect: `https://willsuo-github.github.io/<slug>/support/`
- Optional clean privacy redirect: `https://willsuo-github.github.io/<slug>/privacy/`
- Marketing URL: leave blank until a real product page exists.
- User Privacy Choices URL: leave blank unless the app has privacy choices that require a separate page.
- Demo account: `Not applicable` when the app has no login; otherwise create product-specific credentials outside the shared kernel.
- Sign-in required: `No` only when the actual app has no account gate.

## Apple Team Guardrails

- Keep each company instance pinned to one explicitly confirmed Apple provider/team for the active product.
- Do not store live Apple Team IDs, provider ids, or product-specific team-avoid lists in the shared kernel; record them in the company instance's `.company-mode/` or release docs instead.
- When a user usually ships under a personal Apple account, prefer that personal team by default unless the instance-specific release policy says otherwise.

Always confirm the visible App Store Connect provider and Apple Developer Team ID at action time before creating an app record, registering bundle IDs, changing signing settings, creating App Groups, uploading TestFlight builds, submitting, or inviting testers.

## Fields That Remain Product-Specific

- App name, subtitle, category, keywords, description, screenshots, icon, app preview, version, build number, bundle IDs, App Groups, and privacy labels.
- Age rating questionnaire answers.
- Content rights answer.
- Export compliance answer.
- Availability and territory choices.
- Pricing, paid apps agreement, IAP, subscription, and tax/banking fields.
- Any legal representation beyond routine App Store metadata.

## Use In A Company Instance

1. Check existing live WillSuo apps and this product's local implementation before choosing metadata patterns.
2. Copy only the defaults that match the current product, privacy posture, and release goal.
3. Derive app-specific fields from local `.company-mode/` state and the actual codebase.
4. Record the final chosen fields in the instance's release, TestFlight, or handoff docs.
5. Re-check live support/privacy URLs before entering them in App Store Connect.
6. Stop before account-side mutation if the team/provider is hidden, ambiguous, or not the confirmed target.
