import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  title,
  excerpt,
  imageUrl,
  category,
  author,
  date,
  readingTime,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-rose-600 text-white rounded-full text-sm">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <Link href={`/articles/${id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-rose-600 transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{author}</span>
          <div className="flex items-center space-x-4">
            <span>{date}</span>
            <span>{readingTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard; 