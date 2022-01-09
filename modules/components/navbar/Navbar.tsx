import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import DarkThemeToggle from './darkThemeToggle/DarkThemeToggle';
import SideNav from './sideNav/SideNav';
import { INavItem } from '../../../utilities/interfaces';

const navItems: INavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Add Expense', to: '/transactions/add' }
];

function Navbar() {
  const { route } = useRouter();
  const [openSideDrawer, setOpenSideDrawer] = useState<boolean>(false);
  const toggleSideDrawer = () => setOpenSideDrawer(old => !old);

  // useEffect(() => {
  //   setOpenSideDrawer(false);
  // }, [route]);

  const navTabs = (
    <ul className="flex flex-col md:flex-row items-center justify-center">
      {navItems.map((nav, index) => {
        return (
          <li
            key={index}
            className={`nav-item ${nav.to === route ? 'active' : ''}`}
          >
            <Link key={index} href={nav.to}>
              <a className="block px-4 py-4 mx-0.5 h-14">{nav.label}</a>
            </Link>
          </li>
        );
      })}
      <li className="absolute md:relative bottom-4 md:bottom-auto md:ml-2 flex md:block justify-between items-center">
        <span className="text-xl md:text-2xl inline-block mr-2 md:hidden">
          Select Theme
        </span>
        <DarkThemeToggle />
      </li>
    </ul>
  );

  return (
    <header className="bg-teal-700 dark:bg-gray-700 text-white w-full shadow-lg rounded-b h-14 px-8 md:px-0">
      <div className="container mx-auto flex justify-between items-center h-full">
        <h1 className="text-xl md:text-3xl">Expense Tracker</h1>
        <nav className="hidden md:block">{navTabs}</nav>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer md:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => {
            console.log('side drawer');
            toggleSideDrawer();
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <SideNav
        show={openSideDrawer}
        navTabs={navTabs}
        toggleSideDrawer={toggleSideDrawer}
      />
    </header>
  );
}

export default Navbar;
