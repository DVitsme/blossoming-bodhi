import Link from 'next/link';

const NavigationAuth = () => {
  return (
    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
      <Link href="/signin">
        <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
          Sign in
        </a>
      </Link>
      <Link href="/signup">
        <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
          Sign up
        </a>
      </Link>
    </div>
  );
};

export default NavigationAuth;
