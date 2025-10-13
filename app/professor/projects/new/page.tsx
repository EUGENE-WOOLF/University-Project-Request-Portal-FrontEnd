import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { projectService } from '@/services/mockService';
import { useNotify } from '@/components/NotificationContext';

export default function NewProject() {
  const role = 'professor';
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [msg, setMsg] = useState('');

  const { notify } = useNotify();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const id = String(Date.now());
    projectService.create({ id, title, description: desc, professor: 'Professor A', status: 'open' });
    setMsg('Project created');
    notify('Project created');
    setTitle('');
    setDesc('');
  }

  return (
    <DashboardLayout role={role}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Create Project</h2>
        {msg && <div className="mb-3 text-green-600">{msg}</div>}
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full mt-1 p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className="w-full mt-1 p-2 border rounded" />
          </div>
          <div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Create</button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
