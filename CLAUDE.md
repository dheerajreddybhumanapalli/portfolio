# CLAUDE.md

Project context for Claude and other AI assistants working in this codebase.

> For full human documentation see [README.md](./README.md).  
> For agent conventions see [AGENTS.md](./AGENTS.md).

## What this is

Personal portfolio website for **Dheeraj Reddy Bhumanapalli** — a static Next.js 15 site deployed to GitHub Pages.

**Live:** https://dheerajreddybhumanapalli.github.io/portfolio/

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · next-themes · Lucide icons

## Critical rules

1. **Static export only** — `output: "export"` in `next.config.ts`. No API routes, no `next start`.
2. **Two build modes:**
   - `npm run build` → local preview, no base path
   - `npm run build:pages` / `npm run deploy` → GitHub Pages with `basePath: "/portfolio"`
3. **Always use `assetPath()`** from `lib/utils.ts` for public assets (`/resume.pdf`, `/profile_image.jpg`).
4. **Content lives in `data/portfolio.ts`** — edit projects/experience there, not in components.
5. **Ignore `src/`** — legacy Create React App code, not used by the Next.js app.

## Directory map

| Path | Role |
|------|------|
| `app/` | Layout, page, global styles |
| `components/` | UI components |
| `data/portfolio.ts` | Projects & experience data |
| `lib/utils.ts` | `cn`, `assetPath`, `basePath` |
| `public/` | Static files served at build time |
| `next.config.ts` | Export + GitHub Pages basePath logic |

## Commands

```bash
npm run dev      # http://localhost:3000/
npm run deploy   # Build for GitHub Pages + publish
```

## When making changes

- Match existing patterns: functional components, Tailwind utilities, `cn()` for classes
- Client components need `"use client"` at top of file
- Keep changes minimal and focused
- After content changes, verify with `npm run dev`
- To publish: `npm run deploy` (not just `npm run build`)

## Deploy flow

`npm run deploy` → `predeploy` runs `build:pages` (`GITHUB_PAGES=true`) → `gh-pages -d out` pushes to `gh-pages` branch → GitHub Pages serves it.
