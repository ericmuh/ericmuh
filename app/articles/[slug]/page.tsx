import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getArticles, renderArticle, formatDate } from "../../lib/articles";
export const dynamicParams = false;
export function generateStaticParams() {
  return getArticles().map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticles().find((a) => a.slug === slug);
  return article
    ? {
        title: article.title,
        description: article.description,
        alternates: { canonical: `/articles/${slug}/` },
        openGraph: {
          type: "article",
          title: article.title,
          description: article.description,
          images: [article.cover],
          publishedTime: article.date
        }
      }
    : {};
}
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articles = getArticles();
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  return (
    <main id="main-content" className="wrap article-page">
      <Link href="/articles/" className="text-link">
        <ArrowLeft size={16} /> All field notes
      </Link>
      <header className="article-heading">
        <p className="eyebrow">{article.tags.join(" / ")}</p>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <div className="article-meta">
          <span>Eric Muhwezi</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span>{article.minutes} min read</span>
        </div>
      </header>
      <Image
        className="article-cover"
        src={article.cover}
        alt={article.coverAlt}
        width="800"
        height="450"
      />
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: renderArticle(article.body) }}
      />
      <div className="article-end">
        <span className="mono">END OF NOTE / THANKS FOR READING</span>
        <Link className="text-link" href="/articles/">
          Keep exploring →
        </Link>
      </div>
    </main>
  );
}
