import { useNavigate } from "react-router-dom";
import { AuthContext } from "./useAuth.js";

import usePersistedState from "../hooks/usePersistedState.js";
import PropTypes from "prop-types";

import * as authService from "../services/authService.js";
import Paths from "../paths/paths.js";


export function AuthProvider({ children }) {
  const [auth, setAuth] = usePersistedState('auth', {});
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

  const registerHandler = async(values) => {
    try {
      const result = await authService.register(values);
      setAuth(result);
      localStorage.setItem("access_token", result.accessToken);
      navigate(Paths.Home);
    }catch{
      (err) => console.error(err)
    }

  }

  const logoutHandler = async () => {
    setAuth({});

    localStorage.removeItem('access_token')
  }
    
  const data = {
    loginHandler,
    registerHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
