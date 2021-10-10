import { combineReducers } from "redux";
import filterReducer from "./jobFilterReducer";
import { jobReducer } from "./jobReducer";
import jobDetails from "./jobDetailsReducer";

export default combineReducers({
  filterReducer,
  jobReducer,
  jobDetails,
});
