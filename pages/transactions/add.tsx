import Head from 'next/head';
import { useForm } from 'react-hook-form';

import { Navbar } from '../../modules/components';
import {
  Button,
  FormElement,
  ControlledInput,
  ControlledDropdown
} from '../../modules/core';
import { TransactionType } from '../../utilities/enums';

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
  [fields.type.key]: TransactionType.VARIABLE_EXPENSE,
  [fields.note.key]: ''
};

export default function AddTransition() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    console.log(data);
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
      </main>
    </>
  );
}
