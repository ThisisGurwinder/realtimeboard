import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import data from "./data";

ReactDOM.render(<App datasets={data}/>, document.getElementById("root"));
