# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server (preferred)
bun run dev

# Development with turbopack (faster builds)
bun run dev:turbo

# Build for production
bun run build

# Production server
bun run start

# Linting and type checking
bun run lint
bun run type-check
```

## Architecture Overview

This is a **Next.js 15 multilingual corporate website** for ForPublic.id Studio using the App Router with internationalization.

### Key Technologies
- **Runtime**: Bun (preferred over npm/yarn)
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4.1.12
- **Components**: shadcn/ui with "new-york" preset
- **Internationalization**: next-intl with Indonesian (default) and English
- **Icons**: Lucide React
- **Fonts**: Geist Sans and Geist Mono

### Project Structure
- `/app/[locale]/` - Internationalized routes (id/en)
- `/components/layout/` - Header, Footer components
- `/components/sections/` - Page sections (Hero, Services, Philosophy, Portfolio, Process, Team, Contact)
- `/components/ui/` - shadcn/ui components with custom modifications
- `/i18n/messages/` - Translation files (id.json, en.json)
- `/lib/` - Utilities, hooks, constants, and types

### Internationalization Setup
- Default locale: Indonesian (`id`)
- Supported locales: Indonesian (`id`), English (`en`)
- Routes: `/id/...` and `/en/...`
- Translation files: `i18n/messages/id.json` and `i18n/messages/en.json`
- Routing configuration: `i18n/routing.ts`
- Middleware handles locale detection and redirects

### Component Architecture
- Layout components in `/components/layout/`
- Page sections are modular components in `/components/sections/`
- UI components follow shadcn/ui patterns with Tailwind CSS v4
- Language switching handled by `LanguageSwitcher` component
- Path alias `@/*` maps to root directory

### Styling Guidelines
- Uses Tailwind CSS v4 with CSS variables for theming
- Base color: neutral
- Components follow shadcn/ui "new-york" style preset
- Responsive design with mobile-first approach
- Geist font family for consistent typography

### Development Notes
- Bun is the preferred package manager and runtime
- TypeScript strict mode enabled
- ESLint configuration extends Next.js standards
- Webpack polling enabled for development file watching
- Vercel deployment configuration in `vercel.json`