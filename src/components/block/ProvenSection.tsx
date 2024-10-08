import React from "react";
import CocaCola from "../../app/assets/images/CocaCola.svg";
import Bravado from "../../app/assets/images/Bravado.png";
import Beacons from "../../app/assets/images/Beacons.png";
import Hyperline from "../../app/assets/images/Hyperline.png";
import causal from "../../app/assets/images/Causal.png";
import dopt from "../../app/assets/images/DOPT.png";
import onDeck from "../../app/assets/images/OnDeck.png";
import openAi from "../../app/assets/images/OpenAI.png";
import pallet from "../../app/assets/images/Pallet.png";
import passion from "../../app/assets/images/Passionfroot.png";
import plain from "../../app/assets/images/Plain.png";
import Image from "next/image";

function ProvenSection() {
  const listRoation1 = [CocaCola, openAi, pallet, causal, plain, passion];
  const listRoation2 = [dopt, Hyperline, onDeck, Bravado, Beacons];
  return (
    <div className=" w-full relative h-auto overflow-hidden border-0 bg-darkColor-100    flex flex-col gap-8  ">
      <div
        className="w-[15%] border-0 h-full bg-gradient-to-r shadow-xl blur-sm
      from-primary via-white to-white absolute left-0 z-[1]  opacity-70 pointer-events-none"
      ></div>

      <div className="  w-11/12 flex items-center justify-start animate-rtl space-x-20">
        {listRoation1.concat(listRoation1, listRoation1).map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <Image src={logo} alt={`Logo ${index}`} className="h-16 w-auto" />
          </div>
        ))}
        {listRoation1.map((logo, index) => (
          <div key={`duplicate-${index}`} className="flex-shrink-0">
            <Image src={logo} alt={`Logo ${index}`} className="h-16 w-auto" />
          </div>
        ))}
      </div>

      <div className="w-full flex items-center justify-start animate-ltr space-x-20">
        {listRoation2.concat(listRoation2).map((logo, index) => (
          <div
            key={index}
            className=" flex items-center justify-center flex-shrink-0"
          >
            <Image src={logo} alt={`Logo ${index}`} className="h-12 w-auto" />
          </div>
        ))}
        {/* Duplicate the logos to create a continuous loop */}
        {listRoation2.map((logo, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex items-center justify-center flex-shrink-0"
          >
            <Image src={logo} alt={`Logo ${index}`} className="h-12 w-auto" />
          </div>
        ))}
      </div>
      <div
        className="w-[15%] border-none transform-none h-[140px] right-0 shadow-lg bg-gradient-to-r opacity-50 blur
       from-white to-primary absolute z-20"
      ></div>
    </div>
  );
}

export default ProvenSection;
