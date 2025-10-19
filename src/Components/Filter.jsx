import React from "react";

const Filter = () => {
  const selectStyle =
    "border border-gray-300 p-3 rounded-md text-sm text-gray-900";
  return (
    <div className="p-2 py-4 sm:p-6">
      <div className="bg-white shadow-lg rounded-lg px-5 pt-6">
        <h1 className="text-[27px] font-extrabold mb-2 text-red-700 text-center">
          রক্তদাতা খুঁজুন
        </h1>
        <p className="text-center text-gray-600 text-[15px] mt-6">
          নাম, পেশা, ঠিকানা বা বয়স দিয়ে অনুসন্ধান করুন
        </p>
        {/* Filtering Options */}
        <div className="mt-8">
          {/* Search */}
          <div className="">
            <input
              type="text"
              name=""
              placeholder="সার্চ করুন যেমনঃ ঠিকানা, বয়স, নাম..."
              className="border border-gray-300 p-3 w-full rounded-md text-sm text-gray-800"
            />
          </div>
          {/* Options */}
          <div className="space-y-4 mt-6">
            <div className="space-y-4 md:flex w-full items-start md:gap-4">
              {/* Blood Group */}
              <div className="grid space-y-2 md:flex-1">
                <label htmlFor="রক্তের গ্রুপ">রক্তের গ্রুপ</label>
                <select value="রক্তের গ্রুপ" className={selectStyle}>
                  <option name="">সব</option>
                  <option name="">A+</option>
                  <option name="">A-</option>
                  <option name="">B+</option>
                  <option name="">B-</option>
                  <option name="">AB+</option>
                  <option name="">AB-</option>
                  <option name="">O+</option>
                  <option name="">0-</option>
                </select>
              </div>
              {/* Division */}
              <div className="grid space-y-2 md:flex-1">
                <label htmlFor="বিভাগ">বিভাগ</label>
                <select value="বিভাগ" className={selectStyle}>
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
            </div>
            <div className="space-y-4 md:flex w-full items-start md:gap-4">
              {/* District */}
              <div className="grid space-y-2 md:flex-1">
                <label htmlFor="জেলা">জেলা</label>
                <select name="district" className={selectStyle}>
                  <option value="">প্রথমে বিভাগ নির্বাচন করুন</option>
                  <option value="gazipur">গাজীপুর</option>
                </select>
              </div>
              <div className="grid space-y-2 md:flex-1"></div>
            </div>
          </div>
        </div>
        {/* Find btn */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="mb-6 mt-2 px-4.5 py-3 bg-[#b62c2c] text-white rounded-lg font-semibold hover:cursor-pointer hover:bg-[#8f2222] transition 0.8s"
          >
            অনুসন্ধান করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
