# Hostinger deployment

This project exports to `out/` and needs static hosting, not a Node.js server. Upload the **contents** of `out/` into the domain's dedicated `public_html` directory. There is no database or production application backend.

## First verify the hosting setup

In hPanel, confirm the domain's website entry, plan, document root, and whether SSH plus `rsync` are available. The existing account's capabilities have not been verified. Back up the current site before replacing it. Do not target a folder shared with another application, email assets, or unrelated files.

Official references: [Hostinger Git deployment](https://www.hostinger.com/support/1583302-how-to-deploy-a-git-repository-in-hostinger/) and [Hostinger application deployment](https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/). hPanel Git deployment and managed application builds are different features; deploying the source repository alone does not necessarily build the Next.js static output.

## Manual first deployment

1. Run `npm ci`, `npm test`, and `npm run build` locally, or download `eric-muh-static-site` from a successful GitHub Verify and prepare Hostinger portfolio workflow.
2. Back up the current document root.
3. Upload the exported files with hPanel File Manager, retaining `.htaccess` and subdirectories. Remove obsolete files belonging to the previous portfolio only after confirming they are safe to remove.
4. Visit the home page and an article URL directly. Check an unknown URL returns a 404, TLS is active, and images load.

## Automatic deployments with SSH

The `Publish to Hostinger` workflow is supplied but **disabled by default**. It runs on pushes to `main` or manually, only when repository variable `HOSTINGER_DEPLOY_ENABLED` equals `true`.

Create a GitHub environment called `hostinger`. Consider requiring deployment approval there for the first live release. Add:

| Type                 | Name                        | Value                                                                 |
| -------------------- | --------------------------- | --------------------------------------------------------------------- |
| Secret               | `HOSTINGER_SSH_HOST`        | Host/IP from hPanel                                                   |
| Secret               | `HOSTINGER_SSH_USER`        | SSH account username                                                  |
| Secret               | `HOSTINGER_SSH_PORT`        | SSH port from hPanel                                                  |
| Secret               | `HOSTINGER_SSH_KEY`         | Dedicated deployment private key; install its public key on Hostinger |
| Secret               | `HOSTINGER_SSH_KNOWN_HOSTS` | Verified SSH host-key entry, including the port when nonstandard      |
| Environment variable | `HOSTINGER_DEPLOY_DIR`      | Absolute path to this site's dedicated `public_html`                  |
| Repository variable  | `HOSTINGER_DEPLOY_ENABLED`  | `true`, only after the destination is confirmed                       |

Verify the host key through a trusted Hostinger source before saving it. The workflow checks strict host-key verification and does not disable it. It validates that the destination is an absolute `public_html` path without shell characters or parent traversal.

The workflow tests, validates, builds, and uses `rsync --delete-delay` to synchronize the dedicated site directory. **Files absent from the export are removed from that directory**, so deleted articles and articles changed to drafts disappear from the live site. Confirm the destination contains only this portfolio before enabling deployment. The supplied deployment is a file synchronization, not an atomic release; a short period of mixed files is possible during upload. Keep a backup for rollback.

## If SSH or rsync is unavailable

Use the verified build artifact and hPanel File Manager. Alternatively, check whether your plan supports Hostinger's managed GitHub build integration and configure the build command `npm run build` with output directory `out`. Do not assume that capability exists on the current plan. An FTP deployment can be added once the supported connection method is known.

## What remains to activate

Confirm the domain/document root and hosting capabilities, approve replacement of the current live site, provision a deployment key and verified host key, and configure GitHub environment values. Never paste private credentials into Markdown, issues, source files, or this README. No live deployment or domain changes have been made.

## Current account and domain setup

The domain is **ericmuhwezi.com**. hPanel inspection confirmed an existing **Base Premium Web** hosting plan and no website entry for this domain at the time of setup. This is suitable for a PHP/HTML static website; no paid Node.js upgrade is needed for this portfolio.

### Git deployment of the finished site

The `Verify and prepare Hostinger portfolio` workflow builds and checks `main`, then publishes only `out/` to the **`hostinger-site`** branch. This keeps Next.js source files and Markdown authoring on `main`, while Hostinger receives finished HTML, CSS, JavaScript, and local images. Deployment history is retained with normal commits and no force-push. Files removed from the export are removed from the branch, including articles changed to drafts.

Once the PHP/HTML website exists in hPanel, use **Advanced → Git** and connect `ericmuh/ericmuh`, branch `hostinger-site`, root directory `public_html`. Enable Hostinger's automatic deployment for that branch. Do not connect `main` directly to ordinary static Git hosting: it contains source, not a built website. If Hostinger needs a new GitHub app authorization, review its requested permissions and limit access to this repository.

This method avoids copying FTP or SSH credentials into GitHub. The static branch is prepared automatically; live updates still depend on the hPanel repository connection being completed and verified. The optional direct SSH workflow remains disabled unless explicitly configured.
