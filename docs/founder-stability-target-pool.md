Date: 2026-05-17

Status: non-public target pool for the staged founder-side pivot. Do not post, DM, comment, or email from this list without action-time approval.

## Purpose

If the contractor/agency wedge fails at the `2026-05-21 23:59 CST` checkpoint, the company should not spend another run rediscovering where founder-side pain already shows up.

This document narrows the founder-side fallback to concrete public surfaces, concrete buyer language, and one exact future approval candidate.

## Read This As

- Not proof of demand
- Not permission to contact
- A ranked queue of founder-side targets that already use the right language

## What Counts As A Fit

Good founder-side targets talk about at least one of these:

1. the demo works, but launch confidence is low
2. real users expose auth, billing, or deployment problems
3. the founder is debating whether to fix it alone, hire help, or bring in a technical partner
4. the founder would rather freeze the core flows and blockers before outside help

Bad targets:

- repo-migration buyers already asking for a full code audit
- general “what are you building” threads with no launch pain
- threads where the norm is product promotion rather than workflow discussion

## Ranked Target Pool

### 1. r/replit: “The hard part isn’t building the Replit app anymore”

- URL: https://www.reddit.com/r/replit/comments/1tdllz4/the_hard_part_isnt_building_the_replit_app_anymore/
- Why it fits:
  - the post explicitly names the gap between “the demo works” and “I can confidently launch this”
  - the prompt lists the exact hidden-failure surfaces SpecRelay is trying to freeze: login, payments, uploads, emails, data exposure, customer-session breakage
  - comments show hands-on founders already living through launch-readiness cleanup
- Best route if pivot activates: no-link public reply
- Signal quality if engaged:
  - strong positive: “yes, I would fill out a brief like that before launch”
  - useful negative: “no, I would still just click around and fix it ad hoc”

### 2. r/SaaS: “Founders who built a SaaS with AI: when it first broke with real users, what did you actually do?”

- URL: https://www.reddit.com/r/SaaS/comments/1sll4ef/founders_who_built_a_saas_with_ai_when_it_first/
- Why it fits:
  - the post is already framed as research, not promotion
  - the top replies name auth edge cases, billing webhooks, admin-path issues, and the jump from demo to deployed traffic
  - this is the closest public founder thread to the “stability brief before launch/help” hypothesis
- Best route if pivot activates: no-link public reply
- Risk:
  - thread can drift toward “hire a dev / rebuild / use a better platform” advice
  - reply must stay practical and non-promotional

### 3. r/lovable: “12 Years of Coding and 100+ Apps Later. What I Wish Non-Tech Founders Knew About Building Real Products”

- URL: https://www.reddit.com/r/lovable/comments/1rhgnz1/12_years_of_coding_and_100_apps_later_what_i_wish/
- Why it fits:
  - the post is aimed at non-technical founders using Lovable
  - it explicitly says what works with test data often breaks with real users
  - it lists pre-launch hardening checks that map cleanly to a smaller stability brief
- Best route if pivot activates: no-link public reply or comment under a relevant subthread
- Use case:
  - good for validating whether founders want a lighter “freeze flows + blockers + launch decision” artifact instead of a full handoff packet

### 4. r/lovable: “Is there anyone here launched their SaaS with lovable and earning money?”

- URL: https://www.reddit.com/r/lovable/comments/1qfbgn3/is_there_anyone_here_launched_their_saas_with/
- Why it fits:
  - at least one respondent is launched, making some revenue, and still looking for a co-founder to maintain before scaling
  - another says they are about to sign pilots but want to take the app out of Lovable and own the tech
  - this is closer to “I need to stabilize before outside help” than generic launch hype
- Best route if pivot activates: direct founder-side message only if a clean reply path exists and approval is granted
- Risk:
  - older thread
  - some participants are already beyond the smallest self-serve brief

### 5. Indie Hackers: “I review AI-built codebases for a living. Here's what's actually inside them.”

- URL: https://www.indiehackers.com/post/i-review-ai-built-codebases-for-a-living-heres-what-s-actually-inside-them-3551f1ed14
- Why it fits:
  - it frames the exact invisible problems after the polished demo: security, testing, architecture, payment verification, vendor lock-in
  - it establishes that the buyer pain exists, but currently through service/audit language
  - it is useful as adjacent proof that founders hit this wall after visible product success
- Best route if pivot activates: comment only if an Indie Hackers session becomes available later; for now, use as positioning evidence, not an immediate outreach target
- Risk:
  - closer to service/audit framing than founder self-serve behavior

### 6. r/SaaS: “Non-tech founders building SaaS, how did you actually do it?”

- URL: https://www.reddit.com/r/SaaS/comments/1t55c3x/nontech_founders_building_saas_how_did_you/
- Why it fits:
  - the thread shows founders actively weighing DIY, agency, and co-founder routes
  - it is a useful surface for the narrower question: before you hire help, do you first freeze the core flows and blockers?
- Best route if pivot activates: no-link public reply only if the thread still has active discussion
- Risk:
  - less acute launch pain than the top three threads

## Exact First Approval Candidate

If `EXP-0003` resolves silent/negative and Product/CEO activates the founder-side pivot, the narrowest next approval candidate should be:

- Route: no-link public reply in the r/replit thread above
- Reason:
  - freshest target
  - explicit launch-confidence pain
  - users already discussing “looks done” versus “is ready”
  - low risk of over-claiming if the reply stays workflow-first

## Exact Second Approval Candidate

If the first candidate is stale, removed, or clearly hostile to non-promotional replies:

- Route: no-link public reply in the r/SaaS “when it first broke with real users” thread

## No-Link Reply Shape

Use this shape, then trim to thread context:

```text
The pre-launch artifact that feels realistic to me for AI-built apps is smaller than a full spec:

1. lock the 3-5 flows that must keep working
2. note the blockers you actually hit while using it
3. mark the risky paths those blockers touch
4. decide ship now, fix first, or hold
5. hand that brief to the next person instead of vague requirements

Curious whether people here would actually fill that out before launch or before asking for help.
```

## What Would Count As Useful Readout

Strong positive:

- “Yes, I would fill that out before launch.”
- “Yes, I would do that before bringing in a developer.”
- “That is smaller and more realistic than a full handoff doc.”

Weak positive:

- agreement that this is sensible, but no commitment to use it
- “I would maybe do it if very short”

Negative:

- “No, I would still just test manually and start fixing things”
- “I only care about repo scanning / audit automation”
- “I would never document this before asking for help”

## Source Notes

- Reddit / r/replit thread published `2026-05-15`: demo-to-launch confidence gap and concrete hidden-failure questions
- Reddit / r/SaaS thread published `2026-04-14`: real-user breakage and founder response options
- Reddit / r/lovable thread published `2026-02-28`: launch hardening checklist for non-technical founders
- Reddit / r/lovable monetization thread published `2026-01-17`: launched founders discussing maintenance, pilots, and co-founder/ownership concerns
- Indie Hackers post by Pawel Reszka published `2026-04-23`: recurring invisible failures in AI-built codebases after the polished MVP stage
