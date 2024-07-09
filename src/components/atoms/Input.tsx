interface InputProps {
  type: string;
  name: string;
  value: string;
  required?: boolean;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const Input: SLComponent<InputProps> = ({
  type,
  name,
  value,
  required = false,
  disabled = false,
  onChange,
  placeholder,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required={required}
      disabled={disabled}
    />
  );
};

export default Input;
