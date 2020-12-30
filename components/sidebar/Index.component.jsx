import React, { useState } from "react";
import xw from "xwind";
import Link from "next/link";
import SidebarItem from "./SidebarItem.component";

const SidebarContainer = () => {
  const [isOpen, setIsOpen] = useState({
    PagesDropdown: false,
    secondDropdown: false,
    thirdDropdown: false,
  });
  const toggle = (e) => {
    const { id } = e.target;
    setIsOpen((prevIsOpen) => {
      return {
        ...prevIsOpen,
        [id]: !prevIsOpen[e.target.id],
      };
    });
  };

  return (
    <div>
      <nav
        css={xw`flex flex-col bg-gray-800 w-64 h-screen px-4 text-gray-900 `}
      >
        <div css={xw`flex flex-wrap mt-8`}>
          <div css={xw`w-1/2`}>
            <img
              src="https://randomuser.me/api/portraits/women/5.jpg"
              css={xw`mx-auto w-20 h-20 rounded-full`}
            />
          </div>
          <div css={xw`w-1/2`}>
            <span css={xw`font-semibold text-white text-base`}>
              Derrick Valentine
            </span>
            <button
              css={xw`bg-purple-500 text-white px-4 py-2 rounded-md mt-3 hover:bg-white hover:text-purple-500`}
            >
              Admin
            </button>
          </div>
        </div>
        <div css={xw`mt-10 mb-4`}>
          <ul css={xw`ml-4`}>
            <li
              css={xw`mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg`}
            >
              <span>
                <svg css={xw`fill-current h-5 w-5`} viewBox="0 0 24 24">
                  <path
                    d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                        4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                        4h4v-4h-4M4 8h4V4H4v4z"
                  ></path>
                </svg>
              </span>
              <a href="#">
                <span css={xw`ml-2`}>Dashboard</span>
              </a>
            </li>
            <li
              css={xw`mb-2 px-4 py-4 z-10 text-gray-100 flex flex-row  border-gray-300 hover:text-black hover:bg-gray-300 hover:font-bold rounded rounded-lg`}
              onClick={toggle}
              id="PagesDropdown"
            >
              <svg css={xw`fill-current h-5 w-5`} viewBox="0 0 24 24">
                <path
                  d="M12 13H7v5h5v2H5V10h2v1h5v2M8
                        4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
                        9v2h-4v-2h4m2-2h-8v6h8v-6z"
                ></path>
              </svg>
              <a>
                <span css={xw`ml-2 z-10 select-none`}>Classes</span>
              </a>
              <svg
                css={xw`ml-2 h-5 w-5`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <span>
              <div
                css={[
                  xw`z-10 my-3 transform px-2 max-w-md sm:px-0 lg:ml-0`,
                  isOpen.PagesDropdown ? null : xw`hidden`,
                ]}
              >
                <div
                  css={xw`rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden`}
                >
                  <div
                    css={xw`relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8`}
                  >
                    <a
                      css={xw`-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50`}
                    >
                      <div css={xw`ml-4`}>
                        <p css={xw`text-base font-medium text-gray-900`}>
                          All Classes
                        </p>
                      </div>
                    </a>

                    <a
                      css={xw`-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50`}
                    >
                      <div css={xw`ml-4`}>
                        <p css={xw`text-base font-medium text-gray-900`}>
                          Featured Classes
                        </p>
                      </div>
                    </a>
                    <a
                      css={xw`-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50`}
                    >
                      <div css={xw`ml-4`}>
                        <p css={xw`text-base font-medium text-gray-900`}>
                          99 cent classes
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </span>
            <SidebarItem item={{ title: "Mail", icon: "FaRegEnvelope" }} />
            <li
              css={xw`mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg`}
            >
              <span>
                <svg css={xw`fill-current h-5 w-5`} viewBox="0 0 24 24">
                  <path
                    d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2
                        2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0
                        00-2-2h-1V1m-1 11h-5v5h5v-5z"
                  ></path>
                </svg>
              </span>
              <a href="#">
                <span css={xw`ml-2`}>Milestones</span>
              </a>
            </li>
            <li
              css={xw`mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg`}
            >
              <span>
                <svg css={xw`fill-current h-5 w-5`} viewBox="0 0 24 24">
                  <path
                    d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
                        014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
                        8-4z"
                  ></path>
                </svg>
              </span>
              <a href="#">
                <span css={xw`ml-2`}>Team</span>
              </a>
            </li>
            <Link href="/">
              <li
                css={xw`mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg`}
              >
                <span>
                  <svg
                    css={xw`fill-current h-5 w-5`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <a css={xw`cursor-pointer`}>
                  <span css={xw`ml-2`}>Back Home</span>
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SidebarContainer;
