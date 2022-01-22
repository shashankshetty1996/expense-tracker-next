import { TransactionType } from './enums';
import { PaymentMode } from '../interfaces';

export const isServer = (): boolean => typeof window === undefined;

export const formatCurrency = (value: number, decimal: number = 2): string => {
  return value.toLocaleString('en-IN', {
    maximumFractionDigits: decimal,
    style: 'currency',
    currency: 'INR'
  });
};

export const getPaymentMode = (type: TransactionType): PaymentMode => {
  switch (type) {
    case TransactionType.FIXED_INCOME:
    case TransactionType.VARIABLE_INCOME:
      return 'debt';

    default:
      return 'credit';
  }
};
