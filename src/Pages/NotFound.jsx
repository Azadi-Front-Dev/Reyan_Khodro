import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="max-w-130 mx-auto flex-col-center my-20 p-5 ">
      <h1 className="text-center p-5">متاسفانه </h1>
      <h3 className="text-center p-5">صفحه مورد نظر وجود ندارد!</h3>
      <img
        src="../Images/Services/not-found-service-page.png"
        alt="not found service"
        className="w-full h-full"
      />
      <Link
        to={"/"}
        className="border-2 border-blue-primary text-white bg-blue-primary p-4 rounded-2xl m-5"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
};

export default NotFound;
