import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider } from "./Filters/FilterContext";
import { UserDetailProvider } from "./Context/UserDetailContext";
import { AuthProvider } from "./Context/AuthContext"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <UserDetailProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </UserDetailProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
