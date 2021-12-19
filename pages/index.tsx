import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Expense Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl text-center text-teal-700">
          Hey, from Expenses Tracker
        </h1>
      </main>
    </div>
  );
}
