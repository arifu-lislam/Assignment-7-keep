import React, { useEffect, useState } from "react";
import AppCard from "../ui/AppCard";
import { MoonLoader } from "react-spinners";
import useFriends from "../../Hooks/useFriends";

const Friends = () => {
  const { friends, loading } = useFriends();

  console.log(friends);
  console.log(loading, "loading");

  return (
    <div className="bg-green-50 pb-20">
      <h2 className="text-xl font-bold w-9/12 mx-auto mb-3">Your Friends</h2>

      {loading ? (
        <div className="flex justify-center items-center">
          <MoonLoader color="#244D3F" />
        </div>
      ) : (
        <div className="w-full md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-0 ">
          {friends.map((friend) => {
            return <AppCard key={friend.id} friend={friend}></AppCard>;
          })}
        </div>
      )}
    </div>
  );
};

export default Friends;
