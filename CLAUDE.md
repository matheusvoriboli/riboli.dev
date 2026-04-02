# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (Next.js)
npm run build    # production build
npm run lint     # ESLint
```

No test suite exists in this project.

## Stack

- **Next.js 16** with App Router, React 19, TypeScript
- **Tailwind CSS v4** — configured via `@theme` in `globals.css`, not `tailwind.config.*`
- **Framer Motion** for all animations
- Single-page portfolio — one route (`app/page.tsx`), no API routes

## Architecture

All content lives in `lib/data.ts`. Every new piece of content (experience, project, etc.) must be added there. UI components read from it directly — never hardcode content inside components.

### i18n

- `lib/i18n.tsx` — `I18nProvider` + `useI18n()` hook; locale is `"pt" | "en"`, persisted in `localStorage`
- `lib/translations.ts` — static UI strings keyed by locale
- `lib/data.ts` — all content that has both PT and EN variants uses `{ pt: string; en: string }` objects
- Components access locale via `const { locale } = useI18n()` and index into the object: `exp.role[locale]`

### Theming

- Dark mode is default. Light mode is toggled via `data-theme="light"` on `<html>`
- Colors are defined as CSS custom properties in `globals.css` (`--color-deep`, `--color-ink`, etc.) and also as Tailwind tokens in `@theme`
- A small inline script in `layout.tsx` sets `data-theme` before first paint to prevent FOUC

### Key conventions

- `lib/animations.ts` — shared Framer Motion variants (`fadeUp`, `EASE`). Use these instead of defining inline variants.
- Fonts: `Space Grotesk` as `--font-sans`/`--font-display`, `JetBrains Mono` as `--font-mono`. Use `font-display`, `font-sans`, `font-mono` Tailwind classes.
- Accent color is `#6366F1` (indigo). Use the `text-accent` / `bg-accent` Tailwind tokens or inline style `color: '#6366F1'` for hover states that need dynamic values.

## Next.js version note

This project uses **Next.js 16**, which may differ from training data. Read `node_modules/next/dist/docs/` before writing any Next.js-specific code.
