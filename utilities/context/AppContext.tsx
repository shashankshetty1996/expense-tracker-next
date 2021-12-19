import { createContext } from 'react';
import { useDarkMode } from '../hooks';

interface IAppContext {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const AppContext = createContext<IAppContext>(null);

interface IAppContextProvider {
  children: JSX.Element[] | JSX.Element;
}

export function AppContextProvider(props: IAppContextProvider) {
  const [isDarkTheme, toggleTheme] = useDarkMode();
  return (
    <AppContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
