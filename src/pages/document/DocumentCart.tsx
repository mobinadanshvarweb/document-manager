import { LuDownload } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
const DocumentCart = () => {
  return (
    <div className="w-full p-2 rounded-lg shadow bg-white flex justify-between items-center gap-4">
      <div className="flex gap-4">
        <input type="checkbox" className="cursor-pointer" />
        <span className="w-8 h-8 rounded-full bg-red-700"></span>
      </div>
      <p className="text-customtext">name of file</p>
      <span className="px-3 py-1 font-bold text-xs rounded bg-[#cd21217c] text-[#631515] flex justify-center items-center">
        pdf
      </span>
      <div className="flex gap-2 items-center border">
        <span className="p-1 hover:bg-customgray hover:text-white duration-500 rounded cursor-pointer border border-customgray flex justify-center items-center text-customgray">
          <LuDownload />
        </span>
        <span className="p-1 hover:bg-customgray hover:text-white duration-500 rounded cursor-pointer border border-customgray flex justify-center items-center text-customgray">
          <RiDeleteBin6Line />
        </span>
      </div>
    </div>
  );
};

export default DocumentCart;
