import { FileProps } from "../../types/file-type";

const DashboardCart: React.FC<FileProps> = ({ name, type, size }) => {
  const newSize = Math.ceil(size / 1000);
  const newType = type.slice(-3);

  return (
    <div className="flex gap-4 px-4 py-1 items-center justify-between cursor-default">
      <span className="w-1/3 text-customtext text-sm flex items-center font-bold">
        {name.slice(0, name.length - 4)}
      </span>
      <span className="w-1/4 text-customgray flex justify-center items-center text-xs">
        {newType === "pdf"
          ? "PDF"
          : newType === "eet"
          ? "XLSX"
          : newType === "ent"
          ? "DOCX"
          : "TXT"}
      </span>
      <span className="w-1/4 text-customgray flex justify-center items-center text-xs">
        {newSize} KB
      </span>
    </div>
  );
};

export default DashboardCart;
