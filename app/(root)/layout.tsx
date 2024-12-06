'use client';

import Sidebar from '@/components/sidebar';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div
      className={`min-h-screen w-full ${
        currentTheme === 'dark' ? '' : 'bg-[#C1E0F1]'
      }`}
    >
      {/* Navbar possible */}
      <div className="md:h-full">
        <div className="hidden md:flex h-full w-64 flex-col fixed inset-y-0">
          <Sidebar />
        </div>
        <main className="md:pl-20 md:ml-4 h-full">{children}</main>
      </div>
    </div>
  );
}