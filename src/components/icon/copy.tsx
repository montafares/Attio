import React from "react";

export const Copy = ({ fill = "#9098A0" }: { fill?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      fill="none"
      viewBox="0 0 20 21"
    >
      <g clipPath="url(#clip0_2557_8612)">
        <mask
          id="mask0_2557_8612"
          style={{ maskType: "luminance" }}
          width="23"
          height="25"
          x="-1"
          y="-2"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M-.6 22.5h22v-24h-22v24z"></path>
        </mask>
        <g
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.493"
          mask="url(#mask0_2557_8612)"
        >
          <path d="M14.75 10.46V7.642c0-2 0-3-.37-3.764a3.488 3.488 0 00-1.483-1.561c-.726-.39-1.676-.39-3.576-.39H7.062c-1.69 0-2.535 0-3.194.31A3.487 3.487 0 002.15 4.045c-.294.695-.294 1.584-.294 3.363v2.378c0 2 0 3 .37 3.764a3.487 3.487 0 001.482 1.56c.726.39 1.676.39 3.576.39h2.676c1.3 0 1.949 0 2.473-.185 1.01-.356 1.802-1.19 2.14-2.252.176-.553.176-1.236.176-2.604z"></path>
          <path d="M17.464 6.928a3.68 3.68 0 01.678 2.143v4.96c0 .701 0 1.052-.039 1.346-.25 1.897-1.668 3.39-3.47 3.653-.28.041-.613.041-1.28.041h-4.26c-.877 0-1.686-.309-2.333-.83"></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2557_8612">
          <path
            fill="#fff"
            d="M0 0H20V20H0z"
            transform="translate(0 .5)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};
