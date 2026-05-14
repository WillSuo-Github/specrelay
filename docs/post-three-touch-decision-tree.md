# Post-Three-Touch Decision Tree

Date: 2026-05-14

Status: internal decision asset. Use this after the current three contractor/agency touches have had time to respond.

## Why This Exists

SpecRelay now has three real contractor/agency validation touches in market:

- Afterbuild Labs email sent on `2026-05-11`
- Bytewise email sent on `2026-05-12`
- AppStuck contact form submitted on `2026-05-14`

The company should not improvise its next move after those replies or silences arrive. This file sets the exact readout logic so the next heartbeat can decide quickly.

## Hard Checkpoint

If there is still no useful reply from Afterbuild, Bytewise, or AppStuck by `2026-05-21 23:59 CST`, treat that as the default decision point for the current contractor/agency wedge.

Earlier action is allowed if any of the three paths produce a clearly positive or clearly negative response before that date.

## What Counts As Signal

### Strong positive

Any one of these counts:

- a rescue service says the packet would reduce intake, scoping, or audit back-and-forth
- they ask to see a packet example, ask founders to send this before a call, or suggest a trial workflow
- they point to one specific section that helps or is missing

### Weak positive

Any one of these counts:

- generic encouragement with mild relevance
- agreement that AI-built apps are messy, but no claim that this packet would be used
- willingness to talk, but still no indication the packet changes intake behavior

### Negative

Any one of these counts:

- they say they would ignore the packet and go straight to repo/app inspection
- they say their existing intake already covers this
- they imply the only valuable version is automated or repo-connected

## Decision Paths

### Path A: at least one strong positive

Decision:

- keep the product alive
- narrow the buyer/user from generic founders toward rescue-service or agency intake owners

Immediate next actions:

1. Update the homepage and packet copy toward agency-intake language.
2. Prepare one corroborating outreach using `docs/ac-tech-labs-runbook.md`.
3. Stage a manual pilot offer such as “send one founder-filled packet and I’ll adapt the format to your intake flow.”

What not to do:

- do not broaden back into generic founder audiences yet
- do not add repo automation yet

### Path B: only weak positives, no strong positives

Decision:

- keep the underlying problem alive
- downgrade the current “full handoff packet for agency intake” wedge
- pivot the artifact toward a smaller stability-first pre-review brief

Immediate next actions:

1. Reduce the output to the minimum sections that a builder or reviewer would actually inspect first: core flows, current blockers, stability risks, and launch decision.
2. Run one founder-facing validation loop around “stability-first launch brief” rather than “contractor handoff packet.”
3. Do not add more rescue-service outreach until the artifact is sharper.

### Path C: all three are negative, or all three are silent at the hard checkpoint

Decision:

- treat the current contractor/agency wedge as unproven
- stop spending cycles on more intake-agency outreach for this version

Immediate next actions:

1. Do not send AC Tech Labs yet.
2. Write a short pivot memo with the exact evidence against the current wedge.
3. Choose one of two narrower follow-ups:
   - founder-side stability-first launch brief
   - sunset this company instance if no credible adjacent wedge remains

Default recommendation:

- prefer the founder-side stability-first brief once before sunset, because Jesse's feedback still suggests a real workflow pain around stabilizing basics before adding features

## AC Tech Labs Rule

`docs/ac-tech-labs-runbook.md` should only be used if there is at least one weak positive or stronger signal from the first three touches.

If Afterbuild, Bytewise, and AppStuck are all silent or negative by `2026-05-21 23:59 CST`, AC Tech Labs is not the default next move. The default next move is pivot or stop.

## Stop/Continue Summary

Continue current wedge only if:

- at least one strong positive exists

Pivot artifact but keep company alive if:

- only weak positives exist

Pivot hard or sunset if:

- the three-touch batch is silent or negative by the hard checkpoint
