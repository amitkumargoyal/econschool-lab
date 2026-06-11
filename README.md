# Econschool Lab

Interactive visualisers, notes, and problem sets for economics students.
Built with [Astro](https://astro.build); maths rendered with KaTeX.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321/econschool-lab/
npm run build      # production build into dist/
```

## Adding material

**A visualiser (self-contained HTML tool):**
1. Drop the file into `public/tools/<subject>/`.
2. Add one entry to `src/data/tools.ts` (subject, topic, title, file, description).

Tools open in a new tab so the diagram gets the full window.

**A note:**
Create one Markdown file in `src/content/notes/<subject>/` with frontmatter:

```markdown
---
title: 'Convexity of preferences'
subject: micro            # micro | maths | probability
topic: 'Preferences and demand'
summary: 'One line shown on the subject page.'   # optional
order: 1                  # optional, sorts within the topic
---

Inline maths like $p_x x + p_y y = M$ and display maths:

$$
u(x, y) = \min\{2x,\; x + \ln y\}
$$
```

**A problem set:** same as a note, but the file goes in
`src/content/problem-sets/<subject>/`.

Nothing else needs editing — the subject pages read these folders at build time.

**A new subject:** add one entry to `src/data/subjects.ts`.

## Deployment (GitHub Pages)

First time:
1. Create a **public** GitHub repo named `econschool-lab`.
   (If you choose another name, change `base` in `astro.config.mjs` to match.)
2. In the repo: Settings → Pages → Source → **GitHub Actions**.
3. Push:
   ```bash
   git init
   git add .
   git commit -m "Initial scaffold"
   git branch -M main
   git remote add origin git@github.com:amitkumargoyal/econschool-lab.git
   git push -u origin main
   ```

The included workflow (`.github/workflows/deploy.yml`) builds and deploys on
every push to `main`. The site appears at
`https://amitkumargoyal.github.io/econschool-lab/`.

When econschool.in migrates, point a subdomain (e.g. `lab.econschool.in`) at
GitHub Pages, set `base: '/'` and update `site` in `astro.config.mjs` — no
other change is needed.
