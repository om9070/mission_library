// app/not-found.tsx (for Next.js 13+ App Router)
// or pages/404.tsx (for Next.js Pages Router)

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-yellow-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link 
          href="/"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}