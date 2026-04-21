# Design System Implementation Notes

Use this file as the quick reference for frontend implementation work after loading the full spec.

---

## Source of Truth Order
1. `brand-foundation` for brand intent and visual priorities.
2. `design-system-spec.md` for exact digital system requirements.
3. Existing token and preview files in the repo for current implementation shape.

> If conflicts occur, always resolve in this order. Never override tokens or spec based on local component needs.

---

## Build Order
1. Foundations: color, spacing, radius, shadow, typography.
2. Shared primitives and variants.
3. First-pass components.
4. Patterns composed only from published components.

> Do not skip layers. UI must emerge from tokens → components → patterns, not from page-level styling.

---

## Key Frontend Rules

### Design System Enforcement
- Premium surfaces should be implemented as reusable patterns with shared blur, border, shadow, and translucency behavior, especially for overlays, floating cards, and hero callouts.
- Use stronger glass or elevated treatments only when a layer needs obvious separation from the canvas beneath it; keep standard sections flatter so hierarchy stays readable.
- Keep tokens centralized in `app/globals.css`.
- Keep font wiring centralized in `app/layout.tsx`.

---

### Component Architecture
- Always start from shadcn primitives in `components/ui/*` before introducing custom wrappers or parallel primitives.
- Do not create parallel primitives (`Button`, `Input`, etc.) outside the system.
- Extend existing components via variants, not duplication.
- Prefer composition over custom one-off JSX structures.

---

### Responsiveness
- Make responsiveness part of the shared system: default to mobile-first layouts.
- Scale via component variants, not page overrides.
- Validate layouts across 320px → desktop.

---

### Preview & System Visibility
- Use preview routes to document system state while the site is still evolving.
- Every new component or variant should be inspectable in isolation.

---

### Motion System (Extended)

#### Framer Motion (Primary)
- Use Framer Motion for:
  - Micro-interactions
  - Component transitions
  - Hover / tap states
- Default easing: `ease-out`
- Keep animations under 300ms for UI interactions
- Use shared motion variants instead of inline animation logic

---

#### GSAP (Advanced)
- Use GSAP only for:
  - Scroll-based animations (ScrollTrigger)
  - Timeline sequencing
  - Complex motion orchestration
- Do not use GSAP for simple UI interactions
- Avoid mixing GSAP and Framer Motion on the same element

---

#### Micro-Interaction Standards
- Buttons: slight scale + shadow lift
- Cards: translateY + elevation
- Text: opacity + subtle translate
- Avoid excessive motion or bounce unless intentional

---

### 3D System (Three.js Integration)

- Use Three.js for:
  - Hero backgrounds
  - Immersive sections
  - Visual storytelling layers

#### Rules
- Render 3D in a separate canvas layer
- UI must remain independent from 3D logic
- Prefer `react-three-fiber` + `drei`
- Keep camera movement smooth and minimal

#### Performance
- Optimize models (low-poly where possible)
- Lazy load assets
- Avoid blocking main thread

#### UX Constraint
- 3D must enhance content, not reduce readability
- Always prioritize text clarity over visual effects

---

### Motion + Design System Alignment
- Motion must respect spacing, layout, and hierarchy tokens
- Do not introduce visual inconsistency via animation
- Use motion to reinforce hierarchy, not distract

---

### Responsive Motion
- Reduce animation complexity on mobile
- Prefer opacity and transform over layout-changing animations
- Disable non-essential motion on low-performance devices

---

### Code Quality
- Comment intent, not syntax
- Document complex UI logic and interaction reasoning
- Keep components reusable and predictable

---

### Project-Specific Rule
- Homepage studio case-study card image refs should keep using `cover-mock` assets for `coverImages.card` and `mockImageSrc`
- Do not swap those fields to `cover-home` unless explicitly required

---

## Current Repo Foundation Files
- `app/globals.css`
- `app/layout.tsx`
- `app/design-system/foundations/page.tsx`
- `components/design-system/*`

> Always inspect these before introducing new tokens, styles, or components.

---

## Validation Checklist (Extended)

Before completing any UI work:

- Tokens are used (no hardcoded values)
- Components come from system (no duplicates)
- Layout matches adjacent sections
- Mobile responsiveness verified
- Motion is smooth and consistent
- No GSAP + Framer conflicts
- 3D does not block UI interaction
- Preview routes updated

---

## Guardrails

- Do not bypass the token layer with one-off page styling
- Do not invent new colors, spacing, or typography in components
- Do not expand component library without system-level need
- Do not mix animation libraries incorrectly
- Do not couple 3D logic with UI components
- Do not introduce motion without purpose

---

## Implementation Mindset (NEW)

- Build systems, not pages
- Reuse before creating
- Abstract only when patterns repeat
- Prioritize consistency over creativity