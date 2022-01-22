export type PaymentMode = 'credit' | 'debt';
export interface ITransactionSummary {
  amount: number;
  title?: string;
  type?: PaymentMode;
}
