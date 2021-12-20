import { useEffect, useState } from 'react';
import { useUpdateEffect } from '../hooks';

const LOCAL_STORAGE_KEY = 'theme';
const useDarkMode = (): [isDarkTheme: boolean, toggleTheme: () => void] => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => setIsDarkTheme(prev => !prev);

  const defaultTheme = () => {
    if (typeof window === undefined) {
      throw new Error('Invalid usage, should be used in client only');
    }

    // Check for theme set previously
    const theme = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (theme) {
      setIsDarkTheme(theme === 'true');
      return;
    }

    // Check system configuration
    let matched =
      window?.matchMedia('(prefers-color-scheme: dark)')?.matches ?? false;
    if (isDarkTheme !== matched) {
      setIsDarkTheme(matched);
    }
  };

  useEffect(() => {
    defaultTheme();
  }, []);

  useUpdateEffect(() => {
    // Setting preference in local storage
    localStorage.setItem(LOCAL_STORAGE_KEY, `${isDarkTheme}`);

    // Root element on which tailwind will be adding class for dark mode.
    const root = window.document.documentElement;

    if (isDarkTheme) {
      root.classList.remove('light');
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [isDarkTheme]);

  return [isDarkTheme, toggleTheme];
};

export default useDarkMode;
