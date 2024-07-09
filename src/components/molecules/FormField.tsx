import Input from "../atoms/Input";

interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  required?: boolean;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: SLComponent<FormFieldProps> = ({ label, ...inputProps }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={inputProps.name}
      >
        {label}
      </label>
      <Input {...inputProps} />
    </div>
  );
};

export default FormField;
