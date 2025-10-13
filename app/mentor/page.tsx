import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';

export default function MentorDashboard() {
  const role = 'mentor';
  return (
    <DashboardLayout role={role}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Mentor Dashboard</h1>
        <p className="text-gray-600 mb-6">Request projects and upload mentor materials.</p>

        <div className="grid md:grid-cols-2 gap-4">
          <a href="/mentor/requests/new" className="block p-4 bg-white dark:bg-gray-800 border rounded shadow-sm">Request Project</a>
          <a href="/mentor/uploads" className="block p-4 bg-white dark:bg-gray-800 border rounded shadow-sm">Upload Files</a>
        </div>
      </div>
    </DashboardLayout>
  );
}
