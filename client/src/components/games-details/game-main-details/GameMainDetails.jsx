import PropTypes from "prop-types";

export default function GameMainDetails({
  imageUrl,
  title,
  maxLevel,
  category,
  summary,
}) {
  return (
    <>
      <div className="game-header">
        <img className="game-img" src={imageUrl} alt={title} />
        <h1>{title}</h1>
        <span className="levels">MaxLevel: {maxLevel}</span>
        <p className="type">{category}</p>
      </div>

      <p className="text">{summary}</p>
    </>
  );
}

GameMainDetails.propTypes = {
  imageUrl: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  maxLevel: PropTypes.string,
  summary: PropTypes.string,
};
