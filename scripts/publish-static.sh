#!/usr/bin/env bash
# Publish only the verified static export; retain deployment history and never force-push.
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
branch=hostinger-site
[[ -f out/index.html && -f out/articles/index.html && -f out/404.html ]]
workspace=$(mktemp -d)
trap 'git worktree remove --force "$workspace" >/dev/null 2>&1 || true' EXIT
remote_head=$(git ls-remote --heads origin "refs/heads/$branch")
if [[ -n "$remote_head" ]]; then
  git fetch origin "$branch"
  git worktree add --detach "$workspace" FETCH_HEAD
else
  git worktree add --detach "$workspace" HEAD
  git -C "$workspace" switch --orphan "$branch"
fi
rsync --archive --delete --safe-links --exclude=.git out/ "$workspace/"
git -C "$workspace" add --all
if git -C "$workspace" diff --cached --quiet; then
  echo 'Static export is already current.'
  exit 0
fi
source_commit=$(git rev-parse --short HEAD)
git -C "$workspace" commit -m "deploy: publish portfolio from main $source_commit"
git -C "$workspace" push origin "HEAD:refs/heads/$branch"
