// import React from "react";

// type InputFieldProps = {
//   placeholder: string;
//   type?: string;
//   value: string; // Adicionado
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Adicionado
// };

// const InputField = ({
//   placeholder,
//   type = "text", // Valor padrão para type
//   value,
//   onChange,
// }: InputFieldProps) => {
//   return (
//     <input
//       type={type}
//       placeholder={placeholder}
//       className="w-full rounded-md border border-gray-300 px-4 py-2 text-center focus:border-gray-500 focus:outline-none"
//       onChange={onChange}
//       value={value}
//     />
//   );
// };

// export default InputField;

import React from "react";

type InputFieldProps = {
  label?: string; // Adicionamos a propriedade label
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean; // Adicionamos a propriedade required
};

const InputField = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  required = false,
}: InputFieldProps) => {
  return (
    <div>
      {label && ( // Renderiza o label apenas se ele for fornecido
        <label className="mb-2 block text-sm font-medium">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-300 px-4 py-2 text-center focus:border-gray-500 focus:outline-none"
        onChange={onChange}
        value={value}
        required={required} // Passa a propriedade required para o input
      />
    </div>
  );
};

export default InputField;
