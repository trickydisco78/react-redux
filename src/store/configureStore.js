import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
//redux middleware that detects mutations between and outside redux dispatches.  For development use only.
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

// Accept 1 parameter - initial state of app

// Initialise store with initial state
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    // Invoke reduxImmutableStateInvariant passed to applyMiddleware
    applyMiddleware(reduxImmutableStateInvariant())
  );
}
