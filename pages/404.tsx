import { useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import NotFoundSvg from '../assets/not-found/not-found.svg';
import NotFoundDarkSvg from '../assets/not-found/not-found-dark.svg';

export default function Custom404() {
  const { theme } = useTheme();

  const noFoundIcon = useMemo(() => {
    if (theme === 'dark') {
      return NotFoundDarkSvg;
    }
    return NotFoundSvg;
  }, [theme]);

  return (
    <div className="flex flex-col justify-around items-center h-screen dark:bg-zinc-700">
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className="block text-center">
        <Image src={noFoundIcon} width={280} height={400} layout="responsive" />
        <h1 className="text-4xl md:text-6xl mb-4">Page Not Found</h1>
        <Link href="/">
          <a className="inline-block px-4 py-2 rounded shadow-md text-white bg-teal-600 hover:bg-teal-800 dark:bg-slate-600 dark:hover:bg-slate-800 transform duration-500 ease-linear hover:scale-105">
            Go to Home
          </a>
        </Link>
      </div>
    </div>
  );
}
