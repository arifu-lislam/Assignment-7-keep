import React from "react";

import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2  px-3 py-2 rounded-xl font-semibold ${isActive ? "bg-[#244D3F] text-white" : "text-black"}`
      }
    >
      <button>{children}</button>
    </NavLink>
  );
};

export default MyNavLink;
