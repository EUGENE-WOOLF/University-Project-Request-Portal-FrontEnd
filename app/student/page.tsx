import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';

export default function StudentDashboard() {
  const role = 'student';
  return (
    <DashboardLayout role={role}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Student Dashboard</h1>
        <p className="text-gray-600 mb-6">Browse projects and submit applications.</p>

        <div className="grid md:grid-cols-2 gap-4">
          <a href="/student/projects" className="block p-4 bg-white dark:bg-gray-800 border rounded shadow-sm">Browse Projects</a>
          <a href="/student/apply" className="block p-4 bg-white dark:bg-gray-800 border rounded shadow-sm">Apply for Project</a>
        </div>
      </div>
    </DashboardLayout>
  );
}
