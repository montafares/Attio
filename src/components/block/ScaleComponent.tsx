import React from "react";
import Image from "next/image";

import GDBR from "../../app/assets/images/GDPR.png";
import CCPA from "../../app/assets/images/CCPA.png";
import ISO9001 from "../../app/assets/images/ISO9001.png";
import ISO27001 from "../../app/assets/images/ISO27001.png";
function ScaleComponent() {
  return (
    <div className="flex md:flex-row  flex-col justify-center border-2 p-4 border-baseColor-200 w-[90%] mb-10  ">
      <div className="flex flex-col justify-center gap-2 md:w-[50%]">
        <h1 className="md:text-heading-h3-desktop text-heading-h3-mobile text-[#1D1F20] md:text-left text-center font-bold font-gilroyBold">
          Scale with <strong className="text-baseColor-300">security</strong>
        </h1>
        <p className="font-inter font-normal leading-7 md:w-[50%] text-[#1d1f20] text-[20px]">
          Attio is audited and certified by industry leading Third Party
          standards.
        </p>
        <div className="flex gap-4 md:self-start self-center mt-2">
          <button className="border-2 border-baseColor-200 bg-baseColor-600 items-center text-white px-4 py-2 rounded-xl hover:bg-darkColor-300">
            Start forr free
          </button>
          <button className="border-2 border-baseColor-200 px-4 py-2 items-center rounded-xl bg-white hover:bg-darkColor-300">
            Talk to sales
          </button>
        </div>
      </div>
      <div className="md:w-[50%] flex items-center justify-center md:justify-end gap-5 flex-wrap">
        <Image src={GDBR} alt="Scale" />
        <Image src={CCPA} alt="Scale" />
        <Image src={ISO9001} alt="Scale" />
        <Image src={ISO27001} alt="Scale" />
      </div>
    </div>
  );
}

export default ScaleComponent;
