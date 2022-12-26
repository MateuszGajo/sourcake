import { User } from "../domain/userEntity";
import * as actionTypes from "./userActionTypes";

const updateUsersAction = (users: User[]) => (dispatch: any) =>
  dispatch({ type: actionTypes.ADD_USER, users });

export { updateUsersAction };
