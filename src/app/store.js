import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import pagesSliceReducer from "../components/pages/pagesSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
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
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export let persistor = persistStore(store);
export default store;
