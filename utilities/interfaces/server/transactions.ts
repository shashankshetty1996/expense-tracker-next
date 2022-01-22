import { TransactionType } from '../../helpers/enums';

export interface ITransactions {
  id: number;
  name: string;
  amount: number;
  type: TransactionType;
  note?: string;
}
