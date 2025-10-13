import React from 'react';
import Link from 'next/link';

export default function TopNav({ role }: { role: string }) {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-white card">
      <div className="font-semibold">Student Project Application System</div>
      <div className="flex items-center space-x-3">
        <div className="text-sm muted">Signed in as <span className="font-medium text-gray-900">{role}</span></div>
        <div>
          <Link href="/" className="text-sm text-white btn-primary px-3 py-1 rounded">Sign out</Link>
        </div>
      </div>
    </header>
  );
}
