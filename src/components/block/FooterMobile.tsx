import React from "react";
import Icon from "../icon";
import Select from "../ui/Select";

function FooterMobile({
  listIcon,
  listProduct,
  listCompany,
  listAttio,
  listSupport,
}: Readonly<{
  listIcon: string[];
  listProduct: string[];
  listCompany: string[];
  listAttio: string[];
  listSupport: string[];
}>) {
  return (
    <div className="md:hidden flex flex-col pt-10 px-6 pb-5 gap-10">
      <div className="flex justify-between ">
        <Icon name="logoattio" fill={"#ffffff"} width={16} height={16} />
        <div className="flex  gap-4">
          {listIcon.map((icon, index) => (
            <Icon key={index} name={icon} fill="#ffffff" />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Select options={listProduct} placeholder="Product" />
        <Select options={listCompany} placeholder="Company" />
        <Select options={listAttio} placeholder="Attio for" />
        <Select options={listSupport} placeholder="Support" />
      </div>
      <div className="border-t border-gray-700 pt-4 mt-4 text-center">
        <p className="text-xs text-gray-500">
          © 2023 Attio Ltd. All rights reserved.
        </p>
        <div className="mt-2 text-xs">
          <a href="#" className="text-gray-400 hover:text-gray-200">
            Terms & Conditions
          </a>{" "}
          ·
          <a href="#" className="text-gray-400 hover:text-gray-200 ml-1">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterMobile;
