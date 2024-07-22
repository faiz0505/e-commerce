import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="paddings">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
