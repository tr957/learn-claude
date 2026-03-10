# Prompt Search Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add site-wide prompt search with role filtering to Claude at 1kx — a static JS index, a dedicated search page, and a nav search input on every page.

**Architecture:** A `search-data.js` file holds all ~63 prompts as a flat JS array. `search.html` loads this array and filters it client-side on keyup. Role filter buttons (Investment & Research / Operations & Comms / Platform & Portfolio) narrow results further. The nav across all 9 pages gets a small search input that navigates to `search.html?q=query`. No external dependencies, no build step.

**Tech Stack:** Vanilla HTML, CSS, JS. No libraries. Everything in `website/`.

---

## Master prompt index

These are the exact IDs and data for every prompt. The implementer must use these exactly — do not invent or modify.

### beginner-path.html (5 prompts — template-cards)

| anchor | label | roles |
|--------|-------|-------|
| `beginner-summarise-document` | Summarise a document | investment, operations, platform |
| `beginner-explain-concept` | Explain a concept quickly | investment, operations, platform |
| `beginner-draft-message` | Draft a message | investment, operations, platform |
| `beginner-structure-notes` | Structure rough notes | investment, operations, platform |
| `beginner-founder-prep` | Prepare for a founder meeting | investment |

### everyday-use.html (12 prompts — prompt-copy)

| anchor | label | section | roles |
|--------|-------|---------|-------|
| `everyday-summarise-document` | Summarise a document | Summarising long documents | investment, operations, platform |
| `everyday-email-thread` | Summarise an email thread | Summarising long documents | investment, operations, platform |
| `everyday-explain-concept` | Explain a concept | Explaining complex topics | investment, operations, platform |
| `everyday-translate-technical` | Translate a technical explanation | Explaining complex topics | investment, operations, platform |
| `everyday-draft-message` | Draft a message | Drafting messages and emails | investment, operations, platform |
| `everyday-improve-draft` | Improve a draft message | Drafting messages and emails | investment, operations, platform |
| `everyday-structure-notes` | Structure scattered notes | Structuring scattered notes | investment, operations, platform |
| `everyday-notes-summary` | Notes to structured summary | Structuring scattered notes | investment, operations, platform |
| `everyday-compare-options` | Compare two options | Comparing options | investment, operations, platform |
| `everyday-compare-three` | Compare three projects | Comparing options | investment |
| `everyday-stress-test` | Stress-test your thinking | Getting a second opinion | investment, operations, platform |
| `everyday-review-before-send` | Review before sending | Getting a second opinion | investment, operations, platform |

### research-diligence.html (12 prompts — prompt-copy)

| anchor | label | section | roles |
|--------|-------|---------|-------|
| `research-first-pass` | First-pass on a project | Scouting a new project | investment |
| `research-first-look` | First look questions | Scouting a new project | investment |
| `research-draft-brief` | Draft a project brief | Writing a first-pass project brief | investment |
| `research-concise-brief` | Write a concise project brief | Writing a first-pass project brief | investment |
| `research-compare-two` | Compare two projects | Comparing projects or competitors | investment |
| `research-compare-three` | Which is most differentiated? | Comparing projects or competitors | investment |
| `research-competitive-landscape` | Competitive landscape | Comparing projects or competitors | investment |
| `research-partner-briefing` | 5-minute briefing document | Summarising research for a partner meeting | investment |
| `research-three-paragraph` | 3-paragraph partner summary | Summarising research for a partner meeting | investment |
| `research-diligence-checklist` | Due diligence checklist | Due diligence prep | investment |
| `research-verify-top5` | Top 5 things to verify | Due diligence prep | investment |
| `research-technical-whitepaper` | Summarise a technical whitepaper | Due diligence prep | investment |

### founder-meetings.html (11 prompts — prompt-copy)

| anchor | label | section | roles |
|--------|-------|---------|-------|
| `meetings-get-up-to-speed` | Get up to speed before a call | Before the call: getting up to speed | investment |
| `meetings-call-prep` | What to know going in | Before the call: getting up to speed | investment |
| `meetings-sharp-questions` | Generate 10 specific questions | Before the call: generating sharp questions | investment |
| `meetings-push-back` | Push-back questions | Before the call: generating sharp questions | investment |
| `meetings-test-thinking` | Questions to test the team's thinking | Before the call: generating sharp questions | investment |
| `meetings-internal-summary` | Turn call notes into an internal summary | After the call: turning notes into an internal summary | investment |
| `meetings-clean-notes` | Clean up and structure call notes | After the call: turning notes into an internal summary | investment |
| `meetings-brief-memo` | Call notes to a brief memo | After the call: turning notes into an internal summary | investment |
| `meetings-action-items` | Extract action items from call notes | After the call: extracting action items | investment |
| `meetings-follow-up` | Draft a follow-up to a founder | After the call: drafting a follow-up message | investment |
| `meetings-follow-up-materials` | Follow-up requesting materials | After the call: drafting a follow-up message | investment |

### writing-comms.html (13 prompts — prompt-copy)

| anchor | label | section | roles |
|--------|-------|---------|-------|
| `writing-rough-memo` | Notes to internal memo | Turning rough notes into a memo | operations, platform |
| `writing-internal-memo` | Write an internal memo | Turning rough notes into a memo | operations, platform |
| `writing-meeting-memo` | Meeting notes to a shareable memo | Turning rough notes into a memo | operations, platform |
| `writing-slides-outline` | Structure a 5-slide outline | Structuring slides and talking points | operations, platform |
| `writing-talking-points` | Organise talking points | Structuring slides and talking points | operations, platform |
| `writing-cut-down` | Cut down to essentials | Structuring slides and talking points | operations, platform |
| `writing-outreach` | Draft outreach from 1kx | Drafting outreach messages | operations, investment |
| `writing-introduction` | Write an introduction email | Drafting outreach messages | operations, investment |
| `writing-follow-up` | Draft a follow-up | Drafting outreach messages | operations, investment |
| `writing-slack-update` | Slack team update | Internal coordination messages | operations, platform |
| `writing-team-ask` | Make a clear team ask | Internal coordination messages | operations, platform |
| `writing-improve-clarity` | Improve clarity and conciseness | Improving something you've already written | investment, operations, platform |
| `writing-review-draft` | Review a draft | Improving something you've already written | investment, operations, platform |

### portfolio-support.html (10 prompts — prompt-copy)

| anchor | label | section | roles |
|--------|-------|---------|-------|
| `portfolio-understand-request` | Understand a portfolio request | Understanding a portfolio company request | platform |
| `portfolio-clarify-ask` | Clarify a portfolio ask | Understanding a portfolio company request | platform |
| `portfolio-briefing-note` | Write a briefing note | Preparing a briefing note on a portfolio company | platform |
| `portfolio-two-paragraph` | Two-paragraph summary for a new colleague | Preparing a briefing note on a portfolio company | platform |
| `portfolio-draft-response` | Draft a response to a portfolio company | Drafting a response to a portfolio company | platform |
| `portfolio-direct-response` | Direct response to a question | Drafting a response to a portfolio company | platform |
| `portfolio-recommendation` | Draft a support recommendation | Structuring a support recommendation | platform |
| `portfolio-focus-areas` | What to focus on | Structuring a support recommendation | platform |
| `portfolio-summarise-update` | Summarise a portfolio update | Summarising portfolio updates | platform |
| `portfolio-multiple-updates` | Status across multiple companies | Summarising portfolio updates | platform |

---

## Task 1: Add `id` attributes to all prompt elements

**Files:**
- Modify: `website/beginner-path.html`
- Modify: `website/everyday-use.html`
- Modify: `website/research-diligence.html`
- Modify: `website/founder-meetings.html`
- Modify: `website/writing-comms.html`
- Modify: `website/portfolio-support.html`

**Step 1: Add IDs to beginner-path.html template-cards**

Read `website/beginner-path.html`. The 5 `.template-card` divs need `id` attributes. Add the `id` to the outer `<div class="template-card">` element.

Change each `<div class="template-card">` to `<div class="template-card" id="ANCHOR">` using these IDs in order of appearance:
1. `beginner-summarise-document` — "Summarise a document"
2. `beginner-explain-concept` — "Explain a concept quickly"
3. `beginner-draft-message` — "Draft a message"
4. `beginner-structure-notes` — "Structure rough notes"
5. `beginner-founder-prep` — "Prepare for a founder meeting"

**Step 2: Add IDs to everyday-use.html prompt-copy elements**

Read `website/everyday-use.html`. The 12 `.prompt-copy` divs need `id` attributes. Add `id` to each `<div class="prompt-copy">` in order of appearance:

1. `everyday-summarise-document` — starts with "Here is a [whitepaper / report / article]"
2. `everyday-email-thread` — starts with "Here is a long email thread"
3. `everyday-explain-concept` — starts with "Explain [concept / protocol / term]"
4. `everyday-translate-technical` — starts with "Here's a technical explanation"
5. `everyday-draft-message` — starts with "Draft a [short / formal / casual] message"
6. `everyday-improve-draft` — starts with "Here's a draft I wrote"
7. `everyday-structure-notes` — starts with "Here are my rough notes: [paste]. Organise"
8. `everyday-notes-summary` — starts with "Turn these notes into a short structured"
9. `everyday-compare-options` — starts with "Compare [Option A] and [Option B]"
10. `everyday-compare-three` — starts with "Here are notes on three projects in the [sector]"
11. `everyday-stress-test` — starts with "Here's my current thinking on [topic]"
12. `everyday-review-before-send` — starts with "I'm about to send this"

**Step 3: Add IDs to research-diligence.html prompt-copy elements**

Read `website/research-diligence.html`. Add IDs to each `.prompt-copy` in order:

1. `research-first-pass` — starts with "Here is a brief description of a project"
2. `research-first-look` — starts with "I'm doing a first look"
3. `research-draft-brief` — starts with "Here are my research notes on [project]: [paste notes]. Draft a first-pass"
4. `research-concise-brief` — starts with "Based on the following information about [project], write a concise"
5. `research-compare-two` — starts with "Compare [Project A] and [Project B] across the following"
6. `research-compare-three` — starts with "Here are notes on three projects in the [sector] space: [paste]. Which looks most"
7. `research-competitive-landscape` — starts with "I'm trying to understand the competitive"
8. `research-partner-briefing` — starts with "I've gathered the following research on [project]: [paste]. Summarise this into a 5-minute"
9. `research-three-paragraph` — starts with "Here are my notes on [project]: [paste]. Write a 3-paragraph"
10. `research-diligence-checklist` — starts with "I'm preparing due diligence on [project]. Here's what I know so far"
11. `research-verify-top5` — starts with "Based on this project description, what are the 5 most important things to verify"
12. `research-technical-whitepaper` — starts with "Here is a technical whitepaper"

**Step 4: Add IDs to founder-meetings.html prompt-copy elements**

Read `website/founder-meetings.html`. Add IDs to each `.prompt-copy` in order:

1. `meetings-get-up-to-speed` — starts with "Here is the website and/or whitepaper"
2. `meetings-call-prep` — starts with "I have a call with the team at [project] in 2 hours"
3. `meetings-sharp-questions` — starts with "I'm meeting with the founders of [project]"
4. `meetings-push-back` — starts with "Based on this project description, what are the 5 most important things to push back on"
5. `meetings-test-thinking` — starts with "Generate 5 questions that would reveal"
6. `meetings-internal-summary` — starts with "Here are my notes from a founder call"
7. `meetings-clean-notes` — starts with "Clean up and structure these call notes"
8. `meetings-brief-memo` — starts with "Here are my call notes: [paste]. Write this up as a brief memo"
9. `meetings-action-items` — starts with "Here are my notes from a call with [project / person]"
10. `meetings-follow-up` — starts with "Draft a short follow-up message to a founder after a first meeting"
11. `meetings-follow-up-materials` — starts with "Draft a polite follow-up message to a founder asking"

**Step 5: Add IDs to writing-comms.html prompt-copy elements**

Read `website/writing-comms.html`. Add IDs to each `.prompt-copy` in order:

1. `writing-rough-memo` — starts with "Here are my rough notes: [paste]. Turn these into a clean"
2. `writing-internal-memo` — starts with "I need to write an internal memo"
3. `writing-meeting-memo` — starts with "Here are notes from a meeting about"
4. `writing-slides-outline` — starts with "I'm preparing a presentation on [topic] for"
5. `writing-talking-points` — starts with "Here are my talking points for"
6. `writing-cut-down` — starts with "I have [X] minutes to present"
7. `writing-outreach` — starts with "Draft a short, professional outreach message to [person / team]"
8. `writing-introduction` — starts with "I want to introduce [Person A]"
9. `writing-follow-up` — starts with "Draft a follow-up message to [person] who I emailed"
10. `writing-slack-update` — starts with "Draft a Slack message to my team"
11. `writing-team-ask` — starts with "I need to ask [colleague / team]"
12. `writing-improve-clarity` — starts with "Here's something I wrote: [paste]. Can you improve the clarity"
13. `writing-review-draft` — starts with "Read this and tell me: is it clear?"

**Step 6: Add IDs to portfolio-support.html prompt-copy elements**

Read `website/portfolio-support.html`. Add IDs to each `.prompt-copy` in order:

1. `portfolio-understand-request` — starts with "Here is a request from one of our portfolio companies: [paste request]. Summarise"
2. `portfolio-clarify-ask` — starts with "A portfolio company sent this message"
3. `portfolio-briefing-note` — starts with "I need to brief a colleague on [portfolio company]"
4. `portfolio-two-paragraph` — starts with "Here are my notes on [portfolio company]: [paste]. Write a 2-paragraph"
5. `portfolio-draft-response` — starts with "Draft a response to this request from [portfolio company]"
6. `portfolio-direct-response` — starts with "A portfolio company asked: [paste question]"
7. `portfolio-recommendation` — starts with "A portfolio company has asked for help with [topic]"
8. `portfolio-focus-areas` — starts with "Here's what [portfolio company] is trying to achieve"
9. `portfolio-summarise-update` — starts with "Here is an update from [portfolio company]: [paste]. Summarise the key points in 3"
10. `portfolio-multiple-updates` — starts with "Here are updates from multiple portfolio companies"

**Step 7: Verify**

Run this check for each file — confirm the number of IDs added matches the expected count:
- `beginner-path.html`: 5 template-cards with IDs beginning `beginner-`
- `everyday-use.html`: 12 prompt-copy with IDs beginning `everyday-`
- `research-diligence.html`: 12 prompt-copy with IDs beginning `research-`
- `founder-meetings.html`: 11 prompt-copy with IDs beginning `meetings-`
- `writing-comms.html`: 13 prompt-copy with IDs beginning `writing-`
- `portfolio-support.html`: 10 prompt-copy with IDs beginning `portfolio-`

**Step 8: Commit**

```bash
git add website/beginner-path.html website/everyday-use.html website/research-diligence.html website/founder-meetings.html website/writing-comms.html website/portfolio-support.html
git commit -m "chore: add anchor IDs to all prompt elements for search index"
```

---

## Task 2: Add search CSS to style.css

**Files:**
- Modify: `website/style.css`

**Step 1: Append search styles to the end of style.css**

Add the following CSS to the end of `/Users/1kx/claude-learning/website/style.css`:

```css
/* Search input in nav */
.nav-search {
  display: flex;
  align-items: center;
}

.nav-search input {
  background: transparent;
  border: none;
  border-bottom: 1px solid #e2e2dc;
  padding: 0.2rem 0.4rem;
  font-size: 0.8rem;
  font-family: system-ui, sans-serif;
  color: #333333;
  width: 140px;
  outline: none;
}

.nav-search input::placeholder {
  color: #999999;
}

.nav-search input:focus {
  border-bottom-color: #1a3d2e;
}

/* Search page */
.search-controls {
  margin-bottom: 2rem;
}

.search-input-wrap {
  margin-bottom: 1rem;
}

.search-input-wrap input {
  width: 100%;
  border: 1px solid #e2e2dc;
  border-radius: 0;
  padding: 0.65rem 0.9rem;
  font-size: 1rem;
  font-family: system-ui, sans-serif;
  color: #111111;
  background: #ffffff;
  outline: none;
}

.search-input-wrap input:focus {
  border-color: #1a3d2e;
}

.role-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.role-filter-btn {
  background: #ffffff;
  border: 1px solid #e2e2dc;
  border-radius: 0;
  padding: 0.3rem 0.75rem;
  font-size: 0.78rem;
  font-family: system-ui, sans-serif;
  color: #666666;
  cursor: pointer;
  transition: all 0.15s;
}

.role-filter-btn:hover {
  border-color: #1a3d2e;
  color: #1a3d2e;
}

.role-filter-btn.active {
  background: #1a3d2e;
  border-color: #1a3d2e;
  color: #ffffff;
}

/* Search results */
.search-results {
  margin-top: 1.5rem;
}

.search-status {
  font-size: 0.82rem;
  color: #999999;
  margin-bottom: 1.5rem;
}

.search-result-card {
  background: #ffffff;
  border: 1px solid #e2e2dc;
  border-left: 3px solid #1a3d2e;
  padding: 1rem 1.25rem;
  margin-bottom: 0.75rem;
}

.search-result-meta {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #999999;
  margin-bottom: 0.3rem;
}

.search-result-label {
  font-weight: 600;
  color: #111111;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.search-result-text {
  font-style: italic;
  color: #333333;
  font-size: 0.9rem;
  line-height: 1.75;
  margin-bottom: 0.6rem;
}

.search-result-link {
  font-size: 0.78rem;
  color: #1a3d2e;
  text-decoration: none;
  border-bottom: 1px solid #1a3d2e;
  padding-bottom: 1px;
}

.search-result-link:hover {
  opacity: 0.7;
}

.search-empty {
  color: #666666;
  font-size: 0.95rem;
  margin-top: 2rem;
}
```

**Step 2: Commit**

```bash
git add website/style.css
git commit -m "feat: add search CSS — nav input, role filters, result cards"
```

---

## Task 3: Create search-data.js

**Files:**
- Create: `website/search-data.js`

**Step 1: Write the complete file**

Create `/Users/1kx/claude-learning/website/search-data.js` with this exact content:

```js
const SEARCH_DATA = [
  // BEGINNER PATH
  {
    label: "Summarise a document",
    text: "Here is a whitepaper / article / document: [paste text]. Summarise the key points in 5 bullet points for an investment audience.",
    section: "First 5 Prompts",
    page: "beginner-path.html",
    pageName: "Getting Started",
    roles: ["investment", "operations", "platform"],
    anchor: "beginner-summarise-document"
  },
  {
    label: "Explain a concept quickly",
    text: "Explain [concept, protocol, or term] in plain English. I understand the basics of crypto but not the technical details.",
    section: "First 5 Prompts",
    page: "beginner-path.html",
    pageName: "Getting Started",
    roles: ["investment", "operations", "platform"],
    anchor: "beginner-explain-concept"
  },
  {
    label: "Draft a message",
    text: "Draft a short, professional message to [recipient] about [topic]. Keep it direct and under 5 sentences.",
    section: "First 5 Prompts",
    page: "beginner-path.html",
    pageName: "Getting Started",
    roles: ["investment", "operations", "platform"],
    anchor: "beginner-draft-message"
  },
  {
    label: "Structure rough notes",
    text: "Here are my rough notes from a call: [paste notes]. Organise these into: key takeaways, open questions, and next steps.",
    section: "First 5 Prompts",
    page: "beginner-path.html",
    pageName: "Getting Started",
    roles: ["investment", "operations", "platform"],
    anchor: "beginner-structure-notes"
  },
  {
    label: "Prepare for a founder meeting",
    text: "I'm about to meet with a founder building [describe project]. Generate 8 sharp questions I should ask about their differentiation, go-to-market, and team.",
    section: "First 5 Prompts",
    page: "beginner-path.html",
    pageName: "Getting Started",
    roles: ["investment"],
    anchor: "beginner-founder-prep"
  },

  // EVERYDAY USE
  {
    label: "Summarise a document",
    text: "Here is a [whitepaper / report / article] on [topic]: [paste text]. Summarise the key points in [number] bullet points. Focus on: [what matters to you — e.g. technology, team, market, risks].",
    section: "Summarising long documents",
    page: "everyday-use.html",
    pageName: "Everyday Use",
    roles: ["investment", "operations", "platform"],
    anchor: "everyday-summarise-document"
  },
  {
    label: "Summarise an email thread",
    text: "Here is a long email thread: [paste]. Give me a one-paragraph summary of what was discussed and what, if anything, needs action from me.",
    section: "Summarising long documents",
    page: "everyday-use.html",
    pageName: "Everyday Use",
    roles: ["investment", "operations", "platform"],
    anchor: "everyday-email-thread"
  },
  {
    label: "Explain a concept",
    text: "Explain [concept / protocol / term] in plain English. I understand the basics of crypto but not the technical details. Cover: what problem it solves, how it works at a high level, and who the main players are.",
    section: "Explaining complex topics",
    page: "everyday-use.html",
    pageName: "Everyday Use",
    roles: ["investment", "operations", "platform"],
    anchor: "everyday-explain-concept"
  },
  {
    label: "Translate a technical explanation",
    text: "Here's a technical explanation of [topic]: [paste text]. Can you translate this into plain English? Assume I'm smart but not an engineer.",
    section: "Explaining complex topics",
    page: "everyday-use.html",
    pageName: "Everyday Use",
    roles: ["investment", "operations", "platform"],
    anchor: "everyday-translate-technical"
  },
  {
    label: "Draft a message",
    text: "Draft a [short / formal / casual] message to [who] about [topic]. Key points to include: [list]. Keep it [under X sentences / professional / direct].",
    section: "Drafting messages and emails",
    page: "everyday-use.html",
    pageName: "Everyday Use",
    roles: ["investment", "operations", "platform"],
    anchor: "everyday-draft-message"
  },
  {
    label: "Improve a draft message",
    text: "Here's a draft I wrote: [paste]. Can you improve the clarity and tone without changing the meaning? Keep it roughly the same length.",
    section: "Drafting messages and emails",
    page: "everyday-use.html",
    pageName: "Everyday Use",
    roles: ["investment", "operations", "platform"],
    anchor: "everyday-improve-draft"
  },
  {
    label: "Structure scattered notes",
    text: "Here are my rough notes: [paste]. Organise these into: key takeaways, open questions, and suggested next steps.",
    section: "Structuring scattered notes",
    page: "everyday-use.html",
    pageName: "Everyday Use",
    roles: ["investment", "operations", "platform"],
    anchor: "everyday-structure-notes"
  },
  {
    label: "Notes to structured summary",
    text: "Turn these notes into a short structured summary with: a one-line overview, 3–5 key points, and any action items. Notes: [paste].",
    section: "Structuring scattered notes",
    page: "everyday-use.html",
    pageName: "Everyday Use",
    roles: ["investment", "operations", "platform"],
    anchor: "everyday-notes-summary"
  },
  {
    label: "Compare two options",
    text: "Compare [Option A] and [Option B] across these dimensions: [list — e.g. team, technology, market size, differentiation]. Present as a table. Note where information is incomplete.",
    section: "Comparing options",
    page: "everyday-use.html",
    pageName: "Everyday Use",
    roles: ["investment", "operations", "platform"],
    anchor: "everyday-compare-options"
  },
  {
    label: "Compare three projects",
    text: "Here are notes on three projects in the [sector] space: [paste]. Which looks most differentiated and why? What are the key trade-offs between them?",
    section: "Comparing options",
    page: "everyday-use.html",
    pageName: "Everyday Use",
    roles: ["investment"],
    anchor: "everyday-compare-three"
  },
  {
    label: "Stress-test your thinking",
    text: "Here's my current thinking on [topic]: [paste]. What are the strongest counterarguments? What am I potentially missing?",
    section: "Getting a second opinion on your thinking",
    page: "everyday-use.html",
    pageName: "Everyday Use",
    roles: ["investment", "operations", "platform"],
    anchor: "everyday-stress-test"
  },
  {
    label: "Review before sending",
    text: "I'm about to send this: [paste]. Does it make sense? Is the logic clear? Is anything missing or potentially confusing?",
    section: "Getting a second opinion on your thinking",
    page: "everyday-use.html",
    pageName: "Everyday Use",
    roles: ["investment", "operations", "platform"],
    anchor: "everyday-review-before-send"
  },

  // RESEARCH & DILIGENCE
  {
    label: "First-pass on a project",
    text: "Here is a brief description of a project: [paste]. Give me a first-pass view covering: what it does, the problem it's solving, who the target users are, and any obvious risks or red flags.",
    section: "Scouting a new project",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "research-first-pass"
  },
  {
    label: "First look questions",
    text: "I'm doing a first look at [project name]. Here is their whitepaper introduction: [paste]. What are the 3 most important questions I should investigate before going further?",
    section: "Scouting a new project",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "research-first-look"
  },
  {
    label: "Draft a project brief",
    text: "Here are my research notes on [project]: [paste notes]. Draft a first-pass project brief with the following sections: Overview, Problem & Solution, Market & Differentiation, Team, Key Risks, Open Questions.",
    section: "Writing a first-pass project brief",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "research-draft-brief"
  },
  {
    label: "Write a concise project brief",
    text: "Based on the following information about [project], write a concise project brief (max 400 words) for internal review. Highlight what's interesting and what needs more investigation. Information: [paste].",
    section: "Writing a first-pass project brief",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "research-concise-brief"
  },
  {
    label: "Compare two projects",
    text: "Compare [Project A] and [Project B] across the following dimensions: technology approach, target market, tokenomics, team background, and current traction. Present as a structured table. Flag where information is limited or unclear.",
    section: "Comparing projects or competitors",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "research-compare-two"
  },
  {
    label: "Which is most differentiated?",
    text: "Here are notes on three projects in the [sector] space: [paste]. Which looks most differentiated and why? What are the key trade-offs between them from an investment perspective?",
    section: "Comparing projects or competitors",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "research-compare-three"
  },
  {
    label: "Competitive landscape",
    text: "I'm trying to understand the competitive landscape for [space]. Here are the main players I know of: [list]. What are the key dimensions to compare them on, and based on what I've shared, how do they stack up?",
    section: "Comparing projects or competitors",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "research-competitive-landscape"
  },
  {
    label: "5-minute briefing document",
    text: "I've gathered the following research on [project]: [paste]. Summarise this into a 5-minute briefing document. Structure it as: What they do, Why it's interesting, Key concerns, and Questions to resolve.",
    section: "Summarising research for a partner meeting",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "research-partner-briefing"
  },
  {
    label: "3-paragraph partner summary",
    text: "Here are my notes on [project]: [paste]. Write a 3-paragraph summary I can share before a partner meeting. Be direct about what's compelling and what's uncertain.",
    section: "Summarising research for a partner meeting",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "research-three-paragraph"
  },
  {
    label: "Due diligence checklist",
    text: "I'm preparing due diligence on [project]. Here's what I know so far: [paste]. Generate a due diligence checklist covering: technical architecture, team & background, market & competition, legal & regulatory risks, tokenomics, and community/ecosystem.",
    section: "Due diligence prep",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "research-diligence-checklist"
  },
  {
    label: "Top 5 things to verify",
    text: "Based on this project description, what are the 5 most important things to verify independently during diligence? [paste description]",
    section: "Due diligence prep",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "research-verify-top5"
  },
  {
    label: "Summarise a technical whitepaper",
    text: "Here is a technical whitepaper: [paste]. Summarise the key technical claims being made and flag any that seem unsubstantiated or that I should verify with an engineer.",
    section: "Due diligence prep",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "research-technical-whitepaper"
  },

  // FOUNDER MEETINGS
  {
    label: "Get up to speed before a call",
    text: "Here is the website and/or whitepaper for [project]: [paste]. Give me: a one-paragraph overview of what they do, 3 things that seem genuinely interesting or differentiated, and 3 things I should probe on in the meeting.",
    section: "Before the call: getting up to speed",
    page: "founder-meetings.html",
    pageName: "Founder Meetings",
    roles: ["investment"],
    anchor: "meetings-get-up-to-speed"
  },
  {
    label: "What to know going in",
    text: "I have a call with the team at [project] in 2 hours. Here's what I know about them: [paste]. What should I know going in, and what's still unclear?",
    section: "Before the call: getting up to speed",
    page: "founder-meetings.html",
    pageName: "Founder Meetings",
    roles: ["investment"],
    anchor: "meetings-call-prep"
  },
  {
    label: "Generate 10 specific questions",
    text: "I'm meeting with the founders of [project], which is [one-line description]. Generate 10 specific questions covering: product differentiation, go-to-market strategy, tokenomics design, team background, and the key risks I should understand.",
    section: "Before the call: generating sharp questions",
    page: "founder-meetings.html",
    pageName: "Founder Meetings",
    roles: ["investment"],
    anchor: "meetings-sharp-questions"
  },
  {
    label: "Push-back questions",
    text: "Based on this project description, what are the 5 most important things to push back on or probe during the meeting? [paste description]",
    section: "Before the call: generating sharp questions",
    page: "founder-meetings.html",
    pageName: "Founder Meetings",
    roles: ["investment"],
    anchor: "meetings-push-back"
  },
  {
    label: "Questions to test the team's thinking",
    text: "Generate 5 questions that would reveal whether this team has genuinely thought through [the hardest part of their business — e.g. distribution, regulation, technical complexity]. Project description: [paste].",
    section: "Before the call: generating sharp questions",
    page: "founder-meetings.html",
    pageName: "Founder Meetings",
    roles: ["investment"],
    anchor: "meetings-test-thinking"
  },
  {
    label: "Turn call notes into an internal summary",
    text: "Here are my notes from a founder call with [project]: [paste notes]. Turn these into a structured internal summary with the following sections: Overview, Key Points Discussed, What's Compelling, Concerns & Open Questions, Recommended Next Steps.",
    section: "After the call: turning notes into an internal summary",
    page: "founder-meetings.html",
    pageName: "Founder Meetings",
    roles: ["investment"],
    anchor: "meetings-internal-summary"
  },
  {
    label: "Clean up and structure call notes",
    text: "Clean up and structure these call notes into a readable internal summary. Preserve all key information but make it easy to scan. Notes: [paste].",
    section: "After the call: turning notes into an internal summary",
    page: "founder-meetings.html",
    pageName: "Founder Meetings",
    roles: ["investment"],
    anchor: "meetings-clean-notes"
  },
  {
    label: "Call notes to a brief memo",
    text: "Here are my call notes: [paste]. Write this up as a brief memo I can share with the team. Max 300 words. Be direct about what's interesting and what's uncertain.",
    section: "After the call: turning notes into an internal summary",
    page: "founder-meetings.html",
    pageName: "Founder Meetings",
    roles: ["investment"],
    anchor: "meetings-brief-memo"
  },
  {
    label: "Extract action items from call notes",
    text: "Here are my notes from a call with [project / person]: [paste]. Extract all action items and commitments. Present as two lists: things we said we would do, and things they said they would do.",
    section: "After the call: extracting action items",
    page: "founder-meetings.html",
    pageName: "Founder Meetings",
    roles: ["investment"],
    anchor: "meetings-action-items"
  },
  {
    label: "Draft a follow-up to a founder",
    text: "Draft a short follow-up message to a founder after a first meeting. The call went well. Key things to reference: [list 2–3 specific things from the conversation]. Include: a note of appreciation, 1–2 things we found genuinely interesting, and the agreed next step. Keep it brief and professional.",
    section: "After the call: drafting a follow-up message",
    page: "founder-meetings.html",
    pageName: "Founder Meetings",
    roles: ["investment"],
    anchor: "meetings-follow-up"
  },
  {
    label: "Follow-up requesting materials",
    text: "Draft a polite follow-up message to a founder asking for [specific materials / data room access / answers to open questions]. We met on [date]. Keep it short, warm, and direct.",
    section: "After the call: drafting a follow-up message",
    page: "founder-meetings.html",
    pageName: "Founder Meetings",
    roles: ["investment"],
    anchor: "meetings-follow-up-materials"
  },

  // WRITING & COMMS
  {
    label: "Notes to internal memo",
    text: "Here are my rough notes: [paste]. Turn these into a clean internal memo. Structure: one-paragraph summary at the top, key points, and any recommended actions. Keep it concise — under 300 words.",
    section: "Turning rough notes into a memo",
    page: "writing-comms.html",
    pageName: "Writing & Comms",
    roles: ["operations", "platform"],
    anchor: "writing-rough-memo"
  },
  {
    label: "Write an internal memo",
    text: "I need to write an internal memo on [topic]. Here's what I want to convey: [paste notes or bullet points]. Draft a professional memo with a clear structure. Audience: colleagues at a crypto investment firm.",
    section: "Turning rough notes into a memo",
    page: "writing-comms.html",
    pageName: "Writing & Comms",
    roles: ["operations", "platform"],
    anchor: "writing-internal-memo"
  },
  {
    label: "Meeting notes to a shareable memo",
    text: "Here are notes from a meeting about [topic]: [paste]. Write this up as a short memo that someone who wasn't in the meeting could read and understand. Include: context, key decisions or conclusions, and next steps.",
    section: "Turning rough notes into a memo",
    page: "writing-comms.html",
    pageName: "Writing & Comms",
    roles: ["operations", "platform"],
    anchor: "writing-meeting-memo"
  },
  {
    label: "Structure a 5-slide outline",
    text: "I'm preparing a presentation on [topic] for [audience — e.g. the team, an LP, a founder]. Here are my key points: [paste]. Structure these into a logical 5-slide outline with: slide title, one-sentence summary, and 3 bullet points per slide.",
    section: "Structuring slides and talking points",
    page: "writing-comms.html",
    pageName: "Writing & Comms",
    roles: ["operations", "platform"],
    anchor: "writing-slides-outline"
  },
  {
    label: "Organise talking points",
    text: "Here are my talking points for [meeting / presentation]: [paste]. Organise these into a logical flow and tell me if anything important seems missing or out of order.",
    section: "Structuring slides and talking points",
    page: "writing-comms.html",
    pageName: "Writing & Comms",
    roles: ["operations", "platform"],
    anchor: "writing-talking-points"
  },
  {
    label: "Cut down to essentials",
    text: "I have [X] minutes to present [topic]. Here are all my points: [paste]. Help me cut this down to the most important things and suggest a clear order.",
    section: "Structuring slides and talking points",
    page: "writing-comms.html",
    pageName: "Writing & Comms",
    roles: ["operations", "platform"],
    anchor: "writing-cut-down"
  },
  {
    label: "Draft outreach from 1kx",
    text: "Draft a short, professional outreach message to [person / team] at [project]. Purpose: [explain why you're reaching out]. Tone: direct but warm. Length: under 5 sentences. We are reaching out from 1kx.",
    section: "Drafting outreach messages",
    page: "writing-comms.html",
    pageName: "Writing & Comms",
    roles: ["operations", "investment"],
    anchor: "writing-outreach"
  },
  {
    label: "Write an introduction email",
    text: "I want to introduce [Person A] to [Person B]. Write a short double opt-in email introduction — one sentence on each person, why the introduction makes sense, and a clear call to action.",
    section: "Drafting outreach messages",
    page: "writing-comms.html",
    pageName: "Writing & Comms",
    roles: ["operations", "investment"],
    anchor: "writing-introduction"
  },
  {
    label: "Draft a follow-up",
    text: "Draft a follow-up message to [person] who I emailed [X days ago] about [topic] and haven't heard back from. Keep it brief, non-pushy, and professional.",
    section: "Drafting outreach messages",
    page: "writing-comms.html",
    pageName: "Writing & Comms",
    roles: ["operations", "investment"],
    anchor: "writing-follow-up"
  },
  {
    label: "Slack team update",
    text: "Draft a Slack message to my team with a brief update on [topic]. Key info: [paste notes]. Keep it under 5 lines and easy to skim.",
    section: "Internal coordination messages",
    page: "writing-comms.html",
    pageName: "Writing & Comms",
    roles: ["operations", "platform"],
    anchor: "writing-slack-update"
  },
  {
    label: "Make a clear team ask",
    text: "I need to ask [colleague / team] to [task or request]. Draft a clear, direct message that explains what's needed, why, and by when. Keep it polite and brief.",
    section: "Internal coordination messages",
    page: "writing-comms.html",
    pageName: "Writing & Comms",
    roles: ["operations", "platform"],
    anchor: "writing-team-ask"
  },
  {
    label: "Improve clarity and conciseness",
    text: "Here's something I wrote: [paste]. Can you improve the clarity and conciseness? Keep the same meaning and don't change the tone significantly.",
    section: "Improving something you've already written",
    page: "writing-comms.html",
    pageName: "Writing & Comms",
    roles: ["investment", "operations", "platform"],
    anchor: "writing-improve-clarity"
  },
  {
    label: "Review a draft",
    text: "Read this and tell me: is it clear? Is anything missing? Is the structure logical? Here it is: [paste].",
    section: "Improving something you've already written",
    page: "writing-comms.html",
    pageName: "Writing & Comms",
    roles: ["investment", "operations", "platform"],
    anchor: "writing-review-draft"
  },

  // PORTFOLIO SUPPORT
  {
    label: "Understand a portfolio request",
    text: "Here is a request from one of our portfolio companies: [paste request]. Summarise what they're actually asking for, what the underlying problem seems to be, and what a good response would need to include.",
    section: "Understanding a portfolio company request",
    page: "portfolio-support.html",
    pageName: "Portfolio Support",
    roles: ["platform"],
    anchor: "portfolio-understand-request"
  },
  {
    label: "Clarify a portfolio ask",
    text: "A portfolio company sent this message: [paste]. Is this a clear ask? What information would I need to give them a useful response?",
    section: "Understanding a portfolio company request",
    page: "portfolio-support.html",
    pageName: "Portfolio Support",
    roles: ["platform"],
    anchor: "portfolio-clarify-ask"
  },
  {
    label: "Write a briefing note",
    text: "I need to brief a colleague on [portfolio company]. Here's what I know about them: [paste notes]. Write a short briefing note covering: what they do, where they are in their journey, current priorities, and any open items from our side.",
    section: "Preparing a briefing note on a portfolio company",
    page: "portfolio-support.html",
    pageName: "Portfolio Support",
    roles: ["platform"],
    anchor: "portfolio-briefing-note"
  },
  {
    label: "Two-paragraph summary for a new colleague",
    text: "Here are my notes on [portfolio company]: [paste]. Write a 2-paragraph summary a new colleague could read before getting on a call with them.",
    section: "Preparing a briefing note on a portfolio company",
    page: "portfolio-support.html",
    pageName: "Portfolio Support",
    roles: ["platform"],
    anchor: "portfolio-two-paragraph"
  },
  {
    label: "Draft a response to a portfolio company",
    text: "Draft a response to this request from [portfolio company]: [paste request]. My answer / view is: [paste your notes or thinking]. Make the response clear, helpful, and professional. Keep it concise.",
    section: "Drafting a response to a portfolio company",
    page: "portfolio-support.html",
    pageName: "Portfolio Support",
    roles: ["platform"],
    anchor: "portfolio-draft-response"
  },
  {
    label: "Direct response to a question",
    text: "A portfolio company asked: [paste question]. Here's what I know: [paste context]. Draft a response that's direct and useful without overcomplicating it.",
    section: "Drafting a response to a portfolio company",
    page: "portfolio-support.html",
    pageName: "Portfolio Support",
    roles: ["platform"],
    anchor: "portfolio-direct-response"
  },
  {
    label: "Draft a support recommendation",
    text: "A portfolio company has asked for help with [topic]. Here's what I know about their situation: [paste context]. Draft a structured set of recommendations or a short action plan they could follow. Keep it practical.",
    section: "Structuring a support recommendation",
    page: "portfolio-support.html",
    pageName: "Portfolio Support",
    roles: ["platform"],
    anchor: "portfolio-recommendation"
  },
  {
    label: "What to focus on",
    text: "Here's what [portfolio company] is trying to achieve: [paste]. What are the 3–5 most important things they should focus on? Draft brief notes on each.",
    section: "Structuring a support recommendation",
    page: "portfolio-support.html",
    pageName: "Portfolio Support",
    roles: ["platform"],
    anchor: "portfolio-focus-areas"
  },
  {
    label: "Summarise a portfolio update",
    text: "Here is an update from [portfolio company]: [paste]. Summarise the key points in 3–5 bullet points. Flag anything that seems to need attention or follow-up from our side.",
    section: "Summarising portfolio updates",
    page: "portfolio-support.html",
    pageName: "Portfolio Support",
    roles: ["platform"],
    anchor: "portfolio-summarise-update"
  },
  {
    label: "Status across multiple companies",
    text: "Here are updates from multiple portfolio companies: [paste]. Give me a one-line status per company and flag any that need immediate attention.",
    section: "Summarising portfolio updates",
    page: "portfolio-support.html",
    pageName: "Portfolio Support",
    roles: ["platform"],
    anchor: "portfolio-multiple-updates"
  }
];
```

**Step 2: Verify the file**

Check the file was written correctly — it should have exactly 63 entries (count the opening `{` characters after `label:`).

**Step 3: Commit**

```bash
git add website/search-data.js
git commit -m "feat: add search-data.js with 63 indexed prompts"
```

---

## Task 4: Create search.html

**Files:**
- Create: `website/search.html`

**Step 1: Write the file**

Create `/Users/1kx/claude-learning/website/search.html` with this exact content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Search Prompts — Claude at 1kx</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <nav>
    <a class="site-name" href="index.html">Claude at 1kx</a>
    <ul>
      <li><a href="beginner-path.html">Getting Started</a></li>
      <li><a href="everyday-use.html">Everyday Use</a></li>
      <li><a href="research-diligence.html">Research &amp; Diligence</a></li>
      <li><a href="founder-meetings.html">Founder Meetings</a></li>
      <li><a href="writing-comms.html">Writing &amp; Comms</a></li>
      <li><a href="portfolio-support.html">Portfolio Support</a></li>
      <li><a href="prompt-templates.html">Prompt Templates</a></li>
      <li><a href="safe-use.html">Safe Use</a></li>
    </ul>
    <div class="nav-search">
      <input type="search" placeholder="Search prompts…" id="nav-search-input" autocomplete="off" />
    </div>
  </nav>

  <main>
    <p class="page-category">Search</p>
    <h1>Search Prompts</h1>
    <p class="subtitle">Find any prompt across the site. Filter by role or type a keyword.</p>

    <div class="search-controls">
      <div class="search-input-wrap">
        <input
          type="search"
          id="search-input"
          placeholder="Type a keyword — e.g. diligence, memo, follow-up…"
          autocomplete="off"
        />
      </div>
      <div class="role-filters">
        <button class="role-filter-btn" data-role="investment">Investment &amp; Research</button>
        <button class="role-filter-btn" data-role="operations">Operations &amp; Comms</button>
        <button class="role-filter-btn" data-role="platform">Platform &amp; Portfolio</button>
      </div>
    </div>

    <div class="search-results">
      <p class="search-status" id="search-status"></p>
      <div id="results-container"></div>
    </div>
  </main>

  <script src="search-data.js"></script>
  <script>
    const searchInput = document.getElementById('search-input');
    const navInput = document.getElementById('nav-search-input');
    const statusEl = document.getElementById('search-status');
    const container = document.getElementById('results-container');
    const roleButtons = document.querySelectorAll('.role-filter-btn');

    let activeRoles = new Set();

    // Read ?q= param on load
    const params = new URLSearchParams(window.location.search);
    const initialQuery = params.get('q') || '';
    if (initialQuery) {
      searchInput.value = initialQuery;
    }

    // Role filter toggle
    roleButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const role = btn.dataset.role;
        if (activeRoles.has(role)) {
          activeRoles.delete(role);
          btn.classList.remove('active');
        } else {
          activeRoles.add(role);
          btn.classList.add('active');
        }
        runSearch();
      });
    });

    // Live search on keyup
    searchInput.addEventListener('input', runSearch);

    // Nav input submits to search page (on this page, just updates the main input)
    navInput.addEventListener('keydown', e => {
      if (e.key === 'Enter' && navInput.value.trim()) {
        searchInput.value = navInput.value.trim();
        runSearch();
        searchInput.focus();
      }
    });

    function runSearch() {
      const query = searchInput.value.trim().toLowerCase();
      const hasQuery = query.length > 0;
      const hasRoleFilter = activeRoles.size > 0;

      if (!hasQuery && !hasRoleFilter) {
        statusEl.textContent = '';
        container.innerHTML = '<p class="search-empty">Type a keyword or select a role to find prompts.</p>';
        return;
      }

      const results = SEARCH_DATA.filter(item => {
        const matchesText = !hasQuery ||
          item.label.toLowerCase().includes(query) ||
          item.text.toLowerCase().includes(query) ||
          item.section.toLowerCase().includes(query);

        const matchesRole = !hasRoleFilter ||
          item.roles.some(r => activeRoles.has(r));

        return matchesText && matchesRole;
      });

      if (results.length === 0) {
        statusEl.textContent = '';
        container.innerHTML = '<p class="search-empty">No prompts match your search.</p>';
        return;
      }

      statusEl.textContent = results.length + ' prompt' + (results.length === 1 ? '' : 's') + ' found';
      container.innerHTML = results.map(item => `
        <div class="search-result-card">
          <div class="search-result-meta">${escapeHtml(item.pageName)} &rsaquo; ${escapeHtml(item.section)}</div>
          <div class="search-result-label">${escapeHtml(item.label)}</div>
          <div class="search-result-text">${escapeHtml(item.text)}</div>
          <a class="search-result-link" href="${item.page}#${item.anchor}">View in context →</a>
        </div>
      `).join('');
    }

    function escapeHtml(str) {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    // Run on load if there's a query param
    if (initialQuery) {
      runSearch();
    } else {
      container.innerHTML = '<p class="search-empty">Type a keyword or select a role to find prompts.</p>';
    }
  </script>

</body>
</html>
```

**Step 2: Verify**

Open `website/search.html` in a browser. Expected:
- Input and three role buttons visible
- Empty state message shows
- Typing "diligence" shows Research & Diligence prompts
- Clicking "Investment & Research" with no text shows all 36 investment-tagged prompts
- "View in context →" links point to the right page#anchor

**Step 3: Commit**

```bash
git add website/search.html
git commit -m "feat: add search page with live filtering and role buttons"
```

---

## Task 5: Add search input to nav on all 9 pages

**Files:**
- Modify: `website/index.html`, `website/beginner-path.html`, `website/everyday-use.html`, `website/research-diligence.html`, `website/founder-meetings.html`, `website/writing-comms.html`, `website/portfolio-support.html`, `website/prompt-templates.html`, `website/safe-use.html`

**Step 1: What to add to each page**

In every page's `<nav>`, after the closing `</ul>` tag and before `</nav>`, insert:

```html
    <div class="nav-search">
      <input type="search" placeholder="Search prompts…" id="nav-search-input" autocomplete="off" />
    </div>
```

And add this script block just before `</body>` (NOT on search.html — only on the 9 pages):

```html
  <script>
    document.getElementById('nav-search-input').addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && this.value.trim()) {
        window.location.href = 'search.html?q=' + encodeURIComponent(this.value.trim());
      }
    });
  </script>
```

Apply to all 9 pages: index.html, beginner-path.html, everyday-use.html, research-diligence.html, founder-meetings.html, writing-comms.html, portfolio-support.html, prompt-templates.html, safe-use.html.

**Step 2: Verify**

Open any page in a browser. Nav should show the search input on the right. Type "memo" and press Enter — should navigate to `search.html?q=memo` and show results.

**Step 3: Commit**

```bash
git add website/
git commit -m "feat: add search input to nav on all 9 pages"
```

---

## Task 6: Final push to GitHub

**Step 1: Push all commits**

```bash
cd /Users/1kx/claude-learning
git push
```

**Step 2: Verify on Vercel**

Go to the live site. Confirm:
- Nav search input visible on every page
- Pressing Enter navigates to search page with results
- Role filter buttons work
- "View in context →" links go to the right page and scroll to the right element
