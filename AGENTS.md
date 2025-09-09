# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router (localized routes under `app/[locale]/`), `layout.tsx`, `globals.css`, `sitemap.ts`, `robots.ts`.
- `components/`: Reusable UI split by `ui/`, `layout/`, `sections/`, `seo/`.
- `i18n/`: `messages/*.json` translations, `routing.ts`, `request.ts` (next-intl setup).
- `lib/`: Utilities and shared helpers.
- `public/`: Static assets. Key configs: `next.config.ts`, `middleware.ts`, `eslint.config.mjs`, `postcss.config.mjs`.

## Build, Test, and Development Commands
- Install: `bun install`
- Dev server: `bun run dev` (or `bun run dev:turbo` for Turbopack)
- Build: `bun run build` (production bundle)
- Start: `bun run start` (serve built app)
- Lint: `bun run lint` (Next.js + ESLint rules)
- Type check: `bun run type-check` (TS strict, no emit)

## Coding Style & Naming Conventions
- TypeScript, strict mode; path alias `@/*`.
- ESLint: extends `next/core-web-vitals` + `next/typescript` via `eslint.config.mjs`.
- Formatting: Prettier 3; use 2‑space indent and semicolons; keep imports sorted logically.
- Components: PascalCase files (e.g., `components/ui/Button.tsx`); hooks `useThing.ts`; route segments and folders lowercase.
- i18n: nested lowerCamelCase keys in JSON (e.g., `hero.titleHighlight`). Avoid duplicating keys across locales.

## Testing Guidelines
- No test runner is configured yet. If adding tests:
  - Prefer Vitest + React Testing Library.
  - Co‑locate as `*.test.ts(x)` next to source or in a sibling `__tests__/`.
  - Unit test `lib/` utilities; component tests for `components/` critical UI.
  - Aim for 80%+ coverage on changed code; include accessibility assertions.

## Commit & Pull Request Guidelines
- Commits follow Conventional Commits (e.g., `feat: …`, `fix: …`) as seen in history.
- PRs must include: clear description, linked issue, before/after screenshots or a Vercel preview URL for UI changes, and notes on i18n updates.
- Pre‑merge checklist: `bun run lint`, `bun run type-check`, ensure no unused translations and no `.env` leaks.

## Security & Configuration Tips
- Copy `.env.example` → `.env.local`. Never commit secrets.
- Use `NEXT_PUBLIC_*` only for values safe for the client. Keep analytics IDs and site URL in env (see `.env.example`).
- Prefer Vercel project‑level envs for deployment; do not hardcode secrets in code or configs.
