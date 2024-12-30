import { PopupProps } from "../types/pop-up-type";
import Button from "./Button";

const PopUp: React.FC<PopupProps> = ({
  text,
  onclickHandlerParent,
  onclickHandlerBtnOne,
  btnOneTxt,
  onclickHandlerBtnTwo,
  btnTwoTxt,
}) => {
  return (
    <div
      onClick={onclickHandlerParent}
      className="fixed w-full min-h-screen top-0 left-0 z-20 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-6 px-8 py-4 rounded-lg bg-custombg shadow-lg justify-center"
      >
        <div className="w-full flex items-center font-semibold text-customtext">
          {text}
        </div>
        <div className="flex justify-end items-center gap-4">
          <Button
            onClickHandler={onclickHandlerBtnOne}
            text={btnOneTxt}
            className="!w-fit rounded px-2 !py-1 bg-custompurpule text-custombg hover:bg-custombutton"
          />
          <Button
            onClickHandler={onclickHandlerBtnTwo}
            text={btnTwoTxt}
            className="!w-fit border border-custompurpule text-custompurpule  rounded px-2 !py-1  hover:bg-custombutton"
          />
        </div>
      </div>
    </div>
  );
};

export default PopUp;
