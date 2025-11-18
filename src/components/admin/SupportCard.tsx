import React from 'react';

interface SupportCardProps {
  supportTickets: number;
}

export default function SupportCard({ supportTickets }: SupportCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-lg font-bold text-gray-900">Support</h3>
      </div>
      <div className="p-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-3">
            <span className="text-2xl">🎫</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">{supportTickets}</div>
          <p className="text-sm text-gray-600 mb-4">Open Tickets</p>
          <button className="w-full px-4 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium text-sm">
            View Tickets
          </button>
        </div>
      </div>
    </div>
  );
}


