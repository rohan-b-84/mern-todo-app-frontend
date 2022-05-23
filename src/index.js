import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import UserState from "./context/user/userState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserState>
      <Router>
        <App />
      </Router>
    </UserState>
  </React.StrictMode>
);
