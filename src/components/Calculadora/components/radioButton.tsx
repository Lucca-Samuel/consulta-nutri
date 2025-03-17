const RadioButtonGroup = ({ label, options, name, onChange }) => (
  <div className="mb-4 w-full">
    <span className="font-bold text-white">{label}</span>
    <div className="mt-1 flex flex-col gap-2">
      {options.map((option) => (
        <label className="flex items-center" key={option.value}>
          <input
            type="radio"
            name={name}
            value={option.value}
            onChange={onChange}
            className="form-radio text-orange"
          />
          <span className="ml-2 text-white">{option.label}</span>
        </label>
      ))}
    </div>
  </div>
);

export default RadioButtonGroup;
