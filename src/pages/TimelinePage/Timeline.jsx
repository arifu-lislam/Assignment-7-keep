import React, { useContext } from "react";
import { FriendContext } from "../../context/CreateContext";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";

const Timeline = () => {
  const { communication } = useContext(FriendContext);
  console.log(communication, "communication");

  const icons = {
    Call: <FiPhoneCall className="text-4xl" />,
    Text: <MdOutlineTextsms className="text-4xl" />,
    Video: <IoVideocamOutline className="text-4xl" />,
  };
  return (
    <div className="bg-[#F8FAFC] pt-10 min-h-screen ">
      {communication.map((singleData, index) => {
        return (
          <div key={index}>
            <div className="w-9/12 mx-auto">
              <div className="flex items-center gap-4 w-full shadow-sm bg-white mb-10 px-4 py-2 rounded-xl">
                {icons[singleData.type]}
                <div className="text-gray-500">
                  <h2>
                    {singleData.type} with {singleData.name}
                  </h2>
                  <h2>july 1,2026</h2>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
