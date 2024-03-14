import { Link } from "react-router-dom";

import Paths from "../../paths/paths.js";
import { useAuthContext } from "../../contexts/useAuth.js";

export default function Header() {
  const { isAuthenticated } = useAuthContext();
  // console.log(isAuthenticated)
  return (
    <header>
      <h1>
        <Link className="home" to={Paths.Home}>
          GamesPlay
        </Link>
      </h1>
      <nav>
        <Link to={Paths.Games}>All games</Link>
        {isAuthenticated && (
          <div id="user">
            <Link to={Paths.CreateGame}>Create Game</Link>
            <Link to="#">Logout</Link>
          </div>
        )}

        {!isAuthenticated && (
          <div id="guest">
            <Link to={Paths.Login}>Login</Link>
            <Link to={Paths.Register}>Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
