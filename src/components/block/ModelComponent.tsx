import React from "react";
import WrapperComponent from "../ui/WrapperComponent";
import AvatarModeled from "../../app/assets/images/AvatarModeled.png";
import Workspaces from "../../app/assets/images/Workspaces.png";
import Container from "../../app/assets/images/Container.png";
import Object from "../../app/assets/images/Object.png";
import Applications from "../../app/assets/images/Applications.png";
import Image from "next/image";

export default function ModelComponent() {
  return (
    <WrapperComponent
      avatar={AvatarModeled}
      subTitle="A CRM should go beyond deals. Attio is built for any business process."
      title="Modeled around your data and workflows."
    >
      <div>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col md:flex-row border-8 md:justify-between rounded-[20px] pt-10 pl-10  border-baseColor-200 bg-baseColor-100 gap-4">
            <p className="font-inter font-normal leading-7 max-w-[500px] text-[16px] text-baseColor-400">
              <strong className="text-[18px] font-semibold  text-[#31373D]">
                Always connected to your data.
              </strong>{" "}
              Continually sync your product, billing, and relationship data into
              your workspace.
            </p>
            <Image src={Workspaces} alt="Workspaces" />
          </div>
          <div className="flex gap-6 flex-col md:flex-row  w-full">
            <div className="flex flex-col w-[100%]  border-8 rounded-[20px]  border-baseColor-200 bg-baseColor-100 gap-6">
              <p className="m-10 font-inter font-normal leading-7 max-w-[500px] text-[16px] text-baseColor-400">
                <strong className="text-[18px]  font-semibold  text-[#31373D]">
                  A CRM for any use case.
                </strong>{" "}
                Easily create custom objects that match your business’ unique
                data structure.
              </p>
              <Image src={Container} alt="Workspaces" />
            </div>
            <div className="flex flex-col  md:w-[50%] gap-6">
              <Image
                src={Object}
                alt="Workspaces"
                className=" border-8 rounded-[20px] h-full border-baseColor-200 bg-baseColor-100"
              />
              <Image
                src={Applications}
                alt="Workspaces"
                className=" border-8 rounded-[20px] border-baseColor-200 bg-baseColor-100"
              />
            </div>
          </div>
        </div>
      </div>
    </WrapperComponent>
  );
}
