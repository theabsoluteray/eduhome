'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

interface Preferences {
  language: string;
  theme: 'light' | 'dark';
  academicLevel: 'elementary' | 'middle' | 'high' | 'undergraduate' | 'graduate';
  notifications: boolean;
  history: boolean;
}

interface PreferencesContextType {
  preferences: Preferences;
  updateLanguage: (language: string) => void;
  updateTheme: (theme: 'light' | 'dark') => void;
  updateAcademicLevel: (level: 'elementary' | 'middle' | 'high' | 'undergraduate' | 'graduate') => void;
  updateNotifications: (enabled: boolean) => void;
  updateHistory: (enabled: boolean) => void;
}

const defaultPreferences: Preferences = {
  language: 'en',
  theme: 'light',
  academicLevel: 'undergraduate',
  notifications: true,
  history: true,
};

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export const PreferencesProvider = ({ children }: { children: ReactNode }) => {
  const [preferences, setPreferences] = useState<Preferences>(() => {
    // Load from localStorage if available
    if (typeof window !== 'undefined') {
      const savedPreferences = localStorage.getItem('userPreferences');
      return savedPreferences ? JSON.parse(savedPreferences) : defaultPreferences;
    }
    return defaultPreferences;
  });

  const updatePreferences = (newPreferences: Preferences) => {
    setPreferences(newPreferences);
    if (typeof window !== 'undefined') {
      localStorage.setItem('userPreferences', JSON.stringify(newPreferences));
    }
  };

  const updateLanguage = (language: string) => {
    updatePreferences({ ...preferences, language });
  };

  const updateTheme = (theme: 'light' | 'dark') => {
    updatePreferences({ ...preferences, theme });
  };

  const updateAcademicLevel = (academicLevel: 'elementary' | 'middle' | 'high' | 'undergraduate' | 'graduate') => {
    updatePreferences({ ...preferences, academicLevel });
  };

  const updateNotifications = (notifications: boolean) => {
    updatePreferences({ ...preferences, notifications });
  };

  const updateHistory = (history: boolean) => {
    updatePreferences({ ...preferences, history });
  };

  return (
    <PreferencesContext.Provider
      value={{
        preferences,
        updateLanguage,
        updateTheme,
        updateAcademicLevel,
        updateNotifications,
        updateHistory,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = (): PreferencesContextType => {
  const context = useContext(PreferencesContext);
  if (context === undefined) {
    throw new Error('usePreferences must be used within a PreferencesProvider');
  }
  return context;
}; 