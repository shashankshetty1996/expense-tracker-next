import { Backdrop } from '../../components';

function Loader() {
  return (
    <Backdrop className="flex justify-center items-center z-50">
      <div className="w-16 h-16 border-b-4 border-gray-100 dark:border-gray-900 rounded-full animate-spin" />
    </Backdrop>
  );
}

export default Loader;
