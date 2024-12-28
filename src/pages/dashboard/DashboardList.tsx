import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import DashboardCart from "./DashboardCart";

const DashboardList = () => {
  const files = useSelector((state: RootState) => state.file.file);
  return (
    <div className="w-full flex flex-col gap-4 bg-white my-4">
      {files?.map((item) => {
        return (
          <DashboardCart
            key={item.id}
            name={item.name}
            content={item.content}
            size={item.size}
            type={item.type}
          />
        );
      })}
    </div>
  );
};

export default DashboardList;
