import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
    <PersistGate loading="Loading..." persistor={store.persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
