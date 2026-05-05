# Stability-First Evaluator Pack

Date: 2026-05-06

Status: non-public growth and research asset. Do not post or send without action-time confirmation.

## Why This Exists

SpecRelay's first useful signals narrowed the wedge:

- Frank Sfakiotakis: simple founder-maintained Lovable apps may not need a packet until someone else reviews or changes them.
- Jesse Smith: hands-on domain builders may not start from a spec; they play with the app, promote improvements from observed issues, and start with stability/basic features.

The next validation ask should therefore test a sharper promise:

```text
Before someone else improves an AI-built app, freeze the basic flows, capture observed issues, QA the affected paths, and hand that stability-first packet to the reviewer or contractor.
```

## Best-Fit Evaluators

| Segment | Why they are useful | Screen for |
| --- | --- | --- |
| Contractor inheriting AI-built prototypes | Can judge whether the packet saves a scoping call | Has received Lovable/Bolt/Replit/Cursor/v0 work from a founder |
| Agency intake owner | Can say whether the packet fits intake workflow | Reviews prototypes before quoting or assigning engineers |
| Hands-on domain builder | Can judge whether the packet fits real iteration behavior | Built an internal workflow or ops tool with AI and expects to improve it |
| Technical reviewer / QA-minded builder | Can critique risk and stability completeness | Reviews auth, data, payments, workflows, or launch readiness |

## Screening Question

```text
Have you recently built, inherited, or reviewed an AI-built app where the next step was stabilizing basic flows before a contractor, teammate, or customer touched it?
```

## Primary Interview Questions

1. What is the first thing you check before improving an AI-built app: flows, bugs, integrations, data risk, or code structure?
2. Would a stability-first packet help you scope the next pass faster, or would you still need to play with the app first?
3. What makes a packet concrete enough for a contractor or agency to trust?
4. Which section matters most: core flows, observed issues, affected QA paths, risk surface, or engineering brief?
5. At what point would the founder pay for this: before contractor scoping, before customer pilot, before launch, or never?

## Strong Signal Criteria

Count as strong only if the evaluator says one of these clearly:

- They would use the packet before a contractor, agency, teammate, or customer review.
- It would save a first scoping call or reduce back-and-forth.
- A contractor/agency should require this before quoting or touching the app.
- They try the live tool and name a specific section that is useful or missing.

Count as weak:

- Likes, follows, views, or generic encouragement.
- Agreement that stability matters without saying the packet would be used.
- Replies that describe their process but do not engage with SpecRelay or a packet.

## Staged Public Follow-Up: Jesse

Target: `@jessecolesmith`

Context: Jesse replied that he starts with stability/basic features and promotes improvements from observed issues.

Draft:

```text
That helps. I added a stability-first pass: freeze basic flows, promote fixes from observed issues, then QA the affected workflow. If you're open to one more look, does this match how you'd hand work to a contractor? https://willsuo-github.github.io/specrelay/
```

Gate: requires user confirmation and final X composer verification.

## Contractor / Agency Ask

Use only after a real target is selected and the channel allows it.

```text
When a founder sends you an AI-built prototype, would a stability-first handoff packet help before the first scoping call?

I am testing one that freezes core flows, observed issues, QA paths, risk surface, and an engineering brief.

The useful feedback is whether this would reduce back-and-forth or still feel too generic.

https://willsuo-github.github.io/specrelay/
```

Gate: requires target-specific personalization and final send confirmation.

## No-Link Community Reply

Use in rule-sensitive communities where a product mention or link is not appropriate.

```text
For an AI-built app, I would start with a stability-first handoff instead of a broad feature spec:

1. freeze the 3-5 basic flows that must keep working
2. list observed issues from actually using the app
3. map each issue to the affected workflow
4. QA the fixed path before adding features
5. hand the contractor the flow, issue, risk, and launch-decision notes

The key is not documenting everything. It is giving the next reviewer enough context to stabilize the first pass.
```

Gate: verify community rules and composer content before any public reply.

## Readout Plan

- Record exact language in `.company-mode/feedback.md`.
- Update `docs/x-target-discovery.md` for public X interactions.
- Count only tried packets, direct review language, or contractor/agency workflow fit as validation.
- If two more evaluators echo "stability-first" but still do not want a packet, narrow the product to a contractor/agency intake aid or sunset the founder-first positioning.
