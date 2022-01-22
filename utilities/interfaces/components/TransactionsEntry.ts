export interface ITransactionSummary {
  title: string;
  amount: number;
  type?: 'credit' | 'debit';
}
