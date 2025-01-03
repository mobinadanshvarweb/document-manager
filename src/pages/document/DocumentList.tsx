import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import DocumentCart from "./DocumentCart";
import DeleteAllDocument from "./DeleteAllDocument";

const DocumentList = () => {
  const files = useSelector((state: RootState) => state.file.filterAndSearch);

  return (
    <div className="w-full flex flex-col">
      {files.length < 1 ? (
        <div className="w-full justify-center items-center flex font-bold text-3xl text-custompurpule">
          No Item Found !
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <DeleteAllDocument />
          {files.map((file) => {
            return (
              <DocumentCart
                id={file.id}
                name={file.name}
                type={file.type}
                key={file.id}
                size={file.size}
                content={file.content}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DocumentList;
