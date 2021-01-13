import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import {PlayerContextProvider} from "./playerContext"


ReactDOM.render(
  <PlayerContextProvider>
  <App />
  </PlayerContextProvider>
  , document.getElementById("root"));
