import { useEffect, useState } from 'react';

const useDarkMode = (): [isDarkTheme: boolean, toggleTheme: () => void] => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => setIsDarkTheme(prev => !prev);

  useEffect(() => {
    if (typeof window === undefined) {
      throw new Error('Invalid usage, should be used in client only');
    } else {
      let matched =
        window?.matchMedia('(prefers-color-scheme: dark)')?.matches ?? false;
      if (isDarkTheme !== matched) {
        setIsDarkTheme(matched);
      }
    }
  }, []);

  useEffect(() => {
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
