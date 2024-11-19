"use client";

import React, { useState } from "react";
import Card from "../ui/Card";
import WrapperComponent from "../ui/WrapperComponent";
import home from "../../app/assets/images/home-loved-twits-fabian.png";
import Avatar2 from "../../app/assets/images/Avatar2.png";
import Avatar3 from "../../app/assets/images/Avatar3.png";
import Avatar4 from "../../app/assets/images/Avatar4.png";
import Avatar5 from "../../app/assets/images/Avatar5.png";
import Avatar6 from "../../app/assets/images/Avatar6.png";
import Avatar from "../../app/assets/images/Avatar7.png";
function Builders() {
  const listCard = [
    {
      img: home,
      Acteur: "Sebastiaan Debrouwere",
      Role: "@iamsebdeb",
      title:
        "We use @attio on a daily basis for several internal processes, and I cannot rave enough about them. Incredible flexibility and features combined with super intuitive UI",
      date: "10:01PM-Apr 7,2022",
    },
    {
      img: Avatar2,
      Acteur: "Sebastiaan Debrouwere",
      Role: "@iamsebdeb",
      title: "We use @attio on a daily basis...",
      date: "10:01PM-Apr 7,2022",
    },
    {
      img: Avatar3,
      Acteur: "Sebastiaan Debrouwere",
      Role: "@iamsebdeb",
      title: "We use @attio on a daily basis...",
      date: "10:01PM-Apr 7,2022",
    },
    {
      img: Avatar4,
      Acteur: "Sebastiaan Debrouwere",
      Role: "@iamsebdeb",
      title: "We use @attio on a daily basis...",
      date: "10:01PM-Apr 7,2022",
    },
    {
      img: Avatar5,
      Acteur: "Sebastiaan Debrouwere",
      Role: "@iamsebdeb",
      title: "We use @attio on a daily basis...",
      date: "10:01PM-Apr 7,2022",
    },
    {
      img: Avatar6,
      Acteur: "Sebastiaan Debrouwere",
      Role: "@iamsebdeb",
      title: "We use @attio on a daily basis...",
      date: "10:01PM-Apr 7,2022",
    },
    {
      img: Avatar,
      Acteur: "Sebastiaan Debrouwere",
      Role: "@iamsebdeb",
      title: "We use @attio on a daily basis...",
      date: "10:01PM-Apr 7,2022",
    },
  ];
  const screenWidth = window.innerWidth;
  const nmbr = screenWidth < 768 ? 2 : listCard.length;
  const [visibleCount, setVisibleCount] = useState(nmbr); // Start by showing 1 testimonial

  const loadMore = () => {
    setVisibleCount((prev) => prev + listCard.length);
    if (visibleCount >= listCard.length) {
      setVisibleCount(2);
    }
  };
  return (
    <WrapperComponent
      title={
        <>
          <span className="text-baseColor-300">Loved by </span>
          Builders.
        </>
      }
      subTitle="Attio is the customer relationship management tool for collaboration."
      avatar=""
      color="text-darkColor-100"
    >
      <button className="p-2 w-[200px] text-baseColor-100 font-gilroyBold leading-6 text-[16px] rounded-xl border-2 border-[#31373D] hover:border-baseColor-100">
        More customer stories
      </button>{" "}
      <>
        <div
          className={`flex flex-col overflow-hidden shadow-lg shadow-b-[#31373D] items-start justify-start h-[${
            visibleCount === 2 ? "500px" : "100%"
          }] md:grid grid-cols-3  gap-5 `}
        >
          {listCard.slice(0, visibleCount).map((item, index) => (
            <Card
              Acteur={item.Acteur}
              key={index}
              Role={item.Role}
              title={item.title}
              date={item.date}
              img={item.img}
            />
            //   </div>
            // </>
          ))}
          {/* {listCard.slice(3, 6).map((item, index) => (
            <>
              <div key={index} className="flex flex-col gap-y-[20px]  ">
                <Card
                  Acteur={item.Acteur}
                  key={index}
                  Role={item.Role}
                  title={item.title}
                  date={item.date}
                  img={item.img}
                />
              </div>
            </>
          ))}
          {listCard.slice(6, 9).map((item, index) => (
            <>
              <div key={index} className="flex flex-col gap-y-[20px]  ">
                <Card
                  Acteur={item.Acteur}
                  key={index}
                  Role={item.Role}
                  title={item.title}
                  date={item.date}
                  img={item.img}
                />
              </div>
            </>
          ))} */}
        </div>
        <button
          onClick={loadMore}
          className="md:hidden   p-3  text-baseColor-100 font-inter  leading-6 text-[16px] rounded-xl border-2 border-[#31373D] hover:border-blue-300"
        >
          Load More
        </button>
      </>
    </WrapperComponent>
  );
}

export default Builders;
