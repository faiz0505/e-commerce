import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import Category from "../components/Category";

const Shop = () => {
  return (
    <>
      <header className="h-auto w-full">
        <figure className="relative">
          <img src="/src/assets/shop-header.png" alt="" className="" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
            <Breadcrumbs className="bg-transparent" separator=">">
              <Link to={"/"} className="opacity-80">
                Home
              </Link>
              <Link to={"/shop"}>Shop</Link>
            </Breadcrumbs>
            <h2 className="text-3xl font-semibold">Shop Page</h2>
            <p className="text-sm font-thin">
              Let’s design the place you always imagined.
            </p>
          </div>
        </figure>
      </header>
      <Category />
    </>
  );
};

export default Shop;
