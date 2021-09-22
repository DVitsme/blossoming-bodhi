import { useContext } from 'react';

import { Context } from '../../../context';
import { classNames } from '../../../utils/classNames';
import Link from 'next/link';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react';

const SideBarNav = ({ navigation, communities, setSection, section }) => {
  const { state } = useContext(Context);

  return (
    <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
      <nav
        aria-label="Sidebar"
        className="sticky top-4 divide-y divide-gray-300"
      >
        <div className="pb-8 space-y-1">
          {state?.user?.role.includes('Student') ? (
            <div className="mb-6 ">
              <div className="relative w-full block cursor-pointer text-center px-4 py-2 mb-2 border border-transparent text-sm font-bold rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span>Create Course</span>
              </div>
              {state?.user?.role.includes('Instructor') ? (
                <Link href="/dashboard/instructor">
                  <a className="relative w-full block cursor-pointer capitalize text-center px-4 py-2 border border-transparent text-sm font-bold rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Manage Your Courses
                  </a>
                </Link>
              ) : (
                <Link href="/dashboard/become-instructor">
                  <a className="relative w-full block cursor-pointer capitalize text-center px-4 py-2 border border-transparent text-sm font-bold rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    become an instructor
                  </a>
                </Link>
              )}
            </div>
          ) : null}
          {navigation.map((item) => (
            <a
              key={item.name}
              onClick={() => setSection(item.name)}
              className={classNames(
                item.name === section
                  ? 'bg-gray-200 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50',
                'group flex items-center cursor-pointer px-3 py-2 text-sm font-medium rounded-md'
              )}
              aria-current={item.name === section ? 'page' : undefined}
            >
              <item.icon
                className={classNames(
                  item.name === section
                    ? 'text-gray-500'
                    : 'text-gray-400 group-hover:text-gray-500',
                  'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                )}
                aria-hidden="true"
              />
              <span className="truncate">{item.name}</span>
            </a>
          ))}
        </div>
        <div className="pt-10">
          <p
            className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
            id="communities-headline"
          >
            My communities
          </p>
          <div
            className="mt-3 space-y-2"
            aria-labelledby="communities-headline"
          >
            {communities.map((community) => (
              <a
                key={community.name}
                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
              >
                <span className="truncate">{community.name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideBarNav;
