# Write, preview, publish

## Add an article

1. Create `content/articles/your-article-slug.md`. Use lowercase letters, numbers, and hyphens. The filename is the URL; keep it stable after publishing.
2. Add frontmatter:

```yaml
---
title: "Your article title"
date: "2026-10-11"
description: "A concise summary for readers and search engines."
tags: ["Engineering", "Systems"]
cover: "/images/articles/your-cover.webp"
coverAlt: "Describe the cover image"
draft: true
---
```

3. Write ordinary Markdown below the frontmatter. Use `##` for sections; the page supplies the title as its main heading. Fenced code blocks support syntax highlighting when a supported language is specified.
4. Add images under `public/images/articles/`. Use repository-local URLs and descriptive alt text:

```markdown
![What the diagram explains](/images/articles/your-diagram.webp)
```

5. Run `npm run content:check`. Invalid metadata, dates, filenames, missing images, and images without alt text produce errors naming the source file. Quote dates and keep `draft` a boolean. Raw HTML is intentionally escaped; articles are Markdown, not executable MDX.
6. Set `draft: false` to include the article in the website. Run `npm run dev` and visit `/articles/your-article-slug/`. Drafts are excluded from all site routes; to preview a draft, temporarily set it to false locally and restore true before committing if it is unfinished.
7. Run `npm test` and `npm run build`, then commit and push to `main`.

GitHub saves the source. A build discovers the files and creates HTML. Deployment copies that HTML to Hostinger. A push updates the live site only after deployment has been configured and succeeds.

**Drafts are public in a public repository.** They are hidden from the site, not private. Dates are displayed metadata, not scheduled publication dates. A future-dated non-draft article publishes immediately.

## Images

Keep all images in the repository. Prefer compressed WebP or AVIF for photographs and SVG for original diagrams. Choose covers with a 16:9 ratio. Use reasonably sized images, and strip personal metadata when appropriate. Remote article images are rejected to keep published content self-contained.

## Project content

The home page lives in `app/page.tsx`. Replace or extend the featured project with verified names, roles, descriptions, repository/demo URLs, and locally stored screenshots. Do not use client names, outcomes, or private code without permission. The About section focuses on the current role and working approach; keep employment history and tailored CV content off the public site.

The published sample explains this repository's publishing system. The production-readiness sample is an editorial draft, ready for personal examples and review.
