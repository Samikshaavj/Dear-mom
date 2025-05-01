import { promises as fs } from 'fs';
import path from 'path';
import Layout from '@/components/Layout';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';

async function getArticles() {
  const filePath = path.join(process.cwd(), 'src/data/articles.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  return data.articles;
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const articles = await getArticles();
  const categoryArticles = articles.filter(
    (article) => article.category.toLowerCase() === params.slug
  );

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-8 capitalize">
            {params.slug} Articles
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryArticles.map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                excerpt={article.excerpt}
                imageUrl={article.imageUrl}
                category={article.category}
                author={article.author}
                date={article.date}
                readingTime={article.readingTime}
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </div>
    </Layout>
  );
} 