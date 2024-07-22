import { Input } from "@material-tailwind/react";
import React from "react";
import { MdMailOutline } from "react-icons/md";
const Newsletter = () => {
  return (
    <section className="">
      <figure className="relative">
        <img src="/src/assets/newsletter.png" alt="" className="" />
        <form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <h2 className="text-3xl font-semibold">Join Our Newsletter</h2>
          <p className="text-sm font-thin">
            Sign up for deals, new products and promotions
          </p>

          <Input
            variant="static"
            placeholder={"Email Address"}
            icon={<MdMailOutline />}
            className=""
          />
        </form>
      </figure>
    </section>
  );
};

export default Newsletter;
