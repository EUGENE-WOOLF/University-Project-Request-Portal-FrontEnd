"use client";
import React, { createContext, useContext, useState } from 'react';
import Toast from './Toast';

const NotificationContext = createContext({
  notify: (msg: string) => {},
});

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [msg, setMsg] = useState('');

  function notify(m: string) {
    setMsg(m);
    setTimeout(() => setMsg(''), 3000);
  }

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      {msg && <Toast>{msg}</Toast>}
    </NotificationContext.Provider>
  );
}

export const useNotify = () => useContext(NotificationContext);
