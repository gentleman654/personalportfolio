// components/ThemeSwitcher.tsx
'use client';

import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(true); // Default to dark theme

  // Load theme from memory on mount
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
      // Default to dark theme (not system preference)
      setIsDark(true);
      document.documentElement.setAttribute('data-bs-theme', 'dark');
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
