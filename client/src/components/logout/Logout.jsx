import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/useAuth.js";

import * as authService from "../../services/authService.js";
import { useEffect } from "react";
import Paths from "../../paths/paths.js";

export default function Logout() {
  const navigate = useNavigate();
  const { logoutHandler } = useAuthContext();

  useEffect(() => {
    authService
      .logout()
      .then(() => {
        logoutHandler();
        navigate(Paths.Home);
      })
      .catch(() => {    
        logoutHandler();
        navigate(Paths.Home);
      });
  }, []);

  return null;
}
