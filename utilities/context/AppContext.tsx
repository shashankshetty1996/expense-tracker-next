import { createContext } from 'react';
import { useDarkMode } from '../hooks';

interface IAppContext {
  toggleTheme: () => void;
}

const AppContext = createContext<IAppContext>(null);

interface IAppContextProvider {
  children: JSX.Element[] | JSX.Element;
}

export function AppContextProvider(props: IAppContextProvider) {
  const toggleTheme = useDarkMode();
  return (
    <AppContext.Provider value={{ toggleTheme }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
