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
    text: "I’m about to meet with a founder building [describe project]. Generate 8 sharp questions I should ask about their differentiation, go-to-market, and team.",
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
    text: "Here’s a technical explanation of [topic]: [paste text]. Can you translate this into plain English? Assume I’m smart but not an engineer.",
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
    text: "Here’s a draft I wrote: [paste]. Can you improve the clarity and tone without changing the meaning? Keep it roughly the same length.",
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
    text: "Here’s my current thinking on [topic]: [paste]. What are the strongest counterarguments? What am I potentially missing?",
    section: "Getting a second opinion on your thinking",
    page: "everyday-use.html",
    pageName: "Everyday Use",
    roles: ["investment", "operations", "platform"],
    anchor: "everyday-stress-test"
  },
  {
    label: "Review before sending",
    text: "I’m about to send this: [paste]. Does it make sense? Is the logic clear? Is anything missing or potentially confusing?",
    section: "Getting a second opinion on your thinking",
    page: "everyday-use.html",
    pageName: "Everyday Use",
    roles: ["investment", "operations", "platform"],
    anchor: "everyday-review-before-send"
  },

  // RESEARCH & DILIGENCE
  {
    label: "First-pass on a new project",
    text: "Here is a description of a project: [paste]. Give me a first-pass view covering: what it does and what problem it solves, who the target users are, how the token model works, and the two or three most obvious risks or questions I should investigate further.",
    section: "First-pass on a new project",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "research-first-pass"
  },
  {
    label: "Key investigation questions",
    text: "I’m doing a first look at [project name]. Here is their whitepaper introduction: [paste]. What are the three most important things to investigate before going further — and what would a good answer to each look like?",
    section: "First-pass on a new project",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "research-first-look"
  },
  {
    label: "Identify what actually matters",
    text: "Here is what I know about [project] so far: [paste]. Given this, what are the two or three things that will most determine whether this is a good investment? Not a comprehensive checklist — the specific factors the whole investment case hinges on.",
    section: "Identifying what actually matters",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "research-what-matters"
  },
  {
    label: "Most important claims to verify",
    text: "Based on this project description, what are the five most important claims to verify independently during diligence? For each one, suggest where the evidence would actually come from. Project description: [paste].",
    section: "Identifying what actually matters",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "research-verify-top5"
  },
  {
    label: "Compare two projects",
    text: "Compare [Project A] and [Project B] across: technology approach, token model, target market, team background, and current traction. Present as a structured table. Where information is limited or unclear, flag it rather than inferring.",
    section: "Comparing projects in a space",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "research-compare-two"
  },
  {
    label: "Compare three projects in a sector",
    text: "Here are notes on three projects in the [sector] space: [paste]. Which looks most differentiated and why? What are the key trade-offs between them from an investment perspective?",
    section: "Comparing projects in a space",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "research-compare-three"
  },
  {
    label: "Competitive landscape mapping",
    text: "I’m mapping the competitive landscape for [space]. Here are the main projects I know of: [list]. What are the most important dimensions to compare them on? Based on what I’ve shared, how do they stack up?",
    section: "Comparing projects in a space",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "research-competitive-landscape"
  },
  {
    label: "Evaluate a technical whitepaper",
    text: "Here is a technical whitepaper: [paste]. Summarise the key technical claims. For each significant claim, flag: whether it is well-supported within the paper, whether it is novel or common in this space, and whether it is something an engineer should verify independently.",
    section: "Evaluating a technical whitepaper",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "research-technical-whitepaper"
  },
  {
    label: "Token model stress test",
    text: "Here is a description of the token model for [project]: [paste]. Walk me through how this model works in practice. What are the incentive structures for different participant types? What happens to token price and holder behaviour under adverse conditions — market drawdown, team token unlocks, or a competing protocol with better incentives?",
    section: "Evaluating a technical whitepaper",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "research-token-model"
  },
  {
    label: "Diligence gap analysis",
    text: "I’m preparing due diligence on [project]. Here’s what I know so far: [paste]. Organise what I have into: confirmed (evidence I’ve seen), claimed (stated but not yet verified), and unknown (not addressed). Then list the five most important gaps to close before making a decision.",
    section: "Diligence gap analysis",
    page: "research-diligence.html",
    pageName: "Research & Diligence",
    roles: ["investment"],
    anchor: "research-diligence-checklist"
  },

  // FOUNDER MEETINGS
  {
    label: "Get up to speed before a call",
    text: "Here is the website and/or whitepaper for [project]: [paste]. Give me: a one-paragraph overview of what they do, the two or three things that seem genuinely interesting or differentiated, and the two or three things I should probe on in the meeting.",
    section: "Before the call: getting up to speed",
    page: "founder-meetings.html",
    pageName: "Founder Meetings",
    roles: ["investment"],
    anchor: "meetings-get-up-to-speed"
  },
  {
    label: "Call prep: what to ask directly",
    text: "I have a call with the team at [project] in 2 hours. Here’s what I know about them: [paste]. What should I understand going in, and what is still unclear enough that I should ask directly?",
    section: "Before the call: getting up to speed",
    page: "founder-meetings.html",
    pageName: "Founder Meetings",
    roles: ["investment"],
    anchor: "meetings-call-prep"
  },
  {
    label: "Surface what to probe in the pitch",
    text: "Here is what I know about [project]: [paste description or deck summary]. What are the five things in this pitch that are most likely to be overstated, underexplained, or harder than they’re making it sound? Draft a specific question for each one.",
    section: "Before the call: surfacing what to probe",
    page: "founder-meetings.html",
    pageName: "Founder Meetings",
    roles: ["investment"],
    anchor: "meetings-push-back"
  },
  {
    label: "Questions that test genuine thinking",
    text: "Generate five questions that would reveal whether this team has genuinely solved [the hardest problem in their business — e.g. distribution, regulatory risk, technical architecture]. Not questions they’ve prepared for — questions that require them to think on their feet. Project description: [paste].",
    section: "Before the call: surfacing what to probe",
    page: "founder-meetings.html",
    pageName: "Founder Meetings",
    roles: ["investment"],
    anchor: "meetings-test-thinking"
  },
  {
    label: "Structured internal summary from call notes",
    text: "Here are my notes from a founder call with [project]: [paste]. Turn these into a structured internal summary with: Overview, Key Claims Made, What Was Not Addressed or Deflected, and Recommended Next Steps.",
    section: "After the call: structured internal summary",
    page: "founder-meetings.html",
    pageName: "Founder Meetings",
    roles: ["investment"],
    anchor: "meetings-internal-summary"
  },
  {
    label: "Brief team memo from call notes",
    text: "Here are my call notes: [paste]. Write this up as a brief memo I can share with the team. Under 300 words. Be direct about what’s compelling, what’s uncertain, and what needs to be verified.",
    section: "After the call: structured internal summary",
    page: "founder-meetings.html",
    pageName: "Founder Meetings",
    roles: ["investment"],
    anchor: "meetings-brief-memo"
  },
  {
    label: "Check what the founder implied",
    text: "Here are my notes from a founder call: [paste]. Based on what was said, what does this suggest about the actual state of the project — things that weren’t stated directly? Which claims, if true, would be easy to verify? Which would be hard?",
    section: "After the call: checking what the founder implied",
    page: "founder-meetings.html",
    pageName: "Founder Meetings",
    roles: ["investment"],
    anchor: "meetings-implied-check"
  },
  {
    label: "Extract action items from call",
    text: "Here are my notes from a call with [project]: [paste]. Extract all commitments and action items. Two lists: what we said we would do, and what they said they would do.",
    section: "After the call: action items and follow-up",
    page: "founder-meetings.html",
    pageName: "Founder Meetings",
    roles: ["investment"],
    anchor: "meetings-action-items"
  },
  {
    label: "Draft follow-up to founder",
    text: "Draft a follow-up message to [founder name] at [project]. Reference the call, acknowledge what was covered, and ask the two or three most important open questions. Tone: warm, direct, professional. Under 150 words.",
    section: "After the call: action items and follow-up",
    page: "founder-meetings.html",
    pageName: "Founder Meetings",
    roles: ["investment"],
    anchor: "meetings-follow-up"
  },

  // WRITING & COMMS
  {
    label: "Outreach from 1kx",
    text: "Draft a short outreach message to [person / team] at [project]. Purpose: [explain specifically why we’re reaching out — not just ‘we’re interested in your work’]. Tone: direct and specific. Length: under 5 sentences. We are reaching out from 1kx.",
    section: "Outreach to founders and projects",
    page: "writing-comms.html",
    pageName: "Writing & Comms",
    roles: ["investment", "operations"],
    anchor: "writing-outreach"
  },
  {
    label: "Follow-up to unanswered outreach",
    text: "Draft a follow-up message to [person] who I contacted [X days ago] about [topic] and haven’t heard back from. Brief, non-pushy, professional. Reference something specific from the original message.",
    section: "Outreach to founders and projects",
    page: "writing-comms.html",
    pageName: "Writing & Comms",
    roles: ["investment", "operations"],
    anchor: "writing-follow-up"
  },
  {
    label: "Double opt-in introduction",
    text: "I want to introduce [Person A] to [Person B]. Write a double opt-in email introduction: one sentence on each person, why this specific introduction makes sense for both of them, and a single clear call to action. Keep it under 100 words.",
    section: "Introduction emails",
    page: "writing-comms.html",
    pageName: "Writing & Comms",
    roles: ["investment", "operations"],
    anchor: "writing-introduction"
  },
  {
    label: "LP update",
    text: "I need to write a brief update to our LPs on [topic — e.g. a new investment, a portfolio development, a market view]. Here are the key points I want to convey: [paste notes]. Draft a clear, professional update that is honest about uncertainty where it exists. Audience: sophisticated investors who know the space. Length: under 300 words.",
    section: "LP and investor communications",
    page: "writing-comms.html",
    pageName: "Writing & Comms",
    roles: ["investment", "operations"],
    anchor: "writing-lp-update"
  },
  {
    label: "Communicate an investment rationale",
    text: "I need to communicate why we made [investment] to [audience — e.g. LPs, co-investors, the broader team]. Here is the investment rationale: [paste]. Write a clear, confident explanation that covers: what we believed, why we acted when we did, and what would need to be true for the investment to work. Avoid promotional language.",
    section: "LP and investor communications",
    page: "writing-comms.html",
    pageName: "Writing & Comms",
    roles: ["investment", "operations"],
    anchor: "writing-investment-rationale"
  },
  {
    label: "Slack team update",
    text: "Draft a Slack message to the team with a brief update on [topic]. Key info: [paste notes]. Under 5 lines. Easy to skim. Flag clearly if any action is needed from anyone.",
    section: "Internal coordination",
    page: "writing-comms.html",
    pageName: "Writing & Comms",
    roles: ["operations", "platform"],
    anchor: "writing-slack-update"
  },
  {
    label: "Make a clear team ask",
    text: "I need to ask [colleague / team] to [task or request]. Draft a message that explains what’s needed, why, and by when. Direct and brief — no padding.",
    section: "Internal coordination",
    page: "writing-comms.html",
    pageName: "Writing & Comms",
    roles: ["operations", "platform"],
    anchor: "writing-team-ask"
  },

  // PORTFOLIO SUPPORT
  {
    label: "Understand a portfolio request",
    text: "Here is a request from one of our portfolio companies: [paste request]. Summarise what they’re actually asking for, what the underlying problem seems to be, and what a good response would need to include.",
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
    text: "I need to brief a colleague on [portfolio company]. Here’s what I know about them: [paste notes]. Write a short briefing note covering: what they do, where they are in their journey, current priorities, and any open items from our side.",
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
    text: "A portfolio company asked: [paste question]. Here’s what I know: [paste context]. Draft a response that’s direct and useful without overcomplicating it.",
    section: "Drafting a response to a portfolio company",
    page: "portfolio-support.html",
    pageName: "Portfolio Support",
    roles: ["platform"],
    anchor: "portfolio-direct-response"
  },
  {
    label: "Draft a support recommendation",
    text: "A portfolio company has asked for help with [topic]. Here’s what I know about their situation: [paste context]. Draft a structured set of recommendations or a short action plan they could follow. Keep it practical.",
    section: "Structuring a support recommendation",
    page: "portfolio-support.html",
    pageName: "Portfolio Support",
    roles: ["platform"],
    anchor: "portfolio-recommendation"
  },
  {
    label: "What to focus on",
    text: "Here’s what [portfolio company] is trying to achieve: [paste]. What are the 3–5 most important things they should focus on? Draft brief notes on each.",
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

  // THINKING TOOLS
  {
    label: "Red-team your investment thesis",
    text: "Here is my investment thesis for [project]: [paste]. Argue against it as forcefully as you can. Assume the investment fails. What are the three most compelling reasons it does? Don’t balance this with positives — I want the strongest possible bear case.",
    section: "Red-team your thesis",
    page: "thinking-tools.html",
    pageName: "Thinking Tools",
    roles: ["investment"],
    anchor: "thinking-redteam"
  },
  {
    label: "Map the assumptions your thesis depends on",
    text: "Here is an investment thesis or pitch summary: [paste]. List every assumption this argument depends on to be true. For each assumption: how critical is it to the investment case (high / medium / low), how well-supported is it right now (verified / plausible / unverified), and what evidence would confirm or rule it out?",
    section: "Map the assumptions your thesis depends on",
    page: "thinking-tools.html",
    pageName: "Thinking Tools",
    roles: ["investment"],
    anchor: "thinking-assumptions"
  },
  {
    label: "Check for contradictions across sources",
    text: "Here are two sources of information about [project]: [source A — paste] and [source B — paste]. Identify: claims that appear in one source but not the other, statements that directly contradict each other, and any places where what is said publicly does not match the technical documentation.",
    section: "Check for contradictions across sources",
    page: "thinking-tools.html",
    pageName: "Thinking Tools",
    roles: ["investment"],
    anchor: "thinking-contradictions"
  },
  {
    label: "Simulate a skeptical LP",
    text: "I am about to present this investment case to a skeptical audience: [paste summary or memo]. Generate five hard questions a well-informed critic would ask — questions that expose weak assumptions, missing evidence, or claims that don’t hold up under scrutiny. Then draft concise, honest answers to each, including where the honest answer is ‘we don’t know yet’.",
    section: "Simulate a skeptical LP",
    page: "thinking-tools.html",
    pageName: "Thinking Tools",
    roles: ["investment"],
    anchor: "thinking-skeptical-lp"
  },
  {
    label: "Map second-order effects",
    text: "Here is a market event or decision: [describe]. Walk me through the second and third-order effects. For each immediate outcome, what follows — and what follows after that? Which downstream effects are most likely to be underpriced or overlooked by most observers?",
    section: "Map second-order effects",
    page: "thinking-tools.html",
    pageName: "Thinking Tools",
    roles: ["investment"],
    anchor: "thinking-second-order"
  },
  {
    label: "Test competitive differentiation",
    text: "Here are positioning statements from competing projects in [space]: [paste]. For each claim: is this genuinely differentiated, or are multiple projects making the same assertion with different words? Which claims are independently verifiable? What does the real technical or structural differentiation come down to?",
    section: "Test competitive differentiation",
    page: "thinking-tools.html",
    pageName: "Thinking Tools",
    roles: ["investment"],
    anchor: "thinking-differentiation"
  },

  // WORKFLOWS
  {
    label: "Pre-investment: summarise the opportunity",
    text: "Here is a pitch deck or whitepaper for [project]: [paste]. Summarise in three sections: (1) what the project does and what problem it solves, (2) how the token model works and how value accrues to holders, (3) the team’s relevant credentials and anything worth flagging about their background.",
    section: "Pre-investment workflow",
    page: "workflows.html",
    pageName: "Workflows",
    roles: ["investment"],
    anchor: "workflow-preinvest-1"
  },
  {
    label: "Pre-investment: stress-test the thesis",
    text: "Based on the summary above, argue against investing. What are the three strongest reasons this investment fails? Be specific to this project — not generic investment risks.",
    section: "Pre-investment workflow",
    page: "workflows.html",
    pageName: "Workflows",
    roles: ["investment"],
    anchor: "workflow-preinvest-2"
  },
  {
    label: "Pre-investment: surface open questions",
    text: "Based on everything above, list the five most important questions that are still unanswered. For each one: how critical is the answer to the investment case (high / medium / low), and how answerable is it before we invest?",
    section: "Pre-investment workflow",
    page: "workflows.html",
    pageName: "Workflows",
    roles: ["investment"],
    anchor: "workflow-preinvest-3"
  },
  {
    label: "Post-meeting: structure the notes",
    text: "Here are my raw notes from a founder call with [project]: [paste]. Rewrite as a structured summary with three sections: (1) context on the company in one paragraph, (2) key claims made by the founder as bullet points, (3) what was explicitly not addressed or deflected when asked.",
    section: "Post-meeting workflow",
    page: "workflows.html",
    pageName: "Workflows",
    roles: ["investment"],
    anchor: "workflow-postmeeting-1"
  },
  {
    label: "Post-meeting: identify the gaps",
    text: "Looking at the summary above: what are the five most significant things that remain open? Focus on questions that are material to an investment decision — not just things that weren’t covered in passing.",
    section: "Post-meeting workflow",
    page: "workflows.html",
    pageName: "Workflows",
    roles: ["investment"],
    anchor: "workflow-postmeeting-2"
  },
  {
    label: "Post-meeting: draft the follow-up",
    text: "Draft a follow-up email to [founder name] at [project]. Reference the call, acknowledge what was covered, and ask the three most important open questions. Tone: warm, direct, professional. Keep it under 150 words.",
    section: "Post-meeting workflow",
    page: "workflows.html",
    pageName: "Workflows",
    roles: ["investment"],
    anchor: "workflow-postmeeting-3"
  },
  {
    label: "Due diligence: map what you know",
    text: "Here is everything I have on [project] so far: [paste all materials]. Organise into three categories: confirmed (supported by evidence I’ve seen), claimed (stated by the team but not yet verified), and unknown (not addressed at all). Focus on: token model, team, competitive position, and go-to-market.",
    section: "Due diligence workflow",
    page: "workflows.html",
    pageName: "Workflows",
    roles: ["investment"],
    anchor: "workflow-dd-1"
  },
  {
    label: "Due diligence: cross-check the claims",
    text: "Here are specific claims made by [project] across these sources: [paste]. For each claim: is it internally consistent across sources, does any evidence contradict it, and is it independently verifiable or does it require us to take their word for it?",
    section: "Due diligence workflow",
    page: "workflows.html",
    pageName: "Workflows",
    roles: ["investment"],
    anchor: "workflow-dd-2"
  },
  {
    label: "Due diligence: write the gap list",
    text: "Based on the diligence so far, write a gap list. For each open question: what information would close it, where that information could realistically come from, and whether it is a hard blocker or a nice-to-have before making a decision.",
    section: "Due diligence workflow",
    page: "workflows.html",
    pageName: "Workflows",
    roles: ["investment"],
    anchor: "workflow-dd-3"
  },

  // SKILLS
  {
    label: "Meeting summary skill template",
    text: "You are helping me process notes from founder calls at 1kx, a crypto-native early-stage VC. When I give you raw call notes, always produce the following in this exact structure: COMPANY / DATE / CONTEXT / KEY CLAIMS / GAPS / NEXT STEP. Keep the total under 300 words. Do not add information I have not provided.",
    section: "Meeting summary skill",
    page: "skills.html",
    pageName: "Skills",
    roles: ["investment", "operations", "platform"],
    anchor: "skill-meeting-template"
  },
  {
    label: "Investment screening skill template",
    text: "You are helping me do first-pass screening of crypto and web3 investment opportunities at 1kx. When I give you a pitch deck, whitepaper, or project description, always produce: WHAT IT IS / TOKEN MODEL / TEAM / COMPETITIVE POSITION / MAIN RISKS. Be specific to this project. Avoid observations that would apply to any crypto project.",
    section: "Investment screening skill",
    page: "skills.html",
    pageName: "Skills",
    roles: ["investment"],
    anchor: "skill-deck-screening"
  },
  {
    label: "Outreach skill template",
    text: "You are helping me write external communications on behalf of 1kx. Produce messages that are: specific (why we’re reaching out to this person), brief (under 5 sentences), direct but warm, ending with a single clear ask. Never use: ‘I hope this finds you well’, ‘I wanted to reach out’, ‘touch base’.",
    section: "Outreach skill",
    page: "skills.html",
    pageName: "Skills",
    roles: ["investment", "operations"],
    anchor: "skill-outreach"
  }
];
