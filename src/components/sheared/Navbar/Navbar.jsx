import React from "react";
import logo from "../../../assets/image/logo.png";

import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import vector from "../../../assets/image/Vector.png";
import MyNavLink from "../MyNavLink";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="shadow-sm bg-base-100 ">
      <div className="navbar   w-11/12 mx-auto">
        <div className="flex-1">
          <img className="hidden lg:block h-8" src={logo} alt="" />
          <GiHamburgerMenu className="block lg:hidden text-2xl text-[#244D3F] cursor-default" />
        </div>
        <div>
          <ul className="flex gap-2 lg:gap-4 items-center text-black">
            <li>
              <MyNavLink to={"/"}>
                <span className="flex items-center gap-2 cursor-pointer">
                  <RiHome2Line /> Home
                </span>
              </MyNavLink>
            </li>
            <li>
              <MyNavLink to={"/timeline"}>
                <span className="flex items-center gap-2 cursor-pointer">
                  <RiTimeLine /> Timeline
                </span>
              </MyNavLink>
            </li>
            <li>
              <MyNavLink to={"/status"}>
                <span className="flex items-center gap-2 cursor-pointer">
                  <img src={vector} alt="" /> Status
                </span>
              </MyNavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
