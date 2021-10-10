import { UPDATE_JOBS_FREELANCE, UPDATE_JOBS_FULLTIME } from "../Actions";

const initState = {
  freelance: false,
  fullTime: true,
};

export const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_JOBS_FREELANCE:
      return { ...state, freelance: action.val };
    case UPDATE_JOBS_FULLTIME:
      return { ...state, fullTime: action.val };
    default:
      return state;
  }
};

export default filterReducer;
