import { AnyAction } from "redux";
import { User } from "../domain/userEntity";
import { UserStore } from "../domain/userStore";
import * as actionTypes from "./userActionTypes";

const INITIAL_STATE: User[] = [];

type UserStoreState = Omit<UserStore, "addUser">;

const usersReducer = (state = INITIAL_STATE, action: AnyAction): User[] => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return action.users;
    default:
      return state;
  }
};

export { usersReducer };

export type { UserStoreState };
