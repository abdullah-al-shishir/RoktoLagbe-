import React from "react";

const Info = () => {
  const infoList = [
    {
      title: "যারা রক্ত দিতে পারবেন",
      infos: [
        { info: "১৮ থেকে ৬০ বছর বয়সের যেকোনো সুস্থ মানুষ" },
        { info: "যাদের ওজন কমপক্ষে ৫০ কেজি" },
        {
          info: "হিমোগ্লোবিন কমপক্ষে পুরুষদের ক্ষেত্রে ১৩ g/dL এবং মহিলাদের ক্ষেত্রে ১২ g/dL",
        },
        {
          info: "স্বাভাবিক রক্তচাপ (সিস্টোলিক: ৯০-১৮০ mmHg, ডায়াস্টোলিক: ৫০-১০০ mmHg)",
        },
        { info: "মহিলারা মাসিকের সময় ছাড়া যেকোনো সময় রক্ত দিতে পারেন" },
      ],
    },
    {
      title: "যারা রক্ত দিতে পারবেন না",
      infos: [
        { info: "যারা গত ৩ মাসের মধ্যে রক্ত দান করেছেন" },
        {
          info: "যারা গত ৬ মাসের মধ্যে হেপাটাইটিস বা যকৃতের রোগে আক্রান্ত ছিলেন",
        },
        {
          info: "গর্ভবতী মহিলা বা প্রসবের ৬ মাস পর্যন্ত",
        },
        {
          info: "মাদকাসক্ত ব্যক্তি",
        },
        { info: "হৃদরোগের রোগী" },
        {
          info: "ক্যান্সার রোগী",
        },
        {
          info: "ডায়াবেটিসের রোগী (ইনসুলিন নির্ভরশীল)",
        },
        { info: "যাদের গত ৬ মাসের মধ্যে অস্ত্রোপচার হয়েছে" },
      ],
    },
  ];

  return (
    <div className="p-2 sm:p-6 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg px-5 py-6">
        <h1 className="text-2xl sm:text-[27px] font-extrabold mb-8 text-red-700 text-center">
          রক্ত দান সম্পর্কিত তথ্য
        </h1>

        {/* Donor Eligibility Sections - Flexed for side-by-side layout on medium screens and up */}
        <div className="md:flex md:justify-between md:space-x-8">
          {infoList.map((infoo, index) => (
            <div key={index} className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-lg sm:text-xl font-semibold mt-0 mb-4 text-red-600">
                {infoo.title}
              </h2>
              <ul className="list-disc ml-5 space-y-2 text-[15px] sm:text-base leading-relaxed">
                {infoo.infos.map((data, idx) => (
                  <li key={idx}>{data.info}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Blood Donation Schedule Section */}
        <div className="bg-red-50 p-4 mt-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-3 text-red-700">
            রক্ত দান সময়সূচী
          </h2>
          <p className="text-[15px] mb-3 leading-relaxed">
            পুরুষরা কমপক্ষে ৩ মাস পর এবং মহিলারা কমপক্ষে ৪ মাস পর রক্ত দিতে
            পারেন। এই সময়ের মধ্যে রক্ত দান করা স্বাস্থ্যের জন্য ক্ষতিকর হতে
            পারে।
          </p>
          <p className="text-[15px] leading-relaxed">
            একজন সুস্থ ব্যক্তি বছরে সর্বোচ্চ মহিলারা ৩ বার এবং পুরুষরা ৪ বার
            রক্ত দিতে পারেন।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
