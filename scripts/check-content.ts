import { getArticles } from "../app/lib/articles";
const articles = getArticles(process.cwd(), true);
console.log(
  `Validated ${articles.length} articles (${articles.filter((a) => !a.draft).length} published).`
);
