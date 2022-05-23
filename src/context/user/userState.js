import React, { useEffect, useState } from "react";
import userContext from "./userContext";

const UserState = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
      getUsername();
    } else {
      setLoggedIn(false);
    }
  }, []);

  const newUser = async (user) => {
    try {
      let data = JSON.stringify(user);

      let res = await fetch("http://localhost:5000/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      let resJSON = await res.json();
      let status = await resJSON.status;
      return status;
    } catch (error) {
      console.log(error);
    }
  };

  const checkUser = async (user) => {
    try {
      let data = JSON.stringify(user);

      let res = await fetch("http://localhost:5000/api/auth/verify-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      let resJSON = await res.json();
      let status = await resJSON.status;
      let token = resJSON.token;
      localStorage.setItem("token", token);
      return status;
    } catch (error) {
      console.log(error);
    }
  };

  const getUsername = async () => {
    try {
      const token = localStorage.getItem("token");
      fetch("http://localhost:5000/api/auth/get-user", {
        method: "POST",
        headers: {
          "auth-token": token,
        },
      })
        .then((response) => response.json())
        .then((resJSON) => setUsername(resJSON.name));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <userContext.Provider
      value={{
        newUser,
        checkUser,
        setLoggedIn,
        loggedIn,
        username,
        getUsername,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
