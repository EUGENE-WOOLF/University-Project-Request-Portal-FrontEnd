"use client";

import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { applicationService } from '@/services/mockService';
import { useNotify } from '@/components/NotificationContext';

export default function StudentApply() {
  const role = 'student';
  const [projectId, setProjectId] = useState('');
  const [files, setFiles] = useState<string[]>([]);
  const [msg, setMsg] = useState('');

  const { notify } = useNotify();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const id = String(Date.now());
    applicationService.create({ id, projectId: projectId || 'none', student: 'Student A', status: 'pending', files });
    setMsg('Application submitted');
    notify('Application submitted');
    setProjectId('');
    setFiles([]);
  }

  return (
    <DashboardLayout role={role}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Apply for Project</h2>
        {msg && <div className="mb-3 text-green-600">{msg}</div>}
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Project ID</label>
            <input value={projectId} onChange={(e) => setProjectId(e.target.value)} className="w-full mt-1 p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Application Documents</label>
            <input type="file" multiple onChange={(e) => setFiles(Array.from(e.target.files || []).map((f) => f.name))} className="mt-1" />
            {files.length > 0 && <div className="text-sm text-gray-600 mt-1">Files: {files.join(', ')}</div>}
          </div>
          <div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Submit Application</button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
