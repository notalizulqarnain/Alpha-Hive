# Design System Master File: Compound Wealth Planning

> **LOGIC:** When building a specific page, first check `design-system/compound-wealth-planning/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Compound Wealth Planning  
**Aesthetic:** Apple-Inspired Ultra-Minimalism  
**Primary Brand Colors:** Obsidian Navy (`#061224`), Refined Champagne Gold (`#c5a880`), Crisp Canvas (`#fafaf9` / `#ffffff`)

---

## 1. Global Color Palette

| Role | Token | Value | Semantic Usage |
|------|-------|-------|----------------|
| **Primary Navy** | `--color-navy-950` | `#061224` | Primary brand obsidian navy, headers, dark buttons |
| **Rich Navy Surface** | `--color-navy-900` | `#0a1b36` | Dark card surface |
| **Elevated Dark** | `--color-navy-850` | `#0f2342` | Elevated dark surface & inner cards |
| **Dark Hairline Border** | `--color-navy-800` | `rgba(255, 255, 255, 0.08)` | Hairline border on dark surfaces |
| **Refined Gold** | `--color-gold-400` | `#c5a880` | Primary brand accent gold |
| **Warm Gold** | `--color-gold-500` | `#b39266` | Secondary gold emphasis |
| **Deep Gold** | `--color-gold-600` | `#96774d` | Rich gold text / badges |
| **Gold Tint** | `--color-gold-100` | `#f6efe4` | Ultra-soft gold surface tint |
| **Gold Wash** | `--color-gold-50` | `#fbf8f3` | Subtle warm background highlight |
| **Canvas Background** | `--color-bg-light` | `#fafaf9` | Crisp porcelain canvas background |
| **White Card Surface** | `--color-surface` | `#ffffff` | Crisp white cards |
| **Light Hairline Border** | `--color-border-light` | `rgba(0, 0, 0, 0.06)` | Minimal hairline border on light |
| **Text Primary** | `--color-text-primary` | `#061224` | High-contrast dark headings & text |
| **Text Secondary** | `--color-text-secondary` | `#52525b` | Neutral, balanced body text |
| **Text Muted** | `--color-text-muted` | `#94a3b8` | Supporting metadata |

---

## 2. Typography Scale (Sans-Serif Apple Discipline)

- **Font Family**: Plus Jakarta Sans / Inter / -apple-system.
- **Scale & Measure**:
  - **Display / Hero**: `text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.035em] leading-[1.08]`
  - **H1 (Page Titles)**: `text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] leading-[1.15]`
  - **H2 (Section Titles)**: `text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.02em] leading-[1.2]`
  - **H3 (Card Titles)**: `text-xl sm:text-2xl font-semibold tracking-[-0.015em] leading-snug`
  - **H4 (Subheadings)**: `text-lg sm:text-xl font-semibold tracking-normal leading-snug`
  - **Body (Lead / Regular)**: `text-base sm:text-lg font-normal leading-relaxed text-slate-600`
  - **Body Small**: `text-sm font-normal leading-relaxed text-slate-500`
  - **Badge / Eyebrow**: `text-xs font-semibold tracking-[0.15em] uppercase text-gold-700`
  - **Caption / Fineprint**: `text-xs font-light leading-relaxed text-slate-400`

---

## 3. UI Components & Elevation (Weightless & Soft)

- **Radii**:
  - Buttons, Badges, Filter Pills: `rounded-full`
  - Cards, Large Containers, Modals: `rounded-3xl`
  - Form Inputs, Small Controls: `rounded-2xl`
  - Dropdown Panels, Tooltips: `rounded-2xl`

- **Shadows (Soft & Weightless)**:
  - `shadow-subtle`: `0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02)`
  - `shadow-card`: `0 4px 20px -2px rgba(6, 18, 36, 0.04), 0 2px 6px -1px rgba(6, 18, 36, 0.02)`
  - `shadow-card-hover`: `0 12px 32px -4px rgba(6, 18, 36, 0.08), 0 4px 12px -2px rgba(6, 18, 36, 0.03)`
  - `shadow-card-dark`: `0 8px 30px -4px rgba(0, 0, 0, 0.4)`
  - `shadow-modal`: `0 24px 48px -12px rgba(6, 18, 36, 0.18)`

---

## 4. Spacing Scale (8px Multiples Grid)

- Standard section padding: `py-16 sm:py-24 lg:py-32`
- Inter-section vertical rhythm: `space-y-16 sm:space-y-24 lg:space-y-32`
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (standard) or `max-w-4xl mx-auto` (focused reading)
- Card internal padding: `p-6 sm:p-8 lg:p-10`

---

## 5. Pre-Delivery Quality Checklist

- [ ] No emojis as icons (use Lucide / Phosphor vector icons)
- [ ] `cursor-pointer` on all interactive triggers
- [ ] Hover transitions smooth and calm (`duration-300 ease-out`)
- [ ] Text contrast minimum 4.5:1 on light and dark surfaces
- [ ] Visible focus ring for keyboard navigation (`focus:ring-2 focus:ring-navy-950/20`)
- [ ] Respect `prefers-reduced-motion`
- [ ] Zero layout shift or horizontal overflow across 375px, 768px, 1024px, 1440px

