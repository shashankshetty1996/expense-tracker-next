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

  if (!show) {
    return null;
  }

  return (
    <>
      <Backdrop className="md:hidden" />
      <aside
        ref={sideNavRef}
        className="absolute right-0 top-0 w-3/4 h-screen bg-teal-700 dark:bg-gray-700 z-40 shadow-md rounded md:hidden"
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
    </>
  );
}

export default SideNav;
