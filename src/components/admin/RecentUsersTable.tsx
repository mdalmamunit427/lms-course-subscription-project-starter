import React from 'react';
import Link from 'next/link';

interface RecentUser {
  firstName?: string;
  lastName?: string;
  email: string;
  createdAt?: string | number | Date;
  subscriptionStatus?: string;
}

interface RecentUsersTableProps {
  recentUsers: RecentUser[];
}

export default function RecentUsersTable({ recentUsers }: RecentUsersTableProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Recent Users</h2>
          <p className="text-sm text-gray-600 mt-1">Latest user registrations</p>
        </div>
        <Link href="/admin/users">
          <button className="px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
            View All
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Joined</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {recentUsers.map((user: any, index: number) => {
              const displayName =
                [user.firstName, user.lastName].filter(Boolean).join(' ') || user.email;
              const initials = displayName
                .split(' ')
                .filter((s: string) => s.length > 0)
                .map((s: string) => s[0])
                .join('')
                .toUpperCase();
              const joined =
                user.createdAt ? new Date(user.createdAt).toLocaleDateString() : '';
              const status =
                user.subscriptionStatus === 'completed' ? 'active' : 'none';

              return (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 gradient-avatar rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {initials}
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{displayName}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{joined}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${
                      status === 'active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}


