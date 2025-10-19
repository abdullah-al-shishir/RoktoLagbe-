import React from "react";
import { useState } from "react";
import { FaDroplet } from "react-icons/fa6";
import { FaPeopleRoof } from "react-icons/fa6";
import Registration from "../Components/Registration";

const Navbar = () => {
  const [registration, setRegistration] = useState(false);
  const handleRegistration = () => {
    setRegistration(true);
  };
  const handleSubmitRegi = () => {
    setRegistration(false);
  };
  return (
    <div className="bg-[#e02a2a] flex justify-between items-center p-3 sticky top-0">
      <div className="flex text-white items-center">
        <FaDroplet className="text-xl" />
        <p className="text-lg font-bold mx-1.5">রক্ত লাগবে?</p>
      </div>

      <button
        type="submit"
        className="flex  items-center text-red-600 mx-1 bg-white p-2 mr-0.5 rounded-lg hover:cursor-pointer hover:bg-red-100"
        onClick={handleRegistration}
      >
        <FaPeopleRoof />
        <span className="mx-1.5 hind-siliguri-regular">নিবন্ধন করুন</span>
      </button>
      {/* The below code is for the  নিবন্ধন করুন button */}
      {/* All datas are imported from the child to parent using prop */}
      {registration && <Registration onSubmitRegi={handleSubmitRegi} />}
    </div>
  );
};

export default Navbar;
