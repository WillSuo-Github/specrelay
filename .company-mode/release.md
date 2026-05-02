# Release Ops

Last updated: 2026-05-02

## Current Release

- Product: SpecRelay
- Release type: static web MVP
- Version: 0.1.0
- Target date: 2026-05-01
- Platforms: local dev server first; static hosting after account/deployment path is confirmed
- Public URL: https://willsuo-github.github.io/specrelay/
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
- [ ] Review completed handoff packet rate
- [ ] Feed observations back into roadmap

## Known Gates

- Public deployment completed through the `WillSuo-Github/specrelay` project repository.
- GitHub Pages path is configured as a project site at `/specrelay/`, so it should not overwrite an existing account Pages site.
- Public posts remain action-time gated until final composer content and channel rules are verified.

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
- 2026-05-02: Live URL returned HTTP 200 during heartbeat; Open Graph/Twitter metadata added before first outreach.
