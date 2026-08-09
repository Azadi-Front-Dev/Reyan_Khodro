import React from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import { FiSearch } from "react-icons/fi";
import { useForm } from "react-hook-form";

const fields = [
  {
    name: "searchbar",
    type: "text",
    placeholder: " جست و جو ... ",
  },
];
const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly bg-blue-primary w-full md:h-20 rounded-b-[40px] sticky -top-24 md:-top-5 p-5 md:pt-9 ">
      <div className="flex-center h-full gap-5 m-5">
        <Link
          to={"/login"}
          className="border-2 bg-white rounded-2xl px-5 py-2 text-blue-primary"
        >
          ورود
        </Link>
        <Link
          to={"/signin"}
          className="border-2 border-white rounded-2xl px-5 py-2 text-white"
        >
          ثبت نام
        </Link>
      </div>
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
              className=" h-5 placeholder:text-white border-0"
            />
          ))}
          <FiSearch size={40} />
        </div>
      </form>
    </div>
  );
};

export default Search;
