# Growth Sprint 001

Date: 2026-05-01

## Objective

Find the first AI-app-builder users or contractors willing to judge whether a SpecRelay packet is useful before handoff.

## Asset

- Visual asset: `public/spec-relay-hero.png`
- Generation prompt summary: founder handoff workflow from AI-built prototype to QA checks and engineering packet; no logos or readable text.

## Channel Rule Check

Checked: 2026-05-01

- Reddit general posture: Reddit's business guidance says communities vary, with some allowing self-promotion on specific days, some requiring disclosure, and some banning it; safest posture is useful participation before selling. Source: https://www.business.reddit.com/learning-hub/articles/smb-how-to-use-reddit
- r/SaaS: a moderator update from 2026-04-14 says self-promotion is limited to once per 60 days and includes posts, comment plugs, links, and product mentions. Source: https://www.reddit.com/r/SaaS/comments/1slno92/new_rule_against_selfpromo/
- Indie Hackers: community-based marketing guidance says every community has different self-promotion rules and the safe pattern is to provide value, not drop a link without context. Source: https://www.indiehackers.com/post/guide-how-to-do-community-based-marketing-ee5c766673
- Indie Hackers launch guidance also treats self-promotion as acceptable only when it is not spammy and follows the community guidelines. Source: https://www.indiehackers.com/post/how-to-bring-a-product-to-market-a-product-launch-checklist-36-steps-2eFoFLatE9R9yBmpLhHI
- r/EntrepreneurRideAlong: no primary rule source was captured in this run. Treat as a story-first channel and do a final live sidebar/rules check before posting.
- r/nocode: direct rule retrieval was inconclusive. Do not post a product link there until the live sidebar/rules can be verified in browser. Use only no-link, high-value replies if a relevant thread is found and rules allow it.

Rule-safe initial priority:

1. Use Indie Hackers, X, or LinkedIn for the build-in-public note after public URL exists.
2. Use r/SaaS only sparingly: no link-drop posts, no repeated product mentions, and only after checking whether the user's account has enough non-promotional participation.
3. Keep Reddit replies useful without a link by default; share the URL only when a user asks or the community rules clearly allow it.

## Candidate Action 1: Founder Build-In-Public Post

Channel candidates: X, LinkedIn, Indie Hackers.

Draft:

```text
I started SpecRelay today after researching the gap around AI-built apps:

AI builders make it easy to get a working prototype.
The hard part starts when a founder has to hand it to a contractor, customer, or launch reviewer.

The first MVP turns a Lovable/Bolt/Replit/Cursor-style prototype into:
- launch readiness score
- risk register
- QA checklist
- developer handoff brief
- downloadable Markdown packet

Looking for 5 founders or contractors who have reviewed an AI-built app and can tell me if this packet would save a handoff call.

URL: https://willsuo-github.github.io/specrelay/
```

Final gate: public post requires actual URL, attached visual verification, and action-time confirmation before clicking Post/Publish.

## Candidate Action 2: Useful Community Reply

Channel candidates: Reddit r/nocode, r/SaaS, r/EntrepreneurRideAlong; only reply to relevant threads where self-promotion is allowed or the reply can stand without a link.

Draft:

```text
For AI-built apps, I would not start with a generic launch checklist. I would make a handoff packet first:

1. list the 3-5 core workflows a customer must complete
2. mark which flows touch auth, payments, private data, admin roles, or email
3. record every known broken state with reproduction steps
4. write the contractor brief from those flows, not from a feature wish list
5. add one launch decision: what must be true before the next pilot

I am building a small tool that generates this packet from founder inputs. Happy to share once it is public, but the checklist above is the core pattern.
```

Final gate: verify channel rules and final composer content before any public reply.

## Readout Plan

- Count direct replies, comments, and requests for URL.
- Capture exact language users use for the pain.
- Ask evaluators to answer the review questions included in the copied/downloaded packet.
- Success threshold: 5 evaluations, 2 strong intent signals.
- Failure signal: users prefer automated scanning over manual handoff packet, or contractors say the packet is too generic.
