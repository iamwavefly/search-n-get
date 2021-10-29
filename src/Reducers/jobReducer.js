import axios from "axios";
import {
  GET_POSTS_PENDING,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  UPDATE_SEARCH_TERM,
  UPDATE_JOBS_QUERY,
  getPostsPending,
  getPostsSuccess,
  getPostsError,
} from "../Actions";

const baseUrl = "https://search-n-get-api.herokuapp.com";

const initState = {
  pending: true,
  posts: [],
  page_number: 1,
  searchTerm: "python",
  error: null,
};

export const jobReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POSTS_PENDING:
      return { ...state, pending: true };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: [...action.payload],
      };
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.val };
    case UPDATE_JOBS_QUERY:
      return { ...state, posts: [...state.posts, ...action.val] };
    case GET_POSTS_ERROR:
      return { ...state, error: action.payload, pending: true };
    default:
      return state;
  }
};

export function fetchPostsWithRedux() {
  return async (dispatch, getState) => {
    const { jobReducer } = getState();
    console.log(jobReducer);
    const URL = `${baseUrl}/?search=${jobReducer.searchTerm}&employment_type=${
      jobReducer.freelance === true ? `contract` : `full time`
    }&page${jobReducer.page_number}`;
    dispatch(getPostsPending());
    setTimeout(() => {
      axios
        .get(URL)
        .then((res) => {
          dispatch(getPostsSuccess(res.data.results));
        })
        .catch((err) => {
          dispatch(getPostsError(err));
        });
    }, 2000);
  };
}
