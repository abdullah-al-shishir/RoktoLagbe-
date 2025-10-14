import React from "react";
import { FaDroplet } from "react-icons/fa6";
import { FaPeopleRoof } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-[#e02a2a] flex justify-between items-center p-3">
      {/*  */}
      <div className="flex text-white items-center">
        <FaDroplet className="text-xl" />
        <p className="text-lg font-bold mx-1.5">রক্ত লাগবে?</p>
      </div>
      {/*  */}
      <button
        type="submit"
        className="flex  items-center text-red-600 mx-1 bg-white p-2 mr-0.5 rounded-lg hover:cursor-pointer hover:bg-red-100"
      >
        <FaPeopleRoof />
        <span className="mx-1.5">নিবন্ধন করুন</span>
      </button>
    </div>
  );
};

export default Navbar;
