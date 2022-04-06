import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider } from "./Filters/FilterContext";
import { UserDetailProvider } from "./Context/UserDetailContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <UserDetailProvider>
      <FilterProvider>
        <Router>
          <App />
        </Router>
      </FilterProvider>
    </UserDetailProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
