import React from "react";

const Header = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-center justify-center w-full ">
        <img src="./Images/1.png" alt="" className=" w-full max-w-100" />
        <div className=" flex-col-center gap-6 p-8">
          <h1>رایان خودرو </h1>
          <h4>همراه همیشگی شما </h4>
          <div className="flex-col-center mt-20 gap-3 font-bold">
            <p>پشتیبانی 24 ساعته</p>
            <p>متخصصین مجرب و حرفه‌ای</p>
            <p>تضمین کیفیت</p>
            <p>قیمت‌گذاری شفاف و منصفانه</p>
            <p>خدمات در محل</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
