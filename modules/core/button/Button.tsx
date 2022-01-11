import React from 'react';
import Link from 'next/link';

interface LinkButton {
  isLink: true;
  to: string;
  onClick: never;
}

interface NonLinkButton {
  isLink: never;
  to: never;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {};
}

interface CommonProps {
  children: React.ReactNode;
  className?: string;
  isLink?: boolean;
  disabled?: boolean;
}

type IButton = (LinkButton | NonLinkButton) & CommonProps;

const commonClassName = `inline-block px-4 py-2 rounded shadow-md text-white bg-teal-600 hover:bg-teal-800 dark:bg-slate-600 dark:hover:bg-slate-700`;
function Button(props: IButton) {
  const {
    children,
    onClick,
    className,
    to,
    isLink = false,
    disabled = false
  } = props;
  const btnClass = `${commonClassName} ${className}`;

  if (isLink) {
    return (
      <Link href={to}>
        <a className={btnClass}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={btnClass} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
