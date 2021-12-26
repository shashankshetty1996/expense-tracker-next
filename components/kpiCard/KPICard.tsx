import { formatCurrency } from '../../utilities/helpers/utils';

interface IKPICard {
  title: string;
  amount: number;
  type?: 'credit' | 'debit';
}

function KPICard(props: IKPICard) {
  const { title, amount, type = 'debit' } = props;

  const currency = formatCurrency(amount, 1);

  const currencyClassName = `${
    type === 'debit' ? 'bg-emerald-700' : 'bg-red-700'
  } text-white text-center text-md md:text-lg w-2/5 md:w-1/4 py-3 px-2 rounded`;

  return (
    <div className="bg-white dark:bg-slate-500 shadow-lg rounded flex-1 flex justify-between items-center my-2 md:mx-2">
      <h1 className="text-md md:text-2xl text-center text-teal-700 dark:text-slate-100 py-2 h-full px-2 rounded">
        {title}
      </h1>
      <h3 className={currencyClassName}>{currency}</h3>
    </div>
  );
}

export default KPICard;
