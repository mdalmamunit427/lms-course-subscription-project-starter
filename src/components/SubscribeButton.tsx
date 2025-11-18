'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function SubscribeButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();



  return (
    <button
      disabled={loading}
      className="px-8 py-4 gradient-button text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Processing...
        </span>
      ) : (
        <span className="flex flex-col items-center">
          <span>Subscribe for $99</span>
          <span className="text-sm font-normal opacity-90">Lifetime access to all courses</span>
        </span>
      )}
    </button>
  );
}

