import { AnyAction, combineReducers } from "redux";
import { User } from "../../domain/user/userEntity";
import { UserStore } from "../../domain/user/userStore";
import * as actionTypes from "./userActionTypes";

type UserStoreState = Omit<UserStore, "addUser">;

const LIST_INITIAL_STATE: User[] = [];

const list = (state = LIST_INITIAL_STATE, action: AnyAction): User[] => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return action.users;
    default:
      return state;
  }
};

const ME_INITIAL_STATE: User | null = null;

const me = (state = ME_INITIAL_STATE, action: AnyAction): User | null => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return action.users;
    default:
      return state;
  }
};

export const combineUserReducer = combineReducers({
  list,
  me,
});

export type { UserStoreState };
