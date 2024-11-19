import React from "react";

export function Shiny({ fill = "#9098A0" }: { fill?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      fill="none"
      viewBox="0 0 20 21"
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.493"
        d="M6.965 18.564c0-3.068 1.752-5.833 5-5.833-3.248 0-5-2.765-5-5.833 0 3.068-1.75 5.833-5 5.833 3.25 0 5 2.765 5 5.833zM14.999 10.797c0-2.124 2.042-4.166 4.166-4.166C17.041 6.63 15 4.588 15 2.464c0 2.124-2.043 4.167-4.167 4.167 2.124 0 4.167 2.042 4.167 4.166z"
      ></path>
    </svg>
  );
}
