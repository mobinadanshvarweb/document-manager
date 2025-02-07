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
  sort: string;
  check: boolean;
  currentPage: number;
  currentItem: number;
  cPage: number;
  cItem: number;
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
  sort: "",
  check: false,
  currentPage: 1,
  currentItem: 5,
  cPage: 1,
  cItem: 5,
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
      state.filterAndSearch.push(fileWithId);

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
            state.filter === "")
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
            state.filter === "")
      );
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;

      const sortedFiles = state.filterAndSearch.slice().sort((a, b) => {
        if (action.payload.toLocaleLowerCase() === "latest") {
          return b.id - a.id;
        } else if (action.payload.toLocaleLowerCase() === "earliest") {
          return a.id - b.id;
        }
        return 0;
      });

      state.filterAndSearch = sortedFiles;
    },
    setCheck: (state) => {
      state.check = !state.check;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      if (action.payload < state.currentPage) {
        state.currentItem = state.currentItem - 5;
      } else {
        state.currentItem = state.currentItem + 5;
      }
      state.currentPage = action.payload;
    },
    setCPage: (state, action: PayloadAction<number>) => {
      state.cItem = action.payload;
    },
    removeFile: (state, action: PayloadAction<number>) => {
      state.file = state.file.filter((item) => item.id !== action.payload);
      state.filterAndSearch = state.filterAndSearch.filter(
        (item) => item.id !== action.payload
      );
      if (
        state.filterAndSearch.slice(state.currentItem - 5, state.currentItem)
          .length === 0
      ) {
        state.currentPage = state.currentPage - 1;
        state.currentItem = state.currentItem - 5;
      }
      localStorage.setItem("files", JSON.stringify(state.file));
    },
    deleteAll: (state) => {
      state.file = [];
      state.filterAndSearch = [];
      state.check = false;
      state.currentPage = 1;
      state.currentItem = 5;
      localStorage.setItem("files", JSON.stringify(state.file));
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addFile,
  setSearch,
  setFilter,
  setSort,
  setCheck,
  setCurrentPage,
  setCPage,
  removeFile,
  deleteAll,
} = fileSlice.actions;

export default fileSlice.reducer;
