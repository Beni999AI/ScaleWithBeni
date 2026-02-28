# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Adding shadcn/ui Components

```bash
npx shadcn@latest add <component-name>
```

Components are added to `src/components/ui/`. The project uses the "new-york" style with `neutral` base color and Lucide icons.

## Architecture

This is a **single-page marketing website** for ScaleWithBeni — an AI voice agent service for Dubai real estate agents. It is built with Next.js 15 (App Router), React 19, Tailwind CSS v4, and shadcn/ui.

### Key Design Decisions

- **Dark mode only** — `<html>` has `className="dark"` hardcoded in `layout.tsx`. Never add a light/dark toggle.
- **All site content** (copy, stats, pricing tiers, FAQ, nav links, external URLs) lives in `src/lib/constants.ts`. Edit content there, not in components.
- **Scroll-triggered animations** use the `useIntersection` hook (`src/hooks/use-intersection.ts`), which fires once when an element reaches 20% viewport visibility.
- **Motion animations** use the `motion/react` package (not `framer-motion`).

### Page Structure

The homepage (`src/app/page.tsx`) renders sections in this order:
`Navbar → PremiumHero → SocialProof → Services → HowItWorks → Pricing → FAQ → CTA → Footer`

Each section maps to a file in `src/components/sections/`. Layout components (Navbar, Footer) are in `src/components/layout/`.

### Legal Pages

`/imprint`, `/privacy`, and `/terms` exist as separate App Router pages under `src/app/`.

### Company Context

Business details are documented in `company_info/` (business.md, financial.md, legal.md, operations.md, services.md). Consult these when updating copy or pricing to ensure accuracy.
