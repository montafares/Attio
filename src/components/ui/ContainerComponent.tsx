import Image, { StaticImageData } from "next/image";
import React from "react";

export default function ContainerComponent({
  img,
  Label,
  description,
  onclick,
  select,
  keen,
  index,
}: Readonly<{
  Label: string;
  description: string;
  keen: string;
  img: StaticImageData;
  onclick: () => void;
  select: number;
  index: number;
}>) {
  console.log(keen);

  return (
    <div
      className={` p-1 rounded-3xl border-4 border-[#31373D] hover:border-blue-500 w-full  ${keen}`}
    >
      <div
        className="p-10 flex flex-col gap-4 rounded-3xl border-4 border-baseColor-400 hover:border-blue-200"
        onClick={() => onclick()}
      >
        <Image src={img} alt="Container" />
        <h3
          className={`font-inter font-medium leading-8 text-[22px] ${
            select !== index ? "text-baseColor-300" : "text-baseColor-200"
          } `}
        >
          {Label}
        </h3>
        <p className="text-baseColor-300 font-inter font-normal leading-6 text-[16px] max-w-[350px]">
          {description}
        </p>
      </div>
    </div>
  );
}
