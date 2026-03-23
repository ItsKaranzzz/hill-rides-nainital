'use client';

import { useEffect } from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return;

    const mq = window.matchMedia('(prefers-color-scheme: dark)');

    const sync = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('theme')) return;
      document.documentElement.classList.toggle('dark', e.matches);
    };

    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return <>{children}</>;
}
