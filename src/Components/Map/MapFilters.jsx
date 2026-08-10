import React from "react";

const MapFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      className=" w-full flex flex-col max-w-75 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4 rounded-2xl bg-white border border-gray-200 shadow-sm"
      dir="rtl"
    >
      {/* شهر */}

      <select
        name="city"
        value={filters.city}
        onChange={handleChange}
        className=" w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none"
      >
        <option value="">همه شهرها</option>
        <option value="اصفهان">اصفهان</option>
        <option value="تهران">تهران</option>
        <option value="شیراز">شیراز</option>
        <option value="مشهد">مشهد</option>
      </select>

      {/* نوع خدمات */}

      <select
        name="service"
        value={filters.service}
        onChange={handleChange}
        className=" w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none "
      >
        <option value="">همه خدمات</option>
        <option value="مکانیکی">مکانیکی</option>
        <option value="خدمات فنی">خدمات فنی</option>
        <option value="برق خودرو">برق خودرو</option>
        <option value="جلوبندی">جلوبندی</option>
      </select>

      {/* برند */}
      <select
        name="brand"
        value={filters.brand}
        onChange={handleChange}
        className=" w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none"
      >
        <option value="">همه برندها</option>
        <option value="پژو">پژو</option>
        <option value="سمند">سمند</option>
        <option value="پراید">پراید</option>
        <option value="دنا">دنا</option>
        <option value="تیبا">تیبا</option>
      </select>

      {/* نوع خودرو */}

      <select
        name="carType"
        value={filters.carType}
        onChange={handleChange}
        className=" w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none"
      >
        <option value="">همه خودروها</option>
        <option value="سواری">سواری</option>
        <option value="وانت">وانت</option>
        <option value="شاسی بلند">شاسی بلند</option>
      </select>
    </div>
  );
};

export default MapFilters;
