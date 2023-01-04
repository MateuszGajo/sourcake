import { User } from "../../domain/user/userEntity";
import * as actionTypes from "./userActionTypes";

const updateUsersAction = (users: User[]) => (dispatch: any) =>
  dispatch({ type: actionTypes.ADD_USER, users });

const loginUserAction = (user: User) => (dispatch: any) =>
  dispatch({ type: actionTypes.LOGIN_USER, user });

export { updateUsersAction, loginUserAction };
