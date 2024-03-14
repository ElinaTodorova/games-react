import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext.jsx";

import Paths from "../../paths/paths.js";

export default function Header() {
  const { isAuthenticated } = useAuthContext();
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
            <Link href="#">Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
