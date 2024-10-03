import React from "react";

export const Close = ({ fill = "#fff" }: { fill?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="25"
      fill="none"
      viewBox="0 0 15 14"
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1.631 9.869L6 5.5m4.369-4.369L5.999 5.5m0 0L1.632 1.131M6 5.5l4.369 4.369"
      ></path>
    </svg>
  );
};
