import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";
import PostForm from "./PostForm";

const CommentForm = ({ addComment, postId }) => {
  return (
    <Fragment>
      <PostForm addComment={addComment} postId={postId} makeComment={true} />
    </Fragment>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
