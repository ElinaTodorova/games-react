import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../contexts/useAuth.js";

import * as services from "../../services/gameService.js";
import * as commentSer from "../../services/commentService.js";

import GameMainDetails from "./game-main-details/GameMainDetails.jsx";
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
  const [allComments, setAllComments] = useState([]);
  const { username, isAuthenticated } = useAuthContext();

  useEffect(() => {
    services
      .getById(id)
      .then((result) => setGame(result))
      .catch((err) => console.error(err));

    commentSer
      .getAll(id)
      .then((result) => setAllComments(result))
      .catch((err) => console.error(err));
  }, [id]);

  const resetForm = () => {
    setNewComment(initialFormComment);
  };

  const changeValuesHandler = (e) => {
    setNewComment((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if(isAuthenticated) {
      const newComm = await commentSer.create(
        game._id,
        newComment.text,
        username
      );
      setAllComments((state) => [...state, newComm]);
      resetForm();
    }
   
  };

  console.log(allComments)

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <GameMainDetails {...game} />
        <GameComments allComments={allComments} username={username} />
        <CreateComment
          // username={newComment.username}
          text={newComment.text}
          changeValuesHandler={changeValuesHandler}
          submitHandler={submitHandler}
        />
      </div>
      <div className="buttons">
        <a href="#" className="button">
          Edit
        </a>
        <a href="#" className="button">
          Delete
        </a>
      </div>
    </section>
  );
}
