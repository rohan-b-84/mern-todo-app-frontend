import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import userContext from "../context/user/userContext";

const Nav = () => {
  const { loggedIn, setLoggedIn, username } = useContext(userContext);
  const history = useHistory();

  return (
    <>
      <nav>
        <div className="nav-logo">TODOS</div>
        <div className="nav-menu">
          {loggedIn ? (
            <>
              <div>Welcome {username}!</div>
              <div
                className="nav-item"
                onClick={() => {
                  localStorage.removeItem("token");
                  setLoggedIn(false);
                  history.push("/");
                }}
              >
                Log Out
              </div>
            </>
          ) : (
            <>
              <Link className="nav-item" to="/login">
                Log In
              </Link>
              <Link className="nav-item" to="/signup">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};
export default Nav;
