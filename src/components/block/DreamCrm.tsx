import Image from "next/image";
import React from "react";
import Clip from "../../app/assets/images/Clip.png";
function DreamCrm() {
  return (
    <div className="bg-blue-600 flex md:flex-row flex-col w-full items-center md:pl-[60px] p-10 justify-between">
      <div className="flex flex-col gap-4">
        <h2 className="md:text-heading-h2-desktop text-heading-h2-mobile text-center md:text-left text-[#A0BFF8] font-bold font-gilroyBold ">
          Ready to build your <br className="hidden md:block" /> team’s{" "}
          <strong className="text-white">dream CRM?</strong>
        </h2>
        <div className="flex md:flex-row flex-col items-center gap-4">
          <button className="bg-blue-500 p-3 md:w-auto w-full  rounded-xl text-white ">
            Start For free
          </button>
          <button className="bg-blue-600 p-3 md:w-auto w-full rounded-xl border-2 text-white border-blue-500">
            Start For free
          </button>
        </div>
      </div>
      <div className="flex md:flex-col flex-col-reverse">
        <Image src={Clip} alt="Avatar" />
      </div>
    </div>
  );
}

export default DreamCrm;
