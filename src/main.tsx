import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import App2 from "./App2.tsx";
import "bootstrap/dist/css/bootstrap.css";

const rootElement = document.getElementById("root");
const linksElement = document.getElementById("links");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(linksElement).render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);
