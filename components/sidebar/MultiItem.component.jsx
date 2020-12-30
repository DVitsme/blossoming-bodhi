import React, { useState } from "react";
import * as FontIcon from "react-icons/fa";
import xw from "xwind";

const MultiItem = ({ item }) => {
  const iconDiv = !!item.icon ? React.createElement(FontIcon[item.icon]) : "";

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <div>
      <li
        css={xw`mb-2 px-4 py-4 z-10 text-gray-100 flex flex-row  border-gray-300 hover:text-black hover:bg-gray-300 hover:font-bold rounded rounded-lg`}
        onClick={toggle}
      >
        <span css={xw`fill-current h-5 w-5 mt-1`}>{iconDiv}</span>
        <a>
          <span css={xw`ml-2 z-10 select-none capitalize`}>{item.title}</span>
        </a>
        {/* This it the dropdown arrow, idk if this was better than react-icon here so I kept it  FaChevronDown*/}
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
            isOpen ? null : xw`hidden`,
          ]}
        >
          <div
            css={xw`rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden`}
          >
            <div
              css={xw`relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8`}
            >
              {item.subItems.map((subItem, index) => (
                <ItemDropdown subItem={subItem} key={index} />
              ))}
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

const ItemDropdown = ({ subItem }) => {
  return (
    <a css={xw`-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50`}>
      <div css={xw`ml-4`}>
        <p css={xw`text-base font-medium text-gray-900 capitalize`}>
          {subItem}
        </p>
      </div>
    </a>
  );
};

export default MultiItem;
