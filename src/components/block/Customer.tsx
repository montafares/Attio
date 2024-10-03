import React from "react";
import Icon from "../icon";

function Customer() {
  return (
    <div className="bg-primary items-center gap-10 flex flex-col justify-center mt-10">
      <div
        className="bg-darkColor-100 p-2 inline-flex  rounded-xl gap-3 
       items-center  "
      >
        <button className="bg-darkColor-600 text-white h-6 px-4   py-0 rounded-xl">
          New
        </button>
        <p className="">How Pallet uses Attio to power their GTM </p>
        <Icon name="arrowright" />
      </div>
      <h1 className=" text-center font-bold md:text-heading-h1-desktop text-heading-h1-mobile">
        Customer <br /> relationship magic.
      </h1>
      <p className="text-center md:text-2xl text-xl font-normal w-1/3 font-inter">
        Powerful, flexible and data-driven, Attio makes it easy to build the
        exact CRM your business needs.
      </p>
      <div className="flex items-center gap-4  h-10">
        <button className="px-4 py-2 bg-darkColor-600 text-white rounded-xl border-2 border-darkColor-400 hover:bg-darkColor-500">
          Start for free
        </button>
        <button className="px-4 py-2 border-2 border-baseColor-200 bg-primary rounded-xl hover:bg-darkColor-300">
          Talk to sales
        </button>
      </div>
    </div>
  );
}

export default Customer;
