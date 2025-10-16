// components/ThemeSwitcher.tsx
'use client';

import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  // Load theme from memory on mount and listen for system theme changes
  useEffect(() => {
    const saved = localStorage?.getItem('theme');
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    if (saved) {
      // User has manually set a theme preference
      const isDarkMode = saved === 'dark';
      setIsDark(isDarkMode);
      document.documentElement.setAttribute(
        'data-bs-theme',
        isDarkMode ? 'dark' : 'light'
      );
    } else {
      // Default to system preference
      const prefersDark = mediaQuery.matches;
      setIsDark(prefersDark);
      document.documentElement.setAttribute(
        'data-bs-theme',
        prefersDark ? 'dark' : 'light'
      );

      // Listen for system theme changes (only if user hasn't set a manual preference)
      const handleChange = (e: MediaQueryListEvent) => {
        const isDarkMode = e.matches;
        setIsDark(isDarkMode);
        document.documentElement.setAttribute(
          'data-bs-theme',
          isDarkMode ? 'dark' : 'light'
        );
      };

      mediaQuery.addEventListener('change', handleChange);

      return () => mediaQuery.removeEventListener('change', handleChange);
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
