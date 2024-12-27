import React from "react";
import { ButtonProps } from "../types/button-type";

const Button: React.FC<ButtonProps> = ({ text, onClickHandler }) => {
  return (
    <button
      className="w-full
      hover:bg-customtext hover:text-custombutton
        duration-500
       border rounded-lg py-2 flex justify-center items-center bg-custombutton text-customtext font-semibold"
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
