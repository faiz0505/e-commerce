import { Button, Carousel } from "@material-tailwind/react";
import React from "react";

const Header = () => {
  return (
    <header className="lg:min-h-screen w-full">
      <div className="h-[90%]">
        <Carousel
          loop
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src="/src/assets/hero1.png"
            alt=""
            className="h-full w-full object-contain"
          />
          <img
            src="/src/assets/hero1.png"
            alt=""
            className="h-full w-full object-contain"
          />
          <img
            src="/src/assets/hero1.png"
            alt=""
            className="h-full w-full object-contain"
          />
        </Carousel>
      </div>
      <div className="lg:flex justify-between items-center py-4 text-center lg:text-start">
        <h2 className="lg:text-7xl text-3xl text-black">
          Simply Unique<span className="text-gray-700">/</span> Simply Better.
        </h2>
        <p className="text-sm text-gray-800">
          <span className="text-black">3Legant</span> is a gift & decorations
          store based in HCMC, Vietnam. Est since 2019.
        </p>
      </div>
    </header>
  );
};

export default Header;
