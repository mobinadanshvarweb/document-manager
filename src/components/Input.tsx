import { useDispatch } from "react-redux";
import { InputProps } from "../types/input-type";

const Input: React.FC<InputProps> = ({ type, placeholder, action, value }) => {
  const dispatch = useDispatch();

  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-4 rounded-lg bg-custombg border"
      onChange={(e) => {
        dispatch(action(e.target.value));
      }}
      value={value}
    />
  );
};

export default Input;
