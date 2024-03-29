import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext.jsx";

import Paths from "./paths/paths.js";

import GameCreate from "./components/game-create/GameCreate.jsx";

import GamesCatalog from "./components/games-catalog/GamesCatalog.jsx";
import GameDetails from "./components/games-details/GameDetails.jsx";
import GamesHome from "./components/games-home/GamesHome.jsx";
import Header from "./components/header/Header.jsx";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import Logout from "./components/logout/Logout.jsx";
import GameEdit from "./components/game-edit/GameEdit.jsx";
import AuthGuard from "./guards/AuthGuard.jsx";

function App() {
  return (
    <AuthProvider>
      <div id="box">
        <Header />
        <Routes>
          <Route path={Paths.Home} element={<GamesHome />} />
          <Route path={Paths.Games} element={<GamesCatalog />} />
          <Route path={Paths.Details} element={<GameDetails />} />
          <Route path={Paths.Login} element={<Login />} />
          <Route path={Paths.Register} element={<Register />} />
          <Route path={Paths.Logout} element={<Logout />} />
          <Route element={<AuthGuard />}>
            <Route path={Paths.CreateGame} element={<GameCreate />} />
            <Route path={Paths.EditGame} element={<GameEdit />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
