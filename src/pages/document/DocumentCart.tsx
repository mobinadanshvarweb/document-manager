import { LuDownload } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FileProps } from "../../types/file-type";
import PopUp from "../../components/PopUp";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeFile } from "../../redux/slices/file-slice";
import { RootState } from "../../redux/store";
const DocumentCart: React.FC<FileProps> = ({ name, type, id }) => {
  const dispatch = useDispatch();
  const check = useSelector((state: RootState) => state.file.check);
  const [showPop, setShowPop] = useState(false);
  const newType = type.slice(-3);
  const HandleDelete = () => {
    dispatch(removeFile(id));
    setShowPop(false);
  };
  return (
    <div className="w-full py-2 px-4 rounded-lg shadow bg-white flex justify-between items-center gap-4">
      <div className="flex gap-4">
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={check}
          readOnly
        />
        <span
          className={`w-8 h-8 rounded-full text-white flex justify-center items-center cursor-default font-bold ${
            newType === "pdf"
              ? "bg-[#AD0B00]"
              : newType === "eet"
              ? "bg-[#016E38]"
              : newType === "ent"
              ? "bg-[#295394]"
              : "bg-gray-300"
          }`}
        >
          {newType === "pdf"
            ? "P"
            : newType === "eet"
            ? "X"
            : newType === "ent"
            ? "W"
            : "T"}
        </span>
      </div>
      <p className="text-customtext w-1/3">{name.slice(0, name.length - 4)}</p>
      <div className="flex justify-start items-center w-2/12">
        <span
          className={`px-3 py-1 font-bold text-xs rounded flex justify-center items-center
            ${
              newType === "pdf"
                ? "bg-[#f78787] text-[#7a1919]"
                : newType === "eet"
                ? "bg-[#70f5b2] text-[#13683e]"
                : newType === "ent"
                ? "bg-[#7aadf9] text-[#13366a]"
                : "bg-gray-300 text-gray-800"
            }

          `}
        >
          {newType === "pdf"
            ? "PDF"
            : newType === "eet"
            ? "XLSX"
            : newType === "ent"
            ? "DOCX"
            : "TXT"}
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <span className="p-1 hover:bg-customgray hover:text-white duration-500 rounded cursor-pointer border border-customgray flex justify-center items-center text-customgray">
          <LuDownload />
        </span>
        <span
          onClick={() => {
            setShowPop(true);
          }}
          className="p-1 hover:bg-customgray hover:text-white duration-500 rounded cursor-pointer border border-customgray flex justify-center items-center text-customgray"
        >
          <RiDeleteBin6Line />
        </span>
      </div>
      {showPop && (
        <PopUp
          btnOneTxt="Delete"
          btnTwoTxt="Cancle"
          onclickHandlerBtnOne={HandleDelete}
          onclickHandlerBtnTwo={() => {
            setShowPop(false);
          }}
          text={`Are you Sure you want to delete ${name.slice(
            0,
            name.length - 4
          )} file ?!`}
        />
      )}
    </div>
  );
};

export default DocumentCart;
