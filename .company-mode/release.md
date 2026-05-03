# Release Ops

Last updated: 2026-05-03

## Current Release

- Product: SpecRelay
- Release type: static web MVP
- Version: 0.1.0
- Target date: 2026-05-01
- Platforms: local dev server first; static hosting after account/deployment path is confirmed
- Public URL: https://willsuo-github.github.io/specrelay/
- GitHub release: https://github.com/WillSuo-Github/specrelay/releases/tag/v0.1.0
- Feedback issue: https://github.com/WillSuo-Github/specrelay/issues/1
- Local URL: http://localhost:4173/
- Rollback plan: static bundle can be removed or replaced; no production data exists

## Pre-Release Checklist

- [x] Production build passes
- [x] Desktop and mobile layout checked
- [x] Three sample packet presets checked
- [x] Copy Markdown action checked
- [x] Download Markdown action checked
- [x] In-packet review questions checked
- [x] Deployment path selected: GitHub Pages workflow staged
- [x] Initial growth channel rule check documented
- [x] First growth copy staged to final action gate with live URL
- [x] Link preview metadata prepared for public sharing

## Post-Release Checklist

- [ ] Watch for build/runtime errors
- [ ] Collect first 5 qualitative reviews
- [x] Document first external channel/account plan
- [ ] Review completed handoff packet rate
- [ ] Feed observations back into roadmap

## Known Gates

- Public deployment completed through the `WillSuo-Github/specrelay` project repository.
- GitHub Pages path is configured as a project site at `/specrelay/`, so it should not overwrite an existing account Pages site.
- Owned-channel GitHub release and feedback issue are public.
- Social/community posts and direct outreach remain action-time gated until final composer content, target account, and channel rules are verified.
- External channels require user-provided or user-approved accounts: the current Hacker News account is blocked by `fnop=toonew`; Indie Hackers, Product Hunt, LinkedIn/X, Reddit, or a direct email/intro path remain later options.

## Local Launch State

- Dev server: running at `http://localhost:4173/`
- Git branch: `main`
- Commit status: local history is committed and pushed to `origin/main`
- Public deploy command prepared in `docs/deploy.md`

## Latest Local QA

- 2026-05-01: `npm run build` passed after adding sample packet presets.
- 2026-05-01: Headless system Chrome check passed for sample switching, clipboard copy, Markdown download, and no horizontal overflow at 390px and 1440px.
- 2026-05-01: `npm run build` passed after adding review questions to copied/downloaded packets; headless system Chrome confirmed review questions appear in copied Markdown with no 390px overflow.
- 2026-05-01: GitHub Pages deployed at https://willsuo-github.github.io/specrelay/; curl returned HTTP 200 and headless system Chrome confirmed title, hero image, sample presets, and no 390px overflow.
- 2026-05-01: Pages workflow refreshed to `actions/configure-pages@v6` and `actions/upload-pages-artifact@v5`; redeploy succeeded.
- 2026-05-02: Live URL returned HTTP 200 during heartbeat; Open Graph/Twitter metadata added and verified in the live HTML before first outreach.
- 2026-05-02: Published GitHub release `v0.1.0`, updated repository description/homepage/topics, created feedback issue #1, linked it from release notes, and verified the release URL returned HTTP 200.
- 2026-05-03: Added and deployed a live-app feedback CTA to GitHub issue #1, included the feedback URL in copied/downloaded Markdown packets, and verified the live bundle contains the CTA/link.

## Latest Growth Ops

- 2026-05-03: Documented channel exploration in `docs/channel-exploration.md`; recommended sequence is direct outreach, Hacker News Show HN, Indie Hackers/LinkedIn/X, Product Hunt later, and cautious Reddit replies.
- 2026-05-03: Staged HN Show HN submission in Chrome with title and URL only; after user confirmation, clicked `submit`, but HN rejected it with `fnop=toonew`, so no public HN post exists.
