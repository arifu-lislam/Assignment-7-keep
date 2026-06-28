import React, { useEffect, useState } from "react";

const Friends = () => {
  const [friends, setFriend] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      // console.log(data);
      setFriend(data);
    };
    fetchData();
  }, []);
  console.log(friends);

  const bgColors = {
    "on-track": "bg-green-500 text-white",
    "almost due": "bg-yellow-500 text-white",
    overdue: "bg-red-500 text-white",
  };
  return (
    <div className="bg-green-50">
      <h2 className="text-xl font-bold">Your Friends</h2>
      <div className="w-9/12 mx-auto grid grid-cols-4 gap-4">
        {friends.map((friend) => {
          return (
            <div
              key={friend.id}
              className="bg-base-100 shadow-sm text-center p-10 space-y-2 rounded-xl"
            >
              <img
                className=" h-[100px] w-[100px] rounded-full mx-auto"
                src={friend.picture}
                alt={friend.name}
              />
              <h2 className="text-2xl font-bold">{friend.name}</h2>
              <p className="text-gray-400 font-semibold text-xl">
                {friend.days_since_contact}d ago
              </p>
              {friend.tags.map((tag, index) => {
                return (
                  <p
                    key={index}
                    className="text-xl font-bold bg-[#CBFADB] rounded-xl w-[130px] mx-auto"
                  >
                    {tag}
                  </p>
                );
              })}
              <p
                className={`p-2 rounded-xl font-bold w-[150px] mx-auto ${bgColors[friend.status]}`}
              >
                {friend.status}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Friends;
