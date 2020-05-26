import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import Spinner from "../layout/Spinner";
import Moment from "react-moment";

const Posts = ({ getPosts, posts: { posts, loading }, auth: { user } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div class="posts">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div class="post bg-white p-1 my-1">
                <div>
                  <a href="profile.html">
                    <img class="round-img" src={post.avatar} alt="" />
                    <h4>{post.name}</h4>
                  </a>
                </div>
                <div>
                  <p class="my-1">{post.text}</p>
                  <p class="post-date">
                    Posted on <Moment format="YYYY/MM/DD">{post.date}</Moment>{" "}
                  </p>
                  <button type="button" class="btn btn-light">
                    <i class="fas fa-thumbs-up"></i>{" "}
                    {post.likes.length > 0 && <span>{post.likes.length}</span>}
                  </button>
                  <button type="button" class="btn btn-light">
                    <i class="fas fa-thumbs-down"></i>
                  </button>
                  <a href="post.html" class="btn btn-primary">
                    Discussion{" "}
                    {post.comments.length > 0 && (
                      <span class="comment-count">{post.comments.length}</span>
                    )}
                  </a>
                  {user._id === post.user && (
                    <button type="button" class="btn btn-danger">
                      <i class="fas fa-times"></i>
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <h4>No posts...</h4>
          )}
        </div>
      )}
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.post,
  auth: state.auth,
});

export default connect(mapStateToProps, { getPosts })(Posts);
