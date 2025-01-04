import { useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/slices/file-slice";

const Pagination = ({ current, total, item }) => {
  const dispatch = useDispatch();
  const totalPages = Math.ceil(total / item);

  return (
    <div className="w-full flex justify-center items-center gap-4">
      <button
        onClick={() => dispatch(setCurrentPage(current - 1))}
        disabled={current === 1}
        className="p-3 rounded-lg border flex justify-center items-center"
      >
        &lt; Prev
      </button>
      <span className="p-3 rounded-lg border flex justify-center items-center">
        {current} of {totalPages}
      </span>
      <button
        onClick={() => dispatch(setCurrentPage(current + 1))}
        disabled={current === totalPages}
        className="p-3 rounded-lg border flex justify-center items-center"
      >
        Next &gt;
      </button>
    </div>
  );
};
export default Pagination;
