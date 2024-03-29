import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuthContext } from "../../contexts/useAuth.js";
import { useReducer } from "react";

import useForm from "../../hooks/useForm.js";
import reducer from "./reducer.js";

import * as services from "../../services/gameService.js";
import * as commentSer from "../../services/commentService.js";

import GameMainDetails from "./game-main-details/GameMainDetails.jsx";
import GameComments from "./game-comments/GameComments.jsx";
import CreateComment from "./create-comment/CreateComment.jsx";
import { pathToUrl } from "../../utils/pathToUrl.js";
import Paths from "../../paths/paths.js";

const initialFormComment = {
  username: "",
  text: "",
};

export default function GameDetails() {
  const [game, setGame] = useState({});
  const { id } = useParams();
  // const [newComment, setNewComment] = useState(initialFormComment);
  // const [allComments, setAllComments] = useState([]);
  const [comments, dispatch] = useReducer(reducer, []);
  const { username, isAuthenticated } = useAuthContext();
  const { userId } = useAuthContext();

  useEffect(() => {
    services
      .getById(id)
      .then((result) => setGame(result))
      .catch((err) => console.error(err));

    commentSer
      .getAll(id)
      .then((result) => {
        dispatch({
          type: "GET_ALL_COMMENTS",
          payload: result,
        });
      })
      .catch((err) => console.error(err));
  }, [id]);

  // const resetForm = () => {
  //   setNewComment(initialFormComment);
  // };

  const addCommentHandler = async (values) => {
    const newComment = await commentSer.create(id, values.comment);

    newComment.author = { username };

    dispatch({
      type: "ADD_COMMENT",
      payload: newComment,
    });
  };

  const { values, changeHandler, onSubmit } = useForm(addCommentHandler, {
    comment: "",
  });

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <GameMainDetails {...game} />

        {userId === game._ownerId && (
          <div className="buttons">
            <Link to={pathToUrl(Paths.EditGame, {id})} className="button">
              Edit
            </Link>
            <a href="#" className="button">
              Delete
            </a>
          </div>
        )}

        <GameComments allComments={comments} />
        <CreateComment
          comment={values.comment}
          onChange={changeHandler}
          onSubmit={onSubmit}
          isAuthenticated={isAuthenticated}
        />
      </div>
    </section>
  );
}
