import React from "react";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  const socialLink =
    "bg-white text-[#d12a2a] p-2 rounded-[50%] hover:bg-gray-300 hover:cursor-pointer";

  return (
    <div className="bg-[#d63838] text-white mt-8 p-6 hind-siliguri-regular space-y-6 md:space-y-0">
      <div className="grid  md:flex justify-around items-start gap-x-12 max-w-6xl mx-auto space-y-6 md:space-y-6">
        {/* 1: রক্তদাতা নিবন্ধন সিস্টেম */}
        <div className="">
          <h1 className="text-xl font-bold">রক্তদাতা নিবন্ধন সিস্টেম</h1>
          <p className="text-[17px] pt-4 ">
            জীবন বাঁচাতে রক্তদান করুন। একটি ইউনিট রক্ত তিনজনের জীবন বাঁচাতে
            পারে।
          </p>
        </div>

        {/* 2: যোগাযোগ */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold">যোগাযোগ</h2>
          <div className="flex items-center gap-x-2">
            <IoCall />
            <p className="">+880 1773959737</p>
          </div>
          <div className="flex items-center gap-x-2">
            <IoMdMail />
            <p className="">abdullahshishir2018@gmail.com</p>
          </div>
          <div className="flex items-center gap-x-2">
            <FaLocationDot />
            <p className="">ঢাকা, বাংলাদেশ</p>
          </div>
        </div>

        {/* 3: অনুসরণ করুন */}
        <div className="">
          <h2 className="text-xl font-bold">অনুসরণ করুন</h2>
          {/* Social */}
          <div className="flex items-center gap-x-3 text-[40px] my-3">
            <a
              href="https://www.facebook.com/abdullah.shishir4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className={socialLink} />
            </a>

            <a
              href="https://www.youtube.com/@Easyphysicsbyshishir4155"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className={socialLink} />
            </a>

            <a
              href="https://github.com/abdullah-al-shishir"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className={socialLink} />
            </a>
          </div>
        </div>
      </div>

      {/* Added a separator line for visual clarity */}
      <hr className="border-t border-gray-300 mx-auto max-w-6xl" />

      {/* Copyright/Attribution */}
      <p className="text-center md:mt-7">
        রক্তদাতা নিবন্ধন সিস্টেমটি abdullah-al-shishir এর উদ্যোগে এবং
        তত্ত্বাবধানে নির্মিত — ২০২৫
      </p>
    </div>
  );
};

export default Footer;
