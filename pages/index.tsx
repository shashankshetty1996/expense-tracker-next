import { Navbar, KPICard } from '../modules/components';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <h1 className="text-2xl md:text-4xl text-center text-teal-700 dark:text-slate-100 mt-4">
          Welcome to Expenses Tracker
        </h1>
        <section className="flex flex-col items-center justify-between md:flex-row">
          <section className="kpi-card">
            <h1 className="text-2xl md:text-4xl text-center text-teal-700 dark:text-slate-100 mb-4">
              Overall
            </h1>
            <div>
              <KPICard title="Total Balance" amount={100000} type="debit" />
              <KPICard title="Total Expenses" amount={80000} type="credit" />
            </div>
          </section>
          <section className="kpi-card">
            <h1 className="text-2xl md:text-4xl text-center text-teal-700 dark:text-slate-100 mb-4">
              Monthly Overview
            </h1>
            <div>
              <KPICard title="Total Balance" amount={100000} type="debit" />
              <KPICard title="Total Expenses" amount={80000} type="credit" />
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
