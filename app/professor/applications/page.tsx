import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { applicationService } from '@/services/mockService';

export default function ProfessorApplications() {
  const role = 'professor';
  const [apps, setApps] = useState<any[]>([]);
  useEffect(() => setApps(applicationService.list()), []);

  return (
    <DashboardLayout role={role}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Student Applications</h2>
        <div className="space-y-3">
          {apps.length === 0 && <div className="text-gray-600">No applications yet.</div>}
          {apps.map((a) => (
            <div key={a.id} className="p-4 bg-white dark:bg-gray-800 border rounded flex justify-between items-center">
              <div>
                <div className="font-medium">{a.student}</div>
                <div className="text-sm text-gray-500">For project: {a.projectId}</div>
              </div>
              <div className="text-right">
                <div className={`px-2 py-1 rounded text-xs ${a.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : a.status === 'accepted' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{a.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
