// components/ThemeSwitcher.tsx
'use client';

import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(true); // Initial state

  // Load theme from memory or system preference on mount
  useEffect(() => {
    const saved = localStorage?.getItem('theme');

    if (saved) {
      // User has manually set a theme preference
      const isDarkMode = saved === 'dark';
      setIsDark(isDarkMode);
      document.documentElement.setAttribute(
        'data-bs-theme',
        isDarkMode ? 'dark' : 'light'
      );
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      document.documentElement.setAttribute(
        'data-bs-theme',
        prefersDark ? 'dark' : 'light'
      );
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.setAttribute(
      'data-bs-theme',
      newTheme ? 'dark' : 'light'
    );
    localStorage?.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <button
      className="btn btn-outline-secondary btn-sm ms-2"
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle theme"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
