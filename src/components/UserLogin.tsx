import { Link } from "react-router";
import { UserLoginProps } from "../types/user-login-type";
import Button from "./Button";
import Input from "./Input";

const UserLogin: React.FC<UserLoginProps> = ({
  textType,
  passType,
  userPlaceholder,
  actionUser,
  actionPass,
  passPlaceholder,
  userValue,
  passValue,
  text,
  onClickHandler,
  error,
  linkText,
  link,
}) => {
  return (
    <div className="w-full flex justify-center items-center bg-custombg h-screen md:min-h-[100vh]">
      <div className="p-2 md:p-8 rounded-lg flex flex-col justify-center items-center gap-4 bg-white border md:min-w-80">
        <h1 className="w-full text-center flex justify-center items-center text-2xl text-customtext font-bold">
          Document Manager
        </h1>
        <Input
          type={textType}
          placeholder={userPlaceholder}
          action={actionUser}
          value={userValue}
        />
        <Input
          type={passType}
          placeholder={passPlaceholder}
          action={actionPass}
          value={passValue}
        />
        <Button
          text={text}
          onClickHandler={onClickHandler}
          className="justify-center border bg-custombutton hover:bg-customtext hover:text-custombutton"
        />
        {error && (
          <span className="text-xs font-bold text-red-800" aria-live="polite">
            {error}
          </span>
        )}
        <Link className="text-xs text-center underline" to={link}>
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
