import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: "Mother's Day Tribute Blog",
  description: 'A beautiful blog dedicated to celebrating mothers and their stories',
  keywords: ['mothers day', 'tribute', 'blog', 'stories', 'inspiration'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: "Mother's Day Tribute Blog",
    description: 'A beautiful blog dedicated to celebrating mothers and their stories',
    type: 'website',
    locale: 'en_US',
    siteName: "Mother's Day Tribute Blog",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mother's Day Tribute Blog",
    description: 'A beautiful blog dedicated to celebrating mothers and their stories',
  },
}; 