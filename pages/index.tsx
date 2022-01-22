import { Navbar, KPICard, TransactionSummary } from '../modules/components';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <h1 className="text-2xl md:text-4xl text-center text-teal-700 dark:text-slate-100 mt-4">
          Welcome to Expenses Tracker
        </h1>
        <section className="flex flex-col items-center justify-between md:flex-row">
          <KPICard title="Overall">
            <TransactionSummary
              title="Total Balance"
              amount={100000}
              type="debt"
            />
            <TransactionSummary
              title="Total Expenses"
              amount={80000}
              type="credit"
            />
          </KPICard>

          <KPICard title="Monthly Overview">
            <TransactionSummary
              title="Total Balance"
              amount={100000}
              type="debt"
            />
            <TransactionSummary
              title="Total Expenses"
              amount={80000}
              type="credit"
            />
          </KPICard>
        </section>
      </main>
    </>
  );
}
