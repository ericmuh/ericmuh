# Verification — 11 October 2026

- All ten content and deployment tests pass: automatic file discovery, stable slugs, draft exclusion, metadata, calendar dates, local cover images, inline image alt text, safe Markdown, tables, and highlighted code.
- Static branch publishing is tested against an isolated local Git remote: first publication, subsequent publication, preserved history, deleted pages, excluded source, and no-op builds.
- Application, publishing scripts, and tests pass ESLint without warnings.
- Production static export succeeds; home, article index, and the published article are generated. The starter draft has no public route.
- Desktop and mobile browser inspection covers the home page, navigation menu, article index, and article page. At the inspected mobile width (390 CSS pixels), home and article document widths equal the viewport width, with no horizontal page overflow.
- The mobile menu opens and closes when navigating to writing. The article cover loads and the page metadata and content render correctly.
- Local preview assets and all repository-local link targets were checked. Live Hostinger checks confirm HTTPS, the home page, article index, article deep link, www hostname, HTTP-to-HTTPS redirect, nosniff response headers, and a 404 for unknown routes. Requests for Git metadata are blocked with 403.
- Production dependency audit reports zero advisories after dependency cleanup and the patched PostCSS override. Seven high-severity advisories remain in development lint-tool dependencies; these are not shipped as a server or bundled content parser on the static site. Review updates before enabling builds from untrusted source branches.

Screenshots: [desktop](preview-desktop.png) and [mobile article](preview-article-mobile.png).

## Live hosting

The PHP/HTML website for `ericmuhwezi.com` is configured on the existing Premium Web Hosting plan. GitHub is connected to `ericmuh/ericmuh`, branch `hostinger-site`, root `public_html`. Hostinger reports the deployment completed and auto-deployment is on. The public domain serves the redesigned portfolio. FTP settings and the dedicated document root were inspected; Git integration is the active deployment method. Hostinger's default welcome file was preserved outside the web root before deployment.

The build records its source revision in `/deployment-revision.txt` to verify future releases through the complete GitHub-to-Hostinger path.
