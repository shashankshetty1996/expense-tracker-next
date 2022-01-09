interface IBackdrop {
  children?: JSX.Element | JSX.Element[];
  className?: string;
}

function Backdrop(props: IBackdrop) {
  const containerClassName = `fixed inset-0 h-screen w-screen bg-gray-900 dark:bg-gray-400 opacity-80 z-40 ${props.className}`;
  return <div className={containerClassName}>{props.children}</div>;
}

export default Backdrop;
