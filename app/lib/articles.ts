import fs from "node:fs";
import path from "node:path";
import { parse } from "yaml";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js/lib/common";

export type Article = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  cover: string;
  coverAlt: string;
  draft: boolean;
  body: string;
  minutes: number;
};
const markdown = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
  highlight(code, language) {
    return language && hljs.getLanguage(language) ? hljs.highlight(code, { language }).value : "";
  }
});

/** Validate repository-local images so a missing asset fails before publication. */
function localImage(url: string, source: string, root: string) {
  if (
    !url.startsWith("/images/") ||
    url.includes("..") ||
    !fs.existsSync(path.join(root, "public", url))
  ) {
    throw new Error(`${source}: image must exist under public/images: ${url}`);
  }
}

/** Discover and validate files at build time; filenames are permanent article slugs. */
export function getArticles(root = process.cwd(), includeDrafts = false): Article[] {
  const directory = path.join(root, "content/articles");
  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const source = `content/articles/${file}`;
      const slug = file.slice(0, -3);
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
        throw new Error(`${source}: use a lowercase, hyphen-separated filename`);
      let parsed;
      try {
        const raw = fs.readFileSync(path.join(directory, file), "utf8");
        const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/);
        if (!match) throw new Error("Missing frontmatter");
        parsed = { data: parse(match[1], { maxAliasCount: 0 }), content: match[2] };
        if (!parsed.data || typeof parsed.data !== "object" || Array.isArray(parsed.data))
          throw new Error("Metadata must be a mapping");
      } catch {
        throw new Error(`${source}: invalid YAML frontmatter`);
      }
      const { data, content: body } = parsed;
      for (const key of ["title", "date", "description", "cover", "coverAlt"]) {
        if (typeof data[key] !== "string" || !data[key].trim())
          throw new Error(`${source}: ${key} must be a non-empty string (quote dates)`);
      }
      if (
        !/^\d{4}-\d{2}-\d{2}$/.test(data.date) ||
        Number.isNaN(Date.parse(data.date)) ||
        new Date(data.date).toISOString().slice(0, 10) !== data.date
      )
        throw new Error(`${source}: date must be a valid YYYY-MM-DD date`);
      if (
        !Array.isArray(data.tags) ||
        !data.tags.length ||
        data.tags.some((tag: unknown) => typeof tag !== "string" || !tag.trim())
      )
        throw new Error(`${source}: tags must be a non-empty list of strings`);
      if (data.draft !== undefined && typeof data.draft !== "boolean")
        throw new Error(`${source}: draft must be true or false`);
      if (!body.trim()) throw new Error(`${source}: article body is empty`);
      localImage(data.cover, source, root);
      const tokens = markdown.parse(body, {});
      for (const token of tokens)
        for (const child of token.children || []) {
          if (child.type === "image") {
            localImage(String(child.attrGet("src") || ""), source, root);
            if (!child.content.trim())
              throw new Error(`${source}: article images need descriptive alt text`);
          }
        }
      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        tags: data.tags,
        cover: data.cover,
        coverAlt: data.coverAlt,
        draft: data.draft === true,
        body,
        minutes: Math.max(1, Math.ceil(body.split(/\s+/).length / 220))
      };
    })
    .filter((article) => includeDrafts || !article.draft)
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}

export function renderArticle(body: string) {
  return markdown.render(body);
}
export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  }).format(new Date(date));
}
