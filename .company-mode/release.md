# Release Ops

Last updated: 2026-06-11 19:59 CST

## Current Release

- Product: Burn Ceiling
- Release type: public MVP live, company parked
- Version: MVP-1
- Target date: `2026-06-04`
- Platforms: static web app on GitHub Pages
- Public URL: https://willsuo-github.github.io/specrelay/
- GitHub release: https://github.com/WillSuo-Github/specrelay/releases/tag/v0.1.0
- Feedback issue: https://github.com/WillSuo-Github/specrelay/issues/1
- Local URL: http://localhost:4173/
- Rollback plan: the prior archive page can be restored quickly if this MVP must be taken back offline
- Park state: leave the truthful MVP online, but do not treat the live page as an active validation sprint while the company is paused

## Pre-Release Checklist

- [x] SpecRelay sunset and archive page deployed
- [x] Burn Ceiling MVP built
- [x] Burn Ceiling public page deployed
- [x] Burn Ceiling feedback path defined

## Post-Release Checklist

- [x] Prevent stale links from serving a live inactive product
- [x] Keep public URL truthful
- [ ] Watch for deploy/runtime errors on the live MVP page
- [x] Park company operations without removing the truthful MVP baseline
- [x] Replace archive page only after the Burn Ceiling MVP is ready

## Known Gates

- Public deployment remains through the `WillSuo-Github/specrelay` project repository.
- GitHub Pages path remains configured as a project site at `/specrelay/`, so the archive page still does not interfere with the account-level Pages site.
- Owned-channel GitHub release and feedback issue remain public as archived history until Burn Ceiling needs a cleaner owned feedback surface.
- No new public/community action should reuse SpecRelay positioning.

## Local Launch State

- Dev server: preview used for QA on `http://localhost:4173/specrelay/`
- Git branch: `main`
- Commit status: latest state includes the parked-company snapshot and resume baseline
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
- 2026-05-04: Live URL returned HTTP 200; GitHub release URL returned HTTP 200; feedback issue #1 had no comments.
- 2026-05-05: Live URL returned HTTP 200; GitHub issue #1 had no comments.
- 2026-05-05: Added and deployed a stability-first pass to the report and copied/downloaded Markdown after Jesse's feedback. `npm run build` passed; System Chrome Playwright QA passed for the stability section, copied Markdown content, no horizontal overflow at 390px and 1440px, and live GitHub Pages rendering.
- 2026-05-06: Live URL returned HTTP 200; GitHub issue #1 had no comments.
- 2026-05-07: Live URL returned HTTP 200; GitHub issue #1 had no comments.
- 2026-05-11: Live URL returned HTTP 200; GitHub issue #1 had no comments.
- 2026-05-15: Live URL returned HTTP 200; the latest GitHub Pages workflow `25847025844` had already completed successfully from commit `518881b`.
- 2026-05-07: Added and deployed no-login/no-repo-access positioning copy and metadata. `npm run build` passed; System Chrome Playwright QA confirmed the copy is visible and no horizontal overflow exists at 390px and 1440px locally. GitHub Pages deploy succeeded; live System Chrome QA confirmed the copy is visible at 390px with no horizontal overflow.

## Latest Growth Ops

- 2026-05-03: Documented channel exploration in `docs/channel-exploration.md`; recommended sequence is direct outreach, Hacker News Show HN, Indie Hackers/LinkedIn/X, Product Hunt later, and cautious Reddit replies.
- 2026-05-03: Staged HN Show HN submission in Chrome with title and URL only; after user confirmation, clicked `submit`, but HN rejected it with `fnop=toonew`, so no public HN post exists.
- 2026-05-03: Used X search to identify first-wave evaluator targets and staged reply/DM drafts in `docs/x-target-discovery.md`.
- 2026-05-03: After user confirmation, verified and sent six no-link X public replies to first-wave targets. Reply IDs: `2050832045006610903`, `2050832292898373859`, `2050832536507736227`, `2050832826090901529`, `2050833116072485365`, `2050833448395513980`. No likes, follows, reposts, standalone posts, URL drops, or DMs were sent.
- 2026-05-04: X notifications showed one direct response from `@FSfakiotakis` and one weak like from `@LechMazur`; no public follow-up was sent because follow-up replies remain action-time gated.
- 2026-05-04: User confirmed the `@FSfakiotakis` follow-up, but X rejected the staged text as 24 characters over the limit. No public follow-up was sent; a shorter no-link replacement is staged in `docs/x-target-discovery.md`.
- 2026-05-04: User confirmed the shortened `@FSfakiotakis` follow-up; verified target context and remaining character count, then sent the no-link public reply. Reply ID: `2051170192831754257`.
- 2026-05-04: User confirmed the next X public outreach action; verified each composer and sent one URL follow-up to `@LechMazur` plus two no-link second-wave replies to `@jessecolesmith` and `@HitenDharpure`. Reply IDs: `2051204028726694249`, `2051204162902532143`, `2051204299905233251`.
- 2026-05-05: X notifications showed a direct `@jessecolesmith` reply and a weak `@FSfakiotakis` like on the no-link follow-up. No public reply was sent because the next Jesse follow-up with URL remains action-time gated.
- 2026-05-06: X notifications showed no new useful response beyond the existing Jesse reply and Frank like. Prepared `docs/stability-first-evaluator-pack.md` as a non-public growth/research asset; no public post, reply, DM, like, follow, or repost was sent.
- 2026-05-06: User confirmed the staged Jesse follow-up; verified target context and composer content, blocked unrelated draft states from posting, then sent the stability-first URL reply. Reply ID: `2051718910630879706`.
- 2026-05-06: Follow-up heartbeat found no new useful X response after the Jesse URL follow-up and no GitHub issue comments. Prepared `docs/stability-first-target-discovery.md` from AI-app rescue, agency, and relevant Reddit handoff surfaces; no public post, reply, DM, like, follow, form submit, or repost was sent.
- 2026-05-07: X notifications showed no new useful response after the Jesse URL follow-up. Prepared `docs/contractor-agency-validation-sprint.md` and updated target discovery/market research with AppHandoff and AC Tech Labs; no public post, reply, DM, like, follow, form submit, call booking, paid audit, or repost was sent.
- 2026-05-11: X notifications still showed no useful new response after the Jesse URL follow-up. Prepared `docs/afterbuild-send-runbook.md` with the exact email route, composer checklist, and fallback sequence; no public post, reply, DM, like, follow, form submit, call booking, paid audit, or repost was sent.
- 2026-05-11: User confirmed the Afterbuild action. Sent the staged email to `hello@afterbuildlabs.com` from Apple Mail after verifying recipient, subject, body, single live URL, sender account, and no-attachment state. The sent message appeared in `All Sent`.
- 2026-05-12: GitHub issue #1 still had no comments, Apple Mail showed no inbound Afterbuild reply, and X notifications showed no useful new response after the Jesse URL follow-up. Prepared `docs/bytewise-fallback-runbook.md` with the exact second-touch route, trigger window, and message; no public post, reply, DM, follow, form submit, call booking, paid audit, or repost was sent.
- 2026-05-12: User later approved the Bytewise action; verification showed the email to `contact@bytewise.agency` had already been sent from Apple Mail at `2026-05-12 19:21:35 CST` from `willsuosuo@gmail.com`, so no duplicate send was made. Future company outreach emails should use `ws.software@outlook.com` unless explicitly overridden.
- 2026-05-13: GitHub issue #1 still had no comments, live URL returned HTTP 200, and no useful new X response was observed after the Jesse URL follow-up. Prepared `docs/ac-tech-labs-runbook.md` with the exact public form route, truthful field mapping, and framing risks; no public post, reply, DM, form submit, call booking, paid audit, or repost was sent.
- 2026-05-13: Re-checked GitHub comments, X notifications, and Mail inbox counts; still no useful external feedback. Prepared `docs/appstuck-runbook.md` with the exact async email route, fallback form route, and route-quality reasoning; no public post, reply, DM, form submit, call booking, paid audit, or repost was sent.
- 2026-05-14: User confirmed the next move. System Mail could not produce a verifiable AppStuck sent item from `ws.software@outlook.com`, so the public AppStuck contact form was submitted using that address instead. Submission success was verified by the `https://www.appstuck.com/contact/thank-you` redirect; no extra post, reply, DM, call booking, paid audit, or repost was sent.
- 2026-05-14: Later heartbeat found no new external signal. Prepared `docs/post-three-touch-decision-tree.md` with the hard checkpoint date, signal taxonomy, and continue/pivot branches for the current contractor/agency batch; no public post, reply, DM, form submit, call booking, paid audit, or repost was sent.
- 2026-05-15: Repo-backed checks still showed no new external signal: GitHub issue #1 had no comments, the latest deploy remained healthy, and the live URL returned HTTP 200. Prepared `docs/founder-stability-brief-pivot.md` so the founder-side adjacent wedge is ready if the current contractor/agency batch weakens at the hard checkpoint; no public post, reply, DM, form submit, call booking, paid audit, or repost was sent.
- 2026-05-18: User approved the replacement outreach after Afterbuild was corrected to delivery failure. Submitted the AC Tech Labs public contact form with truthful validation framing using `ws.software@outlook.com`; browser network trace verified `POST https://www.aclabs.io/api/contact` returned `200` with `{\"ok\":true}`. No call booking, paid audit, DM, or social post was made.
- 2026-05-18: Follow-up heartbeat confirmed the latest Pages workflow `25999304626` completed successfully, GitHub issue #1 still had no comments, and the live URL still returned HTTP 200.
- 2026-05-19: Follow-up heartbeat confirmed the latest Pages workflow `26019045739` completed successfully, GitHub issue #1 still had no comments, and the live URL still returned HTTP 200.
- 2026-05-19: Later follow-up heartbeat re-confirmed the same latest Pages workflow `26019045739` remained successful and the live URL still returned HTTP 200 while the current outreach batch stayed silent.
- 2026-05-20: Follow-up heartbeat confirmed the latest Pages workflow `26106387465` completed successfully, GitHub issue #1 still had no comments, and the live URL still returned HTTP 200 while the current outreach batch remained silent.
- 2026-05-21: Follow-up heartbeat confirmed the latest Pages workflow `26147682652` completed successfully, GitHub issue #1 still had no comments, and the live URL still returned HTTP 200 while the current outreach batch remained silent.
- 2026-05-22: Hard-checkpoint heartbeat confirmed the latest Pages workflow `26218772659` completed successfully, GitHub issue #1 still had no comments, and the live URL still returned HTTP 200 while the contractor/agency wedge closed without a verified reply.
- 2026-06-03: Sunset execution replaced the live SpecRelay packet generator with a static archive notice so stale links no longer point to an active product surface.
- 2026-06-04: Burn Ceiling MVP replaced the archive notice with a live planner surface. `npm run build` passed, and system Chrome QA confirmed desktop/mobile rendering, preset switching, feedback link, and no horizontal overflow at 390px.
- 2026-06-11: company operations were parked without changing the public product surface; the live URL remains the resume baseline and should be re-verified before any future restart.
