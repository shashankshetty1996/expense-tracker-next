import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { useUpdateEffect } from '../hooks';

const LOCAL_STORAGE_KEY = 'theme';
const useDarkMode = (): (() => void) => {
  // const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const defaultTheme = () => {
    if (typeof window === undefined) {
      throw new Error('Invalid usage, should be used in client only');
    }

    // Check for theme set previously
    const storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTheme) {
      setTheme(storedTheme);
      return;
    }

    // Check system configuration
    let matched =
      window?.matchMedia('(prefers-color-scheme: dark)')?.matches ?? false;
    if ((matched && theme === 'light') || (!matched && theme === 'dark')) {
      toggleTheme();
      return;
    }
  };

  useEffect(() => {
    defaultTheme();
  }, []);

  useUpdateEffect(() => {
    // Setting preference in local storage
    localStorage.setItem(LOCAL_STORAGE_KEY, theme);
  }, [theme]);

  return toggleTheme;
};

export default useDarkMode;
