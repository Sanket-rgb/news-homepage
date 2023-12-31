import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import App from "./App";
import { ScreenWidthContextProvider } from "./store/screenwidth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ScreenWidthContextProvider>
      <App />
    </ScreenWidthContextProvider>
  </React.StrictMode>
);
