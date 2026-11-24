import React from "react";

const LocationBottomSheet = ({ location, onClose }) => {
  if (!location) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end bg-black/40" dir="rtl">
      <div className="w-full rounded-t-3xl bg-white p-6 shadow-2xl">
        <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-gray-300"></div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-gray-800">{location.title}</h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">{location.description}</p>
          </div>

          <button onClick={onClose} className="text-xl text-gray-400">
            ×
          </button>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-gray-50 p-3">
            <span className="text-xs text-gray-400">شهر</span>
            <p className="mt-1 text-sm font-semibold text-gray-700">{location.city}</p>
          </div>

          <div className="rounded-xl bg-gray-50 p-3">
            <span className="text-xs text-gray-400">نوع خدمات</span>
            <p className="mt-1 text-sm font-semibold text-gray-700">{location.service}</p>
          </div>

          <div className="rounded-xl bg-gray-50 p-3">
            <span className="text-xs text-gray-400">برند</span>
            <p className="mt-1 text-sm font-semibold text-gray-700">{location.brand}</p>
          </div>

          <div className="rounded-xl bg-gray-50 p-3">
            <span className="text-xs text-gray-400">نوع خودرو</span>
            <p className="mt-1 text-sm font-semibold text-gray-700">{location.carType}</p>
          </div>
        </div>

        <button className="mt-5 w-full rounded-xl bg-blue-primary px-4 py-3 text-sm font-semibold text-white">
          مشاهده صفحه تعمیرگاه
        </button>
      </div>
    </div>
  );
};

export default LocationBottomSheet;