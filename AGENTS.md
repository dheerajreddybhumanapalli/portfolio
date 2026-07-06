# AGENTS.md — AI Agent Guide

Instructions for AI coding agents (Cursor, Copilot, Codex, etc.) working in this repository.

## Project summary

Static portfolio site: **Next.js 15 App Router + React 19 + Tailwind CSS v4**, exported to HTML and hosted on **GitHub Pages** at `/portfolio` base path.

- **Source branch:** `master`
- **Deploy branch:** `gh-pages` (generated — do not edit manually)
- **Live URL:** https://dheerajreddybhumanapalli.github.io/portfolio/

## Architecture

```
app/page.tsx          → composes sections (Navbar, Hero, Projects, Experience, Contact)
data/portfolio.ts     → single source of truth for projects & experience content
lib/utils.ts          → cn(), assetPath(), basePath
next.config.ts        → output: "export", conditional basePath for GitHub Pages
public/               → static files (resume, image, favicon)
components/           → all UI components ("use client" where needed)
```

### Key constraints

1. **`output: "export"`** — no server features (API routes, SSR, `next start`, dynamic server rendering).
2. **GitHub Pages base path** — when `GITHUB_PAGES=true`, `basePath` is `/portfolio`. Any public file URL in components must use `assetPath("/file.pdf")`, not hardcoded paths.
3. **Images** — `images: { unoptimized: true }` in next.config (required for static export).
4. **Legacy `src/` folder** — old CRA app; **ignore it**. Active code is in `app/`, `components/`, `data/`.

## Commands

```bash
npm run dev           # Development (no base path)
npm run build         # Local production build (no base path)
npm run build:pages   # GitHub Pages build (basePath /portfolio)
npm run start         # Serve out/ locally (NOT next start)
npm run deploy        # build:pages + push to gh-pages
npm run lint
```

Never suggest `next start` — it fails with static export.

## Conventions

### File organization

- New pages → `app/`
- Reusable UI → `components/`
- Content/data → `data/portfolio.ts` (prefer editing data over hardcoding in components)
- Utilities → `lib/`
- Static assets → `public/`

### TypeScript

- Strict mode enabled
- Path alias: `@/*` maps to project root
- Export interfaces alongside data in `data/portfolio.ts`

### Components

- Add `"use client"` only when using hooks, browser APIs, or event handlers
- Use `cn()` from `@/lib/utils` for conditional Tailwind classes
- Use `assetPath()` for any `/public` file references (resume, images)
- Use `FadeIn` wrapper for scroll animations
- Use `SectionHeading` for consistent section titles

### Styling

- Tailwind utility classes in JSX
- Theme tokens via CSS variables in `app/globals.css` (`--bg`, `--fg`, `--accent`, etc.)
- Dark mode: `class` strategy via `next-themes` (`.dark` class on `<html>`)
- Do not add separate CSS files unless necessary; prefer Tailwind

### Content changes

| What to change | Where |
|----------------|-------|
| Projects | `data/portfolio.ts` → `projects` |
| Experience | `data/portfolio.ts` → `experiences` |
| Contact email/phone | `components/Contact.tsx` |
| Hero text/image | `components/Hero.tsx` + `public/` |
| Page title/SEO | `app/layout.tsx` metadata |
| Resume PDF | `public/resume.pdf` |

## Deployment

```bash
npm run deploy
```

Requires `gh-pages` npm package (already in devDependencies). Pushes `out/` to `gh-pages` branch.

GitHub Pages settings: branch `gh-pages`, folder `/ (root)`.

## What NOT to do

- Do not use `next start`, API routes, or server-only Next.js features
- Do not hardcode `/portfolio` in component paths — use `assetPath()`
- Do not edit `gh-pages` branch directly
- Do not modify or import from legacy `src/` directory
- Do not commit `node_modules/`, `.next/`, or `out/` (all gitignored)
- Do not change `basePath` without updating repo name / GitHub Pages URL

## Common tasks

### Add a new project

Add a `CardItem` entry to `projects` in `data/portfolio.ts`.

### Add a new section

1. Create component in `components/`
2. Import and add to `app/page.tsx`
3. Add nav link in `components/Navbar.tsx` (`navLinks` + `sectionIds` in IntersectionObserver)

### Change accent color

Update `--accent` and `--accent-fg` in `app/globals.css` for both `:root` and `.dark`.

### Test GitHub Pages build locally

```bash
npm run build:pages
npx serve@latest out -l 3000
# Open http://localhost:3000/portfolio/ (assets use /portfolio prefix)
```

Note: local `serve` may not perfectly mirror GitHub Pages path rewriting; the live site is the source of truth for deploy verification.
