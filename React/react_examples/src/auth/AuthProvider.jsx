import React, { createContext, useContext, useState } from "react";
import { Navigate, useNavigate, useLocation, Outlet } from "react-router-dom";
import { UnauthorizedPage } from "./Pages/OtherPages";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/profile";

  const [user, setUser] = useState({
    username: "",
    permissions: [],
  });

  const login = (user) => {
    //omitting fetching from authentication server
    if (user === "admin") {
      setUser({ username: user, permissions: ["view_extra"] });
    } else {
      setUser({ username: user, permissions: ["view_about"] });
    }
    navigate(redirectPath, { replace: true });
  };

  const logout = () => {
    setUser({ username: "", permissions: [] });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const Authorization = ({ permissions }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (user.username) {
    const userPermission = user.permissions;
    const isAllowed = permissions.some((permission) =>
      userPermission.includes(permission)
    );
    return isAllowed ? <Outlet /> : <UnauthorizedPage />;
  }
  return <Navigate to="./login" state={{ path: location.pathname }} replace />; //replace entry in history stack
};

export const Authentication = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  if (!user.username) {
    return <Navigate to="./login" state={{ path: location.pathname }} />;
  }
  return children;
};

export const PERMISSIONS = {
  CAN_VIEW_ABOUT: "view_about",
  CAN_VIEW_EXTRA: "view_extra",
};
