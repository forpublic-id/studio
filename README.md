# ForPublic.id Studio

**Public Good Software Studio** - Building transparent, accessible technology that serves communities.

A collaboration hub for digital solutions focused on public good, serving government agencies, NGOs, international organizations, and civic groups.

## 🌟 Features

- **Bilingual Support** - Indonesian and English with `next-intl`
- **Modern Tech Stack** - Next.js 15, TypeScript, Tailwind CSS v4, shadcn/ui
- **Mobile-First Design** - Responsive and accessible
- **SEO Optimized** - Meta tags, Open Graph, structured data
- **Performance Focused** - Optimized for speed and reliability

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript 5.9.2
- **Styling:** Tailwind CSS v4.1.12
- **Components:** shadcn/ui with "new-york" preset
- **Internationalization:** next-intl v4.3.4
- **Icons:** Lucide React
- **Runtime:** Bun
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

- Bun (latest version)
- Node.js 18+ (if not using Bun)

### Installation

```bash
# Clone the repository
git clone https://github.com/forpublic-id/studio.git
cd studio

# Install dependencies
bun install

# Start development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

### Available Scripts

```bash
# Development with turbopack
bun run dev:turbo

# Build for production
bun run build

# Start production server
bun run start

# Lint code
bun run lint

# Type check
bun run type-check
```

## 📁 Project Structure

```
/app
  /[locale]         # Internationalized routes
  layout.tsx        # Root layout
  globals.css       # Global styles
  robots.ts         # SEO robots
  sitemap.ts        # SEO sitemap

/components
  /layout           # Header, Footer
  /sections         # Page sections (Hero, Services, etc.)
  /ui               # shadcn/ui components

/i18n
  /messages         # Translation files (id.json, en.json)
  request.ts        # i18n configuration
  routing.ts        # Routing configuration

/lib
  utils.ts          # Utility functions

/public
  logo.svg          # ForPublic.id logo
  favicon.svg       # Site favicon
```

## 🌐 Content Sections

1. **Hero** - "Public Good Software Studio" with call-to-action
2. **Services** - Digital transformation, NGO solutions, public interest tech
3. **Philosophy** - Open source, community-centered, accessibility-first
4. **Portfolio** - ForPublic.id ecosystem showcases
5. **Process** - 4-step collaboration process
6. **Team** - Expertise and competencies
7. **Contact** - Partnership inquiry form

## 🔧 Configuration

### Internationalization

The website supports Indonesian (default) and English:

- Routes: `/id` (Indonesian), `/en` (English)
- Translation files: `i18n/messages/id.json`, `i18n/messages/en.json`
- Configuration: `i18n/routing.ts`

### SEO & Performance

- **Meta tags** with dynamic locale support
- **Open Graph** and Twitter Card optimization
- **Sitemap** generation for search engines
- **Security headers** for production
- **Performance** optimized with Next.js 15 features

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set custom domain: `studio.forpublic.id`
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
# Build the project
bun run build

# Start production server
bun run start
```

## 📄 License

© 2024 ForPublic.id Studio. All rights reserved. Made with ❤️ for the public good.

## 🤝 Contributing

This project is part of the ForPublic.id ecosystem. For contributions or issues, please contact:

- **Email:** studio@forpublic.id
- **Website:** [forpublic.id](https://forpublic.id)
- **GitHub:** [@forpublic-id](https://github.com/forpublic-id)

---

**ForPublic.id Studio** - Membangun teknologi untuk rakyat 🇮🇩