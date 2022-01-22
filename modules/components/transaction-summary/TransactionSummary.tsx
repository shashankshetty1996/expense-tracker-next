import { formatCurrency } from '../../../utilities/helpers/utils';

import { ITransactionSummary } from '../../../utilities/interfaces';

function TransactionSummary(props: ITransactionSummary) {
  const { title, amount, type = 'debit' } = props;

  const currency = formatCurrency(amount);

  const currencyClassName = `${
    type === 'debit' ? 'bg-emerald-700' : 'bg-red-700'
  } text-white text-center text-md w-2/5 md:w-1/3 py-3 px-2 rounded`;

  return (
    <div className="bg-white dark:bg-slate-500 shadow-lg rounded flex-1 flex justify-between items-center my-2 md:mx-2">
      <h1 className="text-md md:text-xl text-center text-teal-700 dark:text-slate-100 py-2 h-full px-2 rounded">
        {title}
      </h1>
      <h3 className={currencyClassName}>{currency}</h3>
    </div>
  );
}

export default TransactionSummary;
