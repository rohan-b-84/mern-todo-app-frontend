import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import userContext from "../context/user/userContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { checkUser, setLoggedIn, getUsername } = useContext(userContext);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      email,
      password,
    };
    let status = await checkUser(user);
    if (status) {
      setLoggedIn(true);
      getUsername();
      history.push("/todo");
    }
  };

  return (
    <main className="auth-page">
      <aside></aside>
      <section>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePass}
            />
          </div>
          <button>Log in</button>
        </form>
      </section>
    </main>
  );
}
