import React, { useState } from "react";

const mechanicServices = [
  {
    id: 1,
    title: "تعمیرات موتور",
    services: [
      {
        name: "تعمیر موتور کامل",
        description:
          "بازسازی کامل موتور، بررسی قطعات داخلی و تعویض قطعات معیوب",

        prices: [
          { car: "پراید", price: "۸ میلیون تومان" },
          { car: "تیبا", price: "۹ میلیون تومان" },
          { car: "ساینا", price: "۹.۵ میلیون تومان" },
          { car: "کوییک", price: "۱۰ میلیون تومان" },
          { car: "پژو 405", price: "۱۲ میلیون تومان" },
          { car: "پژو پارس", price: "۱۳ میلیون تومان" },
          { car: "سمند EF7", price: "۱۵ میلیون تومان" },
          { car: "دنا", price: "۱۷ میلیون تومان" },
        ],
      },

      {
        name: "تعویض واشر سرسیلندر",
        description:
          "تعویض واشر، بررسی تاب سرسیلندر و تست نهایی موتور",

        prices: [
          { car: "پراید", price: "۳ میلیون تومان" },
          { car: "تیبا", price: "۳.۵ میلیون تومان" },
          { car: "ساینا", price: "۳.۵ میلیون تومان" },
          { car: "کوییک", price: "۴ میلیون تومان" },
          { car: "پژو 405", price: "۵ میلیون تومان" },
          { car: "پژو پارس", price: "۵.۵ میلیون تومان" },
          { car: "سمند", price: "۶ میلیون تومان" },
          { car: "دنا", price: "۷ میلیون تومان" },
        ],
      },
    ],
  },


  {
    id: 2,
    title: "گیربکس و کلاچ",

    services: [

      {
        name: "تعویض دیسک و صفحه",

        description:
          "تعویض کیت کلاچ و تنظیم سیستم انتقال قدرت",

        prices: [
          { car: "پراید", price: "۲.۵ میلیون تومان" },
          { car: "تیبا", price: "۳ میلیون تومان" },
          { car: "ساینا", price: "۳.۲ میلیون تومان" },
          { car: "کوییک", price: "۳.۵ میلیون تومان" },
          { car: "پژو 405", price: "۴.۵ میلیون تومان" },
          { car: "پژو پارس", price: "۵ میلیون تومان" },
          { car: "سمند", price: "۵ میلیون تومان" },
          { car: "دنا", price: "۶ میلیون تومان" },
        ],
      },


      {
        name: "تعویض روغن گیربکس",

        description:
          "تخلیه روغن قدیمی و جایگزینی روغن استاندارد گیربکس",

        prices: [
          { car: "پراید", price: "۸۰۰ هزار تومان" },
          { car: "تیبا", price: "۱ میلیون تومان" },
          { car: "پژو 405", price: "۱.۵ میلیون تومان" },
          { car: "پژو پارس", price: "۱.۸ میلیون تومان" },
          { car: "دنا", price: "۲ میلیون تومان" },
        ],
      },

    ],
  },


  {
    id: 3,
    title: "جلوبندی و تعلیق",

    services: [

      {
        name: "تعویض کمک فنر",

        description:
          "تعویض کمک فنر جلو و عقب و بررسی سیستم تعلیق",

        prices: [
          { car: "پراید", price: "۱.۵ میلیون تومان" },
          { car: "تیبا", price: "۲ میلیون تومان" },
          { car: "ساینا", price: "۲ میلیون تومان" },
          { car: "پژو 405", price: "۳ میلیون تومان" },
          { car: "پژو پارس", price: "۳.۵ میلیون تومان" },
          { car: "دنا", price: "۴ میلیون تومان" },
        ],
      },


      {
        name: "تعویض سیبک",

        description:
          "رفع صدای جلوبندی و لقی فرمان",

        prices: [
          { car: "پراید", price: "۷۰۰ هزار تومان" },
          { car: "تیبا", price: "۸۰۰ هزار تومان" },
          { car: "پژو 405", price: "۱ میلیون تومان" },
          { car: "سمند", price: "۱.۲ میلیون تومان" },
        ],
      },

    ],
  },


  {
    id: 4,
    title: "سیستم ترمز",

    services: [

      {
        name: "تعویض لنت ترمز",

        description:
          "تعویض لنت جلو و عقب و بررسی سیستم ترمز",

        prices: [
          { car: "پراید", price: "۸۰۰ هزار تومان" },
          { car: "تیبا", price: "۱ میلیون تومان" },
          { car: "پژو 405", price: "۱.۵ میلیون تومان" },
          { car: "پژو پارس", price: "۱.۸ میلیون تومان" },
          { car: "دنا", price: "۲ میلیون تومان" },
        ],
      },


      {
        name: "تعمیر ABS",

        description:
          "عیب یابی یونیت ABS و سنسورهای چرخ",

        prices: [
          { car: "پژو 405", price: "۲ میلیون تومان" },
          { car: "پژو پارس", price: "۲.۵ میلیون تومان" },
          { car: "دنا", price: "۳ میلیون تومان" },
        ],
      },

    ],
  },


  {
    id: 5,
    title: "دیاگ و عیب‌یابی",

    services: [

      {
        name: "دیاگ تخصصی خودرو",

        description:
          "بررسی خطاهای ECU و سنسورهای خودرو",

        prices: [
          { car: "پراید", price: "۳۰۰ هزار تومان" },
          { car: "تیبا", price: "۴۰۰ هزار تومان" },
          { car: "پژو", price: "۵۰۰ هزار تومان" },
          { car: "دنا", price: "۷۰۰ هزار تومان" },
        ],
      },


      {
        name: "تنظیم موتور",

        description:
          "تنظیم مصرف سوخت و عملکرد موتور",

        prices: [
          { car: "پراید", price: "۵۰۰ هزار تومان" },
          { car: "تیبا", price: "۶۰۰ هزار تومان" },
          { car: "پژو 405", price: "۸۰۰ هزار تومان" },
          { car: "دنا", price: "۱ میلیون تومان" },
        ],
      },

    ],
  },


  {
    id: 6,
    title: "سرویس‌های دوره‌ای",

    services: [

      {
        name: "تعویض روغن موتور",

        description:
          "تعویض روغن و فیلتر روغن خودرو",

        prices: [
          { car: "پراید", price: "۱ میلیون تومان" },
          { car: "تیبا", price: "۱.۲ میلیون تومان" },
          { car: "پژو 405", price: "۱.۵ میلیون تومان" },
          { car: "دنا", price: "۲ میلیون تومان" },
        ],
      },


      {
        name: "تعویض شمع خودرو",

        description:
          "تعویض شمع و بررسی سیستم جرقه زنی",

        prices: [
          { car: "پراید", price: "۵۰۰ هزار تومان" },
          { car: "تیبا", price: "۷۰۰ هزار تومان" },
          { car: "پژو", price: "۱ میلیون تومان" },
          { car: "دنا", price: "۱.۵ میلیون تومان" },
        ],
      },

    ],
  },


];
const ServiceList = () => {
  const [active, setActive] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className=" w-full flex-col-reverse h-fit flex sm:flex-row-reverse gap-5 bg-white rounded-3xl max-w-5xl p-4">
      
      <div className="flex-1 bg-gray-50 rounded-2xl p-5 ">
        {active && (
          <>
            <h3 className="font-bold text-lg mb-5 text-blue-primary">
              {active.title}
            </h3>
            <ul className="space-y-3">
              {active.services.map((service) => (
                <li
                  key={service.name}
                  onClick={() => setSelectedService(service)}
                  className="cursor-pointer hover:text-blue-primary transition"
                >
                  {service.name}
                </li>
              ))}
            </ul>
            {selectedService && (
              <div className="mt-10">
                <h3 className="font-bold text-lg mb-3 text-blue-primary">
                  {selectedService.name}
                </h3>

                <p className="text-gray-600 mb-5">
                  {selectedService.description}
                </p>
                <table className="w-full border-collapse border text-right">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border p-3">نوع خودرو</th>
                      <th className="border p-3">قیمت تقریبی</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedService.prices.map((item) => (
                      <tr key={item.car}>
                        <td className="border p-3">{item.car}</td>
                        <td className="border p-3">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
      <div className="border-l pl-5">


        {mechanicServices.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              setActive(item);
              setSelectedService(null);
            }}
            className="p-3 rounded-xl cursor-pointer hover:bg-blue-100 flex justify-between items-center transition"
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
