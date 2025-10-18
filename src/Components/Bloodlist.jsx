import React from "react";

const Bloodlist = () => {
  const compatibilityData = [
    {
      group: "A+",
      compatibility: ["হ্যাঁ", "না", "না", "না", "হ্যাঁ", "না", "না", "না"],
    },
    {
      group: "A-",
      compatibility: [
        "হ্যাঁ",
        "হ্যাঁ",
        "না",
        "না",
        "হ্যাঁ",
        "হ্যাঁ",
        "না",
        "না",
      ],
    },
    {
      group: "B+",
      compatibility: ["না", "না", "হ্যাঁ", "না", "হ্যাঁ", "না", "না", "না"],
    },
    {
      group: "B-",
      compatibility: [
        "না",
        "না",
        "হ্যাঁ",
        "হ্যাঁ",
        "হ্যাঁ",
        "হ্যাঁ",
        "না",
        "না",
      ],
    },
    {
      group: "AB+",
      compatibility: ["না", "না", "না", "না", "হ্যাঁ", "না", "না", "না"],
    },
    {
      group: "AB-",
      compatibility: ["না", "না", "না", "না", "হ্যাঁ", "হ্যাঁ", "না", "না"],
    },
    {
      group: "O+",
      compatibility: [
        "হ্যাঁ",
        "না",
        "হ্যাঁ",
        "না",
        "হ্যাঁ",
        "না",
        "হ্যাঁ",
        "না",
      ],
    },
    {
      group: "O-",
      compatibility: [
        "হ্যাঁ",
        "হ্যাঁ",
        "হ্যাঁ",
        "হ্যাঁ",
        "হ্যাঁ",
        "হ্যাঁ",
        "হ্যাঁ",
        "হ্যাঁ",
      ],
    },
  ];

  const recipientGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const getCellClasses = (value) => {
    return value === "হ্যাঁ"
      ? "bg-green-200 text-green-800"
      : "bg-red-200 text-red-800";
  };
  // 	Information
  const information = [
    {
      info: " O- হচ্ছে সার্বজনীন দাতা (Universal Donor) - সকল গ্রুপের রোগীকে রক্ত দিতে পারে",
    },
    {
      info: " AB+ হচ্ছে সার্বজনীন গ্রহীতা (Universal Recipient) - সকল গ্রুপের রক্ত গ্রহণ করতে পারে",
    },
    {
      info: "O+ গ্রুপের রক্ত সব পজিটিভ গ্রুপের রোগীকে দেওয়া যায়",
    },
    {
      info: " নেগেটিভ গ্রুপের রক্ত নেগেটিভ এবং পজিটিভ উভয় গ্রুপের রোগীকে দেওয়া যায়",
    },
  ];

  return (
    <div className="p-2 sm:p-6 mt-6.5 min-h-screen ">
      <div className="bg-white shadow-lg rounded-lg px-5 py-6">
        <h1 className="text-[27px] font-extrabold mb-2 text-red-700 text-center">
          কে কাকে রক্ত দিতে পারবে?
        </h1>
        <p className="text-sm my-7 text-gray-600 text-center">
          রক্তের গ্রুপ অনুযায়ী কে কাকে রক্ত দিতে পারবে তার বিস্তারিত
        </p>

        <div className="BloodCompatibilityTable">
          <div className="overflow-x-auto  border border-gray-300">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-sm font-bold text-gray-700 uppercase tracking-wider bg-gray-200 border-r border-gray-300"
                  >
                    Donor (দাতা)
                  </th>
                  {recipientGroups.map((group) => (
                    <th
                      key={group}
                      scope="col"
                      className="px-4 py-3 text-center text-sm font-bold text-gray-700 uppercase "
                    >
                      {group}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {compatibilityData.map((donor) => (
                  <tr key={donor.group}>
                    <td
                      // REMOVED 'sticky left-0 z-10'
                      className="px-4 py-4 whitespace-nowrap text-sm font-extrabold text-gray-900 bg-gray-100 border-r border-gray-300"
                    >
                      {donor.group}
                    </td>

                    {donor.compatibility.map((value, recipientIndex) => (
                      <td
                        key={recipientIndex}
                        className={`px-4 py-4 whitespace-nowrap text-sm font-semibold text-center ${getCellClasses(
                          value
                        )}`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Information 	*/}
        <div className="bg-red-100 p-4 rounded-lg mt-6">
          <p className="text-red-800 text-lg font-bold">গুরুত্বপূর্ণ তথ্য:</p>
          <ul className="list-disc ml-5 space-y-2">
            {information.map((infoo, index) => {
              return (
                <div key={index}>
                  <li>{infoo.info}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bloodlist;
