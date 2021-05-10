import { createSlice } from "@reduxjs/toolkit";

const pagesSlice = createSlice({
  name: "pages",
  initialState: {
    prefersDark: true,
  },
  reducers: {
    setDarkmode: (state) => {
      state.prefersDark = !state.prefersDark;
    },
  },
});

export const { setDarkmode } = pagesSlice.actions;
export const { selectState } = (state) => state;
export default pagesSlice.reducer;
