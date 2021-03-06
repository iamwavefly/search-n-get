export const GET_POSTS_PENDING = "GET_POSTS_PENDING";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const UPDATE_JOBS_FREELANCE = "UPDATE_JOBS_FREELANCE";
export const UPDATE_SEARCH_TERM = "UPDATE_SEARCH_TERM";
export const UPDATE_JOBS_QUERY = "UPDATE_JOBS_QUERY";
export const UPDATE_JOBS_FULLTIME = "UPDATE_JOBS_FULLTIME";
export const GET_POSTS_ERROR = "GET_POSTS_ERROR";
export const JOB_DETAILS_OPEN = "JOB_DETAILS_OPEN";
export const UPDATE_JOB_ID = "UPDATE_JOB_ID";
export const UPDATE_JOB = "UPDATE_JOB";

export const updateJobId = (jobId) => {
  return {
    type: UPDATE_JOB_ID,
    payload: jobId,
  };
};
export const updateJob = (job) => {
  return {
    type: UPDATE_JOB,
    payload: job,
  };
};
export const getPostsPending = () => {
  return {
    type: GET_POSTS_PENDING,
  };
};
export const getPostsSuccess = (posts) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts,
  };
};
export const updateJobsFreelance = (posts) => {
  return {
    type: UPDATE_JOBS_FREELANCE,
    payload: posts,
  };
};
export const updateSearchTerm = (posts) => {
  return {
    type: UPDATE_SEARCH_TERM,
    payload: posts,
  };
};
export const updateJobsQuery = (posts) => {
  return {
    type: UPDATE_JOBS_QUERY,
    payload: posts,
  };
};
export const updateJobsFullTime = (posts) => {
  return {
    type: UPDATE_JOBS_FULLTIME,
    payload: posts,
  };
};
export const jobDetailsOpen = (isOpen) => {
  return {
    type: JOB_DETAILS_OPEN,
    payload: isOpen,
  };
};
export const getPostsError = (error) => {
  return {
    type: GET_POSTS_ERROR,
    payload: error,
  };
};
