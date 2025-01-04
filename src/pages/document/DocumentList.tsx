import { useSelector } from "react-redux";
import Pagination from "../../components/Pagination";
import DeleteAllDocument from "./DeleteAllDocument";
import DocumentCart from "./DocumentCart";
import { RootState } from "../../redux/store";

const DocumentList = () => {
  const files = useSelector((state: RootState) => state.file.filterAndSearch);
  const currentPage = useSelector((state: RootState) => state.file.currentPage);
  const currentItem = useSelector((state: RootState) => state.file.currentItem);
  const displayedFiles = files.slice(currentItem - 5, currentItem);
  return (
    <div className="w-full flex flex-col">
      {files.length < 1 ? (
        <div className="w-full justify-center items-center flex font-bold text-3xl text-custompurpule">
          No Item Found !
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <DeleteAllDocument />
          {displayedFiles.length > 0 ? (
            <div className="flex flex-col gap-4 min-h-80">
              <div className="flex-1 flex flex-col gap-4">
                {displayedFiles.map((file) => (
                  <DocumentCart
                    id={file.id}
                    name={file.name}
                    type={file.type}
                    key={file.id}
                    size={file.size}
                    content={file.content}
                  />
                ))}
              </div>
              <Pagination current={currentPage} item={5} total={files.length} />
            </div>
          ) : (
            <div className="w-full justify-center items-center flex font-bold text-3xl text-custompurpule">
              No Item Found !
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default DocumentList;
