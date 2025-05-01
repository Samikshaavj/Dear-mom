import { promises as fs } from 'fs';
import path from 'path';
import FeaturedCarouselClient from './FeaturedCarouselClient';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';
import Layout from '@/components/Layout';

async function getArticles() {
  const filePath = path.join(process.cwd(), 'src/data/articles.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  return data.articles;
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <Layout>
      {/* Gallery Section */}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <img src="/download%20(1).jpeg" alt="Mother and child" className="w-full h-48 object-cover rounded-lg shadow" />
        <img src="/download.jpeg" alt="Grandmother and child" className="w-full h-48 object-cover rounded-lg shadow" />
        <img src="/IMG_20241001_183854.jpg" alt="Woman in garden" className="w-full h-48 object-cover rounded-lg shadow" />
        <img src="/istockphoto-1419092701-612x612.jpg" alt="Nurse and child" className="w-full h-48 object-cover rounded-lg shadow" />
      </div>
      {/* End Gallery Section */}
      <div className="mb-12">
        <FeaturedCarouselClient articles={articles.slice(0, 3)} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
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
        </div>
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </div>
    </Layout>
  );
} 