# quastels-analysis DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 10 · Fonts: 1 · Components: 0
> Icon library: not detected · State: not detected
> Primary theme: dark · Dark mode toggle: no · Motion: none

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![quastels-analysis Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **dark-themed** interface with a neutral tone. Depth is expressed through layered shadows and subtle surface color variation. Typography uses **Satoshi** throughout — a clean, modern choice that maintains consistency. Spacing follows a **4px base grid** (compact density), with scale: 2, 4, 8, 10, 12, 14, 16, 20px.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| background | `#020202` | background | Page background, darkest surface |
| text-primary | `#ffffff` | text-primary | Headings and body text |
| text-muted | `#a3a8a6` | text-muted | Captions, placeholders, secondary info |
| border | `#515251` | border | Dividers, card borders, outlines |
| danger | `#c02b0a` | danger | Error states, destructive actions |
| success | `#19c37d` | success | Success states, positive indicators |
| info | `#293c5b` | info | Informational highlights |
| unknown | `#e5e7eb` | unknown | Palette color |
| unknown | `#d0d0d0` | unknown | Palette color |
| unknown | `#008000` | unknown | Palette color |

### CSS Variable Tokens

```css
--wp-editor-canvas-background: #ddd;
--wp-admin-border-width-focus: 2px;
```


---

## 3. Typography Rules

**Font Stack:**
- **Satoshi** — Heading 1, Heading 2, Heading 3, Body, Caption

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Satoshi | 48px / 3rem | 700 |
| Heading 2 | Satoshi | 32px / 2rem | 600 |
| Heading 3 | Satoshi | 24px / 1.5rem | 600 |
| Body | Satoshi | 16px / 1rem | 400 |
| Caption | Satoshi | 12px / 0.75rem | 400 |

**Typographic Rules:**
- Use **Satoshi** for all text — do not mix font families
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

No components detected. Scan `src/components/` or `components/` to populate this section.

---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40
- **Border radius:** 2px, 12px, 24px, 100px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Floating — dropdowns, popovers, modals

- `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`



---

## 8. Do's and Don'ts

### Do's

- Use `#020202` as the primary page background
- Use **Satoshi** for all UI text
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: 2px, 12px, 24px, 100px

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't mix font families — use Satoshi consistently
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't create custom box-shadow values outside the system tokens
- Don't use gradients — the design uses solid colors only
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No gradient backgrounds
- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

No breakpoints detected. Consider adding responsive breakpoints to the design system.

---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #020202
Border: 1px solid #515251
Radius: 24px
Padding: 16px
Font: Satoshi
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg var(--accent), text white
Ghost: bg transparent, border #515251
Padding: 8px 16px
Radius: 24px
Hover: opacity 0.9 or lighter shade
Focus: ring with var(--accent)
```

### Build a Page Layout

```
Background: #020202
Max-width: 1280px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #020202
Label: #a3a8a6 (muted, 12px, uppercase)
Value: #ffffff (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #020202
Input border: 1px solid #515251
Focus: border-color var(--accent)
Label: #a3a8a6 12px
Spacing: 16px between fields
Radius: 24px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Satoshi, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```
