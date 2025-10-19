// components/ThemeSwitcher.tsx
'use client';

import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(true); // Initial state

  // Load theme from memory or default to dark on mount
  useEffect(() => {
    const saved = localStorage?.getItem('theme');
    const isDarkMode = saved ? saved === 'dark' : true; // Always default to dark
    
    setIsDark(isDarkMode);
    document.documentElement.setAttribute(
      'data-bs-theme',
      isDarkMode ? 'dark' : 'light'
    );
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
