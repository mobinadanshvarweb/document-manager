import { FileProps } from "../../types/file-type";

const DashboardCart: React.FC<FileProps> = ({ name, type, size }) => {
  const newSize = Math.ceil(size / 1000);
  return (
    <div className="flex gap-4 items-center cursor-default">
      <span className="w-1/3 text-customtext text-sm font-bold">
        {name.slice(0, name.length - 4)}
      </span>
      <span className="w-1/4 text-customgray text-xs">
        {type.slice(type.length - 3, type.length)}
      </span>
      <span className="w-1/4 text-customgray text-xs">{newSize} KB</span>
    </div>
  );
};

export default DashboardCart;
