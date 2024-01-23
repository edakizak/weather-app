import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import selectedLocation from "./components/locations/Locations.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className={`app-container ${selectedLocation}`}>
      <App />
    </div>
  </React.StrictMode>
);
