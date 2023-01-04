import { AnyAction, combineReducers } from "redux";
import * as actionTypes from "./authActionTypes";

const ERRORS_INITIAL_STATE = "";

const error = (state = ERRORS_INITIAL_STATE, action: AnyAction): string => {
  switch (action.type) {
    case actionTypes.SET_ERROR:
      return action.error;
    default:
      return state;
  }
};

export const combineAuthReducer = combineReducers({
  error,
});
