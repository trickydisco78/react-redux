<<<<<<< HEAD
//Take state and action and return new state

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      //Use spread operator (new instance of state array) and copy course to empty object
      return [...state, Object.assign({}, action.course)];
    //DO NOT MUTATE STATE
    //state.push(action.course);
    //return state;
=======
export default function courseReducer(state = [], action) {
  switch (action.type) {
      case 'CREATE_COURSE' :
        return [...state,
          Object.assign({}, action.course)
        ];
>>>>>>> 7a51ff05f6c43f222b4416aa9105ad3ad3604841

    default:
      return state;
  }
}
