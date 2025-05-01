import { promises as fs } from 'fs';
import path from 'path';
import Image from 'next/image';
import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';

async function getArticle(id: string) {
  const filePath = path.join(process.cwd(), 'src/data/articles.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  return data.articles.find((article: any) => article.id === id);
}

export default async function ArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const article = await getArticle(params.id);

  if (!article) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <article>
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-rose-600 text-white rounded-full text-sm mb-4">
                {article.category}
              </span>
              <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
              <div className="flex items-center text-gray-500 space-x-4 mb-8">
                <span>{article.author}</span>
                <span>•</span>
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readingTime}</span>
              </div>
              <div className="prose prose-lg max-w-none">
                {article.content}
              </div>
            </div>
          </article>
        </div>
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </div>
    </Layout>
  );
} 