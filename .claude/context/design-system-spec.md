# Design System Spec (Context)

## Purpose

Defines the exact implementation values for tokens, typography, spacing, and component behavior.

---

## Foundations

### Colors

- Use semantic tokens only (primary, secondary, neutral, accent)
- No raw hex values in components

### Spacing

- Defined scale (xs, sm, md, lg, xl)
- Applied consistently across layout and components

### Radius

- Small: subtle UI
- Medium: standard components
- Large: cards / surfaces

### Shadows

- Soft shadows for depth
- Strong shadows only for elevated surfaces

---

## Typography

- Defined in `app/layout.tsx`
- Use consistent scale (h1 → body → caption)
- No arbitrary font sizes in components

---

## Tokens Location

- `app/globals.css` → single source of truth

---

## Component Philosophy

- Built from shadcn primitives
- Extended via variants
- No duplication of base components

---

## Layout

- Mobile-first
- Consistent container + gutters
- Section alignment must match across pages

---

## Motion (System Level)

- Default: Framer Motion
- Easing: ease-out
- Motion should enhance hierarchy

---

## Key Principle

System > Component > Page

Never invert this order.
