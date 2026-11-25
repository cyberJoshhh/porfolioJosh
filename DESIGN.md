---
name: Dark amber portfolio
colors:
  night: '#141414'
  coal: '#1E1E1E'
  smoke: '#262626'
  line: '#2E2E2E'
  snow: '#F4F4F2'
  ash: '#A3A3A3'
  accent: '#FFB020'
  accent-deep: '#E89A0C'
typography:
  sans: Outfit (headings uppercase, weight 600)
  accent: Instrument Serif italic (one phrase per heading)
  body: Outfit 17px / 1.65
rounded:
  control: 6px
  card: 8px
  arch: full top radius
container-max: 1152px
---

A dark, single-accent portfolio modelled on the look of a dark designer-portfolio
template the client supplied as reference: near-black surfaces, amber as the only
accent, uppercase sans headings with an italic serif accent phrase, and outlined
amber asterisks as the recurring mark.

## Audience and job

Written for **owners of small businesses and schools** deciding whether to hire
Joshua. Its one job is to get an owner to start a conversation.

## Color roles

- **Night `#141414`** is the page; **coal `#1E1E1E`** alternates as a section band
  (services, work, contact); **smoke `#262626`** is cards on coal.
- **Snow `#F4F4F2`** is text; **ash `#A3A3A3`** is secondary text.
- **Amber `#FFB020`** (token `accent`) is the one accent: buttons, eyebrows,
  checks, the badge, the caution tape and the asterisks. Text on amber is night.

## Contrast (computed)

| Pair | Ratio |
|---|---|
| snow on night / coal / smoke | 16.73 / 15.14 / 13.74 |
| ash on night / coal / smoke | 7.30 / 6.61 / 6.00 |
| amber on night / coal / smoke | 10.07 / 9.12 / 8.28 |
| night on amber (buttons, tape) | 10.07 |
| input placeholder `#8A8A8A` on night | 5.34 |

## Page order

Hero (photo in an arch + rotating badge, title, two actions) → About (checklist +
real stats) → Services (4 cards) → Skills (tool groups) → Work (project cards) →
Process (4 numbered steps) → FAQ → Contact (info + form card) → Footer.

## Rules

- Headings: uppercase Outfit with one italic serif phrase (`SectionHeading`,
  `Title` in `src/types`). A small amber eyebrow with an asterisk sits above each.
- Stats are real numbers only; the tools count is computed from `skills.ts`.
  No testimonials and no skill percentages until real ones exist.
- One page-load moment (hero rise); the badge turns slowly. `prefers-reduced-motion`
  removes both.
- Visible 3px amber focus outline everywhere.
- One verb for the main action everywhere: **Talk to Joshua**.
- Copy written on Joshua's behalf is marked `DRAFT` in `src/constants/site.ts`.
- Verified at 375, 768 and 1360px with no horizontal scroll.
