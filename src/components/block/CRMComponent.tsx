"use client";
import React, { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import imgBuild from "../../app/assets/images/home-steps-build-build.png";
import imgRefine from "../../app/assets/images/home-steps-build-refine.png";
import imgWork from "../../app/assets/images/home-steps-build-work.png";
import imgReport from "../../app/assets/images/home-steps-build-report.png";
import WrapperComponent from "../ui/WrapperComponent";
import avatar from "../../app/assets/images/Avatar.png";
import Image from "next/image";
import Icon from "../icon";
// const animation = { duration: 10000, easing: (t: number) => t };

export default function CRMComponent() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setSelectedIndex(slider.track.details.rel); // Update selectedIndex on slide change
    },
    slides: {
      perView: 1,
      spacing: 4,
    },
    loop: true,
    renderMode: "performance",
    created(s) {
      setLoaded(true); // Set the `loaded` state to true once the slider is initialized
      s.moveToIdx(0, true);
    },
    // updated(s) {
    //   s.moveToIdx(s.track.details.abs + list.length, true);
    // },
    // animationEnded(s) {
    //   s.moveToIdx(s.track.details.abs + list.length, true);
    // },
  });

  const list = [
    {
      title: "Build",
      icon: "copy",
      image: imgBuild,
      lorem:
        "Create your dream CRM with powerful, flexible templates for every use case.",
    },
    {
      title: "Refine",
      icon: "copy",
      image: imgRefine,
      lorem:
        "Use Attio’s intuitive UI and ultra-customizable blocks to craft your ideal workflows.",
    },
    {
      title: "Work",
      icon: "shiny",
      image: imgWork,
      lorem:
        "Help your business scale with enriched data, custom attributes, and integrations.",
    },
    {
      title: "Report",
      image: imgReport,
      icon: "chat",
      lorem:
        "Analyze, track and share reports built on real-time data from across your workspace.",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (selectedIndex + 1) % list.length;

      setSelectedIndex(nextIndex);
      if (instanceRef.current) {
        instanceRef.current?.moveToIdx(nextIndex);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [instanceRef, selectedIndex, list.length]);
  const handleClick = (index: number) => {
    setSelectedIndex(index);
    instanceRef.current?.moveToIdx(index); // Navigate to the slide by index
  };

  return (
    <WrapperComponent
      title="A CRM created to be your own."
      subTitle="Tweak anything and everything to ensure Attio fits your business, not the other way around."
      avatar={avatar}
    >
      {/* Desktop Version */}
      <div className="hidden md:flex border-4 border-baseColor-200 p-10 flex-col gap-12 w-11/12 rounded-[24px]">
        <div ref={containerRef} className="grid grid-cols-4 gap-12">
          {list.map((item, index) => (
            <button
              onClick={() => handleClick(index)} // Properly invoke the handleClick function
              key={index}
              className="text-left p-1 flex flex-col gap-2"
            >
              <p
                className={`flex gap-2 font-inter text-[18px] leading-[26px] font-medium ${
                  selectedIndex === index
                    ? "text-[#000000]"
                    : "text-baseColor-300"
                }`}
              >
                <Icon
                  name={item.icon}
                  fill={selectedIndex === index ? "#000000" : "#9098A0"}
                />
                {item.title}
              </p>

              <p
                className={`font-inter text-[18px] leading-[24px] font-medium ${
                  selectedIndex === index
                    ? "text-[#000000]"
                    : "text-baseColor-300"
                }`}
              >
                {item.lorem}
              </p>
            </button>
          ))}
        </div>
        <div className="w-full flex justify-center mt-10">
          <Image
            src={list[selectedIndex].image}
            alt="Selected Image"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Mobile Scrollable Section */}
      <div className="md:hidden  flex flex-col gap-4">
        <div className="keen-slider overflow-x-hidden flex  " ref={sliderRef}>
          {" "}
          {list.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`keen-slider__slide   border-4 mx-[15px] overflow-hidden border-baseColor-200 p-5 rounded-[24px] flex-shrink-0 text-left`}
            >
              <p
                className={`flex gap-2 font-inter text-[18px] leading-[26px] font-medium ${
                  selectedIndex === index
                    ? "text-[#000000]"
                    : "text-baseColor-300"
                }`}
              >
                <Icon
                  name={item.icon}
                  fill={selectedIndex === index ? "#000000" : "#9098A0"}
                />
                {item.title}
              </p>

              <p
                className={`font-inter text-[18px] leading-[24px] font-medium ${
                  selectedIndex === index
                    ? "text-[#000000]"
                    : "text-baseColor-300"
                }`}
              >
                {item.lorem}
              </p>
              <div className="max-w-[550px] overflow-hidden flex justify-center mt-6">
                <Image
                  src={item.image}
                  width={700}
                  alt="Selected Image"
                  className="rounded-[10px]"
                />
              </div>
            </div>
          ))}{" "}
        </div>
        {/* Dot Navigation */}
        {loaded && instanceRef.current && (
          <div className=" items-center flex self-center mt-4">
            {list.map((_, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`w-6 h-2 mx-2 rounded-xl ${
                  index === selectedIndex
                    ? "bg-baseColor-300"
                    : "bg-baseColor-200"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </WrapperComponent>
  );
}
