import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="w-full grid lg:grid-cols-2 gap-10 bg-[#F3F5F7]">
      <aside className="w-full  lg:h-full relative">
        <figure>
          <img
            src="/src/assets/banner.png"
            alt="Banner"
            className="object-contain h-full w-full "
          />
        </figure>
      </aside>
      <aside className="flex flex-col gap-3 justify-center items-start">
        <h6 className="text-[#377DFF] text-sm font-semibold">
          SALE UP TO 35% OFF
        </h6>
        <h1 className="text-4xl">
          HUNDREDS of <br />
          New lower prices!
        </h1>
        <p className="text-xs w-64">
          It’s more affordable than ever to give every room in your home a
          stylish makeover
        </p>
        <Link to={"#"} className="lg:text-sm text-xs border-b border-black">
          shop now
          <IoIosArrowRoundForward className="inline ml-1" />
        </Link>
      </aside>
    </section>
  );
};

export default Banner;
