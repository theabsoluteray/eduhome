'use client';

import React from 'react';
import { PreferencesProvider } from './context/PreferencesContext';
import { ThemeProvider } from './context/ThemeContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <PreferencesProvider>
        {children}
      </PreferencesProvider>
    </ThemeProvider>
  );
} 