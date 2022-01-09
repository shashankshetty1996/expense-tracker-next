import Link from 'next/link';

type LinkButton = {
  isLink: boolean;
  to: string;
};

type NonLinkButton = {
  isLink: never;
  to: never;
};

type IButton = (LinkButton | NonLinkButton) & {
  children: string;
  className?: string;
  isLink?: boolean;
  disabled?: boolean;
};

const commonClassName = `inline-block px-4 py-2 rounded shadow-md text-white bg-teal-600 hover:bg-teal-800 dark:bg-slate-600 dark:hover:bg-slate-800`;
function Button(props: IButton) {
  const { children, className, to, isLink = false, disabled = false } = props;
  const btnClass = `${commonClassName} ${className}`;

  if (isLink) {
    return (
      <Link href={to}>
        <a className={btnClass}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={btnClass} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
