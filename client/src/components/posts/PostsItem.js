import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { likePost, unlikePost, removePost } from "../../actions/post";

const PostsItem = ({
  post,
  auth: { user },
  likePost,
  unlikePost,
  removePost,
  showOne,
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${post.user}`}>
          <img className="round-img" src={post.avatar} alt="" />
          <h4>{post.name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{post.text}</p>
        <p className="post-date">
          Posted on <Moment format="YYYY/MM/DD">{post.date}</Moment>{" "}
        </p>
        {!showOne && (
          <Fragment>
            <button
              onClick={(e) => likePost(post._id)}
              type="button"
              className="btn btn-light"
            >
              <i className="fas fa-thumbs-up"></i>{" "}
              <span>
                {post.likes.length > 0 && <span>{post.likes.length}</span>}
              </span>
            </button>
            <button
              onClick={(e) => unlikePost(post._id)}
              type="button"
              className="btn btn-light"
            >
              <i className="fas fa-thumbs-down"></i>
            </button>
            <Link to={`/posts/${post._id}`} className="btn btn-primary">
              Discussion{" "}
              {post.comments.length > 0 && (
                <span className="comment-count">{post.comments.length}</span>
              )}
            </Link>
            {user._id === post.user && (
              <button
                onClick={(e) => removePost(post._id)}
                type="button"
                className="btn btn-danger"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

PostsItem.propTypes = {
  likePost: PropTypes.func.isRequired,
  unlikePost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  removePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { likePost, unlikePost, removePost })(
  PostsItem
);
