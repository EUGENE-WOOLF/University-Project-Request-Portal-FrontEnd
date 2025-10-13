import React from 'react';

export default function Toast({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed right-4 bottom-4 bg-black text-white px-4 py-2 rounded shadow">{children}</div>
  );
}
