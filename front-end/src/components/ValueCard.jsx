import React from "react";

const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="w-full h-56 bg-[#F3F5F7] px-10 justify-center flex flex-col gap-4 rounded-sm">
      <div className="text-5xl">{icon}</div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm font-thin">{description}</p>
    </div>
  );
};

export default ValueCard;
