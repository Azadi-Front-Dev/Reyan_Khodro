import React from "react";
import InputField from "../Components/InputField";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";

const fields = [
  {
    name: "searchbar",
    type: "text",
    placeholder: " جست و جو ... ",
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
