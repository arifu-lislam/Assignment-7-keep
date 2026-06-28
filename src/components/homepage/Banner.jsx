import React from "react";
import { IoAddOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="text bg-green-50 ">
      <div className="text-center space-y-5 container mx-auto">
        <h2 className="text-4xl font-bold pt-15">
          Friends to keep close in your life
        </h2>
        <p className="text-gray-400">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="flex items-center gap-2 bg-[#244D3F] text-white px-2 py-2 rounded-xs font-semibold mx-auto">
          <IoAddOutline />
          Add a Friends
        </button>
      </div>

      <div className="w-9/12 mx-auto grid grid-cols-4 gap-2 mt-10 pb-20">
        <div className="bg-white w-[200px] text-center py-7 rounded-xl">
          <h2 className="text-[#244D3F] font-bold text-3xl">10</h2>
          <p className="text-[#64748B]">Total Friends</p>
        </div>
        <div className="bg-white w-[200px] text-center py-7 rounded-xl">
          <h2 className="text-[#244D3F] font-bold text-3xl">3</h2>
          <p className="text-[#64748B]">On Track</p>
        </div>
        <div className="bg-white w-[200px] text-center py-7 rounded-xl">
          <h2 className="text-[#244D3F] font-bold text-3xl">6</h2>
          <p className="text-[#64748B]">Need Attention</p>
        </div>
        <div className="bg-white w-[200px] text-center py-7 rounded-xl">
          <h2 className="text-[#244D3F] font-bold text-3xl">12</h2>
          <p className="text-[#64748B]">Interaction This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
