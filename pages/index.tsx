import Head from 'next/head';
import { Navbar } from '../components';
import { AppContextProvider } from '../utilities/context';

import { INavItem } from '../utilities/interfaces';

interface IHome {
  navItems: INavItem[];
}

export default function Home(props: IHome) {
  const { navItems } = props;
  return (
    <div className="min-h-screen dark:bg-slate-800">
      <Head>
        <title>Expense Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppContextProvider>
        <Navbar navItems={navItems} />
        <main className="container">
          <h1 className="text-4xl text-center text-teal-700 dark:text-slate-100">
            Hey, from Expenses Tracker
          </h1>
        </main>
      </AppContextProvider>
    </div>
  );
}

export function getStaticProps() {
  const navItems: INavItem[] = [
    { label: 'Home', to: '/' },
    { label: 'Add Expense', to: '/add-expense' }
  ];

  return {
    props: { navItems }
  };
}
