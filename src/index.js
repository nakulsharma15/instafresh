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
    <AuthProvider>
      <Router>
        <UserDetailProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </UserDetailProvider>
      </Router>
    </AuthProvider>

  </React.StrictMode>,
  document.getElementById("root")
);
