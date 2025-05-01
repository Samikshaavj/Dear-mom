import Link from 'next/link';
import Layout from '@/components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold text-rose-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-rose-600 text-white px-6 py-3 rounded-full hover:bg-rose-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </Layout>
  );
} 