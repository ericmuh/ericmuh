---
title: "A publishing workflow that starts in Git"
date: "2026-10-11"
description: "How this portfolio turns Markdown files and local images into a website, without a CMS or a running backend."
tags: ["Engineering", "Publishing"]
cover: "/images/articles/repository-first-publishing.svg"
coverAlt: "Layered wireframe illustrating a repository-first publishing pipeline"
draft: false
---
This site treats articles as part of the codebase. The writing, images, and publishing configuration live together, so every change is reviewable and versioned.

## One source of truth

An article is a Markdown file inside `content/articles/`. Its filename becomes its URL. A file called `repository-first-publishing.md` lives at `/articles/repository-first-publishing/`.

The metadata at the top describes the article. The rest is ordinary Markdown:

```yaml
title: "A clear title"
date: "2026-10-11"
description: "A short explanation of what readers will learn."
tags: ["Engineering"]
cover: "/images/articles/my-cover.webp"
coverAlt: "A description of the cover image"
draft: false
```

Images live in `public/images/`. A local image can be embedded like this:

```markdown
![Describe the image](/images/articles/my-diagram.webp)
```

## Discovery happens during the build

Next.js reads the article directory, validates metadata and images, and generates a page for each published article. No manual import or registration is necessary.

The output is static HTML, CSS, and JavaScript in `out/`. The Markdown parser and filesystem access stay in the build environment; the hosting server serves finished files.

## A push and a deployment are different steps

Pushing an article saves it to GitHub. Updating the live website also requires a successful build and a configured deployment.

The GitHub build workflow checks the content and produces a downloadable website artifact. The separate Hostinger workflow can publish that output once the hosting environment and credentials are configured.

> GitHub is the source of truth. Hostinger serves the built website.

## Keep drafts explicit

Use `draft: true` while an article is unfinished. Drafts are validated but excluded from the website and its generated routes. They remain visible in a public GitHub repository, so this setting is an editorial tool, not a privacy control.

## Why this approach fits

For public writing on a personal portfolio, a repository-first workflow keeps infrastructure small. There is no content database to operate, no admin panel to secure, and no separate asset store to maintain.

The tradeoff is straightforward: publishing requires a build. For a site updated through a code editor and Git, that is a useful constraint rather than another system to manage.
