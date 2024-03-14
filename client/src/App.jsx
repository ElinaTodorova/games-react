import { Routes, Route } from "react-router-dom";

import Paths from "./paths/paths.js";

import GameCreate from "./components/game-create/GameCreate.jsx";
import GamesCatalog from "./components/games-catalog/GamesCatalog.jsx";
import GameDetails from "./components/games-details/GameDetails.jsx";
import GamesHome from "./components/games-home/GamesHome.jsx";
import Header from "./components/header/Header.jsx";

function App() {
  return (
    <div id="box">
      <Header />
      <Routes>
        <Route path={Paths.Home} element={<GamesHome />} />
        <Route path={Paths.Games} element={ <GamesCatalog />} />
        <Route path={Paths.CreateGame} element={ <GameCreate />} />
        <Route path={Paths.Game} element={ <GameDetails />} />
      </Routes>
    </div>
  );
}

export default App;
