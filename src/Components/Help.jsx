import React from "react";
import { RiBankCardFill } from "react-icons/ri";

const Help = () => {
  return (
    <div className="p-2 sm:p-6 bg-gray-50 ">
      <div className="bg-white shadow-lg rounded-lg px-5 py-6 text-center">
        <h1 className="text-2xl sm:text-[27px] font-extrabold mb-8 text-red-700 ">
          আমাদের সহযোগিতা করুন
        </h1>
        <p className="text-sm text-gray-800">
          আমরা একটি অলাভজনক সংস্থা। আপনার অর্থ সাহায্য আমাদের এই সেবামূলক
          কার্যক্রম চালিয়ে যেতে সাহায্য করবে।
        </p>
        {/* Bkash and Number */}
        <div className="flex items-center bg-red-50 mt-6 mb-2 p-3">
          <div className="bg-[#e02a2a] px-4 py-5 rounded-[43%] ">
            <RiBankCardFill className="text-white text-xl" />
          </div>
          <div className="text-left ml-4">
            <h1 className="text-md font-extrabold text-red-700 ">
              বিকাশ & নগদ (P)
            </h1>
            <h1 className="">01773959737</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
