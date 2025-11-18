import React from 'react';

type Activity = {
  type: 'user' | 'revenue' | 'completion' | 'support' | 'course' | string;
  message: string;
  time: string;
};

interface RecentActivityListProps {
  recentActivity: Activity[];
}

export default function RecentActivityList({ recentActivity }: RecentActivityListProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
        <p className="text-sm text-gray-600 mt-1">Latest platform events</p>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex gap-4">
              <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                activity.type === 'user' ? 'bg-indigo-100 text-indigo-600' :
                activity.type === 'revenue' ? 'bg-emerald-100 text-emerald-600' :
                activity.type === 'completion' ? 'bg-blue-100 text-blue-600' :
                activity.type === 'support' ? 'bg-amber-100 text-amber-600' :
                'bg-purple-100 text-purple-600'
              }`}>
                {activity.type === 'user' ? '👤' :
                 activity.type === 'revenue' ? '💰' :
                 activity.type === 'completion' ? '✓' :
                 activity.type === 'support' ? '🎫' : '📚'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 leading-snug">
                  {activity.message}
                </p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


