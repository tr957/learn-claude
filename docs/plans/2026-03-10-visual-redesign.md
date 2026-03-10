# Visual Redesign & Rebrand Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rewrite style.css and update all 9 HTML pages to match the approved light editorial design system and "Claude at 1kx" rebrand.

**Architecture:** Pure HTML + CSS, no build step. All 9 pages share one stylesheet (`website/style.css`). Nav labels and role-nav appear on every page. Content pages use `.prompt-copy`, `.tip-card`, `.template-card`, `.example-bad/better/best`, `.mistake-card`. No JavaScript.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox, grid). Deploy via git push → Vercel auto-deploy.

---

## Design system reference (from design doc)

| Token | Value |
|-------|-------|
| Background | `#f7f7f5` |
| Surface (cards) | `#ffffff` |
| Text primary | `#111111` |
| Text secondary | `#666666` |
| Text muted | `#999999` |
| Border | `#e2e2dc` |
| Accent | `#1a3d2e` |

Typography:
- H1: `Georgia, serif`, `2.4rem`, normal weight
- H2: `system-ui, sans-serif`, `0.72rem`, uppercase, `letter-spacing: 0.12em`, color `#999999`
- H3: `system-ui, sans-serif`, `1rem`, `font-weight: 600`
- Body: `system-ui, sans-serif`, `1rem`, `line-height: 1.85`
- Labels: `0.68rem`, uppercase, `letter-spacing: 0.1em`

Components:
- Cards: `background: #fff`, `border: 1px solid #e2e2dc`, `border-radius: 0` (sharp)
- `.prompt-copy`: `border-left: 3px solid #1a3d2e`, italic, `background: #f7f7f5`
- `.example-bad/better`: `border-left: 2px solid #999` (muted)
- `.example-best`: `border-left: 2px solid #1a3d2e` (accent)
- `.next-step`: plain text link with arrow, no filled button
- `.role-card:hover`: adds `border-left: 3px solid #1a3d2e`

Layout:
- Content max-width: `680px`
- Main padding: `100px 2rem 5rem` (single fixed nav, no second bar)
- Role-nav: inline text line in `<main>` — not a second fixed bar

---

## Nav label mapping (all 9 pages)

| Old label | New label |
|-----------|-----------|
| Beginner | Getting Started |
| Everyday | Everyday Use |
| Research | Research & Diligence |
| Meetings | Founder Meetings |
| Writing | Writing & Comms |
| Portfolio | Portfolio Support |
| Templates | Prompt Templates |
| Safe Use | Safe Use *(unchanged)* |

---

## Task 1: Rewrite style.css

**Files:**
- Modify: `website/style.css` (complete rewrite)

**Step 1: Replace the entire file with the new CSS**

Write the following content to `website/style.css`:

```css
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Base */
body {
  background-color: #f7f7f5;
  color: #111111;
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.85;
}

/* Navigation */
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border-bottom: 1px solid #e2e2dc;
  padding: 0 2rem;
  min-height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  z-index: 100;
}

nav .site-name {
  color: #1a3d2e;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  white-space: nowrap;
  letter-spacing: 0.02em;
}

nav ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 1.25rem;
  padding: 0.5rem 0;
}

nav ul a {
  color: #666666;
  text-decoration: none;
  font-size: 0.82rem;
  white-space: nowrap;
}

nav ul a:hover {
  color: #1a3d2e;
}

/* Page content */
main {
  max-width: 680px;
  margin: 0 auto;
  padding: 100px 2rem 5rem;
}

h1 {
  font-family: Georgia, serif;
  font-size: 2.4rem;
  font-weight: normal;
  color: #111111;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1rem;
  color: #666666;
  margin-bottom: 2rem;
}

h2 {
  font-family: system-ui, sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  color: #999999;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin: 3rem 0 1rem;
}

h3 {
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #111111;
  margin: 1.5rem 0 0.4rem;
}

p {
  margin-bottom: 1rem;
  color: #333333;
}

ul, ol {
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  color: #333333;
}

li {
  margin-bottom: 0.5rem;
}

strong {
  color: #111111;
}

hr {
  border: none;
  border-top: 1px solid #e2e2dc;
  margin: 3rem 0;
}

/* Role nav — inline text line, not fixed bar */
.role-nav {
  font-size: 0.78rem;
  color: #999999;
  margin-bottom: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 1rem;
  align-items: center;
}

.role-nav span {
  color: #999999;
}

.role-nav a {
  color: #666666;
  text-decoration: none;
}

.role-nav a:hover {
  color: #1a3d2e;
  text-decoration: underline;
}

/* Journey steps on home page */
.journey-steps {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  counter-reset: journey;
}

.journey-steps li {
  counter-increment: journey;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.9rem 1.25rem;
  margin-bottom: 0.5rem;
  background-color: #ffffff;
  border: 1px solid #e2e2dc;
  border-radius: 0;
  color: #333333;
  transition: border-left-color 0.15s;
  border-left: 3px solid transparent;
}

.journey-steps li:before {
  content: counter(journey);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  background-color: #f0f4f2;
  color: #1a3d2e;
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
}

.journey-steps a {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
}

.journey-steps li:hover {
  border-left-color: #1a3d2e;
}

.journey-steps .step-title {
  font-weight: 600;
  color: #111111;
  display: block;
  margin-bottom: 0.15rem;
  font-size: 0.95rem;
}

.journey-steps .step-desc {
  font-size: 0.85rem;
  color: #666666;
}

/* Card base */
.card {
  background-color: #ffffff;
  border: 1px solid #e2e2dc;
  border-radius: 0;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1rem;
}

.card .label {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #1a3d2e;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

/* Example cards */
.example-bad {
  background-color: #ffffff;
  border: 1px solid #e2e2dc;
  border-left: 2px solid #999999;
  border-radius: 0;
  padding: 1rem 1.25rem;
  margin-bottom: 0.6rem;
}

.example-bad .label {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #999999;
  margin-bottom: 0.4rem;
  font-weight: 600;
}

.example-better {
  background-color: #ffffff;
  border: 1px solid #e2e2dc;
  border-left: 2px solid #999999;
  border-radius: 0;
  padding: 1rem 1.25rem;
  margin-bottom: 0.6rem;
}

.example-better .label {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #999999;
  margin-bottom: 0.4rem;
  font-weight: 600;
}

.example-best {
  background-color: #ffffff;
  border: 1px solid #e2e2dc;
  border-left: 2px solid #1a3d2e;
  border-radius: 0;
  padding: 1rem 1.25rem;
  margin-bottom: 0.6rem;
}

.example-best .label {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #1a3d2e;
  margin-bottom: 0.4rem;
  font-weight: 600;
}

/* Tip card */
.tip-card {
  background-color: #ffffff;
  border: 1px solid #e2e2dc;
  border-left: 3px solid #1a3d2e;
  border-radius: 0;
  padding: 1rem 1.25rem;
  margin-bottom: 1rem;
  color: #333333;
}

/* Mistake card */
.mistake-card {
  background-color: #ffffff;
  border: 1px solid #e2e2dc;
  border-left: 2px solid #999999;
  border-radius: 0;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1rem;
}

.mistake-card h3 {
  color: #111111;
  margin-top: 0;
}

/* Template card */
.template-card {
  background-color: #ffffff;
  border: 1px solid #e2e2dc;
  border-left: 3px solid #1a3d2e;
  border-radius: 0;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1rem;
}

.template-card .template-label {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #1a3d2e;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.template-card .prompt {
  font-style: italic;
  color: #333333;
  background-color: #f7f7f5;
  padding: 0.75rem 1rem;
  margin-top: 0.5rem;
  font-size: 0.93rem;
  border: none;
}

/* Copyable prompt block */
.prompt-copy {
  background-color: #f7f7f5;
  border: 1px solid #e2e2dc;
  border-left: 3px solid #1a3d2e;
  border-radius: 0;
  padding: 1rem 1.25rem;
  margin: 0.75rem 0 1.25rem;
  font-style: italic;
  color: #333333;
  font-size: 0.93rem;
  line-height: 1.75;
}

/* Next step — plain text link */
.next-step {
  display: inline-block;
  margin-top: 3rem;
  color: #1a3d2e;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  border-bottom: 1px solid #1a3d2e;
  padding-bottom: 1px;
}

.next-step:hover {
  opacity: 0.7;
}

/* Role cards on home page */
.role-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
  margin: 1rem 0;
}

.role-card {
  display: block;
  background-color: #ffffff;
  border: 1px solid #e2e2dc;
  border-radius: 0;
  padding: 1.25rem;
  text-decoration: none;
  transition: border-left-color 0.15s;
  border-left: 3px solid transparent;
}

.role-card:hover {
  border-left-color: #1a3d2e;
}

.role-card-title {
  color: #111111;
  font-weight: 700;
  margin-bottom: 0.4rem;
  font-size: 0.93rem;
}

.role-card-desc {
  color: #666666;
  font-size: 0.82rem;
  line-height: 1.5;
}
```

**Step 2: Visually verify in browser**

Open `website/index.html` in a browser (drag file into browser or run `open website/index.html`).

Expected:
- Warm off-white background (`#f7f7f5`)
- Georgia serif H1
- Forest green accent on nav site-name
- No dark colors anywhere

**Step 3: Commit**

```bash
cd /Users/1kx/claude-learning
git add website/style.css
git commit -m "style: complete visual redesign — light editorial design system"
```

---

## Task 2: Update nav labels across all 9 HTML files

**Files:**
- Modify: `website/index.html`, `website/beginner-path.html`, `website/everyday-use.html`, `website/research-diligence.html`, `website/founder-meetings.html`, `website/writing-comms.html`, `website/portfolio-support.html`, `website/prompt-templates.html`, `website/safe-use.html`

**Step 1: Update nav `<ul>` labels in every file**

In each of the 9 HTML files, find the `<nav>` block and replace the nav link labels:

```html
<!-- OLD -->
<li><a href="beginner-path.html">Beginner</a></li>
<li><a href="everyday-use.html">Everyday</a></li>
<li><a href="research-diligence.html">Research</a></li>
<li><a href="founder-meetings.html">Meetings</a></li>
<li><a href="writing-comms.html">Writing</a></li>
<li><a href="portfolio-support.html">Portfolio</a></li>
<li><a href="prompt-templates.html">Templates</a></li>
<li><a href="safe-use.html">Safe Use</a></li>

<!-- NEW -->
<li><a href="beginner-path.html">Getting Started</a></li>
<li><a href="everyday-use.html">Everyday Use</a></li>
<li><a href="research-diligence.html">Research &amp; Diligence</a></li>
<li><a href="founder-meetings.html">Founder Meetings</a></li>
<li><a href="writing-comms.html">Writing &amp; Comms</a></li>
<li><a href="portfolio-support.html">Portfolio Support</a></li>
<li><a href="prompt-templates.html">Prompt Templates</a></li>
<li><a href="safe-use.html">Safe Use</a></li>
```

Apply this to all 9 files (index.html through safe-use.html).

**Step 2: Update `<title>` tags** to match new labels where needed:
- `beginner-path.html`: `<title>Getting Started — Claude at 1kx</title>`
- `everyday-use.html`: `<title>Everyday Use — Claude at 1kx</title>`
- `research-diligence.html`: *(already correct: Research &amp; Diligence — Claude at 1kx)*
- `founder-meetings.html`: *(already correct: Founder Meetings — Claude at 1kx)*
- `writing-comms.html`: `<title>Writing &amp; Comms — Claude at 1kx</title>`
- `portfolio-support.html`: *(already correct: Portfolio Support — Claude at 1kx)*
- `prompt-templates.html`: `<title>Prompt Templates — Claude at 1kx</title>`
- `safe-use.html`: *(already correct)*

Check each file's current `<title>` and update only where needed.

**Step 3: Commit**

```bash
git add website/
git commit -m "chore: update nav labels across all 9 pages"
```

---

## Task 3: Update index.html — hero copy and role-nav

**Files:**
- Modify: `website/index.html`

**Step 1: Update the hero copy**

Find the current hero in `<main>`:

```html
<h1>Claude at 1kx</h1>
<p class="subtitle">A practical guide to using Claude for real work — not just another AI tutorial.</p>
```

Replace with:

```html
<h1>Claude at 1kx</h1>
<p class="subtitle">A practical guide for the 1kx team – using Claude across research, diligence, meetings, writing, and portfolio support.</p>
```

**Step 2: Move role-nav inside `<main>` and remove fixed positioning**

The current `<div class="role-nav">` sits between `</nav>` and `<main>`. Move it to be the first element inside `<main>`, right after the `<main>` opening tag and before the `<h1>`.

The new structure at the top of `<main>`:

```html
<main>
  <div class="role-nav">
    <span>Jump to your role:</span>
    <a href="research-diligence.html">Investment &amp; Research</a>
    <a href="writing-comms.html">Operations &amp; Comms</a>
    <a href="portfolio-support.html">Platform &amp; Portfolio</a>
  </div>

  <h1>Claude at 1kx</h1>
  <p class="subtitle">A practical guide for the 1kx team – using Claude across research, diligence, meetings, writing, and portfolio support.</p>
  ...
```

**Step 3: Visual verify**

Open `website/index.html` in browser. Expected:
- Role nav appears as a subtle inline text line, not a second fixed bar
- H1 uses Georgia serif
- Hero subtitle is the new copy

**Step 4: Commit**

```bash
git add website/index.html
git commit -m "feat: update index hero copy and move role-nav inline"
```

---

## Task 4: Move role-nav inline on all 8 content pages

**Files:**
- Modify: `website/beginner-path.html`, `website/everyday-use.html`, `website/research-diligence.html`, `website/founder-meetings.html`, `website/writing-comms.html`, `website/portfolio-support.html`, `website/prompt-templates.html`, `website/safe-use.html`

**Step 1: For each content page, move the role-nav div**

Each page currently has this structure:

```html
  </nav>
  <div class="role-nav">
    <span>Jump to your role:</span>
    <a href="research-diligence.html">Investment &amp; Research</a>
    <a href="writing-comms.html">Operations &amp; Comms</a>
    <a href="portfolio-support.html">Platform &amp; Portfolio</a>
  </div>

  <main>
    <h1>...</h1>
```

Change it to:

```html
  </nav>

  <main>
    <div class="role-nav">
      <span>Jump to your role:</span>
      <a href="research-diligence.html">Investment &amp; Research</a>
      <a href="writing-comms.html">Operations &amp; Comms</a>
      <a href="portfolio-support.html">Platform &amp; Portfolio</a>
    </div>

    <h1>...</h1>
```

Apply to all 8 remaining content pages.

**Step 2: Commit**

```bash
git add website/
git commit -m "chore: move role-nav inline on all content pages"
```

---

## Task 5: Add category labels and polish page headers

**Files:**
- Modify: `website/beginner-path.html`, `website/everyday-use.html`, `website/research-diligence.html`, `website/founder-meetings.html`, `website/writing-comms.html`, `website/portfolio-support.html`, `website/prompt-templates.html`, `website/safe-use.html`

**Step 1: Add a category label above each H1**

Below each page's role-nav div and before the `<h1>`, add a small category label. Use this pattern:

```html
<p class="page-category">Workflow Guide</p>
<h1>Page Title Here</h1>
```

Add this CSS to `website/style.css` (append to the end):

```css
/* Page category label above H1 */
.page-category {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #999999;
  margin-bottom: 0.5rem;
}
```

Labels per page:
- `beginner-path.html`: `Getting Started`
- `everyday-use.html`: `Everyday Use`
- `research-diligence.html`: `Research & Diligence`
- `founder-meetings.html`: `Founder Meetings`
- `writing-comms.html`: `Writing & Comms`
- `portfolio-support.html`: `Portfolio Support`
- `prompt-templates.html`: `Prompt Templates`
- `safe-use.html`: `Safe Use`

**Step 2: Visual spot-check**

Open 2-3 pages in browser. Each should have:
- Small uppercase category label above the Georgia serif H1
- Clean visual hierarchy: label → title → subtitle

**Step 3: Commit**

```bash
git add website/
git commit -m "feat: add category labels above page headers"
```

---

## Task 6: Final push to GitHub

**Step 1: Push all commits**

```bash
cd /Users/1kx/claude-learning
git push
```

Expected output: commits pushed to origin, Vercel auto-deploys within ~30 seconds.

**Step 2: Verify live site**

Go to the Vercel URL (learn-claude-kohl.vercel.app) and confirm:
- Light background, not dark
- Georgia serif headings
- Forest green accent throughout
- Nav labels updated
- Role-nav appears inline, not as a second fixed bar
