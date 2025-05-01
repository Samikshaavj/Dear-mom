'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-6xl font-bold text-rose-600 mb-4">Oops!</h1>
          <h2 className="text-2xl font-semibold mb-4">Something went wrong</h2>
          <p className="text-gray-600 mb-8">
            We're sorry, but there was an error loading this page.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={reset}
              className="inline-block bg-rose-600 text-white px-6 py-3 rounded-full hover:bg-rose-700 transition-colors"
            >
              Try again
            </button>
            <Link
              href="/"
              className="inline-block bg-gray-100 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
} 