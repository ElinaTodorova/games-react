import PropTypes from "prop-types";

export default function GameComments({ allComments }) {
  return (
    <div className="details-comments">
      <h2>Comments:</h2>
      <ul>
        {allComments.map((comment) => (
          <li className="comment" key={comment._id}>
            <p>
              {comment.username}: {comment.text}
            </p>
          </li>
        ))}
      </ul>
      {allComments.length === 0 && <p className="no-comment">No comments.</p>}
    </div>
  );
}

GameComments.propTypes = {
  allComments: PropTypes.array,
};
