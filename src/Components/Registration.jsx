import React from "react";

const Registration = ({ onSubmitRegi }) => {
  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      style={{ backdropFilter: "blur(3px)" }}
    >
      {/* Registration Pop-up message content */}
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full mx-4 animate-slideInFromTop text-center font-bold text-sm">
        <h2 className="text-2xl text-red-600 mb-4 border-b pb-2 ">দ্রষ্টব্য</h2>

        <div className="bg-red-200 rounded-lg">
          <p className="text-red-800 mb-6 leading-relaxed py-3 px-4">
            যদি কোনো রক্তদাতা অগ্রিম টাকা চায়, তাহলে তাকে টাকা দিবেন না।
          </p>
        </div>
        <div className="mt-8">
          <button
            onClick={onSubmitRegi}
            className="bg-[#d52020] hover:bg-[#ab1616] hover:cursor-pointer hover:-translate-y-0.5 text-white font-semibold py-4 px-7 rounded-lg transition duration-200 shadow-md"
          >
            বুঝলাম
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
