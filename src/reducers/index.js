// Root Reducer
// 1 big reducer to handle all reducers
import { combineReducers } from "redux";
import courses from "./courseReducer";

// Shorthand  property name (ES6)
// courses: courses

const rootReducer = combineReducers({
  courses
});

export default rootReducer;
