import { useContext } from 'react';
import { AppContext } from '../../../utilities/context';

function DarkThemeToggle() {
  const { toggleTheme } = useContext(AppContext);

  const handleToggleClick = event => {
    event.preventDefault();
    toggleTheme();
  };

  return (
    <div onClick={handleToggleClick}>
      <label
        htmlFor="toggle"
        className="w-12 h-6 bg-amber-400 dark:bg-gray-900 flex items-center justify-between rounded-full p-1 relative scale-105 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <div className="w-5 h-5 bg-white absolute top-0.5 left-0.5 rounded-full transition-transform duration-200 ease-linear dark:translate-x-6" />
      </label>
    </div>
  );
}

export default DarkThemeToggle;
