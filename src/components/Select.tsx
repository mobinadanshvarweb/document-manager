import { useDispatch } from "react-redux";
import { FilterEnum } from "../enums/filter-enum";
import { setFilter } from "../redux/slices/file-slice";

const Select = () => {
  const dispatch = useDispatch();

  const filterEnum = Object.entries(FilterEnum).map(([key, value]) => ({
    label: value,
    value: key.trim(),
  }));

  return (
    <select
      onChange={(e) => {
        dispatch(setFilter(e.target.value));
      }}
      name=""
      id=""
      className="min-w-48 outline-none px-2 py-2 shadow-inner rounded bg-custombg"
    >
      <option value="">Select filter</option>
      {filterEnum.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
          <br />
        </option>
      ))}
    </select>
  );
};

export default Select;
