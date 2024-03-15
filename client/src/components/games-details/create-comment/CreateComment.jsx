import PropTypes from "prop-types";

export default function CreateComment({
  text,
  submitHandler,
  changeValuesHandler,
}) {
  return (
    <article className="create-comment">
      <label>Add new comment:</label>
      <form className="form" onSubmit={submitHandler}>
        <textarea
          name="text"
          placeholder="Comment......"
          onChange={changeValuesHandler}
          value={text}
        ></textarea>
        <input className="btn submit" type="submit" value="Add Comment" />
      </form>
    </article>
  );
}

CreateComment.propTypes = {
  text: PropTypes.string,
  changeValuesHandler: PropTypes.func,
  submitHandler: PropTypes.func,
};
