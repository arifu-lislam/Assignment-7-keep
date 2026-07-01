import React from "react";
import { useParams } from "react-router";
import useFriends from "../../Hooks/useFriends";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";

const DetailsPages = () => {
  const bgColors = {
    "on-track": "bg-green-500 text-white",
    "almost due": "bg-yellow-500 text-white",
    overdue: "bg-red-500 text-white",
  };
  const { id } = useParams();
  //   console.log(id, "params");
  const { friends, loading } = useFriends();
  console.log(friends, loading, "All friends");
  if (loading) return <p>Loading...</p>;
  const expectedFriend = friends.find((friend) => friend.id == Number(id));
  console.log(expectedFriend, "expected Friend");
  return (
    <div className="bg-[#F8FAFC] py-10 ">
      <div className="w-10/12 mx-auto flex-col md:flex gap-5 justify-center ">
        <div className="left-side">
          <div className="bg-base-100 shadow-sm text-center p-5 space-y-2 rounded-xl w-[300px] ">
            <img
              className=" h-[100px] w-[100px] rounded-full mx-auto"
              src={expectedFriend.picture}
              alt={expectedFriend.name}
            />
            <h2 className="text-2xl font-bold">{expectedFriend.name}</h2>

            <div className="flex flex-wrap ">
              {expectedFriend.tags.map((tag, index) => {
                return (
                  <p
                    key={index}
                    className="text-xl font-bold bg-[#CBFADB] rounded-xl w-[130px] mx-auto "
                  >
                    {tag}
                  </p>
                );
              })}
            </div>
            <p
              className={`p-2 rounded-xl font-bold w-[150px] mx-auto ${bgColors[expectedFriend.status]}`}
            >
              {expectedFriend.status}
            </p>
            <h2>{expectedFriend.bio}</h2>
            <h2>{expectedFriend.email}</h2>
          </div>
          <div className="flex flex-col w-[300px] gap-4 mt-4">
            <button className="btn">Snooze 2 weeks</button>
            <button className="btn">Archive</button>
            <button className="btn">Delete</button>
          </div>
        </div>
        <div className="right-side ">
          <div className="Stats Cards flex-col md:flex gap-2  justify-between">
            <div className="bg-white w-full md:w-[200px] text-center py-7 rounded-xl">
              <h2 className="text-[#244D3F] font-bold text-3xl">
                {expectedFriend.days_since_contact}
              </h2>
              <p className="text-[#64748B]">days_since_contact</p>
            </div>
            <div className="bg-white w-[200px] text-center py-7 rounded-xl">
              <h2 className="text-[#244D3F] font-bold text-3xl">
                {expectedFriend.goal}
              </h2>
              <p className="text-[#64748B]">Goal(Days)</p>
            </div>
            <div className="bg-white w-[200px] text-center py-7 rounded-xl">
              <h2 className="text-[#244D3F] font-bold text-3xl">
                {expectedFriend.next_due_date}
              </h2>
              <p className="text-[#64748B]">next_due_date</p>
            </div>
          </div>
          <div className=" Relationship Goal Card flex justify-between items-center bg-white w-full rounded-xl px-6 mt-10">
            <div className="space-y-2   py-7 ">
              <h2 className="text-[#244D3F] font-bold text-3xl">
                {" "}
                Relationship Goal
              </h2>
              <p className="text-[#64748B]">
                Contact every {expectedFriend.goal} days
              </p>
            </div>
            <button className="btn">Edit</button>
          </div>
          <div className="Quick-Check-In-Card  bg-white w-full rounded-xl px-6 mt-10 py-7 ">
            <h2 className="text-[#244D3F] font-semibold">Quick Check-In</h2>
            <div className="flex justify-between gap-4">
              <div className=" bg-[#F8FAFC] w-[200px] py-4 text-center mt-4">
                <span>
                  <FiPhoneCall className="mx-auto mb-3 font-bold" />
                </span>
                <p className="text-black font-semibold ">Call</p>
              </div>
              <div className=" bg-[#F8FAFC] w-[200px] py-4 text-center mt-4">
                <span>
                  <MdOutlineTextsms className="mx-auto mb-3 font-bold" />
                </span>
                <p className="text-black font-semibold ">Text</p>
              </div>
              <div className=" bg-[#F8FAFC] w-[200px] py-4 text-center mt-4">
                <span>
                  <IoVideocamOutline className="mx-auto mb-3 font-bold" />
                </span>
                <p className="text-black font-semibold ">Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPages;
