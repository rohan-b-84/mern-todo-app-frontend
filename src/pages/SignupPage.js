import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import userContext from "../context/user/userContext";
export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { newUser } = useContext(userContext);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      name,
      email,
      password,
    };
    let status = await newUser(user);
    if (status) {
      history.push("/login");
    }
  };
  return (
    <main className="auth-page">
      <aside></aside>
      <section>
        <form className="auth-form sign-up" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleName}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleEmail}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handlePass}
              value={password}
            />
          </div>
          <button>Sign Up</button>
        </form>
      </section>
    </main>
  );
}
