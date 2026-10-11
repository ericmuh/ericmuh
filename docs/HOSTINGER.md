# Hostinger deployment

The portfolio is hosted at **https://ericmuhwezi.com** on the existing Premium Web Hosting plan. It serves static files with HTTPS; no Node.js server, database, or paid hosting upgrade is required.

## Publishing articles

Write Markdown in `content/articles/`, keep images in `public/images/`, and push to `main`. The **Verify and prepare Hostinger portfolio** workflow tests, validates, and builds the website, then publishes the finished `out/` files to `hostinger-site`. Hostinger automatically deploys that branch into `public_html`.

The public `/deployment-revision.txt` records the source commit behind each GitHub-built release. Compare it with the intended `main` commit when checking whether an update reached the live website.

## Confirmed hosting configuration

| Setting | Value |
| --- | --- |
| Domain | `ericmuhwezi.com` |
| Repository | `ericmuh/ericmuh` |
| Hosting branch | `hostinger-site` |
| Document root | `/home/u273908258/domains/ericmuhwezi.com/public_html` |
| Hostinger auto-deployment | On |
| HTTPS | Enabled |

Hostinger's default `default.php` welcome file was moved to the domain's parent directory before the first successful deployment. It remains available there as a backup. Git deployment requires an empty root for initial setup.

## Maintenance and recovery

In hPanel, open **Advanced → GIT** to inspect deployment history or redeploy the connected branch. Keep the branch set to `hostinger-site`: ordinary PHP/HTML Git hosting does not build the Next.js source on `main`.

Rollback by reverting the relevant source commit on `main`, letting the normal build and deployment run. The publishing script preserves deployment history and does not force-push. Removed articles and articles changed to drafts disappear from the built branch; verify that Hostinger also removes obsolete live files after a deletion.

FTP and File Manager remain available for recovery. Upload only the contents of a verified `out/` artifact into this domain's dedicated `public_html`, including `.htaccess`. The active Git integration avoids storing FTP or SSH credentials in GitHub. The optional SSH workflow remains disabled and should only be enabled if intentionally replacing this method.

Never commit passwords, tokens, private keys, or deployment credentials. Preserve unrelated websites and email DNS settings when making hosting changes.

Official reference: [Hostinger Git deployment](https://www.hostinger.com/support/1583302-how-to-deploy-a-git-repository-in-hostinger/).
