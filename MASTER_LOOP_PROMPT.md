# SolutionForge website improvement prompt

Use the following prompt with Claude Code, Codex, or another coding agent from
the SolutionForge repository root.

---

You are the senior product designer, conversion-focused content editor, and
frontend engineer responsible for one bounded, production-quality, site-wide
improvement engagement for the SolutionForge website.

Work in the current repository root. Confirm that it is the SolutionForge project
before making changes; do not assume a machine-specific absolute path.

The project is a Next.js 15 App Router site using React 19, TypeScript, and
Tailwind CSS 3. It is currently a single-page marketing site assembled from
components under `src/app/components`.

Your job is to improve the real website, not merely produce recommendations.

## Truth gate

Before rewriting public copy, create a short internal ledger with three columns:
confirmed facts, reasonable inferences, and missing facts. Repository evidence or
facts supplied by the user are the only sources that can confirm audiences,
services, founder history, clients, metrics, commercial terms, or delivery
promises.

Use confirmed facts in public claims. Use conservative capability language for
reasonable inferences. Never turn a missing fact into polished-sounding copy. If
a missing audience or offer detail prevents precise positioning, complete the
safest supportable version and list the exact input needed from the owner.

## Objective

Turn SolutionForge into a credible, distinctive consultancy website that makes
the following clear:

- What SolutionForge does
- Which businesses it serves
- Which problems it can solve
- What a typical engagement produces
- Why a buyer should trust its approach
- What the visitor should do next

The result should feel calm, mature, technically capable, and intentionally
designed. It must not resemble a generic dark-mode AI agency template.

Optimize for clarity, credibility, factual integrity, accessibility, and
qualified inquiries—not visual novelty alone.

## Non-negotiable constraints

### 1. Preserve user work

Begin with `git status --short`. Treat all existing modified, deleted, and
untracked files as user-owned. Do not restore, overwrite, or discard them unless
the requested update clearly requires it.

At the time this prompt was written, `public/logo.png` was deleted. Re-check the
current state. If that remains true, preserve the deletion and replace stale
references with an appropriate code-native asset such as `LogoMark.tsx`. Do not
silently recreate or restore the deleted file.

### 2. Do not invent evidence

Never fabricate or imply real:

- Clients
- Testimonials
- Revenue
- Traffic gains
- Conversion rates
- Project counts
- Retention rates
- Partnerships
- Certifications
- Case-study outcomes

Treat every existing numerical claim and anonymous case study as unverified
unless supporting evidence exists in the repository or has been supplied by the
user.

If proof is unavailable, remove the unsupported claim from the public page.
Replace it with truthful capability, process, deliverable, or engagement
information. Do not publish placeholder proof that could be mistaken for fact.

### 3. Do not fake functionality

A form must not display a success state unless data was actually transmitted
successfully.

If a real form endpoint or email integration exists, use it and handle success
and failure honestly. If none exists, replace fake submission behavior with a
truthful contact action such as an email link, and identify the missing
integration in the final report.

Every visible navigation item, CTA, footer link, and legal link must have a valid
destination. Remove links to nonexistent pages rather than leaving `href="#"`.

### 4. Stay within scope

Improve the existing website and its supporting metadata. Do not add a CMS,
backend, analytics platform, authentication system, paid service, or major
dependency unless already configured and necessary.

Do not create speculative routes or legal documents. Do not rewrite sound
architecture simply to make it different. Do not commit or push unless
separately requested.

### 5. Use the existing stack well

Prefer semantic React components, maintainable CSS, and existing assets. Avoid
adding a dependency when the result can be implemented cleanly with the current
stack.

## Definition of success

The finished homepage must satisfy all of these criteria:

- One specific, useful H1 explains the offer without generic agency language.
- The primary business problem and intended customer are apparent above the fold
  when the truth ledger supports them; otherwise the copy stays conservative and
  the missing positioning input is reported.
- One primary CTA is visually dominant; a secondary CTA is subordinate.
- Services are concrete and differentiated by use case and deliverables.
- Unsupported proof has been removed or replaced with truthful content.
- The page includes a credible explanation of how an engagement works.
- Typography, color, spacing, and composition form one deliberate visual system.
- Sections do not all rely on interchangeable rounded-card grids.
- Gradients, glow, blur, glass, pills, and decorative motion are restrained.
- Mobile layouts feel intentionally composed, not merely stacked.
- Navigation, CTAs, contact actions, and footer links work.
- There are no broken images, false success states, console errors, or horizontal
  overflow.
- Keyboard focus is visible, heading order is logical, controls are labeled,
  contrast is acceptable, and reduced-motion preferences are respected.
- Metadata accurately reflects the final positioning.
- The production build passes.

## Visual direction

Aim for a visual system that is:

- Precise
- Editorial
- Technical
- High-trust
- Restrained
- Warm enough to feel human
- Distinctive without being theatrical

Use composition before decoration. Favor strong alignment, useful whitespace,
clear content density, and an intentional type scale.

Avoid defaulting to:

- Blue-to-cyan gradient text on every heading
- Glowing blurred orbs
- Glassmorphism across all components
- Rows of identical rounded cards
- Repeated pill labels
- Generic line-icon grids
- Floating logo mockups
- Decorative dashboards
- Constant hover translation
- Vague headlines about innovation, transformation, or competitive advantage
- Emoji as a substitute for a coherent visual system

Services, process, proof, and contact should not look like four versions of the
same component. Motion is optional; add it only when it communicates hierarchy
or state, and always provide a reduced-motion fallback.

## Content direction

Use direct, buyer-oriented language. Prefer statements about:

- The systems SolutionForge can design or implement
- The operational or acquisition problem being addressed
- The deliverables a client receives
- How discovery, prioritization, implementation, and measurement work
- What information is needed to start an engagement

Avoid claims such as:

- “Innovative solutions”
- “Unlock your potential”
- “Transform your business”
- “Cutting-edge technology”
- “Seamless experiences”
- “Dominate your market”
- “Results that speak for themselves”
- “Forge your competitive edge”
- Any sentence that could be placed unchanged on thousands of agency sites

Do not presume that every currently listed service is a confirmed business
offering. Preserve AI, SEO, growth, or content positioning only where it remains
coherent and supportable from available information.

When specific business facts are missing, write conservatively. Capability and
process claims are safer than unsupported outcomes.

## Required workflow

### Phase 1: Establish the baseline

Before editing:

1. Inspect `git status --short`.
2. Build the truth ledger from repository evidence and supplied user facts.
3. Read `package.json`, the app route, global styles, layout metadata, and every
   homepage component.
4. Inventory broken asset references, unsupported claims, incomplete
   interactions, dead links, accessibility defects, repeated template patterns,
   mobile risks, and obsolete code.
5. Run the current production build to establish a baseline.
6. When browser tooling is available, inspect the rendered page at approximately
   1440px desktop, 768px tablet, and 390px mobile.

Do not claim a visual or interaction check was completed unless it was actually
performed.

### Phase 2: Set a bounded priority plan

Create no more than five priorities, ordered by:

1. Truth and functional integrity
2. Offer clarity and conversion
3. Overall composition and design-system coherence
4. Responsive behavior and accessibility
5. Decorative refinement

Implement without waiting for approval unless a missing fact would materially
change the business positioning or require an external integration.

Explicitly check whether these observed problems still exist:

- Deleted `/logo.png` references
- Unverified hero metrics and case studies
- Simulated contact-form submission
- Footer links pointing to `#`
- Excessive gradients, glows, glass cards, pills, and repeated grids

### Phase 3: Implement up to three coherent passes

This is a bounded process, not an infinite loop.

#### Pass 1 — Integrity and positioning

- Resolve broken assets and interactions.
- Remove unsupported proof.
- Clarify the offer, audience, CTA, services, process, and contact path.
- Fix dead links and misleading states.

#### Pass 2 — Design system and composition

- Establish a deliberate typography, color, spacing, and surface system.
- Recompose the hero and major sections.
- Introduce meaningful layout variation.
- Remove obsolete styles and components created by the old direction.

#### Pass 3 — Responsive and accessibility refinement

- Check desktop, tablet, and mobile composition.
- Fix overflow, cramped layouts, awkward wrapping, focus states, menu behavior,
  contrast, and reduced motion.
- Polish only issues that materially improve the result.

Stop after three implementation passes, or earlier if every acceptance criterion
is met. Do not instruct yourself to begin another loop.

If missing business facts prevent a stronger result, complete the safest truthful
implementation and list the exact facts needed from the user.

## Verification

After implementation:

1. Run `npm run build`.
2. Run `npx tsc --noEmit` if the build does not already provide sufficient type
   checking.
3. Run lint only if a working lint configuration exists. If the package script is
   obsolete or interactive, report the exact failure and use a configured
   alternative when available. Never describe lint as passing when it did not run.
4. Inspect desktop, tablet, and mobile output when browser tooling is available.
5. Smoke-test navigation, mobile menu, CTAs, contact action, footer destinations,
   keyboard navigation, focus visibility, and reduced motion.
6. Check for broken image requests, console errors, horizontal overflow down to
   320px, unsupported public claims, false success messages, empty destinations,
   orphaned components, and obsolete CSS.

Fix regressions found during verification within the three-pass budget.

## Final response format

End with one concise, evidence-based report:

1. **Outcome** — What materially changed for the visitor.
2. **Key decisions** — Positioning, content, and visual choices, including
   unsupported claims or misleading functionality removed.
3. **Files changed** — Grouped by purpose.
4. **Verification** — Commands and exact outcomes, viewports and interactions
   actually checked, and any checks that could not be performed.
5. **Remaining inputs or risks** — Only real unresolved items, including exact
   business proof, form credentials, or legal copy needed from the owner.

Do not end by automatically starting another loop. Do not list speculative polish
when the acceptance criteria are already met.
