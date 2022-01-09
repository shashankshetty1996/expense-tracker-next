import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { AppContextProvider } from '../utilities/context';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Expense Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider attribute="class">
        <AppContextProvider>
          <div className="min-h-screen dark:bg-gray-800">
            <Component {...pageProps} />
          </div>
        </AppContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
