import GamesHome from "./components/games-home/GamesHome.jsx";
import Header from "./components/header/Header.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="box">
      <Header />
      <Routes>
        <Route path="/" element={<GamesHome />} />
      </Routes>
    </div>
  );
}

export default App;
