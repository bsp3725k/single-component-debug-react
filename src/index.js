import "regenerator-runtime/runtime"; // Add this at the top
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// Render the App component on the DOM node with id="root"
ReactDOM.render(<App />, document.getElementById("root"));