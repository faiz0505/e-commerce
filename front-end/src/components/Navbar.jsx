import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { RiShoppingBag2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";

import { useDispatch, useSelector } from "react-redux";
import { Drawer, IconButton } from "@material-tailwind/react";
import { toggleDrawer } from "../features/drawerSlice";

const Navbar = () => {
  const navLink = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop" },
    { title: "Product", path: "/product" },
    { title: "Contact Us", path: "/contact-us" },
  ];
  const { pathname } = useLocation();
  const isOpen = useSelector((state) => state.drawer.value);
  const dispatch = useDispatch();
  return (
    <nav className="flex justify-between items-center py-2">
      <div className="text-xl">3Legant</div>
      <ul className="lg:flex hidden items-center gap-10 text-sm">
        {navLink.map((item, i) => {
          return (
            <li
              key={item.title}
              className={`text-[#6C7275] ${
                pathname === item.path && "text-black"
              }`}
            >
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <ul className="flex items-center gap-4 text-xl">
        <li>
          <Link to={"/search"}>
            <CiSearch />
          </Link>
        </li>
        <li className="relative cursor-pointer">
          <IconButton
            className="rounded-full"
            variant="text"
            onClick={() => {
              dispatch(toggleDrawer(!isOpen));
            }}
          >
            <RiShoppingBag2Line className="text-xl" />
          </IconButton>
          <div className="h-3 w-3 bg-black rounded-full absolute top-1 right-2 flex justify-center items-center">
            <span className="text-white text-[0.45rem] font-bold">14</span>
          </div>
        </li>
        <li>
          <Link to={"/profile"}>
            <CgProfile />
          </Link>
        </li>
      </ul>
      <Drawer
        open={isOpen}
        onClose={() => dispatch(toggleDrawer(!isOpen))}
        placement="right"
        className="px-6 py-10"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-3xl">Cart</h2>
          <IconButton
            className="rounded-full"
            size="sm"
            onClick={() => dispatch(toggleDrawer(!isOpen))}
          >
            <FaPlus className="fill-white rotate-45 text-2xl" />
          </IconButton>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
