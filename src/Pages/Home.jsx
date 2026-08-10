import React from "react";
import { FiSearch } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { FaWrench } from "react-icons/fa6";
import { FaCarBattery } from "react-icons/fa";
import { GiSpray } from "react-icons/gi";
import { GiTowTruck } from "react-icons/gi";
import { GiWrench } from "react-icons/gi";
import { RiCarWashingFill } from "react-icons/ri";
import { FaOilCan } from "react-icons/fa6";
import { IoCarSport } from "react-icons/io5";
import { PiEngineFill } from "react-icons/pi";
import { GiFlatTire } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IoFlashlight } from "react-icons/io5";
import { MdOutlineWindPower } from "react-icons/md";
import Search from "../Components/Search";
import Servicebutton from "../Components/Servicebutton";
import Header from "../Components/Header";

const Services = [
  // {
  //   id: 1,
  //   title: "خدمات فنی خودرو",
  //   Icon: FaCar,
  //   route: "/services/technical-services",
  // },
  {
    id: 2,
    title: "مکانیکی",
    Icon: FaWrench,
    route: "/services/mechanic",
  },
  // {
  //   id: 3,
  //   title: "زیر و بند سازی ",
  //   Icon: FaScrewdriverWrench,
  //   route: "/services/suspension",
  // },
  {
    id: 4,
    title: " برق خودرو و باتری سازی",
    Icon: FaCarBattery,
    route: "/services/auto-electric",
  },
  {
    id: 5,
    title: "سرویس و تعویض روغن",
    Icon: FaOilCan,
    route: "/services/oil-service",
  },
  {
    id: 6,
    title: "تنظیم موتور و دیاگ",
    Icon: PiEngineFill,
    route: "/services/diagnostic",
  },
  {
    id: 7,
    title: "صافکاری بدنه",
    Icon: GiWrench,
    route: "/services/body-repair",
  },
  {
    id: 8,
    title: "جرثقیل و حمل خودرو",
    Icon: GiTowTruck,
    route: "/services/car-transport",
  },
  {
    id: 9,
    title: "کارواش و صفرشویی",
    Icon: RiCarWashingFill,
    route: "/services/car-wash",
  },
  {
    id: 10,
    title: "نقاشی و ترمیم رنگ",
    Icon: GiSpray,
    route: "/services/car-paint",
  },
  {
    id: 11,
    title: "اسپرت و تیونینگ خودرو",
    Icon: IoCarSport,
    route: "/services/car-tuning",
  },
  {
    id: 12,
    title: "خدمات لاستیک و تایر ",
    Icon: GiFlatTire,
    route: "/services/tire-service",
  },
  {
    id: 13,
    title: "کارشناسی رنگ خودرو ",
    Icon: IoFlashlight,
    route: "/services/car-inspection",
  },
  {
    id: 14,
    title: "شارژ و سرویس کولر ",
    Icon: MdOutlineWindPower,
    route: "/services/car-ac",
  },
];

const serviceHighlights  = [
  {
    id: 1,
    title: "حمل  خودرو با نازل ترین قیمت",
    description:
      "ارائه خدمات حمل و جابه‌جایی خودرو با خودروبر و جرثقیل در مواقع خرابی، تصادف یا نیاز به انتقال خودرو.",
    image: "/Images/Services/car-transport.png",
  },
  {
    id: 2,
    title: "   تعمیر خودرو در سریع ترین زمان  ",
    description: "تعمیر موتور و گیریبکس و زیر و بند سازی توسط کارشناسان مجرب",
    image: "/Images/Services/not-found-service-page.png",
  },
  {
    id: 3,
    title: "کارشناسی و تشخیص رنگ خودرو",
    description:
      "بررسی تخصصی بدنه و تشخیص رنگ‌شدگی، تعویض قطعات و آسیب‌های احتمالی خودرو پیش از خرید یا فروش",
    image: "/Images/Services/color-test.png",
  },
  {
    id: 4,
    title: "خدمات کارواش و صفرشویی خودرو",
    description:
      "شست‌وشوی کامل خودرو، صفرشویی داخل کابین و نظافت تخصصی بخش‌های داخلی و خارجی خودرو",
    image: "/Images/Services/carwash-bg.png",
  },
];

const Home = () => {
  return (
    <div className=" bg-blue-secoundry flex flex-col items-center mb-12">
      <Search />
      <Header />
      <div
        className="items-center justify-center grid grid-cols-2 place-items-center
              xl:grid-cols-3  gap-3 p-5 my-20 "
      >
        {Services.map((Service) => {
          return (
            <Servicebutton
              key={Service.id}
              route={Service.route}
              title={Service.title}
              Icon={Service.Icon}
            />
          );
        })}
        {/* <div className="max-w-100 w-full h-25 bg-blue-950 rounded-2xl"></div>
        <div className="max-w-100 w-full h-25 bg-blue-950 rounded-2xl"></div> */}
      </div>
      <div className="flex items-center justify-between sm:justify-evenly  w-full h-15 md:hidden bg-white border-t-4 border-blue-primary fixed bottom-0 rounded-t-2xl p-5">
        <RiMenu2Fill size={30} />
        <Link to={"/login"}>
          <FaUser size={30} />
        </Link>
        <BsChatDots size={30} />
        <IoSettingsSharp size={30} />
        <FiSearch size={40} />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 p-4 gap-3 max-w-100 md:max-w-300">
        {serviceHighlights .map((item) => {
          return (
            <div
              key={item.id}
              className="flex-col-center  w-full lg:h-82 border-2 bg-white border-blue-primary rounded-2xl p-5 "
            >
              <h4 className="p-4">{item.title}</h4>
              <img
                src={item.image}
                alt={item.title}
                className="max-w-75 max-h-50 w-full h-full object-contain"
              />
              <p className="p-4">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
