import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import App from "./App.jsx";
import store, { persistor } from "./app/store.js";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
