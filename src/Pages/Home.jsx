import React from "react";
import Bloodlist from "../Components/Bloodlist";
import Info from "../Components/Info";
import Help from "../Components/Help";
import Filter from "../Components/Filter";

const Home = () => {
  return (
    <div className="mx-2 bg-gray-50">
      <Filter />
      <Bloodlist />
      <Info />
      <Help />
    </div>
  );
};

export default Home;
