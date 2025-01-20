import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { SpeedInsights } from "@vercel/speed-insights/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
    <SpeedInsights />
  </Fragment>
);
