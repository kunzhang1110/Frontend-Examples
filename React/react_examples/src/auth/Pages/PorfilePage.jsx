import React from "react";
import { useAuth } from "../AuthProvider";

export const ProfilePage = () => {
  const { user, logout } = useAuth();
  
  const logoutHandler = () => {
    logout();
  };
  return (
    <>
      <h1>Welcome {user.username}</h1>
      <button type="submit" onClick={logoutHandler}>
        Logout
      </button>
    </>
  );
};
