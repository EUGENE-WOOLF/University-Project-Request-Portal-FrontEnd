import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';

export default function ProfessorDashboard() {
  const role = 'professor';
  return (
    <DashboardLayout role={role}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Professor Dashboard</h1>
        <p className="text-gray-600 mb-6">Create projects and manage student requests.</p>

        <div className="grid md:grid-cols-2 gap-4">
          <a href="/professor/projects/new" className="block p-4 bg-white dark:bg-gray-800 border rounded shadow-sm">Create New Project</a>
          <a href="/professor/projects" className="block p-4 bg-white dark:bg-gray-800 border rounded shadow-sm">Manage Projects</a>
        </div>
      </div>
    </DashboardLayout>
  );
}
