import { GET_POSTS, POST_ERROR, UPDATE_LIKES } from "./types";
import api from "../utils/api";
import { setAlert } from "./alert";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await api.get("/posts");

    dispatch({ type: GET_POSTS, payload: res.data });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const likePost = (postId) => async (dispatch) => {
  try {
    const res = await api.put(`/posts/like/${postId}`);

    dispatch({ type: UPDATE_LIKES, payload: { postId, likes: res.data } });
  } catch (err) {
    //dispatch(setAlert(err.response.data.msg, "danger"));

    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const unlikePost = (postId) => async (dispatch) => {
  try {
    const res = await api.put(`/posts/unlike/${postId}`);

    dispatch({ type: UPDATE_LIKES, payload: { postId, likes: res.data } });
  } catch (err) {
    //dispatch(setAlert(err.response.data.msg, "danger"));
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
