interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

export const Button: SLComponent<ButtonProps> = ({
  onClick,
  type = "button",
  children,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      {children}
    </button>
  );
};

export default Button;
