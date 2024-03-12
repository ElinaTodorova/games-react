import PropTypes from "prop-types";

export default function Game({ imageUrl, category, title }) {
  return (
    <div className="allGames-info">
      <img src={imageUrl} alt={title} />
      <h6>{category}</h6>
      <h2>{title}</h2>
      <a href="#" className="details-button">
        Details
      </a>
    </div>
  );
}

Game.propTypes = {
  imageUrl: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
};
