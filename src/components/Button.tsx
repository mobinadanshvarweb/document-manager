import React from "react";
import { ButtonProps } from "../types/button-type";

const Button: React.FC<ButtonProps> = ({
  text,
  onClickHandler,
  icon,
  className,
}) => {
  return (
    <button
      className={`w-full gap-2  duration-500
        rounded-lg py-2 flex items-center text-customtext font-semibold ${className}`}
      onClick={onClickHandler}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
