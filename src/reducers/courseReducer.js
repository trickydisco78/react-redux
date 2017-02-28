//Take state and action and return new state
//The reducer consolidates actions into a single object representing application state.
// A reducer takes in two things:

// 1. The action (info about what happened)
// 2. Copy of the current state
//. Each time a redux reducer is called, the state is passed in with the action (state, action).
// This state is then reduced (or accumulated) based on the action, and then the next state is returned

// Create reducer for every single piece of state (in this case only courses)

// Create empty state as default paramet as when function first runs state doesn't contain anything
export default function courseReducer(state = [], action) {
  console.log('State and action:');
  console.log('State:', state , 'Action:' , action);
  switch (action.type) {
    case "CREATE_COURSE":
    
      return [...state, Object.assign({}, action.course)];

    default:
      return state;
  }
}
