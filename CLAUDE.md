# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EchoDash documentation site built with Docusaurus v3. Serves docs, blog, and landing pages at echodash.com through Cloudflare Pages.

## Common Development Commands

```bash
# Install dependencies
npm install

# Start development server (port 3001)
npm run start -- --port 3001

# Build for production (copies to ../echodash-mvp/public/)
npm run build

# Run linting
npm run lint

# Preview production build
npm run serve
```

## Architecture & Key Files

### Tech Stack
- **Framework**: Docusaurus v3.8.0
- **Styling**: Tailwind CSS with `tw-` prefix (homepage only)
- **Analytics**: PostHog
- **Deployment**: Cloudflare Pages (auto-deploy on merge to main)

### Project Structure
- `docs/` - Documentation markdown files with YAML frontmatter
- `blog/` - Blog posts (use YYYY-MM-DD-title format)
- `src/pages/` - Static pages (React components or markdown)
- `src/components/` - React components (FAQ, Feature, GitHubReleases, MailjetForm)
- `static/` - Static assets, fonts, images
- `docusaurus.config.js` - Main configuration
- `tailwind.config.js` - Tailwind configuration (prefixed with `tw-`)
- `sidebars.js` - Documentation sidebar structure

### Key Configuration
- **Base URL**: https://echodash.com
- **Color Mode**: Light only (dark mode disabled)
- **Redirects**: Configured in @docusaurus/plugin-client-redirects
- **Environment Variables**: `RELEASES_TOKEN` for GitHub releases component

## Content Guidelines

### Documentation
- Files in `docs/` require sidebar_position in frontmatter
- Edit URL points to GitHub repo
- Sidebar auto-generated from file structure

### Blog Posts
- Directory format preferred: `blog/YYYY-MM-DD-title/index.md` with assets
- Authors defined in `blog/authors.yml`
- Tags in `blog/tags.yml`
- See CONTRIBUTING_BLOG.md for non-technical writers

### Static Assets
- Images: `static/img/`
- Reference in markdown: `![Alt text](/img/your-image.png)`
- Custom fonts preloaded in `headTags`

## Development Workflow

1. PR creates preview deployment on Cloudflare Pages
2. ESLint runs automatically (TypeScript, React Hooks, Docusaurus rules)
3. Merge to main deploys to production
4. Built files copied to Rails app public directory locally

## Integration Points

- **Rails App**: Main EchoDash application on Fly.io
- **Cloudflare Workers**: Route requests between Docusaurus and Rails
- **PostHog**: Analytics tracking (configured in plugins)
- **GitHub**: Edit links, releases component uses RELEASES_TOKEN

## Testing & Validation

- TypeScript type checking via ESLint
- Docusaurus link validation (onBrokenLinks: 'warn')
- React component validation
- Dead code elimination
- Build validation in CI/CD