import { RiUploadCloud2Line } from "react-icons/ri";
import Button from "./Button";
const Modal = ({ setModal }) => {
  return (
    <div
      className="w-full min-h-screen  fixed top-0 left-0 flex justify-center items-center backdrop-blur-sm"
      onClick={() => {
        setModal(false);
      }}
    >
      <div
        className="w-64 bg-white px-4 shadow-lg py-8 rounded-lg flex flex-col gap-6"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2 className="text-custompurpule font-bold text-2xl w-full flex justify-center items-center text-center">
          Upload Your File
        </h2>
        <div className="w-full border border-customgray rounded h-28 border-dashed bg-custombg flex justify-center items-center text-customgray relative">
          <input
            type="file"
            accept="image/*"
            onChange={() => {}}
            className="absolute inset-0 w-full h-full opacity-0  cursor-pointer"
          />
          <button
            className="flex items-center justify-center  focus:outline-none"
            onClick={() => {}}
          >
            <RiUploadCloud2Line className="text-2xl" />
          </button>
        </div>
        <Button
          text="Upload"
          onClickHandler={() => {}}
          className="bg-custompurpule text-custombg justify-center"
        />
      </div>
    </div>
  );
};

export default Modal;
