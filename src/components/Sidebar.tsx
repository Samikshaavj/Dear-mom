import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import fs from 'fs';

// Helper to get articles and categories (for SSR/SSG)
async function getSidebarData() {
  const filePath = path.join(process.cwd(), 'src/data/articles.json');
  const fileContents = await fs.promises.readFile(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  const articles = data.articles || [];
  const categories = Array.from(new Set(articles.map((a: any) => a.category)));
  return { articles, categories };
}

export default async function Sidebar() {
  const { articles, categories } = await getSidebarData();
  const recentArticles = articles.slice(0, 3);

  return (
    <aside className="p-4 bg-gray-100 rounded-lg shadow space-y-8">
      {/* Author Profile */}
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 relative mb-2">
          <Image
            src="/IMG_20241001_183854.jpg"
            alt="Author profile"
            fill
            className="object-cover rounded-full border-2 border-rose-600"
          />
        </div>
        <h3 className="font-bold text-lg">Samiksha Vijayvargiya</h3>
        <p className="text-gray-600 text-sm">Blogger & Storyteller</p>
      </div>

      {/* Categories */}
      <div>
        <h4 className="font-semibold mb-2">Categories</h4>
        <ul className="space-y-1">
          {(categories as string[]).map((cat: string) => (
            <li key={cat}>
              <Link href={`/category/${cat.toLowerCase()}`}
                className="text-rose-600 hover:underline">
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Articles */}
      <div>
        <h4 className="font-semibold mb-2">Recent Articles</h4>
        <ul className="space-y-1">
          {recentArticles.map((art: any) => (
            <li key={art.id}>
              <Link href={`/articles/${art.id}`}
                className="text-gray-800 hover:text-rose-600">
                {art.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Search Bar */}
      <form action="/search" method="get" className="w-full">
        <input
          type="text"
          name="q"
          placeholder="Search articles..."
          className="w-full px-3 py-2 rounded border focus:ring-2 focus:ring-rose-600"
        />
      </form>
    </aside>
  );
} 