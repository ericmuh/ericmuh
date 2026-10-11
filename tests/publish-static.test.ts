import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";

test("static publishing keeps history, excludes source, and removes obsolete pages", () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "eric-publish-"));
  const repo = path.join(directory, "source");
  const remote = path.join(directory, "remote.git");
  const script = path.resolve("scripts/publish-static.sh");
  fs.mkdirSync(repo);
  const git = (...args: string[]) =>
    execFileSync("git", args, {
      cwd: repo,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"]
    }).trim();
  try {
    git("init", "--bare", remote);
    git("init", "-b", "main");
    git("config", "user.name", "ericmuh");
    git("config", "user.email", "ericmuh@users.noreply.github.com");
    fs.writeFileSync(path.join(repo, "source.txt"), "Source stays on main.");
    git("add", "source.txt");
    git("commit", "-m", "test: initialize source fixture");
    git("remote", "add", "origin", remote);
    fs.mkdirSync(path.join(repo, "out/articles/old-page"), { recursive: true });
    for (const file of [
      "index.html",
      "404.html",
      "articles/index.html",
      "articles/old-page/index.html",
      ".htaccess"
    ])
      fs.writeFileSync(path.join(repo, "out", file), "Initial export");
    execFileSync("bash", [script], { cwd: repo, stdio: "pipe" });
    const first = git("--git-dir", remote, "rev-parse", "hostinger-site");
    const files = git("--git-dir", remote, "ls-tree", "-r", "--name-only", "hostinger-site");
    assert.ok(files.includes("articles/old-page/index.html"));
    assert.ok(files.includes(".htaccess"));
    assert.ok(!files.includes("source.txt"));
    fs.rmSync(path.join(repo, "out/articles/old-page"), { recursive: true });
    fs.writeFileSync(path.join(repo, "out/index.html"), "Updated export");
    execFileSync("bash", [script], { cwd: repo, stdio: "pipe" });
    assert.equal(git("--git-dir", remote, "rev-parse", "hostinger-site^"), first);
    assert.ok(
      !git("--git-dir", remote, "ls-tree", "-r", "--name-only", "hostinger-site").includes(
        "old-page"
      )
    );
    const second = git("--git-dir", remote, "rev-parse", "hostinger-site");
    execFileSync("bash", [script], { cwd: repo, stdio: "pipe" });
    assert.equal(git("--git-dir", remote, "rev-parse", "hostinger-site"), second);
    assert.equal(git("branch", "--show-current"), "main");
  } finally {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});
