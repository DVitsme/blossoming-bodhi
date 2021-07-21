import React, { useState } from "react";
import xw from "xwind";
import Link from "next/link";
import SingleItem from "./SingleItem.component";
import MultiItem from "./MultiItem.component";

const SidebarContainer = () => {
  const tempData = [
    { title: "Dashboard", icon: "FaBorderAll" },
    { title: "Home", icon: "FaHome" },
    {
      title: "Classes",
      icon: "FaGraduationCap",
      subItems: ["All Classes", "Featured Classes", "99 cent classes"],
    },
    { title: "Blog", icon: "FaPenAlt" },
    { title: "About", icon: "FaUserEdit" },
    {
      title: "Pratices",
      icon: "FaBriefcase",
      subItems: [
        "therapeutic practice",
        "sustaining practice",
        "partner practice",
        "developmental practice",
      ],
    },
  ];
  return (
    <nav
      css={xw`flex flex-col bg-gray-800 w-1/7 h-screen px-4 text-gray-900 fixed overflow-auto`}
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
          {tempData.map((data, index) => {
            return data.subItems ? (
              <MultiItem item={data} key={index} />
            ) : (
              <SingleItem item={data} key={index} />
            );
          })}

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
                <span css={xw`ml-2`}>To Home Page</span>
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default SidebarContainer;
