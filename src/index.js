import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Monitor from "./page/monitor/Monitor";

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <React.StrictMode>
    <Monitor />
  </React.StrictMode>
);

reportWebVitals();
