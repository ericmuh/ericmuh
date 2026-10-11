import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { getArticles, renderArticle } from "../app/lib/articles";

function fixture(body = "## Hello\n\nA real article.", replacements: Record<string, unknown> = {}) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "eric-articles-"));
  fs.mkdirSync(path.join(root, "content/articles"), { recursive: true });
  fs.mkdirSync(path.join(root, "public/images"), { recursive: true });
  fs.writeFileSync(path.join(root, "public/images/cover.svg"), "<svg/>");
  const metadata = {
    title: "Example",
    date: "2026-10-11",
    description: "Description",
    tags: ["Engineering"],
    cover: "/images/cover.svg",
    coverAlt: "Cover",
    draft: false,
    ...replacements
  };
  const frontmatter = Object.entries(metadata)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join("\n");
  fs.writeFileSync(
    path.join(root, "content/articles/new-article.md"),
    `---\n${frontmatter}\n---\n${body}`
  );
  return root;
}
function withFixture(
  run: (root: string) => void,
  body?: string,
  replacements?: Record<string, unknown>
) {
  const root = fixture(body, replacements);
  try {
    run(root);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}
test("discovers a new file without registration and derives a stable slug", () =>
  withFixture((root) => {
    const [article] = getArticles(root);
    assert.equal(article.slug, "new-article");
    assert.equal(article.title, "Example");
  }));
test("drafts stay out of public routes but are still validated", () =>
  withFixture(
    (root) => {
      assert.equal(getArticles(root).length, 0);
      assert.equal(getArticles(root, true).length, 1);
    },
    undefined,
    { draft: true }
  ));
test("missing metadata fails with the filename and field", () =>
  withFixture(
    (root) => assert.throws(() => getArticles(root), /new-article.md: title/),
    undefined,
    { title: "" }
  ));
test("invalid calendar dates fail", () =>
  withFixture((root) => assert.throws(() => getArticles(root), /date must/), undefined, {
    date: "2026-02-30"
  }));
test("missing cover assets fail", () =>
  withFixture((root) => assert.throws(() => getArticles(root), /image must exist/), undefined, {
    cover: "/images/missing.svg"
  }));
test("remote article images fail", () =>
  withFixture(
    (root) => assert.throws(() => getArticles(root), /image must exist/),
    "![Remote](https://example.com/photo.jpg)"
  ));
test("inline images require meaningful alt text", () =>
  withFixture(
    (root) => assert.throws(() => getArticles(root), /alt text/),
    "![](/images/cover.svg)"
  ));
test("raw HTML and executable links are not rendered", () => {
  const result = renderArticle("<script>alert(1)</script>\n\n[bad](javascript:alert(1))");
  assert.ok(!result.includes("<script>"));
  assert.ok(!result.includes('href="javascript:'));
});
test("code highlighting and tables render", () => {
  const result = renderArticle("```js\nconst x = 1;\n```\n\n| A | B |\n| --- | --- |\n| 1 | 2 |");
  assert.match(result, /hljs-keyword/);
  assert.match(result, /<table>/);
});
