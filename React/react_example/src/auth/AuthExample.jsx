import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import {
  AuthProvider,
  Authentication,
  Authorization,
  PERMISSIONS,
  useAuth,
} from "./AuthProvider";
import { HomePage, AboutPage, ExtraPage } from "./Pages/OtherPages";
import { ProfilePage } from "./Pages/PorfilePage";
import { LoginPage } from "./Pages/LoginPage";

export const AuthExample = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route
          element={<Authorization permissions={[PERMISSIONS.CAN_VIEW_ABOUT]} />}
        >
          <Route path="about" element={<AboutPage />} />
        </Route>
        <Route
          path="profile"
          element={
            <Authentication>
              <ProfilePage />
            </Authentication>
          }
        />
        <Route
          element={<Authorization permissions={[PERMISSIONS.CAN_VIEW_EXTRA]} />}
        >
          <Route path="extra" element={<ExtraPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </AuthProvider>
  );
};

const Navbar = () => {
  const { user } = useAuth();
  return (
    <nav>
      <NavLink to="./">Home</NavLink>
      <NavLink to="./about">About</NavLink>
      {user.username && <NavLink to="./profile">Profile</NavLink>}
      {!user.username && <NavLink to="./login">Login</NavLink>}
      <NavLink to="./extra">Extra</NavLink>
    </nav>
  );
};

//Reference: https://medium.com/@ghimiresamana666/authentication-and-authorization-in-react-8fc76a496ba0
