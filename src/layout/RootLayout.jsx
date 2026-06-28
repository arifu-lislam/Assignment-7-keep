import React from "react";

import { Outlet } from "react-router";

import Navbar from "../components/sheared/Navbar/Navbar";
import Footer from "../components/sheared/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
