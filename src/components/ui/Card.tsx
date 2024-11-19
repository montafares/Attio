import Image, { StaticImageData } from "next/image";
import React from "react";
import Icon from "../icon";

export default function Card({
  img,
  Acteur,
  Role,
  title,
  date,
}: Readonly<{
  date: string;
  title: string;
  img: StaticImageData;
  Acteur: string;
  Role: string;
}>) {
  return (
    <div className="p-1  rounded-3xl border-4 h-max border-[#31373D] shadow-md   hover:border-blue-500">
      <div className="p-10 flex flex-col gap-6 rounded-3xl border-4 shadow-md relative z-10 border-baseColor-400  hover:border-blue-200">
        <span className="flex  gap-4 items-center">
          <Image src={img} className="w-9 h-9" alt="Container" />
          <p className="flex flex-col text-baseColor-300 gap-1">
            {Acteur} <strong className="text-baseColor-400">{Role}</strong>
          </p>
          <div className="ml-auto">
            <Icon name="Xtwiter" fill="#31373D" />
          </div>
        </span>
        <p
          className={`font-inter font-normal leading-6 text-[16px] text-baseColor-100 `}
        >
          {title}
        </p>
        <p className="font-inter font-medium leading-4 text-[12px] text-baseColor-400">
          {date}
        </p>
      </div>
    </div>
  );
}
