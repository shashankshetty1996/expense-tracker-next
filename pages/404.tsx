import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Page Not Found</title>
      </Head>

      <h1 className="text-4xl my-2">Page not found</h1>
      <Link href="/">
        <a className="px-4 py-2 my-2 rounded shadow-md text-white bg-teal-600 hover:bg-teal-800 dark:bg-slate-600 dark:hover:bg-slate-800 transform duration-500 ease-linear">
          Back to Home
        </a>
      </Link>
    </div>
  );
}
