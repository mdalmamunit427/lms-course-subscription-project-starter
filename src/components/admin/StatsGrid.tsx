import React from 'react';

type Stats = {
  totalUsers: number;
  totalCourses: number;
  monthlyRevenue: number;
  activeStudents: number;
  newUsersToday: number;
  completionRate: number;
  avgEngagement: number;
};

interface StatsGridProps {
  stats: Stats;
}

export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="relative overflow-hidden gradient-stat-indigo rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{stats.totalUsers.toLocaleString()}</div>
              <div className="text-xs text-indigo-200 mt-1">+{stats.newUsersToday} today</div>
            </div>
          </div>
          <p className="text-sm font-medium text-indigo-100">Total Users</p>
        </div>
      </div>

      <div className="relative overflow-hidden gradient-stat-emerald rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">${(stats.monthlyRevenue / 1000).toFixed(1)}k</div>
              <div className="text-xs text-emerald-200 mt-1">This month</div>
            </div>
          </div>
          <p className="text-sm font-medium text-emerald-100">Revenue</p>
        </div>
      </div>

      <div className="relative overflow-hidden gradient-stat-violet rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{stats.activeStudents}</div>
              <div className="text-xs text-violet-200 mt-1">{stats.completionRate}% active</div>
            </div>
          </div>
          <p className="text-sm font-medium text-violet-100">Active Students</p>
        </div>
      </div>

      <div className="relative overflow-hidden gradient-stat-rose rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{stats.totalCourses}</div>
              <div className="text-xs text-rose-200 mt-1">{stats.avgEngagement}/5 rating</div>
            </div>
          </div>
          <p className="text-sm font-medium text-rose-100">Total Courses</p>
        </div>
      </div>
    </div>
  );
}


