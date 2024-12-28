import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/login-slice";
import signupSlice from "./slices/signup-slice";
import fileSlice from "./slices/file-slice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    signup: signupSlice,
    file: fileSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
