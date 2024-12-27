// signup-slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SignupState {
  userData: {
    user: string;
    password: string;
  };
}

const initialState: SignupState = {
  userData: {
    user: "",
    password: "",
  },
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.userData.user = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.userData.password = action.payload;
    },
    setSignUp: (state) => {
      localStorage.setItem("signup", JSON.stringify(state.userData));
      state.userData = { user: "", password: "" };
    },
  },
});

export const { setUser, setPassword, setSignUp } = signupSlice.actions;

export default signupSlice.reducer;
