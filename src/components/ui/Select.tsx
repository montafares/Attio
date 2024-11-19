"use client";
import React, { useState } from "react";
import Icon from "../icon";

function Select({
  options,
  placeholder,
}: Readonly<{
  options: string[];
  placeholder: string;
}>) {
  const [select, setSelect] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const handleClick = (option: string) => {
    setOpen(!open);
    setSelect(option);
  };
  return (
    <div className="bg-[#222529] text-[#979CA1] text-base py-5 px-5 rounded-lg focus:outline-none w-full relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full "
      >
        <span>{select || placeholder}</span>
        <Icon name="arrow" />
      </button>
      {open && (
        <ul className="absolute z-10 left-0 right-0  bg-gray-800 rounded-lg shadow-lg mt-8 ">
          {options.map((option, index) => (
            <li
              onClick={() => handleClick(option)}
              key={index}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer hover:text-white text-gray-300"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
