import React from "react";
import { FiSearch } from "react-icons/fi";

const filters = [
  {
    id: 1,
    name: "category",
    label: "نوع خدمات",
    options: [
      "انتخاب خدمات",
      "تعمیرات موتور",
      "گیربکس",
      "سیستم ترمز",
      "جلوبندی و تعلیق",
      "سرویس دوره‌ای",
    ],
  },

  {
    id: 2,
    name: "brand",
    label: "برند خودرو",
    options: [
      "انتخاب کنید",
      "ایران خودرو",
      "سایپا",
      "پژو",
      "پراید",
      "دنا",
      "سمند",
    ],
  },

  {
    id: 3,
    name: "carType",
    label: "نوع خودرو",
    options: ["انتخاب کنید ", "سواری", "شاسی بلند", "وانت"],
  },

  {
    id: 5,
    name: "city",
    label: "شهر",
    options: ["همه شهر های ایران", "تهران", "اصفهان", "مشهد", "شیراز"],
  },
];
const Secoundfilters = [
  {
    id: 1,
    name: "category",
    label: "جزییات خدمات",
    options: [
      "تعمیر موتور کامل",
      "تعمیر سرسیلندر",
      "تعویض واشر سرسیلندر",
      "رفع روغن‌سوزی",
      "تعمیر سیستم خنک‌ کننده",
      "رفع مشکلات احتراق موتور",
    ],
  },
  {
    id: 1,
    name: "category",
    label: "جزییات خدمات",
    options: [
      "تعمیر موتور کامل",
      "تعمیر سرسیلندر",
      "تعویض واشر سرسیلندر",
      "رفع روغن‌سوزی",
      "تعمیر سیستم خنک‌ کننده",
      "رفع مشکلات احتراق موتور",
    ],
  },

];

const Mechanic = () => {
  return (
    <div className="h-900">
      <div className="lg:fixed flex-col-center md:flex-center lg:max-w-100 p-5">
        <div className="max-w-100 w-full h-full">
          <img
            src="../Images/section_a2.png"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="md:max-w-100 w-full bg-white rounded-3xl p-5 flex flex-col gap-5 ">
          <h2 className="text-xl font-bold text-blue-primary">
            فیلتر خدمات مکانیکی
          </h2>

          <div className=" w-full flex-center border-2 border-gray-300 rounded-2xl px-4 h-12 ">
            <input
              type="text"
              placeholder="جستجو در خدمات..."
              className=" w-full outline-none text-right "
            />
            <FiSearch size={25} />
          </div>

          <div className=" grid grid-cols-1 lg:grid-cols-1 gap-4 ">
            {filters.map((filter) => (
              <div key={filter.id} className="flex flex-col gap-2">
                <label className=" text-sm font-semibold text-gray-700 ">
                  {filter.label}
                </label>

                <select className=" h-12 rounded-xl border-2 border-gray-300 outline-none cursor-pointer px-3 ">
                  {filter.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <button className=" h-12 rounded-xl bg-blue-primary text-white font-bold hover:opacity-90 transition ">
            اعمال فیلتر
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mechanic;
