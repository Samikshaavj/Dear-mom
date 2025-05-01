import { promises as fs } from 'fs';
import path from 'path';
import Layout from '@/components/Layout';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';
import SearchBar from '@/components/SearchBar';

async function getArticles() {
  const filePath = path.join(process.cwd(), 'src/data/articles.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  return data.articles;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const articles = await getArticles();
  const searchQuery = searchParams.q?.toLowerCase() || '';
  
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery) ||
      article.excerpt.toLowerCase().includes(searchQuery) ||
      article.content.toLowerCase().includes(searchQuery)
  );

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Search Articles</h1>
            <SearchBar onSearch={() => {}} />
          </div>
          {searchQuery && (
            <p className="text-gray-600 mb-8">
              Showing results for "{searchQuery}"
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => (
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
          {filteredArticles.length === 0 && (
            <p className="text-center text-gray-600 py-12">
              No articles found matching your search.
            </p>
          )}
        </div>
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </div>
    </Layout>
  );
} 