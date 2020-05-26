import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPost } from "../../actions/post";
import Spinner from "../../components/layout/Spinner";
import { Link } from "react-router-dom";
import PostsItem from "./PostsItem";
import CommentItem from "./CommentItem";
import CommentForm from "./CommentForm";

const PostDiscussion = ({ match, post: { post, loading }, getPost }) => {
  useEffect(() => {
    getPost(match.params.postId);
  }, [getPost]);

  return loading || !post ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to="/posts" className="btn">
        Back to Posts
      </Link>
      <PostsItem post={post} showOne={true} />
      <CommentForm postId={match.params.postId} />
      <div className="comments">
        {post.comments.map((comment) => (
          <CommentItem
            key={comment._id}
            comment={comment}
            postId={match.params.postId}
          />
        ))}
      </div>
    </Fragment>
  );
};

PostDiscussion.propTypes = {
  getPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(PostDiscussion);
