import {
  JOB_DETAILS_OPEN,
  updateJob,
  UPDATE_JOB,
  UPDATE_JOB_ID,
} from "../Actions";

const initState = {
  jobId: null,
  job: {},
  jobDetailsOpen: false,
};
const jobDetails = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_JOB_ID:
      return { ...state, jobId: action.val };
    case JOB_DETAILS_OPEN:
      return { ...state, jobDetailsOpen: action.isOpen };
    case UPDATE_JOB:
      return { ...state, job: action.payload };
    default:
      return state;
  }
};

export const renderJob = () => {
  return async (dispatch, getState) => {
    const jobsState = getState();
    const jobId = jobsState.jobDetails.jobId;
    const jobs = jobsState.jobReducer.posts;
    const result = jobs.find((job) => job.id === jobId);
    return dispatch(updateJob(result));
  };
};
export default jobDetails;
