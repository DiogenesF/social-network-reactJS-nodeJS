import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost, makeComment, postId, addComment }) => {
  const [text, setText] = useState("");

  return (
    <div className="post-form">
      <div className="bg-primary p">
        {makeComment ? <h3>Leave a comment...</h3> : <h3>Say Something...</h3>}
      </div>
      <form
        className="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          if (makeComment) {
            addComment({ text }, postId);
          } else {
            addPost({ text });
          }
          setText("");
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder={makeComment ? "Leave a comment" : "Create a post"}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
