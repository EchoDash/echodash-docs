# Creating Blog Posts for EchoDash

This guide walks you through creating and publishing blog posts directly through GitHub's web interface - no coding or local setup required!

## Creating a New Post

1. Go to the [blog directory](https://github.com/EchoDash/echodash-docs/tree/main/blog) in our GitHub repository
2. Click the "Add file" dropdown and select "Create new file"
3. Name your file using the format: `YYYY-MM-DD-title.md` (e.g., `2024-03-15-introducing-new-features.md`)

## Writing Your Post

Every post needs a header section and content section. Copy this template to start:

```markdown
---
slug: your-url-friendly-title
title: Your Actual Title
authors: [jack, alex]  # Use author IDs from authors.yml
tags: [features, tutorial]  # Use existing tags or create new ones
image: /img/your-cover-image.jpg  # Optional
description: A brief description for SEO and social sharing
---

Your content goes here...

## You can use markdown headings

- And bullet points
- Like this

## Links work like this

[EchoDash](https://echodash.com)
```

## Code examples

```js
console.log('Hello EchoDash!');
```

### Images
```markdown
![Image description](./image-name.jpg)
```

### Available Options

In the header section (between the `---` lines), you can use:

- `slug`: The URL for your post (e.g., `/blog/your-url-friendly-title`)
- `title`: The displayed title
- `authors`: List of author IDs from `blog/authors.yml`
- `tags`: List of tags (will be added to `blog/tags.yml` if new)
- `image`: Cover image path (optional)
- `description`: Brief summary for SEO (optional)
- `draft: true`: Add this to prevent the post from being published

### Adding Images

There are two ways to add images to your post:

1. **Recommended: Blog Post Directory**
   - Instead of creating a single `.md` file, create a directory in `blog/` with your post date: `YYYY-MM-DD-title/`
   - Add your `index.md` file inside this directory
   - Upload your images to the same directory
   - Reference images relative to your post: `![Description](./cover.jpg)`

   Example structure:
   ```
   blog/
     └── 2024-03-15-new-features/
         ├── index.md
         ├── cover.jpg
         └── screenshot.png
   ```

2. **Shared Images**
   - For images you want to reuse across multiple posts (like logos or team photos)
   - Upload to `static/img/`
   - Reference as `/img/your-image.jpg`

To upload files through GitHub:
1. Create your post directory in `blog/`
2. Click "Add file" → "Upload files"
3. Drag your images
4. Commit to your branch

## Publishing Workflow

1. **Create a Branch**
   - Above your new file, find the "Create a new branch" option
   - Name it something like `blog/post-title`
   - Select "Propose new file"

2. **Preview Your Changes**
   - After creating the pull request, Cloudflare will automatically create a preview
   - Look for "Deploy Preview ready!" in the PR comments
   - Click the preview link to see how your post looks

3. **Make Changes**
   - If you need to edit your post:
     - Go to the "Files changed" tab
     - Click the edit button (pencil icon)
     - Make your changes
     - Commit directly to your branch
   - The preview will update automatically

4. **Publishing**
   - When you're happy with the preview, ask for review
   - Once approved, click "Merge pull request"
   - Your post will be live in a few minutes!

5. **Cleanup**
   - After merging, you can delete your branch
   - Click "Delete branch" in the PR

## Markdown Tips

- Use `#` for headings (`#` = h1, `##` = h2, etc.)
- `*italic*` for *italic*
- `**bold**` for **bold**
- `- item` for bullet points
- `1. item` for numbered lists
- `[link text](url)` for links
- `![alt text](/img/image.jpg)` for images
- ` ```language\ncode\n``` ` for code blocks

## Need Help?

- Join our [Slack community](https://echodash.slack.com)
- Email the team at support@echodash.com
- Ask questions in your PR - we're happy to help! 