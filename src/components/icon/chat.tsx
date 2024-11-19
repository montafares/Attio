import React from "react";

export const Chat = ({ fill = "#9098A0" }: { fill?: string }) => {
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
        d="M14.07 2.642H5.929c-1.874 0-3.393 1.6-3.393 3.572v8.571c0 1.973 1.52 3.572 3.393 3.572h8.143c1.874 0 3.393-1.6 3.393-3.572V6.214c0-1.973-1.52-3.572-3.393-3.572zM6.555 8.671v5.455M10 6.873v7.273M13.443 10.5v3.636"
      ></path>
    </svg>
  );
};
