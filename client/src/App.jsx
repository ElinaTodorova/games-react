import GameCreate from "./components/game-create/GameCreate.jsx";
import GamesCatalog from "./components/games-catalog/GamesCatalog.jsx";
import GamesHome from "./components/games-home/GamesHome.jsx";
import Header from "./components/header/Header.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="box">
      <Header />
      <Routes>
        <Route path="/" element={<GamesHome />} />
        <Route path="/games" element={ <GamesCatalog />} />
        <Route path="/games/create" element={ <GameCreate />} />
      </Routes>
    </div>
  );
}

export default App;
