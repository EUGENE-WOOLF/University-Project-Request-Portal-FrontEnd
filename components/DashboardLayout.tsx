import React from 'react';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';

export default function DashboardLayout({
  children,
  role,
}: {
  children: React.ReactNode;
  role: 'professor' | 'mentor' | 'student' | string;
}) {
  return (
    <div className="min-h-screen" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="md:flex md:space-x-6">
        <Sidebar role={role} />
        <div className="flex-1">
          <TopNav role={role} />
          <main className="p-6 md:p-10">{children}</main>
        </div>
      </div>
    </div>
  );
}
