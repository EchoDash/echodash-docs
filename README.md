# EchoDash Documentation Site

This is the documentation site for [echodash.com](https://echodash.com), built using [Docusaurus](https://docusaurus.io/). The site includes our product documentation, blog, and landing pages.

## Project Architecture

- The EchoDash app runs on Rails and is powered by Fly.io
- Static pages, the home page, docs, and blog are powered by Docusaurus and served from Cloudflare Pages
- Cloudflare workers route requests to the correct app based on the request path
- Built with Docusaurus v3.7.0
- Uses Tailwind CSS for styling
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

This command generates static content into the `build` directory. When developing locally, the built files are automatically copied to `../echodash-mvp/public/`.

## Continuous Integration/Deployment

We use Cloudflare Pages for hosting and CI/CD, integrated directly with Git:
1. Creating a PR generates a preview deployment URL
2. Merging to main automatically deploys to production
3. Built files are served directly from Cloudflare's global edge network

Pull requests trigger automated checks using `@docusaurus/eslint-plugin`:
- TypeScript type checking
- React Hooks usage validation
- Docusaurus-specific rules (valid links, asset references, etc.)
- Code style and formatting
- Dead code elimination

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

> 👉 **Non-technical writers**: See [CONTRIBUTING_BLOG.md](CONTRIBUTING_BLOG.md) for a guide on creating posts directly through GitHub's interface.

1. **Simple Post**: Add a markdown file directly in `blog/` with format `YYYY-MM-DD-title.md` (best for text-only posts):
```markdown
---
slug: welcome-docusaurus
title: Welcome Docusaurus
authors: [jack]
tags: [hello]
---

Your content here...
```

2. **Recommended: Post with Assets**: Create a directory in `blog/` with format `YYYY-MM-DD-title` containing an `index.md` and related assets:
```
blog/
  └── 2024-01-23-welcome/
      ├── index.md          # Your post content
      ├── cover.jpg         # Referenced as ./cover.jpg
      └── screenshot.png    # Referenced as ./screenshot.png
```

Both approaches support the same frontmatter configuration. Authors are defined in `blog/authors.yml` and tags in `blog/tags.yml`. The directory approach is preferred as it keeps your post's assets organized together.

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