import React from "react";
import TableView from "../../app/assets/images/TableView.png";
import ImgMobile from "../../app/assets/images/ImgMobile.png";
import PermissionControl from "../../app/assets/images/PermissionControl.png";
import AvatarModeled from "../../app/assets/images/AvatarModeled.png";
import Discovery from "../../app/assets/images/Discovery.png";
import Image from "next/image";
import WrapperComponent from "../ui/WrapperComponent";
function DesignedComponent() {
  const list = [
    {
      label: "Real-time collaboration.",
      description:
        "Collaborate with your whole team and nail every task the first time. See each other click, change, and type in real-time.",
      image: TableView,
      self: "self-end",
      xl: "xl:col-span-3",
    },
    {
      label: "Build from anywhere. ",
      description:
        "Our world-class mobile app lets you collaborate from anywhere without compromising your workflow.",
      image: ImgMobile,
      self: "self-center",
    },
    {
      label: "Hold that thought. ",
      description:
        "Never lose another idea with Attio’s real-time collaborative note-taking features.",
      image: PermissionControl,
      self: "self-start",
    },
    {
      label: "Collaboration. ",
      description:
        "Collaborate with your whole team and nail every task the first time. See each other click, change, and type in real-time.",
      image: Discovery,
      self: "self-end",
      marginRight: "mr-[10px]",
      xl: "xl:col-span-3",
    },
  ];
  return (
    <WrapperComponent
      avatar={AvatarModeled}
      subTitle="The first trully multiplayer CRM. After all, the best work doesn’t
    //       come from silos."
      title=" Designed for multiplayer."
    >
      <div className="grid  grid-cols-1 gap-8 lg:grid-cols-4 xl:grid-cols-5  text-left ">
        {list.map((item, index) => (
          <div
            className={`flex flex-col  gap-6   col-span-1 lg:col-span-2 ${item.xl} 
               border-8 rounded-[20px]  border-baseColor-200 bg-baseColor-100`}
            key={index}
          >
            <p className="font-inter m-10 font-normal leading-7 max-w-[500px] text-[16px] text-baseColor-400">
              <strong className="text-[18px] font-semibold ml-  text-[#31373D]">
                {item.label}
              </strong>
              {item.description}
            </p>
            <Image
              src={item.image}
              className={`flex  ${item.self}  ${item.marginRight}`}
              alt="Designed img"
            />
          </div>
        ))}
      </div>
    </WrapperComponent>
  );
}

export default DesignedComponent;
