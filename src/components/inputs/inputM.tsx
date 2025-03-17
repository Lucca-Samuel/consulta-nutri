import React from "react";

type InputFieldProps = {
  label?: string; // Adicionando uma opção de label
  placeholder: string;
  type?: string;
  value?: string; // Para gerenciar o valor do campo
  onChange?: React.ChangeEventHandler<HTMLInputElement>; // Para manipular o evento de mudança
  required?: boolean; // Definir como obrigatório ou não
  className?: string; // Para customizar a classe de estilo do input
};

const InputM = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  required = false,
  className = "",
}: InputFieldProps) => {
  return (
    <div className={`mb-2 w-full text-white ${className}`}>
      {label && (
        <label className="mt-2 block text-sm font-medium">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-md border border-gray-300 px-4 py-2 text-center text-black focus:border-gray-500 focus:outline-none"
      />
    </div>
  );
};

export default InputM;
