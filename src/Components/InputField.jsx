import React from "react";

const InputField = ({
  name,
  type = "text",
  placeholder,
  register,
  error,
  className = "",
}) => {
  return (
    <div className="w-full flex flex-col p-3">
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`w-full border-2 rounded-2xl px-4 py-2 outline-none transition-all duration-300
          ${
            error
              ? "border-red-500"
              : "border-blue-primary focus:border-blue-600"
          }
          ${className}`}
      />

      <span
        className={`overflow-hidden text-sm text-red-600 transition-all duration-300 ${
          error ? "opacity-100 max-h-10 mt-1" : "opacity-0 max-h-0"
        }`}
      >
        {error?.message}
      </span>
    </div>
  );
};

export default InputField;