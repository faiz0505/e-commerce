import React, { useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import Product from "./Product";

import { useSelector } from "react-redux";
import Newsletter from "./Newsletter";
import Loader from "./Loader";
import Footer from "./Footer";
const Category = () => {
  const { columns } = useSelector((state) => state.gridLayout);

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
    <section className="w-full">
      <CategoryFilter />
      <div
        className="grid gap-3 w-full"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
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
            width={"w-full"}
          />
        ))}
      </div>
      <div className="flex justify-center items-center my-20">
        <Loader />
      </div>
      <Newsletter />
      <Footer />
    </section>
  );
};

export default Category;
