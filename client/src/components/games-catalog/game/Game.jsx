import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Game({ imageUrl, category, title, _id }) {
  return (
    <div className="allGames">
      <div className="allGames-info">
        <img src={imageUrl} alt={title} />
        <h6>{category}</h6>
        <h2>{title}</h2>
        <Link to={`/games/${_id}`} className="details-button">
          Details
        </Link>
      </div>
    </div>
  );
}

Game.propTypes = {
  imageUrl: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  _id: PropTypes.string,
};
