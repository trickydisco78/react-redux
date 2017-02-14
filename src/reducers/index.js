// Root Reducer
import { combineReducers } from "redux";
import courses from "./courseReducer";

const rootReducer = combineReducers({
  // Shorthand  property name (ES6)
  // courses: courses
  courses
});

export default rootReducer;
