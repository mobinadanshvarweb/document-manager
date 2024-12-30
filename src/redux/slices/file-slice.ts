import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";

interface File {
  id: number;
  name: string;
  size: number;
  type: string;
  content: string | ArrayBuffer | null;
}

export interface FileState {
  file: File[];
}

const initialState: FileState = {
  file: (() => {
    try {
      return JSON.parse(localStorage.getItem("files") || "[]");
    } catch {
      return [];
    }
  })(),
};

export const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    addFile: (state, action: PayloadAction<File>) => {
      const id =
        state.file.length > 0 ? state.file[state.file.length - 1].id + 1 : 1;
      const fileWithId = { ...action.payload, id };
      state.file.push(fileWithId);
      localStorage.setItem("files", JSON.stringify(state.file));
    },
    removeFile: (state, action: PayloadAction<number>) => {
      state.file = state.file.filter((item) => item.id !== action.payload);
      localStorage.setItem("files", JSON.stringify(state.file));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFile, removeFile } = fileSlice.actions;

export default fileSlice.reducer;
