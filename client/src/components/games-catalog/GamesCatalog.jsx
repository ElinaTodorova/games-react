import { useEffect, useState } from "react";
import * as services from "../../services/gameService.js";
import Game from "./game/Game.jsx";

export default function GamesCatalog() {
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    services
      .getAll()
      .then((result) => setAllGames(result))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      {allGames.map((game) => (
        <Game key={game._id} {...game} />
      ))}

      {allGames.length === 0 && (
        <h3 className="no-articles">No articles yet</h3>
      )}
    </section>
  );
}
