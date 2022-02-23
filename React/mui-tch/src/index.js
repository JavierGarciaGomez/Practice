import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Navbar } from "./componets/Navbar/Navbar";

ReactDOM.render(
  <CssBaseline>
    <App />
  </CssBaseline>,
  document.getElementById("root")
);
