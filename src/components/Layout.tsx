import React from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-rose-600">
                Mother's Day Tribute
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/category/stories" className="text-gray-600 hover:text-rose-600">
                Stories
              </Link>
              <Link href="/category/health" className="text-gray-600 hover:text-rose-600">
                Health
              </Link>
              <Link href="/category/inspiration" className="text-gray-600 hover:text-rose-600">
                Inspiration
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">
            © 2024 Mother's Day Tribute Blog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 