import Select from "../../components/Select";
import DashboardList from "./DashboardList";

const Dashboard = () => {
  return (
    <div className="w-[90%] p-3 bg-white rounded-lg flex flex-col shadow border-customgray">
      <div className="flex justify-between p-1 border-b border-gray-300 items-center">
        <div className="text-customtext font-bold text-md">
          Last modifide documents
        </div>
        <div className="flex-1 flex justify-end r items-center relative">
          <Select />
          {/* <span>|||</span>
          <div className="absolute flex flex-col w-36 bg-white rounded-lg shadow px-4 py-2 top-[100%]">
            <div className="border-b cursor-pointer py-1">PDF</div>
            <div className="border-b cursor-pointer py-1">DOCX</div>
            <div className="border-b cursor-pointer py-1">XLSX</div>
            <div className=" cursor-pointer py-1">TXT</div>
          </div> */}
        </div>
      </div>
      <div className="w-full">
        <DashboardList />
      </div>
      <div className="w-full flex justify-center cursor-pointer items-center text-customtext">
        + View More
      </div>
    </div>
  );
};

export default Dashboard;
