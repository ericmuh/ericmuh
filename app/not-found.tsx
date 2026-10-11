import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" className="wrap section">
      <p className="eyebrow">404 / PATH NOT FOUND</p>
      <h1>This page took a different route.</h1>
      <p>The link may have moved, or the article may still be a draft.</p>
      <Link className="button primary" href="/">
        Back to the portfolio →
      </Link>
    </main>
  );
}
