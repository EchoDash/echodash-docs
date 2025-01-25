# EchoDash Documentation Site

This is the documentation site for [echodash.com](https://echodash.com), built using [Docusaurus](https://docusaurus.io/). The site includes our product documentation, blog, and landing pages.

## Project Architecture

- The landing page and docs share the same domain but are separate apps
- Landing page is served by Rails from `../echodash-mvp`
- Docs/blog are static files served from `../echodash-mvp/public/`
- Built with Docusaurus v3.7.0
- Uses Tailwind CSS for styling
- Deployed via Fly.io
- PostHog for analytics

## Local Development

1. Clone the repository:

```bash
git clone https://github.com/EchoDash/echodash-docs.git
cd echodash-docs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run start -- --port 3001
```

The site will be available at `http://localhost:3001`. Most changes are reflected live without having to restart the server.

## Building for Production

```bash
npm run build
```

This command:
1. Generates static content into the `build` directory
2. Automatically copies the built files to `../echodash-mvp/public/`

## Continuous Integration/Deployment

We use GitHub Actions for CI/CD. On every push to main:
1. Code is linted
2. Site is built
3. If successful, automatically deployed to Fly.io

## Content Management

### Documentation

Documentation files are stored in the `docs/` directory as Markdown files. Each file needs a YAML frontmatter header:

```markdown
---
sidebar_position: 1
---

# Your Doc Title
```

The sidebar is automatically generated based on the file structure and `sidebar_position` values.

### Blog Posts

To create a new blog post, you have two options:

1. **Simple Post**: Add a markdown file directly in `blog/` with format `YYYY-MM-DD-title.md`:
```markdown
---
slug: welcome-docusaurus
title: Welcome Docusaurus
authors: [jack]
tags: [hello]
---

Your content here...
```

2. **Post with Assets**: Create a directory in `blog/` with format `YYYY-MM-DD-title` containing an `index.md` and related assets:
```
blog/
  └── 2024-01-23-welcome/
      ├── index.md
      └── cover.jpg
```

Both approaches support the same frontmatter configuration. Authors are defined in `blog/authors.yml` and tags in `blog/tags.yml`.

### Static Pages

Static pages can be added in two ways:

1. **Markdown Pages**: Add `.md` files to `src/pages/`
2. **React Pages**: Add `.tsx` files to `src/pages/`

Example markdown page:
```markdown
---
title: Page Title
---

# Your Content
```

### Images and Static Assets

- Place images in `static/img/`
- Reference them in markdown: `![Alt text](/img/your-image.png)`
- Other static assets go in the `static/` directory

## Configuration

Main configuration is in `docusaurus.config.js`. Key areas:
- Site metadata
- Navigation
- Footer
- Theme settings
- Plugin configuration

## Contributing

1. Create a new branch for your changes
2. Make your changes
3. Submit a pull request
4. CI will automatically run linting and build checks
5. After review and merge to main, changes will auto-deploy

## Available Scripts

- `npm run start`: Start development server
- `npm run build`: Build production site
- `npm run serve`: Preview production build locally
- `npm run clear`: Clear build cache
- `npm run lint`: Run ESLint

## Need Help?

- Check the [Docusaurus documentation](https://docusaurus.io/docs)
- Join our [Slack community](https://echodash.slack.com)
- Email the team at support@echodash.com