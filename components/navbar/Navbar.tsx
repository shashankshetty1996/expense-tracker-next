import { INavItem } from '../../utilities/interfaces';
import DarkThemeToggle from './darkThemeToggle/DarkThemeToggle';

interface INavbar {
  navItems: INavItem[];
}

function Navbar(props: INavbar) {
  const { navItems } = props;

  const goToRoute = (url: string) =>
    console.log(`URL on Navbar was clicked: ${url}`);

  return (
    <header className="bg-teal-700 dark:bg-slate-700 text-white w-full shadow-lg rounded-b h-14 px-8 md:px-16 mb-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-3xl" onClick={() => goToRoute('/')}>
          Expense Tracker
        </h1>
        <nav className="">
          <ul className="flex items-center justify-center">
            {navItems.map((nav, index) => (
              <li
                key={index}
                className="cursor-pointer text-sm hover:bg-teal-900 dark:hover:bg-slate-800 px-2 md:px-4 py-4 mx-0.5 h-14 "
                onClick={() => goToRoute(nav.to)}
              >
                {nav.label}
              </li>
            ))}
            <li className="ml-2">
              <DarkThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
