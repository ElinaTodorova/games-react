import { useEffect, useState } from "react";
import * as services from "../../services/gameService.js";
import { useParams } from "react-router-dom";
import GameMainDetails from "./game-main-details/GameMainDetails.jsx";
import * as commentSer from "../../services/commentService.js";
import GameComments from "./game-comments/GameComments.jsx";
import CreateComment from "./create-comment/CreateComment.jsx";

const initialFormComment = {
  username: "",
  text: "",
};

export default function GameDetails() {
  const [game, setGame] = useState({});
  const { id } = useParams();
  const [newComment, setNewComment] = useState(initialFormComment);

  useEffect(() => {
    services
      .getById(id)
      .then((result) => setGame(result))
      .catch((err) => console.error(err));
  }, [id]);

  const changeValuesHandler = (e) => {
    setNewComment((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    commentSer.create(game._id, newComment.text);
  };

  console.log(newComment)
  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <GameMainDetails {...game} />
        <GameComments />
        <CreateComment
          username={newComment.username}
          text={newComment.text}
          changeValuesHandler={changeValuesHandler}
          submitHandler={submitHandler}
        />
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
