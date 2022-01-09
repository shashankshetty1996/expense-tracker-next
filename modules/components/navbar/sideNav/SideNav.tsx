import { useRef } from 'react';
import { useOutsideClick } from '../../../../utilities/hooks';
import { Backdrop } from '../../../components';

interface ISideNav {
  navTabs: JSX.Element;
  toggleSideDrawer: () => void;
  show: boolean;
}

function SideNav(props: ISideNav) {
  const { navTabs, toggleSideDrawer, show } = props;

  const sideNavRef = useRef<HTMLElement>(null);
  useOutsideClick(sideNavRef, toggleSideDrawer, show);

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-screen ${show ? '' : '-z-50'}`}
    >
      <Backdrop className={show ? 'md:opacity-0' : 'opacity-100'} />
      <aside
        ref={sideNavRef}
        className={`z-50 absolute right-0 top-0 w-3/4 h-screen bg-teal-700 dark:bg-gray-700 shadow-md rounded transition-all ease-in-out duration-300 md:hidden ${
          show ? 'delay-100' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-end h-14 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={toggleSideDrawer}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        {navTabs}
      </aside>
    </div>
  );
}

export default SideNav;
