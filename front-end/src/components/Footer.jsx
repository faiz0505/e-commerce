import React from "react";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { RiYoutubeLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  const navLink = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop" },
    { title: "Product", path: "/product" },
    { title: "Contact Us", path: "/contact-us" },
  ];
  return (
    <footer className="w-full h-[249px] bg-[#141718] px-36 pt-20 pb-8">
      <div className="flex items-center justify-between ">
        <div className="lg:flex gap-8 text-white items-center">
          <div className="text-white">3Legant</div>
          <span className="text-white">|</span>
          <p className="text-white text-xs">Gift & Decoration Store</p>
        </div>
        <ul className="lg:flex hidden items-center gap-10 text-sm">
          {navLink.map((item, i) => {
            return (
              <li
                key={item.title}
                className={`text-[#FEFEFE] font-extralight text-sm`}
              >
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <hr className="mt-14" />
      <div className="flex justify-between items-center">
        <ul className="flex gap-6 items-center">
          <li className="text-[#E8ECEF] text-xs mt-4">
            Copyright © 2023 3legant. All rights reserved
          </li>
          <li className="text-white text-xs mt-4">Privacy Policy</li>
          <li className="text-white text-xs mt-4">Terms of Use</li>
        </ul>
        <ul className="flex gap-6 items-center">
          <li>
            <Link>
              <FaInstagram className="mt-2 fill-white" />
            </Link>
          </li>
          <li>
            <Link>
              <LuFacebook className="mt-2 fill-white" />
            </Link>
          </li>
          <li>
            <Link>
              <RiYoutubeLine className="mt-2 fill-white" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
