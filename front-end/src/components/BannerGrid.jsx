import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const BannerGrid = () => {
  const bannerData = [
    {
      id: 123,
      image: "/src/assets/banner-image1.png",
      title: "Living Room",
      path: "#",
    },
    {
      id: 124,
      image: "/src/assets/banner-image2.png",
      title: "Bed Room",
      path: "#",
    },
    {
      id: 125,
      image: "/src/assets/banner-image3.png",
      title: "Kitchen",
      path: "#",
    },
  ];
  return (
    <section className="h-screen w-full gap-6 py-3 grid lg:grid-cols-2">
      {bannerData.map((item, i) => {
        return (
          <div
            key={item.id}
            className={`h-full w-full  bg-[#F3F5F7]  ${
              i === 0 && "row-span-2"
            } relative`}
          >
            <figure>
              <img
                src={item.image}
                alt={item.title}
                className="object-contain h-full w-full absolute"
              />
              <div
                className={`absolute left-8 ${i === 0 ? "top-5" : "bottom-5"}`}
              >
                <h3 className="lg:text-3xl text-xl font-semibold">
                  {item.title}
                </h3>
                <Link
                  to={item.path}
                  className="lg:text-sm text-xs border-b border-black"
                >
                  shop now
                  <IoIosArrowRoundForward className="inline ml-1" />
                </Link>
              </div>
            </figure>
          </div>
        );
      })}
    </section>
  );
};

export default BannerGrid;
