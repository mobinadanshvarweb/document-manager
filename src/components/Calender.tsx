import { HiCalendar } from "react-icons/hi2";
import timeOfDay from "../util/date";
const Calender = () => {
  const date = timeOfDay();
  console.log(date, "in");

  return (
    <div className="flex items-center gap-4 text-customgray cursor-default">
      <HiCalendar className="text-xl" />
      {date}
    </div>
  );
};

export default Calender;
