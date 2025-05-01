'use client';
import FeaturedCarousel from '@/components/FeaturedCarousel';

export default function FeaturedCarouselClient({ articles }: { articles: any[] }) {
  return <FeaturedCarousel articles={articles} />;
} 