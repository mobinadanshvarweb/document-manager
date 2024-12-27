import { useDispatch, useSelector } from "react-redux";
import UserLogin from "../../components/UserLogin";
import { RootState } from "../../redux/store";
import {
  setPassword,
  setSignUp,
  setUser,
} from "../../redux/slices/signup-slice";
import { useState } from "react";
import { useNavigate } from "react-router";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, password } = useSelector(
    (state: RootState) => state.signup.userData
  );
  const [error, setError] = useState("");
  const handleClick = () => {
    if (!user || !password) {
      setError("Please fulfill your data!");
      return;
    } else {
      setError("");
      dispatch(setSignUp());
      navigate("/dashboard");
    }
  };
  return (
    <UserLogin
      textType="text"
      passType="password"
      userPlaceholder="User Name"
      passPlaceholder="Password"
      actionUser={setUser}
      actionPass={setPassword}
      onClickHandler={handleClick}
      text="Sign Up"
      userValue={user}
      passValue={password}
      linkText="Already have account? Login"
      link="/login"
      error={error}
    />
  );
};

export default SignUp;
