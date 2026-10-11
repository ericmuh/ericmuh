# Verification — 11 October 2026

- All ten content and deployment tests pass: automatic file discovery, stable slugs, draft exclusion, metadata, calendar dates, local cover images, inline image alt text, safe Markdown, tables, and highlighted code.
- Static branch publishing is tested against an isolated local Git remote: first publication, subsequent publication, preserved history, deleted pages, excluded source, and no-op builds.
- Application, publishing scripts, and tests pass ESLint without warnings.
- Production static export succeeds; home, article index, and the published article are generated. The starter draft has no public route.
- Desktop and mobile browser inspection covers the home page, navigation menu, article index, and article page. At the inspected mobile width (390 CSS pixels), home and article document widths equal the viewport width, with no horizontal page overflow.
- The mobile menu opens and closes when navigating to writing. The article cover loads and the page metadata and content render correctly.
- Local preview assets and all repository-local link targets were checked. Hostinger-specific TLS, response headers, 404 handling, credentials, and deployment were not tested because hosting access is not configured.
- Production dependency audit reports zero advisories after dependency cleanup and the patched PostCSS override. Seven high-severity advisories remain in development lint-tool dependencies; these are not shipped as a server or bundled content parser on the static site. Review updates before enabling builds from untrusted source branches.

Screenshots: [desktop](preview-desktop.png) and [mobile article](preview-article-mobile.png).

## Domain and hosting follow-up

The portfolio now uses `https://ericmuhwezi.com`. The Hostinger account is already signed in and its Base Premium Web plan is confirmed. No website entry was found for this domain. Website creation and the live Git connection remain pending because the hPanel creation controls did not respond to browser automation. The requested manual creation step is pending. FTP and SSH settings cannot be verified for a website entry that does not yet exist.
