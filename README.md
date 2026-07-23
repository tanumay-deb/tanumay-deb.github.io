# Tanumay Goswami — Portfolio

Static portfolio site. Next.js 15 (App Router) + Tailwind v4, exported to plain HTML and served from GitHub Pages.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
```

Writes the static site to `out/`.

## Editing content

All copy lives in [`src/data/resume.ts`](src/data/resume.ts) — profile, hero run log, projects, experience, skills, certifications, awards. Nothing is hard-coded in the components, so edits happen in one place.

`public/resume.pdf` is the downloadable résumé. Replace the file to update the link.

## Deploying to GitHub Pages

1. Create the repo and push to `main`.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push. [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and publishes.

This is a **user site** — the repo is named `tanumay-deb.github.io` and is served from the domain root at https://tanumay-deb.github.io, so the workflow sets `NEXT_PUBLIC_BASE_PATH` to an empty string.

**For a project site** at `https://<user>.github.io/<repo>`, change that env line to:

```yaml
env:
  NEXT_PUBLIC_BASE_PATH: /${{ github.event.repository.name }}
```

**If you attach a custom domain**, keep the empty base path and add a `CNAME` file containing the domain to `public/`.

## Structure

```
src/
  app/
    layout.tsx      fonts, metadata
    page.tsx        section order
    globals.css     design tokens, motion
  components/       one file per section
  data/resume.ts    all content
  lib/asset.ts      base-path helper for public/ files
```

## Design notes

The page is built as an automation control plane, since that is the subject's actual work surface. The hero renders his career as an orchestrator run log — each achievement is a completed job with an ID, a status chip, and the number that mattered. Emerald is the only saturated colour in the system because it is the status colour of a job that finished. There is no red anywhere, which is accurate.

Type is IBM Plex Sans and Plex Mono — IBM's enterprise-systems faces, used for body and data — with Bricolage Grotesque carrying the display voice.

Motion is one orchestrated moment: feed rows stream in on load the way jobs land in a queue. Everything else is a quiet scroll reveal, and `prefers-reduced-motion` turns all of it off.
