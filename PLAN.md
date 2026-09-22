# Product roadmap — AI Research Guide

The design system, SEO foundation and the opening half of the article are built. The remaining
milestones each add one self-contained section of the article using styles that already exist in
`assets/css/site.css`, so they can be picked up in any order after milestone 1.

## Done

**Milestone 1 — Brand, design system and article opening** ✅
Sticky glass header with reading-progress bar, animated hero with the SVG AI Pod network visual, the
research introduction, *What Is an AI Pod?* with its interactive six-way comparison tabs, and the animated
four-stage *How an AI Pod Works* process. Includes the full SEO head (canonical, Open Graph, Twitter
Card, Article / Person / Organization / WebSite / BreadcrumbList structured data), the generated 1200×630
Open Graph card, the complete responsive stylesheet covering every later section, and the interaction
script.

## Remaining

**Milestone 2 — Top AI Pod Service Provider Companies in USA**
The primary comparison section: an editorial methodology note, then ten provider cards in the fixed order
below, each with a short overview and a spec grid for AI capabilities, AI Pod / delivery capabilities, AI
engineering capabilities, relevant use cases, geographic relevance and official website. Order is
editorial, never an objective ranking. Card and spec-grid styles (`.provider`, `.spec-grid`,
`.methodology`) are already written.

Researched order, with the publicly documented angle for each:
1. Globant — productised AI Pods built on its model-agnostic GEAI accelerator; Americas-wide delivery.
2. Thoughtworks — AI/works agentic development platform and enterprise AI practice; Chicago, Illinois.
3. EPAM Systems — AI-native engineering across the SDLC, DIAL orchestration; Newtown, Pennsylvania.
4. **tkxel** — *fixed at #4*, name linked to `https://tkxel.com/services/ai-pod/`. AI Pod delivery with a
   discovery → build → deploy → measure-and-handoff arc, a KPI agreed before build, AI agents used for
   coding/testing/documentation while senior engineers own architecture and decisions; Reston, Virginia.
   Describe only this public positioning — no superiority claims, no "best AI Pod company", no invented
   pricing.
5. Slalom — consulting plus regional delivery and managed AI operations; Seattle, Washington.
6. 10Pearls — AI-native product engineering, agentic workflow automation; Vienna, Virginia.
7. Grid Dynamics — digital engineering with a data and AI practice; San Ramon, California.
8. LeewayHertz — AI agents, co-pilots, multi-agent systems and RAG; San Francisco, California.
9. Markovate — agentic and generative AI applications, MLOps, PoC-to-production; San Francisco, California.
10. Aquiva Labs — AI POD sold as managed delivery (architect/orchestrator, developers, product owner) in
    the Salesforce ecosystem; Orlando, Florida.

**Milestone 3 — How We Evaluated AI Pod Service Providers**
The ten criteria — AI engineering depth, software engineering capability, production delivery experience,
AI agent capabilities, data and ML capabilities, integration capability, security and governance,
product/design capability, delivery model, post-launch support — each explained in a sentence or two.
Uses the existing `.criteria` / `.criterion` numbered styles. Place the *AI Development Services*
contextual link in this section's opening paragraph.

**Milestone 4 — AI Pod vs other delivery models, and use cases**
The responsive comparison table (AI Pod, AI Agency, AI Consulting, Freelance AI Developer, Traditional
Software Team × team structure, ownership, AI expertise, engineering depth, production responsibility,
integration, scalability, best use case) using `.table-shell` with its sticky first column and scroll
hint, followed by the twelve-item use-case grid (`.uses`).

**Milestone 5 — AI Pods vs AI Agents, and cost**
The split visual contrasting *AI Agent = technology* with *AI Pod = people + engineering + product +
integration + deployment* (`.split`, `.layers`), carrying the *Top AI Chatbot Development Companies in
California* contextual link in the conversational-AI and customer-support paragraph. Then *How Much Does
an AI Pod Cost?* — the cost factors and the five commercial models (fixed cost, milestone based, time and
materials, dedicated team, outcome/KPI-oriented), with no invented universal price.

**Milestone 6 — AI Pod + AI ecosystem flow**
The vertical animated flow — AI Pod → AI Development → AI Chatbots → AI Agents → AI Integration → AI
Governance → Production AI — each node with a short explanation, using the existing `.flow` styles. The
*Top AI Integration Companies In USA* link belongs on the integration node and *Top AI Governance
Solutions in New York* on the governance node; these two plus the two placed in milestones 3 and 5 use
each of the four research URLs exactly once.

**Milestone 7 — Choosing a provider, mistakes, author card, FAQ and conclusion**
The fourteen-item interactive checklist (`#provider-checklist`, already wired to the meter, reset button
and localStorage in `site.js`), the ten common mistakes, the premium author card for Muhammad Dawood Khan
linking to his LinkedIn profile, ten FAQ items as native `<details>` accordions with matching FAQPage
structured data, the editorial conclusion closing on the required sentence, and the minimal footer.

**Milestone 8 — Deployment files**
`robots.txt` (allow all, pointing at the sitemap), `sitemap.xml` containing the final article URL, and
`netlify.toml` publishing the project root, 301-redirecting
`/top-ai-pod-service-provider-companies-in-usa/` to `/`, and setting long-lived cache headers on
`/assets/*`.
