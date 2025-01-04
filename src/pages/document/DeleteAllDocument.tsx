import { useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { deleteAll, setCheck } from "../../redux/slices/file-slice";
import PopUp from "../../components/PopUp";

const DeleteAllDocument = () => {
  const dispatch = useDispatch();

  const [recycel, setRecycel] = useState(false);
  const [showPop, setShowPop] = useState(false);
  const HandleDelete = () => {
    dispatch(deleteAll());
  };
  return (
    <div className="w-full flex gap-5 px-4">
      <input
        checked={recycel}
        type="checkbox"
        name=""
        id=""
        onChange={() => {
          console.log("here");
          dispatch(setCheck());
          setRecycel(!recycel);
        }}
      />
      <button
        disabled={!recycel}
        onClick={() => {
          setShowPop(true);
        }}
        title="Delete All"
        className={`p-1 hover:bg-customgray hover:text-white duration-500 rounded  flex justify-center items-center text-customgray  ${
          recycel
            ? "translate-x-0 opacity-100 cursor-pointer "
            : "translate-x-[-100%] opacity-0 cursor-default"
        } `}
      >
        <RiDeleteBin6Line />
      </button>
      {showPop && (
        <PopUp
          btnOneTxt="Delete"
          btnTwoTxt="Cancle"
          onclickHandlerBtnOne={HandleDelete}
          onclickHandlerBtnTwo={() => {
            setShowPop(false);
            setRecycel(false);
            dispatch(setCheck());
          }}
          text={`Are you Sure you want to delete All file ?!`}
        />
      )}
    </div>
  );
};

export default DeleteAllDocument;
