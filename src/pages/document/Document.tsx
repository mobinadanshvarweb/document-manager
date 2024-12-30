import { useSelector } from "react-redux";
import DocumentCart from "./DocumentCart";
import { RootState } from "../../redux/store";

const Document = () => {
  const files = useSelector((state: RootState) => state.file.file);
  return (
    <div className="w-full flex flex-col gap-4">
      {files.map((file) => {
        return (
          <DocumentCart
            id={file.id}
            name={file.name}
            type={file.type}
            key={file.id}
            size={file.size}
          />
        );
      })}
    </div>
  );
};

export default Document;
