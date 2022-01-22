interface IKPICard {
  title: string;
  children: JSX.Element | JSX.Element[];
}

function KPICard(props: IKPICard) {
  const { title, children } = props;
  return (
    <section className="kpi-card">
      <h1 className="text-2xl md:text-4xl text-center text-teal-700 dark:text-slate-100 mb-4">
        {title}
      </h1>
      <div>{children}</div>
    </section>
  );
}

export default KPICard;
