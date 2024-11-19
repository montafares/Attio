import React from "react";
import Icon from "../icon";

function FooterColumn({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <p
          key={index}
          className={`font-inter leading-5 text-[14px] text-${
            index === 0 ? "baseColor-300" : "baseColor-400"
          } hover:text-baseColor-300 hover:cursor-pointer hover:underline`}
        >
          {item}
        </p>
      ))}
    </div>
  );
}

function FooterDesctop({
  listProduct,
  listCompany,
  listAttio,
  listSupport,
  listIcon,
}: Readonly<{
  listProduct: string[];
  listCompany: string[];
  listAttio: string[];
  listSupport: string[];
  listIcon: string[];
}>) {
  return (
    <div className=" hidden  md:py-16 md:flex flex-col gap-6">
      <span className="px-[94px]">
        {" "}
        <Icon name="logoattio" fill="#ffffff" />
      </span>
      <div className="flex justify-between md:px-[94px]">
        <FooterColumn items={listProduct} />
        <FooterColumn items={listCompany} />
        <FooterColumn items={listAttio} />
        <FooterColumn items={listSupport} />
        <div className="flex flex-col gap-3 font-medium w-[300px] font-inter text-base text-baseColor-300 ">
          Ready to build?
          <button className="flex justify-center py-3 px-4 border-2 border-baseColor-200 bg-[#31373D] rounded-xl hover:bg-darkColor-500">
            Start For free
          </button>
          <button className="flex justify-center py-3 px-4 border-2 border-[#31373D] bg-transparent rounded-xl hover:bg-darkColor-500">
            Talk to sales
          </button>
        </div>
      </div>
      <div className="pt-5 flex justify-between border-t border-gray-700  mt-4 text-center px-[94px]">
        <p className="text-xs text-gray-500">
          © 2023 Attio Ltd. All rights reserved.
        </p>
        <div className="mt-2 text-xs flex items-center">
          <a href="#" className="text-gray-400 hover:text-gray-200">
            Terms & Conditions ·
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200 ml-1">
            Privacy Policy
          </a>{" "}
          <div className="flex gap-3 ml-8 items-center ">
            {listIcon.map((icon, index) => (
              <Icon
                key={index}
                name={icon}
                fill=" #ffffff"
                width={16}
                height={16}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterDesctop;
