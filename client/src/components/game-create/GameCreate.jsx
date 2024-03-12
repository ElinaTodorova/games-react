import { useState } from "react";

const initialForm = {
  title: "",
  category: "",
  maxLevel: "",
  imageUrl: "",
  summary: "",
};

export default function GameCreate() {
  const [newGame, setNewGame] = useState(initialForm);

  const changeValuesHandler = (e) => {
    let value = "";

    if (e.target.name === "maxLevel") {
      value = Number(e.target.value);
    } else {
      value = e.target.value;
    }

    setNewGame((state) => ({ ...state, [e.target.name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(newGame)
  }
  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={submitHandler} >
        <div className="container">
          <h1>Create Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newGame.title}
            onChange={changeValuesHandler}
            placeholder="Enter game title..."
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={newGame.category}
            onChange={changeValuesHandler}
            placeholder="Enter game category..."
          />

          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            value={newGame.maxLevel}
            onChange={changeValuesHandler}
            min="1"
            placeholder="1"
          />

          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={newGame.imageUrl}
            onChange={changeValuesHandler}
            placeholder="Upload a photo..."
          />

          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            id="summary"
            value={newGame.summary}
            onChange={changeValuesHandler}
          ></textarea>
          <input className="btn submit" type="submit" value="Create Game" />
        </div>
      </form>
    </section>
  );
}
