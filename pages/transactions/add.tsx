import Head from 'next/head';

import { Navbar } from '../../modules/components';
import { Button } from '../../modules/core';

export default function AddTransition() {
  return (
    <>
      <Head>
        <title>Expense Tracker | Add Transactions</title>
      </Head>
      <Navbar />
      <main className="container mx-auto">
        <h1 className="text-2xl md:text-4xl text-center text-teal-700 dark:text-slate-100 mt-4">
          Add Transitions
        </h1>
        {/* <Button>Test Button</Button> */}
      </main>
    </>
  );
}
