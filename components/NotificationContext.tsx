"use client";
import React, { createContext, useContext, useState } from 'react';
import Toast from './Toast';

const NotificationContext = createContext({
  notify: (msg: string) => {},
});

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState('');

  function notify(m: string) {
    setToast(m);
    setTimeout(() => setToast(''), 3000);
  }

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
  {toast && <Toast>{toast}</Toast>}
    </NotificationContext.Provider>
  );
}

export const useNotify = () => useContext(NotificationContext);
