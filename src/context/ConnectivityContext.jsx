import { useState } from "react";
import { FriendContext } from "./CreateContext";

const ConnectivityContext = ({ children }) => {
  const [communication, setCommunication] = useState([]);

  const data = {
    communication,
    setCommunication,
  };
  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default ConnectivityContext;
