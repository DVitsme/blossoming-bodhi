import { Fragment, useContext } from 'react';
import Link from 'next/link';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  BellIcon,
  MenuIcon,
  UserCircleIcon,
  XIcon
} from '@heroicons/react/outline';

import { Context } from '../../context';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const NavigationAuth = () => {
  const { state } = useContext(Context);
  if (state.user) {
    return <SignedIn user={state.user} />;
  }
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

const SignedIn = ({ user }) => {
  return (
    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
      <div className="flex-shrink-0">
        <button
          type="button"
          className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span>To Dashboard</span>
        </button>
      </div>
      <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
        <button
          type="button"
          className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Profile dropdown */}
        <Menu as="div" className="ml-3 relative">
          <div>
            <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Open user menu</span>
              {user.photoURL ? (
                <img
                  className="h-8 w-8 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <UserCircleIcon className="h-9 w-9 rounded-full text-gray-400 hover:text-gray-500 " />
              )}
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    )}
                  >
                    Your Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    )}
                  >
                    Settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    )}
                  >
                    Sign out
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};
