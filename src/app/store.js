import { configureStore } from "@reduxjs/toolkit";
import pagesSliceReducer from "../components/pages/pagesSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistPagesReducer = persistReducer(persistConfig, pagesSliceReducer);
const store = configureStore({
  reducer: {
    pagesSlice: persistPagesReducer,
  },
  initialState: "",
});

export let persistor = persistStore(store);
export default store;
