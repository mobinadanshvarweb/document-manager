import Select from "../../components/Select";
import { FilterEnum, SortEnum } from "../../enums/filter-enum";
import { setFilter, setSort } from "../../redux/slices/file-slice";
import DashboardList from "./DashboardList";

const Dashboard = () => {
  return (
    <div className="w-[90%] p-3 bg-white rounded-lg flex flex-col shadow border-customgray">
      <div className="flex justify-between p-1 border-b border-gray-300 items-center">
        <div className="text-customtext font-bold text-md">
          Last modifide documents
        </div>
        <div className="flex-1 flex justify-end gap-4 items-center relative">
          <Select action={setSort} customEnum={SortEnum} text="Sort" />
          <Select
            action={setFilter}
            customEnum={FilterEnum}
            text="Select Filter"
          />
        </div>
      </div>
      <div className="w-full">
        <DashboardList />
      </div>
    </div>
  );
};

export default Dashboard;
