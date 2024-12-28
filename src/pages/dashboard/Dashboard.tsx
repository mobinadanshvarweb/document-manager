import DashboardList from "./DashboardList";

const Dashboard = () => {
  return (
    <div className="w-full p-3 bg-white rounded-lg flex flex-col shadow border-customgray">
      <div className="text-customtext p-1 border-b border-gray-300 font-bold text-md">
        Last modifide documents
      </div>
      <div className="w-full h-60">
        <DashboardList />
      </div>
      <div className="w-full flex justify-center cursor-pointer items-center text-customtext">
        + View More
      </div>
    </div>
  );
};

export default Dashboard;
