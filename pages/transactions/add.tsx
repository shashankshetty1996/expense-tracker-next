import { GetServerSidePropsResult } from 'next';
import Head from 'next/head';
import { useForm } from 'react-hook-form';

import { Navbar, TransactionSummary } from '../../modules/components';
import {
  Button,
  FormElement,
  ControlledInput,
  ControlledDropdown
} from '../../modules/core';
import { TransactionType } from '../../utilities/helpers/enums';
import { getPaymentMode } from '../../utilities/helpers/utils';
import { ITransactions, SuccessResponse } from '../../utilities/interfaces';

const transactionTypeOptions = [
  { label: 'Fixed Income', value: TransactionType.FIXED_INCOME },
  { label: 'Variable Income', value: TransactionType.VARIABLE_INCOME },
  { label: 'Fixed Expense', value: TransactionType.FIXED_EXPENSE },
  { label: 'Daily Expense', value: TransactionType.DAILY_EXPENSE },
  { label: 'Variable Expense', value: TransactionType.VARIABLE_EXPENSE }
];

const fields = {
  amount: {
    key: 'amount',
    label: 'Amount',
    isRequired: true
  },
  type: {
    key: 'type',
    label: 'Type',
    isRequired: true
  },
  note: {
    key: 'note',
    label: 'Note',
    isRequired: false
  }
};

const defaultValue = {
  [fields.amount.key]: 0,
  [fields.type.key]: TransactionType.VARIABLE_EXPENSE,
  [fields.note.key]: ''
};

interface IAddTransition {
  transactions: ITransactions[];
}

export default function AddTransition(props: IAddTransition) {
  const { transactions } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const resetForm = data => {
    const res = {};
    for (let key in data) {
      const initialValue = defaultValue[key];
      if (initialValue !== undefined) {
        res[key] = initialValue;
        continue;
      }
      const value = data[key];
      if (typeof value === 'string') {
        res[key] = '';
      } else if (typeof value === 'number') {
        res[key] = 0;
      } else {
        res[key] = undefined;
      }
    }
    reset(res);
  };

  const onSubmit = data => {
    console.log(data);
    resetForm(data);
  };

  return (
    <>
      <Head>
        <title>Expense Tracker | Add Transactions</title>
      </Head>
      <Navbar />
      <main className="container mx-auto">
        <h1 className="text-2xl md:text-4xl text-center text-teal-700 dark:text-slate-100 mt-4">
          Add Transactions
        </h1>
        <form className="flex flex-col md:flex-row justify-between items-center my-6 mx-4 md:mx-0">
          <FormElement
            label={fields.amount.label}
            isRequired={fields.amount.isRequired}
            error={errors[fields.amount.key]?.message}
          >
            <ControlledInput
              type="number"
              name={fields.amount.key}
              control={control}
              isRequired={fields.amount.isRequired}
              defaultValue={defaultValue[fields.amount.key]}
            />
          </FormElement>
          <FormElement
            label={fields.type.label}
            isRequired={fields.type.isRequired}
            error={errors[fields.type.key]?.message}
          >
            <ControlledDropdown
              name={fields.type.key}
              control={control}
              options={transactionTypeOptions}
              defaultValue={defaultValue[fields.type.key]}
              isRequired={fields.type.isRequired}
            />
          </FormElement>
          <FormElement
            label={fields.note.label}
            isRequired={fields.note.isRequired}
            error={errors[fields.note.key]?.message}
          >
            <ControlledInput
              name={fields.note.key}
              control={control}
              defaultValue={defaultValue[fields.note.key]}
            />
          </FormElement>
          <FormElement>
            <Button className="w-full" onClick={handleSubmit(onSubmit)}>
              Add Transaction
            </Button>
          </FormElement>
        </form>

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
