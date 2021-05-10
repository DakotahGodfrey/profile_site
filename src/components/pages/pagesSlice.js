import { createSlice } from "@reduxjs/toolkit";

const pagesSlice = createSlice({
  name: "pages",
  initialState: {
    darkMode: false,
  },
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { setDarkMode } = pagesSlice.actions;
export const selectPages = (state) => state.pagesSlice;
export default pagesSlice.reducer;
