import { useForm } from 'react-hook-form';
import { TransactionType } from '../../../utilities/helpers/enums';
import {
  Button,
  FormElement,
  ControlledInput,
  ControlledDropdown,
  ControlledDatePicker
} from '../../core';

const transactionTypeOptions = [
  { label: 'Fixed Income', value: TransactionType.FIXED_INCOME },
  { label: 'Variable Income', value: TransactionType.VARIABLE_INCOME },
  { label: 'Fixed Expense', value: TransactionType.FIXED_EXPENSE },
  { label: 'Daily Expense', value: TransactionType.DAILY_EXPENSE },
  { label: 'Variable Expense', value: TransactionType.VARIABLE_EXPENSE }
];

type Key = string;
type Fields = {
  [key: Key]: { key: Key; label: string; isRequired: boolean };
};
const fields: Fields = {
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
  date: {
    key: 'date',
    label: 'Transaction Date',
    isRequired: true
  },
  note: {
    key: 'note',
    label: 'Note',
    isRequired: false
  }
};

type DefaultValue = { [fieldKey: Key]: any };
const defaultValue: DefaultValue = {
  [fields.amount.key]: 0,
  [fields.type.key]: TransactionType.VARIABLE_EXPENSE,
  [fields.note.key]: '',
  [fields.date.key]: new Date()
};

function TransactionForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const validateAmount = amount => (amount ? true : `Amount can't be empty!`);

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
    <form className="flex flex-col md:flex-row justify-between items-center md:items-end my-6 mx-4 md:mx-0">
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
          customValidator={validateAmount}
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
        label={fields.date.label}
        isRequired={fields.date.isRequired}
        error={errors[fields.date.key]?.message}
      >
        <ControlledDatePicker
          name={fields.date.key}
          control={control}
          defaultValue={defaultValue[fields.date.key]}
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
  );
}

export default TransactionForm;
