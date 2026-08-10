import React from "react";
import { FiSearch } from "react-icons/fi";
import ServiceList from "../Components/ServiceList";

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

const ServiceDetails = ({ data }) => {
  // console.log(data);
  return (
    <div className="h-1000 flex-col-cente py-10">
      <h2 className="font-bold text-xl mb-5 text-center leading-12 p-4">
        {data.title}
      </h2>
      <div className="flex flex-col lg:flex-row w-full h-full">
        <div className=" flex-col-center h-fit z-12 lg:sticky -top-85 whitespace-nowrap min-w-75 md:flex-center lg:max-w-100 py-5">
          <div className="max-w-90 w-full h-full p-4">
            <img
              src={data.image}
              alt="Sevice-image"
              className="w-full h-full rounded-[50px]"
            />
          </div>
          <div className="md:max-w-100 w-full bg-white rounded-3xl p-5 flex flex-col gap-5 ">
            <h4 className="text-xl font-bold text-blue-primary  whitespace-normal">
              {data.filtertitle}
            </h4>

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

            <button className="rounded-xl bg-blue-primary text-white font-bold hover:opacity-90 transition p-4 ">
              اعمال فیلتر
            </button>
          </div>
        </div>
        <ServiceList data={data} />
      </div>
    </div>
  );
};

export default ServiceDetails;
