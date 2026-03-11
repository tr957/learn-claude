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
  },

  // GOING FURTHER
  {
    label: "Cross-document contradiction check",
    text: "Based on everything here, what claims in the deck are not supported by — or directly contradict — the technical documentation?",
    section: "Working across a project",
    page: "going-further.html",
    pageName: "Going Further",
    roles: ["investment"],
    anchor: "further-contradiction-check"
  },
  {
    label: "Reusable meeting summary skill",
    text: "When I give you notes from a founder call, always produce the following: one paragraph of context on the company, the three most important claims the founder made, two open questions that were not answered, and a recommended next step. Keep the whole thing under 300 words.",
    section: "Turning repeated work into a reusable skill",
    page: "going-further.html",
    pageName: "Going Further",
    roles: ["investment", "operations", "platform"],
    anchor: "further-meeting-skill"
  },
  {
    label: "Pre-investment deck summary",
    text: "Summarise this deck. Focus on: token economics, founding team credentials, and the three strongest competitive risks. Format as three short sections.",
    section: "From one-off prompt to repeatable workflow",
    page: "going-further.html",
    pageName: "Going Further",
    roles: ["investment"],
    anchor: "further-deck-summary"
  }
];
