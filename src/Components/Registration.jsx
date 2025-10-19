import React from "react";
import { GiConfirmed } from "react-icons/gi";

const Registration = ({ onSubmitRegi }) => {
  const borderStyle =
    "border border-gray-300 p-3 text-[14px] rounded-md text-gray-900 active:border-red-300 ";
  const textStyle = "text-gray-700";

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      style={{ backdropFilter: "blur(0px)" }}
    >
      {/* ✅ WIDTH FIX: 
        1. Base width is w-full mx-4 (full width with 1rem margin on small screens).
        2. From the MD breakpoint, it's constrained to a larger size (max-w-xl) and centered with mx-auto.
      */}
      <div className="bg-white px-4 py-7 rounded-xl shadow-2xl w-full mx-4 md:max-w-xl md:mx-auto animate-slideInFromTop font-bold text-sm max-h-[90vh] overflow-y-auto">
        <h2 className="text-[22px] text-red-800 mb-4 pb-2 text-center">
          রক্তদাতা হিসেবে নিবন্ধন
        </h2>

        <div className="px-2">
          {/* Name and Blood Group remain side-by-side and fill the available width */}
          <div className="md:flex gap-4">
            {/* নাম */}
            <div className="grid mt-3 gap-y-3 flex-1">
              <label htmlFor="name" className={textStyle}>
                নাম
              </label>
              <input
                type="name"
                name="name"
                className={borderStyle + "font-light text-[18px]"}
              />
            </div>
            {/* Blood Group */}
            <div className="grid mt-3 gap-y-3 flex-1">
              <label htmlFor="blood" className={textStyle}>
                রক্তের গ্রুপ
              </label>
              <select name="" className={borderStyle}>
                <option value="">রক্তের গ্রুপ নির্বাচন করুন</option>
                <option value="">A+</option>
                <option value="">A-</option>
                <option value="">B+</option>
                <option value="">B-</option>
                <option value="">AB+</option>
                <option value="">AB-</option>
                <option value="">O+</option>
                <option value="">O-</option>
              </select>
            </div>
          </div>

          <div className="md:flex gap-4">
            {/* Age */}
            <div className="grid mt-3 gap-y-3 flex-1">
              <label htmlFor="age" className={textStyle}>
                বয়স
              </label>
              <input
                type="age"
                name="age"
                placeholder="18 বছরের উপরে হতে হবে"
                className={borderStyle}
              />
            </div>
            {/* Mobile Number */}
            <div className="grid mt-3 gap-y-3 flex-1">
              <label htmlFor="number" className={textStyle}>
                মোবাইল নাম্বার
              </label>
              <input
                type="number"
                name="number"
                placeholder="01XXXXXXXXX"
                className={borderStyle}
              />
            </div>
          </div>

          <div className="md:flex gap-4">
            {/* Division */}
            <div className="grid mt-3 gap-y-3 flex-1">
              <label htmlFor="blood" className={textStyle}>
                বিভাগ
              </label>
              <select className={borderStyle} name="division">
                <option name="">বিভাগ নির্বাচন করুন</option>
                <option name="">ঢাকা</option>
                <option name="">রাজশাহী</option>
                <option name="">রংপুর</option>
                <option name="">খুলনা</option>
                <option name="">বরিশাল</option>
                <option name="">চট্টগ্রাম</option>
                <option name="">সিলেট</option>
                <option name="">ময়মনসিংহ</option>
              </select>
            </div>
            {/* District */}
            <div className="grid mt-3 gap-y-3 flex-1">
              <label htmlFor="blood" className={textStyle}>
                জেলা
              </label>
              <select className={borderStyle} name="district">
                <option name="">প্রথমে বিভাগ নির্বাচন করুন</option>
                <option name="">ঢাকা</option>
                <option name="">রাজশাহী</option>
                <option name="">রংপুর</option>
                <option name="">খুলনা</option>
                <option name="">বরিশাল</option>
                <option name="">চট্টগ্রাম</option>
                <option name="">সিলেট</option>
                <option name="">ময়মনসিংহ</option>
              </select>
            </div>
          </div>
          {/* Address */}
          <div className="grid mt-3 gap-y-3">
            <label htmlFor="address" className={textStyle}>
              ঠিকানা: মহল্লা/উপজেলা/
            </label>
            <textarea
              name=""
              id=""
              rows="3"
              className={borderStyle}
              placeholder="উদাহরণঃ জয়দেবপুর,গাজীপুর সদর "
            ></textarea>
          </div>
          {/* Last Date */}
          <div className="grid mt-3 gap-y-3">
            <label htmlFor="date" className={textStyle}>
              শেষ রক্তদানের তারিখ
            </label>
            <input
              name=""
              className={borderStyle}
              placeholder="উদাহরণঃ 2025-12(মাস)-28(তারিখ) "
            />
          </div>
          {/* Occupassion */}
          <div className="grid mt-3 gap-y-3">
            <label htmlFor="occupassion" className={textStyle}>
              পেশা (ঐচ্ছিক)
            </label>
            <input type="text" name="" className={borderStyle} />
          </div>
        </div>

        {/* Submit btn */}
        <div className="mt-8 flex items-center justify-center">
          <button
            onClick={onSubmitRegi}
            className="flex items-center gap-2 bg-[#d52020] hover:bg-[#ab1616] hover:cursor-pointer text-white font-semibold py-4 px-7 rounded-lg transition duration-200 shadow-md"
          >
            <GiConfirmed /> নিবন্ধন সম্পন্ন করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
