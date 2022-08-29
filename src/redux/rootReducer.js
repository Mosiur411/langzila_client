import { combineReducers } from "redux";
import coursesReducer from "./courses/reducer";

const rootReducer = combineReducers({
  courses: coursesReducer,
});

export default rootReducer;