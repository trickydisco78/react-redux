//

import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
//redux middleware that detects mutations between and outside redux dispatches.  For development use only.
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

// Accept 1 parameter - initial state of app
export default function configure(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}
