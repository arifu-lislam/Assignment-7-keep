import React from "react";
import instagram from "../../../assets/image/instagram.png";
import facebook from "../../../assets/image/facebook.png";
import twitter from "../../../assets/image/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] ">
      <div className="pt-10 text-center space-y-2 ">
        <h2 className="text-white text-4xl font-bold">KeenKeeper</h2>
        <p className="text-white">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </div>
      <div className="w-9/12 mx-auto text-center space-y-3 mt-5">
        <h4 className="text-white font-bold ">Social Links</h4>
        <div className=" flex justify-center items-center gap-4">
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
      <div>
        <hr className="w-9/12 mx-auto  border-t border-gray-200 bg-gray-50 pt-[-.5] mt-12" />
      </div>
      <div className="flex flex-col md:flex-row justify-between w-9/12 mx-auto text-white pt-10 pb-6">
        <div>
          <p>© 2026 KeenKeeper. All rights reserved.</p>
        </div>
        <div className="flex  gap-4 ">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
