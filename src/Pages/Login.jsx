import React from "react";

const Login = () => {
  return (
    <div className="w-full h-screen flex-col-center bg-blue-secoundry p-4 ">
      <div className="flex-center flex-col">
        <div className="max-w-100">
          <img src="./Logo/Login.png" className="w-full h-full"/>
        </div>
        <h1 className="text-blue-primary">رایان خودرو</h1>
      </div>
      <form className="w-full max-w-100 flex-col-center my-10 ">
        <div className="w-full flex-col-center">
          <div className="flex-col-center p-3 w-full">
            <input
              type="text"
              placeholder="نام کاربری"
              className="w-full border-blue-primary border-2 rounded-2xl px-4 py-2"
            />
            <span className="text-red-700">
              {" "}
              وارد کردن نام کاربری الزامی است!
            </span>
          </div>
          <div className="w-full flex-col-center p-3">
            <input
              type="text"
              placeholder="رمز عبور"
              className="w-full  border-blue-primary border-2 rounded-2xl px-4 py-2"
            />
            <span className="text-red-700"> وارد کردن رمزعبور الزامی است!</span>
          </div>
        </div>
        <div className="mt-10">
          <button className="w-full max-w-76 bg-blue-primary text-white rounded-2xl px-4 py-2 my-2">
            ورود به حساب
          </button>
          <button className="w-full max-w-76 bg-black-primary text-white rounded-2xl px-4 py-2 my-2">
            ورود به عنوان مهمان
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
