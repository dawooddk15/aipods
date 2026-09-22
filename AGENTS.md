# AGENTS.md — working notes for future sessions

Read [PLAN.md](./PLAN.md) first: it lists the numbered milestones, which are done and which remain.
Continue from the next unchecked milestone.

## Architecture

A deliberately build-free static site. There is no framework, bundler, package.json or server code — the
publish directory is the project root, so anything committed is what ships.

```
index.html                 the entire article (single page, single H1)
assets/css/site.css        design system + every section's styles + responsive + reduced-motion
assets/js/site.js          progressive-enhancement interaction layer (IIFE, no dependencies)
assets/img/                Open Graph card; author photograph drops in here
```

## Conventions

- **Content is authored directly in `index.html`.** Sections are `<section id="…">` with
  `aria-labelledby` pointing at their `<h2>`. Exactly one `<h1>`, in the hero. Company names are `<h3>`.
- **CSS is token-first.** Every colour, font, radius and easing lives in `:root` in `site.css`. Add new
  section styles under a `/* --- Name --- */` banner comment near the related blocks; do not introduce
  new colour literals outside the token block.
- **JS is optional by design.** Every interaction degrades: tab panels are real panels, the FAQ uses
  native `<details>`, the checklist uses real checkboxes. Guard every query with a null check — the
  script runs on a page where a section may not exist yet.
- **Motion uses `transform` and `opacity` only**, and the `prefers-reduced-motion` block at the bottom of
  `site.css` must keep neutralising anything new.
- **Reveal animations**: add `data-reveal` (and optionally `data-delay="1..4"`) to a wrapper; the
  IntersectionObserver in `site.js` handles the rest.

## Non-obvious decisions

- **Static over a template.** The request is one long-form article where load speed, exact markup and
  hand-tuned SVG motion matter, so a framework template was not scaffolded.
- **Canonical points at the production root** (`https://dapper-frangipane-ea1ca2.netlify.app/`) because
  the article is the homepage. The pretty slug `/top-ai-pod-service-provider-companies-in-usa/` is meant
  to 301 to `/` via `netlify.toml` rather than duplicate the content — see PLAN.md milestone 8.
- **The four contextual research links are each used exactly once**, placed in the paragraph that
  genuinely discusses their topic (chatbots/agents, governance, AI development services, integration).
  Do not repeat a URL elsewhere and do not collect them into a resources list or the footer.
- **No fabricated company facts.** Provider descriptions must stay within publicly documented positioning
  — no revenue, client counts, awards, certifications, pricing or customer results. Ordering is
  explicitly editorial, never presented as an objective ranking. TKxel is fixed at #4 and its name links
  to `https://tkxel.com/services/ai-pod/`.
- **The author avatar never fabricates a person.** `site.js` probes for the photograph and only swaps it
  in if it loads; otherwise a monogram stands in.
- **Forbidden content:** this site has no relationship to, and must never mention, The Insights Desk or
  any Jassica-related name or branding. Muhammad Dawood Khan is the only author.
