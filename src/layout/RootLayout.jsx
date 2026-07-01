import React from "react";

import { Outlet } from "react-router";

import Navbar from "../components/sheared/Navbar/Navbar";
import Footer from "../components/sheared/Footer/Footer";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
};

export default RootLayout;
