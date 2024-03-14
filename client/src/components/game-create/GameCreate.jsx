import { useNavigate } from "react-router-dom";

import * as service from "../../services/gameService.js";
import Paths from "../../paths/paths.js";
import useForm from "../../hooks/useForm.js";

const CreateGameKeys = {
  Title: "title",
  Category: "category",
  MaxLevel: "maxLevel",
  ImageUrl: "imageUrl",
  Summary: "summary",
};

export default function GameCreate() {
  const navigate = useNavigate();

  const submitHandler = () => {
    service.create(values);
    navigate(Paths.Games);
  };

  const { values, changeHandler, onSubmit } = useForm(submitHandler, {
    [CreateGameKeys.Title]: "",
    [CreateGameKeys.Category]: "",
    [CreateGameKeys.MaxLevel]: "",
    [CreateGameKeys.ImageUrl]: "",
    [CreateGameKeys.Summary]: "",
  });

  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={onSubmit}>
        <div className="container">
          <h1>Create Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name={[CreateGameKeys.Title]}
            value={values[CreateGameKeys.Title]}
            onChange={changeHandler}
            placeholder="Enter game title..."
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={values[CreateGameKeys.Category]}
            onChange={changeHandler}
            placeholder="Enter game category..."
          />

          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            value={values[CreateGameKeys.MaxLevel]}
            onChange={changeHandler}
            min="1"
            placeholder="1"
          />

          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={values[CreateGameKeys.ImageUrl]}
            onChange={changeHandler}
            placeholder="Upload a photo..."
          />

          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            id="summary"
            value={values[CreateGameKeys.Summary]}
            onChange={changeHandler}
          ></textarea>
          <input className="btn submit" type="submit" value="Create Game" />
        </div>
      </form>
    </section>
  );
}
