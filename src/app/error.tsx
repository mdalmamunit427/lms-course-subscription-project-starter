'use client';

/**
 * Global error handler for app directory
 * This is a client component that catches errors in the app
 */

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    console.error('Global error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mx-auto mb-4">
            <svg
              className="w-6 h-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
            Something went wrong!
          </h2>
          
          <p className="text-gray-600 text-center mb-6">
            We encountered an unexpected error. Please try again.
          </p>

          {process.env.NODE_ENV === 'development' && (
            <details className="mb-4">
              <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 mb-2">
                Error details (development only)
              </summary>
              <div className="bg-gray-100 p-3 rounded text-xs font-mono overflow-auto max-h-40">
                <p className="font-bold mb-1">Message:</p>
                <p className="mb-2">{error.message}</p>
                {error.digest && (
                  <>
                    <p className="font-bold mb-1">Digest:</p>
                    <p className="mb-2">{error.digest}</p>
                  </>
                )}
                {error.stack && (
                  <>
                    <p className="font-bold mb-1">Stack:</p>
                    <pre className="whitespace-pre-wrap">{error.stack}</pre>
                  </>
                )}
              </div>
            </details>
          )}

          <button
            onClick={reset}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 mb-2"
          >
            Try Again
          </button>
          
          <a
            href="/"
            className="block w-full text-center text-gray-600 hover:text-gray-900 py-2"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}


