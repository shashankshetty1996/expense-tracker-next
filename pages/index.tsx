import Head from 'next/head';
import { Navbar } from '../components';
import { AppContextProvider } from '../utilities/context';

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-gray-800">
      <Head>
        <title>Expense Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppContextProvider>
        <Navbar />
        <main className="container mx-auto">
          <h1 className="text-2xl md:text-4xl text-center text-teal-700 dark:text-slate-100 mt-4">
            Welcome to Expenses Tracker
          </h1>
        </main>
      </AppContextProvider>
    </div>
  );
}
