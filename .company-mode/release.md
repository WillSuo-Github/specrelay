# Release Ops

Last updated: 2026-05-01

## Current Release

- Product: SpecRelay
- Release type: static web MVP
- Version: 0.1.0
- Target date: 2026-05-01
- Platforms: local dev server first; static hosting after account/deployment path is confirmed
- Public URL: not assigned; local URL is http://localhost:4173/
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
- [ ] First growth copy staged to final action gate

## Post-Release Checklist

- [ ] Watch for build/runtime errors
- [ ] Collect first 5 qualitative reviews
- [ ] Review completed handoff packet rate
- [ ] Feed observations back into roadmap

## Known Gates

- Public deployment requires creating/pushing a GitHub repository and enabling Pages under the user's GitHub account.
- Public posts remain action-time gated until final composer content and channel rules are verified.

## Local Launch State

- Dev server: running at `http://localhost:4173/`
- Git branch: `main`
- Commit status: local history is committed; run `git log --oneline -3` for the latest exact SHA
- Public deploy command prepared in `docs/deploy.md`

## Latest Local QA

- 2026-05-01: `npm run build` passed after adding sample packet presets.
- 2026-05-01: Headless system Chrome check passed for sample switching, clipboard copy, Markdown download, and no horizontal overflow at 390px and 1440px.
- 2026-05-01: `npm run build` passed after adding review questions to copied/downloaded packets; headless system Chrome confirmed review questions appear in copied Markdown with no 390px overflow.
