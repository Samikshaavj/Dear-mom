'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
}

interface FeaturedCarouselProps {
  articles: Article[];
}

const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({ articles }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-xl">
      <div
        className="absolute inset-0 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className="flex h-full">
          {articles.map((article) => (
            <div key={article.id} className="relative w-full flex-shrink-0">
              <div className="absolute inset-0 bg-black/40 z-10" />
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-white">
                <span className="inline-block px-3 py-1 bg-rose-600 rounded-full text-sm mb-4">
                  {article.category}
                </span>
                <h2 className="text-4xl font-bold mb-4">{article.title}</h2>
                <p className="text-lg mb-4">{article.excerpt}</p>
                <Link
                  href={`/articles/${article.id}`}
                  className="inline-block bg-white text-rose-600 px-6 py-2 rounded-full hover:bg-rose-50 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full z-30 hover:bg-white"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full z-30 hover:bg-white"
      >
        →
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {articles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarousel; 