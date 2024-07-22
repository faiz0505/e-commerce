import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Product from "./Product";

const ProductCrousel = () => {
  const productsData = [
    {
      id: "101",
      title: "Loveseat Sofa",
      actualPrice: 400,
      discountPrice: 199,
      disount: 50,
      rating: 5,
      image: "/src/assets/product1.png",
    },
    {
      id: "102",
      title: "Table Lamp",
      actualPrice: 50,
      discountPrice: 24.99,
      disount: 50,
      rating: 5,
      image: "/src/assets/banner-image1.png",
    },
    {
      id: "103",
      title: "Beige Table Lamp",
      actualPrice: 50,
      discountPrice: 24.99,
      disount: 50,
      rating: 2,
      image: "/src/assets/product1.png",
    },
    {
      id: "104",
      title: "Bamboo basket",
      actualPrice: 60,
      dicountPrice: 29.99,
      disount: 50,
      rating: 3,
      image: "/src/assets/banner-image1.png",
    },
    {
      id: "105",
      title: "Toasted",
      actualPrice: 50,
      discountPrice: 24.99,
      disount: 50,
      rating: 5,
      image: "/src/assets/product1.png",
    },
    {
      id: "106",
      title: "Loveseat Sofa",
      actualPrice: 400,
      discountPrice: 199,
      disount: 50,
      rating: 5,
      image: "/src/assets/product1.png",
    },
  ];
  return (
    <section className="lg:h-screen w-full mt-5 ">
      <div className="flex justify-between items-end">
        <h1 className="text-4xl text-wrap w-10 font-semibold">New Arrivals</h1>
        <Link className="border-b border-black text-sm">
          More Products <IoIosArrowRoundForward className="inline ml-1" />
        </Link>
      </div>
      <div className="grid grid-flow-col overflow-x-scroll gap-5 scrollbar-hide mt-5">
        {productsData.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            discountPrice={product.discountPrice}
            actualPrice={product.actualPrice}
            discount={product.disount}
            image={product.image}
            rating={product.rating}
            width={"w-[262px]"}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductCrousel;
