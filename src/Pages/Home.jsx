import React from "react";
import Bloodlist from "../Components/Bloodlist";
import Info from "../Components/Info";
import Help from "../Components/Help";

const Home = () => {
  return (
    <div className="mx-2">
      Filter
      <Bloodlist />
      <Info />
      <Help />
    </div>
  );
};

export default Home;
