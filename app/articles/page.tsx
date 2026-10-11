import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getArticles, formatDate } from "../lib/articles";
export const metadata = {
  title: "Field notes",
  description:
    "Technical writing on software engineering, infrastructure, and maintainable systems."
};
export default function Articles() {
  const articles = getArticles();
  return (
    <main id="main-content" className="wrap section article-index">
      <p className="eyebrow">THE ENGINEERING NOTEBOOK</p>
      <h1>
        Field notes<span>.</span>
      </h1>
      <p className="index-description">
        Software, systems, and the decisions behind them. Notes from a practice of building and
        learning.
      </p>
      <div className="article-grid">
        {articles.map((article) => (
          <Link className="article-card" key={article.slug} href={`/articles/${article.slug}/`}>
            <div className="article-image">
              <Image src={article.cover} alt={article.coverAlt} width="800" height="450" />
            </div>
            <div className="article-meta">
              <span>{article.tags.join(" / ")}</span>
              <span>{article.minutes} min read</span>
            </div>
            <h2>
              {article.title}
              <ArrowUpRight size={18} />
            </h2>
            <p>{article.description}</p>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </Link>
        ))}
      </div>
      {!articles.length && <p>New field notes are on the way.</p>}
    </main>
  );
}
