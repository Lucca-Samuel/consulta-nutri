import React from "react";

type InputFieldProps = {
  placeholder: string;
  type?: string;
};

const InputField = ({
  placeholder,
  type,
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-md border border-gray-300 px-4 py-2 text-center focus:border-gray-500 focus:outline-none"
      onChange={onChange}
      value={value}
    />
  );
};

export default InputField;
