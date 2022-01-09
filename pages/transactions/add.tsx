import Head from 'next/head';
import { useState } from 'react';

import { Navbar } from '../../modules/components';
import { Button, Dropdown, FormElement, Input } from '../../modules/core';
import { TransactionType } from '../../utilities/enums';

const transactionTypeOptions = [
  { label: 'Fixed Income', value: TransactionType.FIXED_INCOME },
  { label: 'Variable Income', value: TransactionType.VARIABLE_INCOME },
  { label: 'Fixed Expense', value: TransactionType.FIXED_EXPENSE },
  { label: 'Daily Expense', value: TransactionType.DAILY_EXPENSE },
  { label: 'Variable Expense', value: TransactionType.VARIABLE_EXPENSE }
];

export default function AddTransition() {
  const [amount, setAmount] = useState<number>();
  const [type, setType] = useState<TransactionType>(
    TransactionType.VARIABLE_EXPENSE
  );
  const [note, setNote] = useState<string>('');

  const onSubmit = e => {
    e.preventDefault();
    console.log({ amount, type, note });
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
          <FormElement label="Amount" isRequired>
            <Input
              type="number"
              value={amount}
              onChange={value => setAmount(+value)}
            />
          </FormElement>
          <FormElement label="Type" isRequired>
            <Dropdown
              value={type}
              options={transactionTypeOptions}
              onChange={setType}
            />
          </FormElement>
          <FormElement label="Note">
            <Input value={note} onChange={setNote} />
          </FormElement>
          <FormElement>
            <Button className="w-full" onClick={onSubmit}>
              Add Transaction
            </Button>
          </FormElement>
        </form>
      </main>
    </>
  );
}
