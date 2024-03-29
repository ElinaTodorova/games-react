import { useEffect, useState } from "react";
import * as gameServices from "../../services/gameService.js";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm.js";
import Paths from "../../paths/paths.js";

export default function GameEdit() {
  const [game, setGame] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    gameServices
      .getById(id)
      .then((result) => setGame(result))
      .catch((err) => console.error(err));
  }, [id]);

  const onChange = (e) => {
    setGame((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await gameServices.edit(id, game);

    navigate(Paths.Games);
  };

  return (
    <section id="edit-page" className="auth">
      <form id="edit" onSubmit={onSubmit}>
        <div className="container">
          <h1>Edit Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={game.title}
            onChange={onChange}
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={game.category}
            onChange={onChange}
          />

          <label htmlFor="levels">MaxLevel:</label>
          <input type="number" id="maxLevel" name="maxLevel" min="1" value={game.maxLevel} onChange={onChange}/>

          <label htmlFor="game-img">Image:</label>
          <input type="text" id="imageUrl" name="imageUrl" value={game.imageUrl} onChange={onChange} />

          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" id="summary" value={game.summary} onChange={onChange}></textarea>
          <input className="btn submit" type="submit" value="Edit Game" />
        </div>
      </form>
    </section>
  );
}
