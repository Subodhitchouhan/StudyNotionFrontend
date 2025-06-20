import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";   //importing BrowserRouter for routing
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import rootReducer from "./reducer";
import {configureStore} from "@reduxjs/toolkit"


const store = configureStore({
  reducer:rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store = {store}>
  <BrowserRouter>                 {/* Using BrowserRouter to enable routing in the app */}
    <App />
    <Toaster/>
  </BrowserRouter>
  </Provider>
  </React.StrictMode>
);
