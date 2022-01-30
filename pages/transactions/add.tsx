import { GetServerSidePropsResult } from 'next';
import Head from 'next/head';

import {
  Navbar,
  TransactionForm,
  TransactionSummary
} from '../../modules/components';
import { getPaymentMode } from '../../utilities/helpers/utils';
import { ITransactions, SuccessResponse } from '../../utilities/interfaces';

interface IAddTransition {
  transactions: ITransactions[];
}

export default function AddTransition(props: IAddTransition) {
  const { transactions } = props;

  return (
    <>
      <Head>
        <title>Expense Tracker | Add Transactions</title>
      </Head>
      <Navbar />
      <main>
        <section className="container mx-auto">
          <h1 className="text-2xl md:text-4xl text-center text-teal-700 dark:text-slate-100 mt-4">
            Add Transactions
          </h1>

          <TransactionForm />
        </section>

        <section className="container mx-auto">
          <h1 className="text-2xl md:text-4xl text-center text-teal-700 dark:text-slate-100 mt-4">
            All Transactions
            {transactions.map(transaction => {
              const paymentMode = getPaymentMode(transaction.type);
              return (
                <div key={transaction.id}>
                  <TransactionSummary
                    title={transaction.note}
                    amount={transaction.amount}
                    type={paymentMode}
                  />
                </div>
              );
            })}
          </h1>
        </section>
      </main>
    </>
  );
}

// TODO; This is temp... we'll setup whole backend info and flow it.
export const getServerSideProps = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/transactions/');
    const transactionsResponse: SuccessResponse<
      ITransactions[]
    > = await response.json();

    return {
      props: {
        transactions: transactionsResponse.data
      }
    };
  } catch (error) {
    console.log('Error while reading the file');
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      },
      props: {}
    };
  }
};
