import { useEffect, useState } from "react";
import * as services from "../../services/gameService.js";
import { useParams } from "react-router-dom";
import GameMainDetails from "./game-main-details/GameMainDetails.jsx";

export default function GameDetails() {
  const [game, setGame] = useState({});
  const { id } = useParams();

  useEffect(() => {
    services
      .getById(id)
      .then((result) => setGame(result))
      .catch((err) => console.error(err));
  }, [id]);

  console.log(game)
  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <GameMainDetails {...game} />
        <div className="buttons">
          <a href="#" className="button">
            Edit
          </a>
          <a href="#" className="button">
            Delete
          </a>
        </div>
      </div>
    </section>
  );
}
