import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "../Validators/FormSchema";
import { Link } from "react-router-dom";
import InputField from "../Components/InputField";

const loginfields = [
  {
    name: "username",
    placeholder: "نام کاربری",
  },

  {
    name: "password",
    placeholder: "رمز عبور",
    type: "password",
  },
];

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },

    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full h-full flex-col-center bg-blue-secoundry p-4">
      <div className="flex-center flex-col">
        <div className="max-w-100">
          <img src="./Logo/Login.png" className="w-full h-full" />
        </div>
        <h1 className="text-blue-primary">رایان خودرو</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-100 flex-col-center my-10 "
      >
        <div className="w-full flex-col-center">
          <h5 className="m-5 font-bold">ورود به حساب کاربری</h5>

          {loginfields.map((field) => (
            <InputField
              key={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              register={register}
              error={errors[field.name]}
            />
          ))}
        </div>
        <div className=" mt-10">
          <button className="w-full max-w-76 bg-blue-primary text-white rounded-2xl px-4 py-2 my-2">
            ورود به حساب
          </button>
          <button className="w-full max-w-76 bg-black-primary text-white rounded-2xl px-4 py-2 my-2">
            ورود به عنوان مهمان
          </button>
          <Link to={"/Signin"}>
            <p className="w-full text-center">ساخت حساب جدید</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
