import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface File {
  id: number;
  name: string;
  size: number;
  type: string;
  content: string | ArrayBuffer | null;
}

export interface FileState {
  file: File[];
  filterAndSearch: File[];
  search: string;
  filter: string;
}

const initialState: FileState = {
  file: (() => {
    try {
      return JSON.parse(localStorage.getItem("files") || "[]");
    } catch {
      return [];
    }
  })(),
  filterAndSearch: (() => {
    try {
      return JSON.parse(localStorage.getItem("files") || "[]");
    } catch {
      return [];
    }
  })(),
  search: "",
  filter: "",
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
    setSearch: (state, action) => {
      state.search = action.payload;
      state.filterAndSearch = state.file.filter(
        (item) =>
          (item.name
            .toLocaleLowerCase()
            .includes(state.search.toLocaleLowerCase()) ||
            state.search === "") &&
          (item.type.slice(-3).toLocaleLowerCase().includes(state.filter) ||
            state.filter == "")
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.filterAndSearch = state.file.filter(
        (item) =>
          (item.name
            .toLocaleLowerCase()
            .includes(state.search.toLocaleLowerCase()) ||
            state.search === "") &&
          (item.type.slice(-3).toLocaleLowerCase().includes(state.filter) ||
            state.filter == "")
      );
    },
    removeFile: (state, action: PayloadAction<number>) => {
      state.file = state.file.filter((item) => item.id !== action.payload);
      localStorage.setItem("files", JSON.stringify(state.file));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFile, setSearch, setFilter, removeFile } = fileSlice.actions;

export default fileSlice.reducer;
