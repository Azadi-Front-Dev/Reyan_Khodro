import React from "react";
import InputField from "../Components/InputField";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { FaWrench } from "react-icons/fa6";
import { FaCarBattery } from "react-icons/fa";
import { GiSpray } from "react-icons/gi";
import { GiTowTruck } from "react-icons/gi";
import { GiWrench } from "react-icons/gi";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { RiCarWashingFill } from "react-icons/ri";
import { FaOilCan } from "react-icons/fa6";
import { IoCarSport } from "react-icons/io5";
import { PiEngineFill } from "react-icons/pi";
import { GiFlatTire } from "react-icons/gi";
import Servicebutton from "../Components/Servicebutton";
import Header from "../Components/Header";

const fields = [
  {
    name: "searchbar",
    type: "text",
    placeholder: " جست و جو ... ",
  },
];
const Services = [
  {
    id: 1,
    title: "خدمات فنی خودرو",
    Icon: FaCar,
  },
  {
    id: 2,
    title: "مکانیکی",
    Icon: FaWrench,
  },
  {
    id: 3,
    title: "زیر و بند سازی ",
    Icon: FaScrewdriverWrench,
  },
  {
    id: 4,
    title: " برق خودرو و باتری سازی",
    Icon: FaCarBattery,
  },
  {
    id: 5,
    title: "سرویس و تعویض روغن",
    Icon: FaOilCan,
  },
  { id: 6, title: "تنظیم موتور و دیاگ", Icon: PiEngineFill },
  {
    id: 7,
    title: "صافکاری بدنه",
    Icon: GiWrench,
  },
  {
    id: 8,
    title: "جرثقیل و حمل خودرو",
    Icon: GiTowTruck,
  },
  {
    id: 9,
    title: "کارواش و صفرشویی",
    Icon: RiCarWashingFill,
  },
  {
    id: 10,
    title: "نقاشی و ترمیم رنگ",
    Icon: GiSpray,
  },
  {
    id: 11,
    title: "اسپرت و تیونینگ خودرو",
    Icon: IoCarSport,
  },
  {
    id: 12,
    title: "خدمات لاستیک و تایر ",
    Icon: GiFlatTire,
  },
];

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="h-900 bg-blue-secoundry flex flex-col items-center ">
      <div className="bg-blue-primary w-full rounded-b-[40px] sticky -top-3 p-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-150 flex-col-center gap-5"
        >
          <div className="h-10 max-h-13 text-white border-2 border-white flex-center rounded-2xl p-5">
            {fields.map((field) => (
              <InputField
                key={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                register={register}
                error={errors[field.name]}
                className=" h-5 placeholder:text-white "
              />
            ))}
            <FiSearch size={40} />
          </div>
        </form>
      </div>
      <Header/>
      <div
        className="
              flex-col-center w-full
              md:grid md:grid-cols-[repeat(2,minmax(0,360px))] md:place-items-center 
              xl:grid-cols-[repeat(3,minmax(0,360px))]  gap-3 p-5 my-20 "
      >
        {Services.map((Service) => {
          return (
            <Servicebutton
              key={Service.id}
              title={Service.title}
              Icon={Service.Icon}
            />
          );
        })}
        {/* <div className="max-w-100 w-full h-25 bg-blue-950 rounded-2xl"></div>
        <div className="max-w-100 w-full h-25 bg-blue-950 rounded-2xl"></div> */}
      </div>
      <div className="flex items-center justify-between sm:justify-evenly w-full h-15 md:hidden bg-white border-t-4 border-blue-primary fixed bottom-0 rounded-t-2xl p-5">
        <RiMenu2Fill size={30} />
        <FaUser size={30} />
        <BsChatDots size={30} />
        <IoSettingsSharp size={30} />
        <FiSearch size={40} />
      </div>
    </div>
  );
};

export default Home;
