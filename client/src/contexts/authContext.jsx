import { createContext, useContext, useState } from "react";
import * as authService from "../services/authService.js";
import Paths from "../paths/paths.js";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export function AuthProvider(children) {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  const loginHandler = async (values) => {
    const result = await authService.login(values);

    setAuth(result);

    navigate(Paths.Home);
    console.log(auth)
  };

  const data = {
    auth,
    loginHandler
  }

  return(
    <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
  )
}
