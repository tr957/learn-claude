# Prompt Search — Design Doc

**Date:** 2026-03-10

## Summary

Site-wide prompt search for Claude at 1kx. Users can type a keyword and/or filter by role to find any prompt across all 8 content pages. Results show full prompt text inline with a direct link to the source page.

## Approach

Option A: static JS index + dedicated search page. A `search-data.js` file contains all ~40 prompts as a flat array. A `search.html` page filters and displays them client-side. Every page's nav gets a search input. No external dependencies, no build step, works on Vercel and locally.

## Data Structure

File: `website/search-data.js`

```js
const SEARCH_DATA = [
  {
    label: "Due diligence checklist",
    text: "I'm preparing due diligence on [project]...",
    section: "Research & Diligence",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "due-diligence-checklist"
  },
  ...
]
```

Fields:
- `label` — short prompt title (from `.template-label` or equivalent heading)
- `text` — full prompt text
- `section` — H2 section heading on source page
- `page` — filename of source page
- `pageName` — human-readable page name for display
- `roles` — array of `"investment"`, `"operations"`, `"platform"` (some prompts have all three)
- `anchor` — matches `id` attribute added to the source HTML element

Role mapping:
- `"investment"` → Investment & Research
- `"operations"` → Operations & Comms
- `"platform"` → Platform & Portfolio

## Search Page (`search.html`)

Same nav and design system as all other pages.

**Controls:**
- Text input: live filtering on `keyup`, pre-filled from `?q=` URL param on load
- Three role filter buttons: Investment & Research / Operations & Comms / Platform & Portfolio
  - Toggle on click; multiple can be active
  - No role active = show all roles
- Filters combine: text AND active roles

**Results:**
- Rendered as cards (matching `.template-card` style)
- Each card: section label (muted uppercase) + prompt label (bold) + full prompt text (italic) + "View in context →" link to `page#anchor`
- Empty state (nothing typed, no role active): instruction line — "Type a keyword or select a role to find prompts."
- No results: "No prompts match your search."

**URL behaviour:**
- `search.html?q=diligence` pre-fills input and runs search on load
- Shareable search URLs

## Nav Search Input

Added to `<nav>` in all 9 pages (right side of nav). A small `<input type="search" placeholder="Search prompts…">` that navigates to `search.html?q=...` on Enter.

## HTML Changes

- Add `id` attributes to every `.template-card` and `.prompt-copy` element across all 8 content pages — matching the `anchor` field in `search-data.js`
- Add `<script src="search-data.js"></script>` to `search.html` only
- Add search input to `<nav>` across all 9 pages

## Search Logic

- Case-insensitive `String.includes()` match against `label` + `text`
- Role filter: if any roles active, result must include at least one active role
- Filters are AND: text match AND role match

## Styling

- Role filter buttons: plain bordered buttons, active state = forest green background (`#1a3d2e`) + white text, matches design system
- Result cards: `.template-card` style (white, 1px border `#e2e2dc`, sharp corners, accent left border)
- Search input in nav: minimal, no border on focus-within except bottom border, matches nav aesthetic
- Result section label: `.page-category` style (0.68rem, uppercase, muted)

## Files

| File | Action |
|------|--------|
| `website/search-data.js` | Create |
| `website/search.html` | Create |
| `website/style.css` | Add search input + role button styles |
| All 9 `.html` files | Add search input to nav |
| All 8 content pages | Add `id` attributes to prompt elements |
