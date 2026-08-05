import React from "react";
import InputField from "../Components/InputField";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";

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
    <div>
      <div className="bg-blue-primary w-full rounded-b-[40px] sticky -top-3 p-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-150 flex-col-center gap-5"
        >
          <div className="max-h-13 text-white border-2 border-white flex-center rounded-2xl p-3">
            {fields.map((field) => (
              <InputField
                key={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                register={register}
                error={errors[field.name]}
                className=" h-full placeholder:text-white "
              />
            ))}
            <FiSearch size={40} />
          </div>
        </form>
      </div>

      <div className="h-300">
        {/* <div className="flex flex-col items-start justify-end text-white">
          <RiMenu2Fill size={30} />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
