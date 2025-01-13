import { useDispatch } from "react-redux";
import { EnumProps } from "../types/enum-type";

const Select: React.FC<EnumProps> = ({ customEnum, action, text }) => {
  const dispatch = useDispatch();
  // const filterEnum = Object.entries(customEnum).map(([key, value]) => ({
  //   label: value,
  //   value: key.trim(),
  // }));

  const filterEnum: { label: string; value: string }[] = Object.entries(
    customEnum
  ).map(([key, value]) => ({
    label: value,
    value: key.trim(),
  }));

  return (
    <select
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(action(e.target.value));
      }}
      name=""
      id=""
      className="lg:min-w-48 outline-none px-2 py-2 shadow-inner rounded bg-custombg text-xs text-custompurpule"
    >
      <option value="">{text}</option>
      {filterEnum.map((item) => (
        <option key={item.value} value={item.value} className="capitalize">
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
