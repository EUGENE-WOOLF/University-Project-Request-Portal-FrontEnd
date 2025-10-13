import React from 'react';

export default function Sidebar({ role }: { role: string }) {
  const items = [
    { href: '/', label: 'Home' },
    { href: `/dashboard/${role}`, label: 'Dashboard' },
    { href: `/dashboard/${role}/projects`, label: 'Projects' },
    { href: `/dashboard/${role}/uploads`, label: 'Uploads' },
  ];

  return (
    <aside className="w-full md:w-64 p-4 card">
      <div className="mb-6 font-semibold text-lg">UPR Portal</div>
      <nav className="space-y-2">
        {items.map((it) => (
          <a key={it.href} href={it.href} className="block px-3 py-2 rounded hover:bg-gray-100 transition text-gray-800">
            {it.label}
          </a>
        ))}
      </nav>
      <div className="mt-6 text-sm muted">Role: <span className="font-medium text-gray-900">{role}</span></div>
    </aside>
  );
}
