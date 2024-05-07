import React, { useState } from "react";
import { useAuth } from "../AuthProvider";

export const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const loginHandler = () => {
    login(username);
  };

  return (
    <div>
      <label>Username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};
