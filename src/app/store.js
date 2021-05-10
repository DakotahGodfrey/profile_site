import { configureStore } from "@reduxjs/toolkit";
import pagesSliceReducer from "../components/pages/pagesSlice";

const store = configureStore({
  reducer: {
    pagesSlice: pagesSliceReducer,
  },
  initialState: "",
});

export default store;
