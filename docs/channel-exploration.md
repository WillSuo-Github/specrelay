# Channel Exploration

Date: 2026-05-03

Product: SpecRelay

Goal: get 5 qualitative reviews from founders, contractors, or agencies who have built or reviewed AI-built prototypes.

## Decision

Do not spray every launch directory. SpecRelay needs high-signal evaluator conversations more than raw clicks.

Recommended sequence:

1. Direct outreach to founders, contractors, and agencies.
2. Hacker News Show HN if an HN account is available and the post is written as a human founder story, not marketing copy.
3. Indie Hackers or LinkedIn/X build-in-public post if the user's real account is available.
4. Product Hunt only after 5-10 early reviewers or at least a warmed audience and launch assets.
5. Reddit only as value-first replies or one carefully scoped r/SaaS post, never link dropping.

## Channel Matrix

| Channel | Fit | Why | Account needed | First action | Risks / rule notes | Verdict |
| --- | --- | --- | --- | --- | --- | --- |
| Direct founder/contractor/agency outreach | High | Fastest path to 5 qualitative reviews; lets us test buyer and use case directly | LinkedIn/X/email or intro path | Send 10 targeted messages using `docs/evaluator-outreach.md` | Manual outreach must come from a real account; no automation without approval | Use first |
| Hacker News Show HN | Medium-high | SpecRelay is live, free, and usable without signup; HN accepts early-stage work that users can try | Current HN account `willsuo` is not sufficient; older/trusted account needed | `Show HN: SpecRelay, handoff packets for AI-built prototypes` attempted after approval | HN says Show HN must be something users can try, not a landing page; no asking for upvotes; generated/AI-edited comments are disallowed; attempt was blocked with `fnop=toonew` | Blocked until older/trusted account |
| Indie Hackers | Medium-high | Founder audience can judge whether the handoff packet solves a real scoping pain | Indie Hackers account | Founder story asking for 5 reviews | Community marketing guidance emphasizes respecting self-promotion rules and leading with value | Use if account exists |
| X | High for current stage | Good for direct founder/contractor asks; live search already found AI-app-builder targets | X account available in Chrome | Use `docs/x-target-discovery.md` first-wave targets; start with specific replies before URL-heavy DMs | Low reach if account has no relevant audience; public replies and DMs need final composer verification | Active next channel |
| LinkedIn | Medium | Good for direct founder/contractor asks and build-in-public if the user's network has builders | Existing personal account strongly preferred | Post the prepared founder note with visual; DM 10 relevant people | Low reach if account has no relevant audience; public post needs final composer verification | Later |
| Product Hunt | Medium, later | Relevant categories include Vibe Coding Tools, AI Code Editors, No-code Platforms; official docs support maker-led launches | Personal Product Hunt account, completed onboarding | Create draft, do not launch immediately | Needs thumbnail, 2+ gallery images, first comment, pricing/status; launch without audience is likely low-signal | Prepare, launch later |
| Reddit r/SaaS / r/nocode / adjacent subs | Medium but high-risk | Good pain discovery if replying to relevant threads | Reddit account with history/karma | Find relevant question threads; answer with checklist, no link unless appropriate | r/SaaS added a once-per-60-days self-promo rule; Reddit punishes accounts that only promote | Use carefully |
| Uneed / Microlaunch / directories | Low-medium | Can provide backlinks and passive discovery | Platform account | Submit listing after core feedback loop | Lower immediate review quality; some listing platforms have queues or paid boosts | Later |
| BetaList | Low for now | Startup-listing audience is broad, not targeted to AI-builder handoff | BetaList account | Skip unless we want passive listing | Free/paid/queue status is uncertain; paid acceleration is gated | Skip for now |

## Accounts To Ask User For

Priority:

1. Hacker News account, ideally not brand-new.
2. Indie Hackers account.
3. Product Hunt personal account with onboarding completed.
4. LinkedIn or X account that can post under the founder's name.
5. Reddit account with history/karma.

Optional:

- Access to no-code community memberships such as The NoCode Community, NoCodeDevs, relevant Discord/Slack groups, or agency/freelancer communities.

## Prepared HN Draft

Title:

```text
Show HN: SpecRelay - turn AI-built prototypes into handoff packets
```

Body / first comment:

```text
I built SpecRelay after noticing a gap with AI app builders: it is easy to get a prototype that looks alive, but hard to hand that prototype to a contractor, agency, or customer reviewer.

The current version is intentionally small and static. It asks for the product, workflows, known issues, integrations, data sensitivity, and risk surface, then generates a launch readiness score, risk list, QA checklist, and developer handoff brief.

I am trying to learn whether this manual handoff packet is useful before building any automated scanner. The most useful feedback would be whether the output is concrete enough for a first engineering scoping call.

Live: https://willsuo-github.github.io/specrelay/
Feedback issue: https://github.com/WillSuo-Github/specrelay/issues/1
```

## Prepared Product Hunt Draft Inputs

- Name: SpecRelay
- Tagline: Turn AI-built prototypes into launch QA and developer handoff packets
- URL: https://willsuo-github.github.io/specrelay/
- Pricing: Free
- Status: Available
- Topics: Vibe Coding Tools, No-code Platforms, Developer Tools, Productivity
- First comment: adapt the HN draft, shorter and more founder-focused
- Missing assets before launch:
  - 240x240 thumbnail
  - at least 2 gallery images at 1270x760
  - optional short demo or animated walkthrough

## Sources

- Product Hunt help says a personal account is required to post and company accounts cannot hunt or post products: https://help.producthunt.com/en/articles/479557-how-to-post-a-product
- Product Hunt definitions explain maker-led launches, first comments, and relevant categories such as Vibe Coding Tools and No-code Platforms: https://www.producthunt.com/launch/definitions
- Hacker News Show HN guidelines say Show HN is for something people can try, ideally without barriers, and that users should not ask for upvotes: https://news.ycombinator.com/showhn.html
- Hacker News guidelines say not to use HN primarily for promotion and not to post generated or AI-edited comments: https://news.ycombinator.com/newsguidelines.html
- r/SaaS moderator rule limits self-promotion to once per 60 days and includes posts, comment plugs, links, and product mentions: https://www.reddit.com/r/SaaS/comments/1slno92/new_rule_against_selfpromo/
- Indie Hackers community-based marketing guidance emphasizes that every community has different self-promotion rules and those rules must be respected: https://www.indiehackers.com/post/guide-how-to-do-community-based-marketing-ee5c766673
