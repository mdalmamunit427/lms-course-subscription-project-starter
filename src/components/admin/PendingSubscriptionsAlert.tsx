import React from 'react';
import PendingSubscriptions from '@/components/admin/PendingSubscriptions';

interface PendingSubscriptionsAlertProps {
  pendingSubscriptions: any[];
}

export default function PendingSubscriptionsAlert({
  pendingSubscriptions,
}: PendingSubscriptionsAlertProps) {
  if (!pendingSubscriptions || pendingSubscriptions.length === 0) return null;

  return (
    <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-amber-500 p-2 rounded-full">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div>
          <h3 className="text-base font-bold text-amber-900">
            {pendingSubscriptions.length} Pending Subscription{pendingSubscriptions.length > 1 ? 's' : ''}
          </h3>
          <p className="text-sm text-amber-700">
            Payment succeeded but requires manual activation
          </p>
        </div>
      </div>
      <PendingSubscriptions initialSubscriptions={pendingSubscriptions} />
    </div>
  );
}


