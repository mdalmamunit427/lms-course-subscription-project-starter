'use client';

import { useState } from 'react';
import { manuallyActivateSubscription } from '@/actions/course';

interface Subscription {
  _id: string;
  clerkId: string;
  amount: number;
  currency: string;
  stripePaymentIntentId: string;
  purchaseDate: string;
  status: string;
}

interface PendingSubscriptionsProps {
  initialSubscriptions: Subscription[];
}

export default function PendingSubscriptions({ initialSubscriptions }: PendingSubscriptionsProps) {
  const [subscriptions, setSubscriptions] = useState(initialSubscriptions);
  const [activating, setActivating] = useState<string | null>(null);

  const handleActivate = async (subscriptionId: string) => {
    if (!confirm('Are you sure you want to activate this subscription? This will grant the user lifetime access to all courses.')) {
      return;
    }

    try {
      setActivating(subscriptionId);
      
      const result = await manuallyActivateSubscription(subscriptionId);
      
      if (result.success) {
        alert('✅ Subscription activated successfully!');
        // Remove from list
        setSubscriptions(subs => subs.filter(s => s._id !== subscriptionId));
      } else {
        alert('❌ ' + result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setActivating(null);
    }
  };

  if (subscriptions.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="text-center">
          <div className="text-5xl mb-3">✅</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">All Clear!</h3>
          <p className="text-gray-600">No pending subscriptions to review</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 bg-amber-50">
        <div className="flex items-center gap-3">
          <div className="bg-amber-100 p-2 rounded-lg">
            <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Pending Subscriptions</h3>
            <p className="text-sm text-gray-600">Payment succeeded but requires manual activation</p>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">User ID</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Payment ID</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {subscriptions.map((sub) => (
              <tr key={sub._id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {sub.clerkId.slice(0, 2).toUpperCase()}
                    </div>
                    <code className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {sub.clerkId}
                    </code>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-semibold text-gray-900">
                    ${sub.amount} {sub.currency}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <code className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    {sub.stripePaymentIntentId.slice(0, 20)}...
                  </code>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {new Date(sub.purchaseDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                    {sub.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleActivate(sub._id)}
                    disabled={activating === sub._id}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {activating === sub._id ? 'Activating...' : 'Activate'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

