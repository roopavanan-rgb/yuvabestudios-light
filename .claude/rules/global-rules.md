# Global Rules (Claude)

## Core Principle
Always follow system-first architecture. Never prioritize speed over consistency.

---

## Design System Rules

- Never use hardcoded values (colors, spacing, radius, shadows)
- Always use tokens from `app/globals.css`
- Do not create new styles at component level if tokens exist

---

## Component Rules

- Always start from shadcn (`components/ui/*`)
- Extend components via variants
- Do not create duplicate primitives

---

## Architecture Rules

- Follow Next.js App Router (`app/`)
- Keep UI, logic, and data separated
- Avoid deeply nested components

---

## Motion Rules

- Framer Motion → default
- GSAP → only for scroll/timeline
- Do not mix both on same element
- Keep animations subtle and purposeful

---

## 3D Rules

- Three.js must be isolated (canvas layer)
- UI must not depend on 3D logic
- Always prioritize readability over visuals

---

## Performance Rules

- Avoid unnecessary re-renders
- Lazy load heavy assets (3D, images)
- Keep animations GPU-friendly

---

## Code Quality

- Comment intent, not syntax
- Keep code readable and predictable
- Avoid over-engineering

---

## Forbidden

- Hardcoded Tailwind values (`p-[17px]`, `bg-[#000]`)
- Inline animation logic duplication
- Creating new design tokens inside components
- Mixing multiple animation systems improperly