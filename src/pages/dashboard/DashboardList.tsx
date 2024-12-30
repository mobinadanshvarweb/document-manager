import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import DashboardCart from "./DashboardCart";

const DashboardList = () => {
  const files = useSelector((state: RootState) => state.file.filterAndSearch);
  return (
    <div>
      {files.length < 1 ? (
        <div className="w-full justify-center items-center flex font-bold text-3xl text-custompurpule">
          No Item Found !
        </div>
      ) : (
        <div className="w-full flex flex-col gap-4 bg-white my-4">
          {files?.map((item) => {
            return (
              <DashboardCart
                id={item.id}
                key={item.id}
                name={item.name}
                content={item.content}
                size={item.size}
                type={item.type}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DashboardList;
