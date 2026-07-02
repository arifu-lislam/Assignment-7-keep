import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { FriendContext } from "../../context/CreateContext";

const StatusPage = () => {
  const { communication } = useContext(FriendContext);
  console.log(communication, "communication");

  const callCount = communication.filter((item) => item.type === "Call").length;
  const textCount = communication.filter((item) => item.type === "Text").length;
  const videoCount = communication.filter(
    (item) => item.type === "Video",
  ).length;

  const data = [
    { name: "Call", value: callCount, fill: "#0088FE" },
    { name: "Text", value: textCount, fill: "#00C49F" },
    { name: "Video", value: videoCount, fill: "#FFBB28" },
  ];
  return (
    <div className="bg-[#F8FAFC] pb-13">
      <div className="w-9/12 mx-auto">
        <h2 className="text-5xl font-bold pt-13 pb-5">Friendship Analytics</h2>
        <div className="bg-base-100">
          <p className="text-[#244D3F] pt-5 pl-5 font-semibold">
            By Interaction Type
          </p>
          <div className=" pb-20 ">
            <PieChart
              style={{
                width: "100%",
                maxWidth: "500px",
                maxHeight: "80vh",
                margin: "auto",
                aspectRatio: 1,
              }}
              responsive
            >
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
              <Legend></Legend>
              <Tooltip></Tooltip>
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPage;
