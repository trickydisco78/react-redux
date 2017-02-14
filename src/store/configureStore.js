<<<<<<< HEAD
//

import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
//redux middleware that detects mutations between and outside redux dispatches.  For development use only.
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

// Accept 1 parameter - initial state of app
export default function configure(initialState) {
=======
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
>>>>>>> 7a51ff05f6c43f222b4416aa9105ad3ad3604841
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}
