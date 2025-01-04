import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import DashboardCart from "./DashboardCart";
import Button from "../../components/Button";
import { setCPage } from "../../redux/slices/file-slice";

const DashboardList = () => {
  const files = useSelector((state: RootState) => state.file.filterAndSearch);
  const cItem = useSelector((state: RootState) => state.file.cItem);
  const dispatch = useDispatch();
  const newData = files.slice(0, cItem);
  return (
    <div>
      {files.length < 1 ? (
        <div className="w-full justify-center items-center flex font-bold text-3xl text-custompurpule">
          No Item Found !
        </div>
      ) : (
        <div className="w-full flex flex-col gap-4 bg-white my-4">
          {newData?.map((item) => {
            return (
              <DashboardCart
                id={item.id}
                key={item.id}
                name={item.name}
                content={item.content}
                size={item.size}
                type={item.type}
              />
            );
          })}
          {files.length >= 4 && (
            <>
              <Button
                disabled={files.length == newData.length && cItem > 5}
                className="w-full flex justify-center items-center text-customtext"
                text={`${
                  files.length === newData.length && cItem > 5
                    ? "No More Data"
                    : "+ View More"
                }`}
                onClickHandler={() => {
                  console.log("dvkvokskdvodskv");
                  console.log(cItem);

                  dispatch(setCPage(cItem + 5));
                }}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardList;
