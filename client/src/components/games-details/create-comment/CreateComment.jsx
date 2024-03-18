import PropTypes from "prop-types";

export default function CreateComment({ comment, onChange, onSubmit }) {
  return (
    <article className="create-comment">
      <label>Add new comment:</label>
      <form className="form" onSubmit={onSubmit}>
        <textarea
          name="comment"
          placeholder="Comment......"
          onChange={onChange}
          value={comment}
        ></textarea>
        <input className="btn submit" type="submit" value="Add Comment" />
      </form>
    </article>
  );
}

CreateComment.propTypes = {
  comment: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};
