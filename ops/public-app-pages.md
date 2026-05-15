# Public App Pages

Use this runbook when an app company needs App Store support or privacy URLs. Treat the shared pattern as reusable precedent, not a mandatory route. The company may choose the shared pages, clean redirects, another existing approved support surface, or a product-specific page based on current implementation facts, privacy facts, release target, and account state.

## Reusable GitHub Pages Pattern

Default URL patterns:

- Support: `https://willsuo-github.github.io/apps/support/?app=<slug>`
- Privacy: `https://willsuo-github.github.io/apps/privacy/?app=<slug>`

Where `<slug>` is the lowercase app slug used in the GitHub Pages data file.

Optional clean redirects:

- `https://willsuo-github.github.io/<slug>/support/`
- `https://willsuo-github.github.io/<slug>/privacy/`

Use clean redirects only when a product-specific path is better for App Store Connect or customer support. The canonical reusable pages remain under `/apps/support/` and `/apps/privacy/`.

Before choosing a URL pattern, compare the current product with existing live WillSuo apps when available. Do not use a shared template to avoid making a product-specific privacy decision.

## Source Of Truth

GitHub Pages repository:

```text
/Users/willsuo/files/Github/willsuo-github.github.io
```

Data/config file:

```text
apps/app-data.js
```

Shared page shell:

```text
apps/support/index.html
apps/privacy/index.html
apps/app-page.js
apps/app-page.css
```

## Add A New App

1. Confirm the app's public name, lowercase slug, support email, and current privacy facts from the actual implementation.
2. Add a new entry to `apps/app-data.js`.
3. If useful, add clean redirect pages under `<slug>/support/index.html` and `<slug>/privacy/index.html`.
4. Update `sitemap.xml`.
5. Verify locally with a temporary static server.
6. Commit and push the GitHub Pages repository.
7. Verify the live support and privacy URLs return HTTP 200 and render the correct app-specific copy.
8. Record the final URLs in the company instance's release/TestFlight/App Store readiness docs.

## Safety Rules

- Do not edit an existing app's support/privacy copy unless the task is explicitly about that app.
- Do not point a new app at another app's support or privacy page.
- Do not publish privacy claims that are not grounded in the current implementation.
- If the app adds account sync, server processing, analytics, crash reporting, payments, support uploads, or third-party SDKs, update the app-specific privacy copy before using the URLs in App Store Connect.
- Publishing these pages is a public website change; it requires user authorization or existing delegated authority for that company instance.
