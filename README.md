# AI Research Guide — Top AI Pod Service Provider Companies in USA

An independent, SEO-focused editorial research site published under the **AI Research Guide** brand. The
site is a single long-form technology research article targeting the keyword *Top AI Pod Service Provider
Companies in USA*, designed to read like a 2026 technology publication rather than a generic blog post.

## What exists today

- `index.html` — the article: full SEO head (canonical, Open Graph, Twitter Card, Article / Person /
  Organization / WebSite / BreadcrumbList structured data), sticky glass header with reading-progress bar,
  animated hero with an SVG "AI Pod delivery topology" network graphic, the introduction, the
  *What Is an AI Pod?* section with an interactive six-way comparison (tabs), and the animated four-stage
  *How an AI Pod Works* process with a connecting progress line.
- `assets/css/site.css` — the complete design system: deep-navy / near-black surfaces, electric blue,
  cyan and violet accents, glassmorphism cards, editorial type pairing, and styles for every remaining
  section (provider cards, criteria, comparison table, use cases, ecosystem flow, checklist, mistakes,
  author card, FAQ accordion, footer). Fully responsive, with a `prefers-reduced-motion` block.
- `assets/js/site.js` — reading progress, sticky-header state, mobile navigation, scroll reveals,
  stage progress line, accessible tab panels, the persistent evaluation checklist, active-section nav
  highlighting, and the author-portrait loader.
- `assets/img/og-top-ai-pod-service-provider-companies-in-usa.jpg` — the 1200×630 Open Graph card
  (abstract AI engineering network, no people), generated for this site.

## Technologies

Static HTML, CSS and vanilla JavaScript — no framework and no build step, so the page ships as-is and
loads fast. Typography is Instrument Serif (display), DM Sans (body) and IBM Plex Mono (labels) via
Google Fonts. The Open Graph image was generated with a Gemini image model through Netlify AI Gateway.

## Running locally

No install or build is required. Serve the project root with any static server:

```bash
netlify dev --port 8889
# or
npx serve .
```

Then open http://localhost:8889.

## Author photograph

The author card loads `assets/img/author-muhammad-dawood-khan.jpg` if that file is present and falls back
to a typographic monogram otherwise — no stand-in portrait of a person is ever shown. Drop the
photograph in at that exact path (square crop works best) and it is picked up automatically, with
`alt="Muhammad Dawood Khan"` already set.

## Roadmap

The remaining sections and deployment files are tracked as numbered milestones in [PLAN.md](./PLAN.md).
