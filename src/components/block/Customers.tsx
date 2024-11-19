"use client";
import { useKeenSlider } from "keen-slider/react";
import React, { useEffect, useState } from "react";
import WrapperComponent from "../ui/WrapperComponent";
import ContainerComponent from "../ui/ContainerComponent";
import Quickactions from "../../app/assets/images/Quickactions.png";
import Automaticenrichment from "../../app/assets/images/Automaticenrichment.png";
import Chromeextension from "../../app/assets/images/Chromeextension.png";
import Contactanalysis from "../../app/assets/images/Contactanalysis.png";
import Filters from "../../app/assets/images/Filters.png";
import TieredSorting from "../../app/assets/images/TieredSorting.png";
function Customers() {
  const list = [
    {
      Label: "Quick actions",
      description: "Streamline your workflow with shortcuts.",
      img: Quickactions,
    },
    {
      Label: "Automatic enrichment",
      description: "Update contacts on autopilot.",
      img: Automaticenrichment,
    },
    {
      Label: "Chrome extension",
      description: "Stay lean with Attio’s extension.",
      img: Chromeextension,
    },
    {
      Label: "Contact analysis",
      description: "Gain insights at a glance.",
      img: Contactanalysis,
    },
    {
      Label: "Filters",
      description: "Streamline your workflow with shortcuts.",
      img: Filters,
    },
    {
      Label: "Tiered sorting",
      description: "Sort contacts efficiently.",
      img: TieredSorting,
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [screenWidth, setScreenWidth] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenWidth("keen-slider__slide");
      } else {
        setScreenWidth("");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  // const [keen, setKeen] = useState("");

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setSelectedIndex(slider.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 5, // Adjust spacing as needed
    },
    loop: true,
    renderMode: "performance",
    created(s) {
      setLoaded(true);
      s.moveToIdx(0, true);
    },
    animationEnded(s) {
      console.log("Animation Ended:", s);
    },
  });

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    instanceRef.current?.moveToIdx(index);
  };

  return (
    <WrapperComponent
      title={
        <>
          <span className="text-baseColor-300">And so </span>
          much more...
        </>
      }
      subTitle="Your customers are always connected. Why should your CRM be any different?"
      color="text-darkColor-100"
      avatar=""
    >
      <div>
        <div
          className={`md:grid md:grid-cols-3 md:gap-9  overflow-hidden flex items-center  ${screenWidth}`}
          ref={sliderRef}
        >
          {list.map((item, index) => (
            <ContainerComponent
              keen={screenWidth}
              onclick={() => handleClick(index)}
              key={index}
              Label={item.Label}
              description={item.description}
              img={item.img}
              index={index}
              select={selectedIndex}
            />
          ))}
        </div>
        {loaded && (
          <div className="md:hidden flex items-center justify-center self-center mt-4">
            {list.map((_, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`w-6 h-2 mx-2 rounded-[100px] ${
                  selectedIndex !== index ? "bg-baseColor-300" : "bg-blue-500"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </WrapperComponent>
  );
}

export default Customers;
