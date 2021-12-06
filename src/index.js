import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./style.css";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

ReactDOM.render(<App />, document.getElementById("app"));
