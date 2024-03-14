import { createContext, useContext, useState } from "react";
import * as authService from "../services/authService.js";
import Paths from "../paths/paths.js";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  const loginHandler = async (values) => {
    try {
      const result = await authService.login(values.email, values.password);
      setAuth(result);
      localStorage.setItem("access_token", result.accessToken);
      navigate(Paths.Home);
    } catch {
      (err) => console.error(err);
    }
  };

  const data = {
    loginHandler,
    // registerSubmitHandler,
    // logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
