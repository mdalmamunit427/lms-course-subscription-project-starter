import React from 'react';

export default function SystemStatusCard() {
  return (
    <div className="gradient-system-status rounded-2xl shadow-lg p-6 text-white">
      <h3 className="text-lg font-bold mb-4">System Status</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-indigo-100">Server Status</span>
          <span className="flex items-center text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Online
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-indigo-100">Database</span>
          <span className="flex items-center text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Healthy
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-indigo-100">API Response</span>
          <span className="text-sm">45ms</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-indigo-100">Uptime</span>
          <span className="text-sm">99.9%</span>
        </div>
      </div>
    </div>
  );
}


