import { RiUploadCloud2Line } from "react-icons/ri";
import Button from "./Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFile } from "../redux/slices/file-slice";

const Modal = ({ setModal }: { setModal: (x: boolean) => { x: boolean } }) => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const allowedFileTypes = [
    "application/pdf",
    "text/plain",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];
  const maxFileSize = 5 * 1024 * 1024; // 5MB

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      if (!allowedFileTypes.includes(file.type)) {
        setErrorMessage("Only text files (PDF, Word, Excel, TXT) are allowed.");
        setSelectedFile(null);
        return;
      }

      if (file.size > maxFileSize) {
        setErrorMessage("File size must not exceed 5MB.");
        setSelectedFile(null);
        return;
      }

      setErrorMessage(null);
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a valid file first!");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      const fileData = {
        id: 0,
        name: selectedFile.name,
        size: selectedFile.size,
        type: selectedFile.type,
        content: reader.result,
      };

      dispatch(addFile(fileData));
      alert("File uploaded successfully!");
    };

    setModal(false);
  };

  return (
    <div
      className="w-full min-h-screen fixed top-0 left-0 flex justify-center items-center backdrop-blur-sm"
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
        <h2 className="text-custompurpule font-bold drop-shadow w-full flex items-center text-center">
          Upload Your File
        </h2>
        <div className="w-full border border-customgray rounded h-28 border-dashed bg-custombg flex justify-center items-center text-customgray relative">
          <input
            type="file"
            accept={allowedFileTypes.join(",")}
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <button className="flex items-center justify-center focus:outline-none">
            <RiUploadCloud2Line className="text-2xl" />
          </button>
        </div>
        <p className="text-xs text-customtext drop-shadow">
          {selectedFile ? selectedFile.name : "No file selected"}
        </p>
        {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
        <Button
          text="Upload"
          onClickHandler={handleUpload}
          className="bg-custompurpule !text-custombg justify-center"
        />
      </div>
    </div>
  );
};

export default Modal;
