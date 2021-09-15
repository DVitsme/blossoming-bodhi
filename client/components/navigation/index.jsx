/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  HeartIcon,
  ShoppingBagIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  GiftIcon,
  ViewGridIcon,
  XIcon,
  AcademicCapIcon
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

import Link from 'next/link';
import slugify from 'slugify';

import NavigationAuth from './auth';
import AuthMobile from './authMobile';

const storeSection = [
  {
    name: 'Classes',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: AcademicCapIcon
  },
  {
    name: 'Scholarship Program',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: HeartIcon
  },
  {
    name: 'Merchandise',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShoppingBagIcon
  },
  {
    name: 'Freebies',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: GiftIcon
  }
];
const aboutSection = [
  {
    name: 'How I Work',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#'
  },
  {
    name: 'Partners',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#'
  },
  {
    name: 'About Dawn',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#'
  },
  {
    name: 'Our Goals',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#'
  },
  {
    name: 'Our Board',
    description: 'Understand how we take your privacy seriously.',
    href: '#'
  }
];
const serviceSection = [
  {
    name: 'How I Work',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#'
  },
  {
    name: 'Partners',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#'
  },
  {
    name: 'About Dawn',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#'
  },
  {
    name: 'Our Goals',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#'
  },
  {
    name: 'Our Board',
    description: 'Understand how we take your privacy seriously.',
    href: '#'
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navigation() {
  return (
    <Popover className="relative bg-white z-10">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <a>
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden md:flex space-x-10">
          {/* About Here */}
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  )}
                >
                  <span>About</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500'
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {aboutSection.map((item) => (
                          <div key={item.name}>
                            <Link
                              href={`about/${slugify(item.name, {
                                lower: true
                              })}`}
                            >
                              <a className="-m-3 p-3 block rounded-md hover:bg-gray-50">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </a>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          {/* About Ends */}
          {/* Services Here */}
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  )}
                >
                  <span>Services</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500'
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {serviceSection.map((item) => (
                          <div key={item.name}>
                            <Link
                              href={`services/${slugify(item.name, {
                                lower: true
                              })}`}
                            >
                              <a className="-m-3 p-3 block rounded-md hover:bg-gray-50">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </a>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          {/* Services Ends */}

          {/* Store Here */}
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group font-semibold bg-white rounded-md inline-flex items-center text-base hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  )}
                >
                  <span>Store</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500'
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        {storeSection.map((item) => (
                          <div key={item.name}>
                            <Link
                              href={`store/${slugify(item.name, {
                                lower: true
                              })}`}
                            >
                              <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                  <item.icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          </div>
                        ))}
                      </div>
                      <div className="p-5 bg-gray-50 sm:p-8">
                        <Link href="/store/workshops">
                          <a className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                            <div className="flex items-center">
                              <div className="text-base font-medium text-gray-900">
                                Workshops
                              </div>
                              <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800">
                                New
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              Empower your entire team with even more advanced
                              tools.
                            </p>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          {/* Store Ends */}
          <Link href="/blog">
            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              Blog
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              Contact
            </a>
          </Link>
        </Popover.Group>
        <NavigationAuth />
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  {storeSection.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={`store/${slugify(item.name, { lower: true })}`}
                      >
                        <a className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">
                            {item.name}
                          </div>
                        </a>
                      </Link>
                    </div>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Services
                </a>

                <Link href="/blog">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Blog
                  </a>
                </Link>

                <Link href="/contact">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Contact
                  </a>
                </Link>
                {aboutSection.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
              <AuthMobile />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
