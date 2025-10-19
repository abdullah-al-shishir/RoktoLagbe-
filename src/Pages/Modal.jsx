import React, { useState, useEffect } from "react";
import { BiLogoMessenger } from "react-icons/bi";

const Modal = ({ message, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      style={{ backdropFilter: "blur(3px)" }}
    >
      {/* Modal Pop-up message content */}
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full mx-4 animate-slideInFromTop text-center font-bold text-sm">
        <h2 className="text-2xl text-red-600 mb-4 border-b pb-2 ">দ্রষ্টব্য</h2>
        <div className="bg-amber-100 rounded-lg">
          <p className="text-gray-900 mb-6 leading-relaxed py-3 px-3">
            {message}
          </p>
        </div>
        <div className="bg-red-200 rounded-lg">
          <p className="text-red-800 mb-6 leading-relaxed py-3 px-4">
            যদি কোনো রক্তদাতা অগ্রিম টাকা চায়, তাহলে তাকে টাকা দিবেন না।
          </p>
        </div>
        <div className="bg-blue-100 rounded-lg p-4 flex flex-col items-center">
          <p className="text-blue-800 mb-4 leading-relaxed text-center">
            আপনার নাম্বার, শেষ রক্তদানের তারিখ ও কোনো সমস্যা বা অভিযোগ
            মেসেঞ্জারে জানান।
          </p>
          <button className="text-[12px] bg-[#007FFF] hover:bg-[#0769cb] hover:cursor-pointer flex justify-center items-center text-white  p-2 font-semibold py-3 rounded-lg transition duration-200 shadow-md">
            <BiLogoMessenger className="text-2xl" /> মেসেঞ্জারে মেসেজ করুন
          </button>
        </div>

        <div className="mt-8">
          <button
            onClick={onClose}
            className="bg-[#d52020] hover:bg-[#ab1616] hover:cursor-pointer hover:-translate-y-0.5 text-white font-semibold py-4 px-7 rounded-lg transition duration-200 shadow-md"
          >
            বুঝলাম
          </button>
        </div>
      </div>
    </div>
  );
};

const MODAL = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleConfirm = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center">
      {isModalOpen && (
        <Modal
          message={`যিনি রক্ত নিবেন, রক্তদাতার যাতায়াতসহ যাবতীয় খরচ বহন করবেন — এটাই মানবিক দায়িত্ব।`}
          onClose={handleConfirm}
        />
      )}

      <style>
        {`
          @keyframes slideInFromTop {
            0% {
              transform: translateY(-10%); 
              opacity: 0;
            }
            100% {
              transform: translateY(0); 
              opacity: 1;
            }
          }

          .animate-slideInFromTop {
            animation: slideInFromTop 0.9s ease-out forwards; 
          }
        `}
      </style>
    </div>
  );
};

export default MODAL;
