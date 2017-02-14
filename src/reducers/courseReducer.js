//Take state and action and return new state
//The reducer consolidates actions into a single object representing application state.
//. Each time a redux reducer is called, the state is passed in with the action (state, action).
// This state is then reduced (or accumulated) based on the action, and then the next state is returned

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, Object.assign({}, action.course)];

    default:
      return state;
  }
}
