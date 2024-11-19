import Image, { StaticImageData } from "next/image";
import Icon from "../icon";
import React from "react";

export default function WrapperComponent({
  title,
  subTitle,
  avatar,
  color,
  children,
}: Readonly<{
  title: React.ReactNode | string;
  subTitle: string;
  color?: string;
  avatar: string | StaticImageData;
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`md:max-w-full ${!color ? "w-11/12" : "w-full"} ${
        color ? "px-[100px]" : ""
      }  ${
        color !== "bg-darkColor-100" ? "flex" : "flex-col"
      }  gap-4 md:gap-16 py-[50px]`}
    >
      {!color && <Icon name="box" />}
      <div className="flex flex-col  gap-10 w-full">
        <span
          className={`font-inter font-normal leading-8 text-[20px] md:w-[500px]  ${color}`}
        >
          <h2
            className="md:text-heading-h2-desktop pb-4   font-semibold 

        text-heading-h2-mobile font-gilroyBold"
          >
            {title}
          </h2>
          {subTitle}
        </span>

        {children}
        {!color && (
          <div className="md:items-center flex  flex-col gap-7 ">
            <Image src={avatar} alt="avatar" />
            <p className="max-w-[450px] md:text-center items-center  text-[#31373D] font-inter font-normal leading-8 colo text-[22px]">
              “My team loves Attio’s reporting system because it’s so dynamic.
              We can splice our data in so many different ways and
              combinations.”
            </p>
            <p className="font-inter leading-5 text-[14px] text-baseColor-400">
              DeGrasse Schrader <br />
              Chief of Staff, Pallet
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
