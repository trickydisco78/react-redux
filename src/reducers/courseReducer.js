//Take state and action and return new state

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      //Use spread operator (new instance of state array) and copy course to empty object
      return [...state, Object.assign({}, action.course)];
    //DO NOT MUTATE STATE
    //state.push(action.course);
    //return state;

    default:
      return state;
  }
}
