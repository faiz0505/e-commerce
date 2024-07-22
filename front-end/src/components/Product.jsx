import { Badge, Button, Chip } from "@material-tailwind/react";
import React from "react";
import { PiHeartFill, PiHeartLight } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";

const Product = ({
  id,
  title,
  actualPrice,
  discountPrice,
  image,
  rating,
  discount,
  width,
}) => {
  let favourite = false;
  const { columns } = useSelector((state) => state.gridLayout);
  return (
    <div
      className={`h-[433px] group bg-[#F3F5F7] ${
        columns === 1 && "flex items-center gap-10"
      } ${width}`}
    >
      <figure
        className={`h-[349px] relative ${columns === 1 && "w-1/2"} ${width}`}
      >
        <div className="absolute flex justify-between w-full px-3 pt-3">
          <div className="flex flex-col gap-1">
            <div className="font-bold bg-white rounded px-2">NEW</div>
            <div className="bg-[#38CB89] font-bold text-white px-2 rounded">{`-${discount}%`}</div>
          </div>
          <div className="">
            <Button
              className="px-3 rounded-full hidden group-hover:block"
              color="white"
            >
              {favourite ? (
                <PiHeartFill className="text-2xl" />
              ) : (
                <PiHeartLight className="text-2xl" />
              )}
            </Button>
          </div>
        </div>
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain object-top "
        />
        {columns !== 1 && (
          <Button className=" transform translate-x-7 -translate-y-14 w-[78%] hidden group-hover:block">
            Add to Cart
          </Button>
        )}
      </figure>
      {columns === 1 && (
        <div className={"h-[80%] w-0.5 bg-black border-red-200"}></div>
      )}
      <div className="flex flex-col gap-1 px-3">
        <div className="flex mt-2 gap-0.5">
          {Array.from({ length: rating }, (_, index) => (
            <FaStar key={index} className="text-sm" />
          ))}
        </div>
        <h3 className=" font-semibold">{title}</h3>
        <h5 className="flex gap-3">
          {`$${discountPrice}.00`}
          <del className="hidden group-hover:block">{`$${actualPrice}.00`}</del>
        </h5>
        {columns === 1 && (
          <Button className="hidden group-hover:block">Add to Cart</Button>
        )}
      </div>
    </div>
  );
};

export default Product;
